import Request from '../../utils/request'

export function login(data) {
  return Request ({ url: '/u/login', method: 'post', data: data })
}

export function logout(data) {
  return Request ({ url: '/u/logout', method: 'get', data: data })
}

export default {
  login,
  logout,
}