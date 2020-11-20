import {request} from './request'

export function getCategory() {
  return request({
    url:'/category/category'
  })
}
export function getCategoryPop() {
  return request({
    url:'/category/pops'
  })
}
export function getCategoryShangYi() {
  return request({
    url:'/category/shangyis'
  })
}

export function getCategoryNeiYi() {
  return request({
    url:'/category/neiyis'
  })
}
export function getCategoryQunZi() {
  return request({
    url:'/category/qunzis'
  })
}
export function getCategoryKuZi() {
  return request({
    url:'/category/kuzis'
  })
}
