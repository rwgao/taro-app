import Request from '../../utils/request'

export function login(data) {
  return Request ({ url: '/login/cellphone', method: 'post', data: data })
}

export function logout(data) {
  return Request ({ url: '/logout', method: 'get', data: data })
}

export function checkCellPhone(data) {
  return Request({ url: '/cellphone/existence/check', method: 'post', data: data })
}

export function getUserDetail(data) {
  return Request({ url: '/recommend/songs', method: 'get', data: data })
}
