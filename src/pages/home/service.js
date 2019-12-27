import Request from '@/utils/request'

export function getHomeBanner(data) {
  return Request ({ url: '/banner', method: 'GET', data: data })
}

export function getRecommendResource(data) {
  return Request ({ url: '/recommend/resource', method: 'GET', data: data })
}

export function getRecommendSongs(data) {
  return Request ({ url: '/recommend/songs', method: 'get', data: data })
}
