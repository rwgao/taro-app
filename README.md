# taro-app
基于taro框架开发的跨平台app

## 项目说明
```
// 文件目录说明
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── components         公共组件目录
|   ├── config             项目配置
|   ├── models             全局model
|   ├── services           项目全局请求api接口
|   ├── pages              页面文件目录
|   |   ├── index          index 页面目录
|   |   |   ├── banner     页面 index 私有组件
|   |   |   ├── model.js   index 页面model
|   |   |   ├── service.js index 页面api接口
|   |   |   ├── index.js   index 页面逻辑
|   |   |   └── index.scss index 页面样式
|   |   └── ...            其他页面
|   ├── utils              公共方法库
|   |   ├── dva.js         dva封装
|   |   └── request.js     请求封装
|   ├── app.css            项目总通用样式
|   └── app.js             项目入口文件
└── package.json
```