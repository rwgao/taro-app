import * as cartApi from './service';

export default {
  namespace: 'index',
  state: {
    list: []
  },

  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(cartApi.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
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