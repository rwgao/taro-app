import Taro from '@tarojs/taro';
import { isEmpty } from 'loadsh'
import queryString from 'query-string'
import { baseUrl, noConsole } from '../config';

export default async (options = { method: 'GET', data: {}, params: {} }) => {
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(options.data)}`);
  }
  // 解决获取token时错误信息抛出
  let token = '', __csrf = '', MUSIC_U = '', __remember_me = '', cookie = [];
  try {
    token = await Taro.getStorage({key: 'token'});
    __csrf = await Taro.getStorage({key: '__csrf'});
    __remember_me = await Taro.getStorage({key: '__remember_me'});
    MUSIC_U = await Taro.getStorage({key: 'MUSIC_U'});
    cookie.push(MUSIC_U.data, __remember_me.data, __csrf.data);
    if (isEmpty(options.params)) {
      options.params = {};
    }
    options.params.csrf_token = queryString.parse(__csrf.data);
    options.params.csrf_token = options.params.csrf_token.__csrf
  } catch (error) {
    console.warn('err is ->', error.errMsg)
  }
  if (token && token.data) {
    token = `Bearer ${token.data}`;
  }
  let url = baseUrl + options.url;
  if (!isEmpty(options.params)) {
    url += '?' + queryString.stringify(options.params)
  }
  return Taro.request({
    url: url,
    data: options.data,
    header: {
      Authorization: token,
      'Content-Type': 'application/json',
      cookie: cookie.join('; ')
    },
    method: options.method.toUpperCase(),
  }).then((res) => {
    const { statusCode, data, cookies } = res;
    if (cookies && cookies.length) {
      cookies.map(item => item.split('; ')[0]).forEach(item => {
        const result = queryString.parse(item);
        for (let key in result) {
          Taro.setStorage({ key: key, data: item });
        }
      });;
    }
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`, res.data);
      }
      if (data.code !== 200) {
        Taro.showToast({
          title: `${res.data.msg}~` || res.data.code,
          icon: 'none',
          mask: true,
        });
      }
      return data;
    } else {
      // throw new Error(`网络请求错误，状态码${statusCode}`);
      console.warn('网络请求错误，状态码 ->', statusCode)
    }
  })
}