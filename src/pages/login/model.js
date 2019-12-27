import Taro from '@tarojs/taro';
import { login, checkCellPhone, getUserDetail } from './service'

export default {
  namespace: 'login',
  state: {
    list: [],
    userinfo: {},
    userLogin: {},
  },

  effects: {
    * login({ payload }, { call, put }) {
      // 小程序登录
      // const { errMsg } = yield call(Taro.login);
      // if (errMsg === 'login:ok') {
      //   const result = yield call(Taro.getUserInfo, { lang: 'zh_CN', withCredentials: false });
      //   if (result.errMsg === 'getUserInfo:ok') {
      //     yield put({ type: 'save', payload: { userInfo: result.userInfo } })
      //   }
      // }
      const { code, profile, token } = yield call(login, payload)
      if(code === 200) {
        yield put({ type: 'save', payload: { userLogin: profile } });
        Taro.setStorage({ key: 'token', data: token });
        yield put({ type: 'getUserInfo' })
      }
    },
    * checkCellPhone({ payload },{ call }) {
      const { code, nickname } = yield call(checkCellPhone, payload);
      if (code === 200) {
        console.log(nickname);
      }
    },
    * getUserInfo({ }, { call, select, put }) {
      const { userLogin } = yield select(s => s.login);
      const result = yield call(getUserDetail, { uid: userLogin.userId });
      if (result.code === 200) {
        yield put({ type: 'save', payload: { userinfo: result } });
      }
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