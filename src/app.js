import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import dva from './utils/dva'
import models from './models'
import Index from './pages/index'
import './app.scss'
/* app.js */
import './custom-variables.scss'


// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const dvaApp = dva.createApp({
  initialState: {},
  models: models
})
const store = dvaApp.getStore()

class App extends Component {
  
  componentDidMount () {}

  config = {
    pages: [
      // 'pages/home/index',
      // 'pages/classify/index',
      // 'pages/cart/index',
      // 'pages/my/index',
      'pages/recommend/index',
      'pages/index/index',
      'pages/login/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    // tabBar: {
    //   list: [
    //     {
    //       pagePath: 'pages/index/index',
    //       text: '首页',
    //       iconPath: './assets/images/home.png',
    //       selectedIconPath: './assets/images/home-active.png',
    //     },
    //     {
    //       pagePath: 'pages/classify/index',
    //       text: '分类',
    //       iconPath: './assets/images/classify.png',
    //       selectedIconPath: './assets/images/classify-active.png',
    //     },
    //     {
    //       pagePath: 'pages/cart/index',
    //       text: '购物车',
    //       iconPath: './assets/images/cart.png',
    //       selectedIconPath: './assets/images/cart-active.png',
    //     },
    //     {
    //       pagePath: 'pages/my/index',
    //       text: '我的',
    //       iconPath: './assets/images/user.png',
    //       selectedIconPath: './assets/images/user-active.png',
    //     },
    //   ],
    //   color: '#b4b4b4',
    //   selectedColor: '#f66c04',
    //   backgroundColor: '#fff',
    //   borderStyle: 'white',
    // },
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
