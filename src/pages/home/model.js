import { setStorage } from '@tarojs/taro';
import { getRecommendResource, getHomeBanner } from './service';

export default {
  namespace: 'home',
  state: {
    recommendList: [],
    bannerList: [],
    current: 0,
  },

  effects: {
    * getRecommendResource({ payload }, { call, put }) {
      const { code, recommend } = yield call(getRecommendResource, payload);
      if (code === 200) {
        yield put({ type: 'save', payload: { recommendList: recommend } })
      }
    },
    * getHomeBanner({ payload }, { call, put }) {
      const { code, banners } = yield call(getHomeBanner, payload);
      if (code === 200) {
        yield put({ type: 'save', payload: { bannerList: banners } })
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },

};