import { setStorage } from '@tarojs/taro';
import * as loginOutService from './service';

export default {
  namespace: 'index',
  state: {
    list: [],
    current: 0,
  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(loginOutService.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
    * login({ payload }, { call, put }) {
      const { code, result } = yield call(loginOutService.login, payload)
      if(code === 1000) {
        yield put({ type: 'save', payload: { ...result } })
      }
    },
    * add({ payload }, { put, select }) {
      const { list } = yield select(s => s.index)
      yield put({ type: 'save', payload: { list: [ ...list, payload ] } })
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};