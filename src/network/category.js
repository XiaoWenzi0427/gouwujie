import {request} from './request'

export function getHomeCategory() {
  return request({
    url:'/category/category'
  })
}
