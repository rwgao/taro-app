import Taro from '@tarojs/taro';
import { baseUrl, noConsole } from '../config';

export default async (options = { method: 'GET', data: {} }) => {
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 M=${options.url} 】P=${JSON.stringify(options.data)}`);
  }
  // 解决获取token时错误信息抛出
  let token = '';
  try {
    token = await Taro.getStorage({key: 'token'});
  } catch (error) {
    console.warn('err is ->', error.errMsg)
  }
  if (token && token.data) {
    token = `Bearer ${token.data}`;
  }
  return Taro.request({
    url: baseUrl + options.url,
    data: options.data,
    header: {
      Authorization: token,
      'Content-Type': 'application/json',
    },
    method: options.method.toUpperCase(),
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (!noConsole) {
        console.log(`${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`, res.data);
      }
      if (data.code !== 1000) {
        Taro.showToast({
          title: `${res.data.msg}~` || res.data.code,
          icon: 'none',
          mask: true,
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  })
}