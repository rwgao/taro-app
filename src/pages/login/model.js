import Taro from '@tarojs/taro';
import * as loginOutService from './service';

export default {
  namespace: 'login',
  state: {
    list: [],
    userinfo: {}
  },

  effects: {
    * login({ payload }, { call, put }) {
      const { errMsg } = yield call(Taro.login);
      if (errMsg === 'login:ok') {
        const result = yield call(Taro.getUserInfo, { lang: 'zh_CN', withCredentials: false });
        if (result.errMsg === 'getUserInfo:ok') {
          debugger
          yield put({ type: 'save', payload: { userInfo: result.userInfo } })
        }
      }
      // const { code, result } = yield call(loginOutService.login, payload)
      // if(code === 1000) {
      //   yield put({ type: 'save', payload: { ...result } })
      // }
    },
    * add({ payload }, { put, select }) {
      const { list } = yield select(s => s.index)
      yield put({ type: 'save', payload: { list: [ ...list, payload ] } })
    }
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};