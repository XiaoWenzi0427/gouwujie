import {request} from './request'

export function getHomeMultidta() {
  return request({
    url:'/home/multidata'
  })
}
export function getHomeMeilishuo() {
  return request({
    url:'/home/meilishuo'
  })
}
export function getHomeSells() {
  return request({
    url:'/home/sells'
  })
}
export function getHomeNews() {
  return request({
    url:'/home/news'
  })
}
export function getHomePops() {
  return request({
    url:'/home/pops'
  })
}
