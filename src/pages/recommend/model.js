import { getRecommendSongs } from './service';

export default {
  namespace: 'recommend',
  state: {
    recommendList: [],
  },

  effects: {
    * getRecommendResource({ payload }, { call, put }) {
      const { code, recommend } = yield call(getRecommendSongs, payload);
      if (code === 200) {
        yield put({ type: 'save', payload: { recommendList: recommend } })
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};