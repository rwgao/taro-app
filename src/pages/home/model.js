import { setStorage } from '@tarojs/taro';
import homeService from './service';

export default {
  namespace: 'home',
  state: {
    noticeList: [],
    itemList: [],
    current: 0,
  },

  effects: {
    * getNoticeList({ payload }, { call, put }) {
      const result = yield call(homeService.noticeList, payload);
      yield put({ type: 'save', payload: { noticeList: result.data } })
    },
    * getItemList({ payload }, { call, put }) {
      const result = yield call(homeService.itemList, payload);
      yield put({ type: 'save', payload: { itemList: result } })
    },
    * login({ payload }, { call, put }) {
      const { code, result } = yield call(homeService.login, payload)
      if(code === 1000) {
        yield put({ type: 'save', payload: { ...result } })
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