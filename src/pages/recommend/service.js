import Request from '@/utils/request'

export function getRecommendSongs(data) {
  return Request ({ url: '/recommend/songs', method: 'get', data: data })
}
