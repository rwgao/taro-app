import Request from '../../utils/request'

function noticeList(data) {
  return Request ({ url: '/design/article/list', method: 'GET', data: data })
}

function itemList(data) {
  return Request ({ url: '/show/items', method: 'get', data: data })
}

export default {
  noticeList,
  itemList
}