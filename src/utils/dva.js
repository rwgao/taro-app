import { create } from 'dva-core'
import createLoading from 'dva-loading'
import { createLogger } from 'redux-logger'

let app
let store
let dispatch
let registered

function createApp(opt) {
  opt.onAction = [createLogger()]
  opt.onError = function (e) {
    // 配置dva中redux-saga 在其他相应状态抛出异常错误时中断程序
    e.preventDefault();
    console.error(e.message);
  }
  app = create(opt)
  app.use(createLoading({}))

  if (!registered) opt.models.forEach(model => app.model(model))
  registered = true
  app.start()
  store = app._store
  app.getStore = () => store
  dispatch = store.dispatch

  app.dispatch = dispatch
  return app
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch
  }
}