/*
* 包含多个接口请求的函数
* */
import ajax from './ajax.js'
const BASE = '/api'
// 获取位置详情
export const reqAddress = (latitude, longitude) => ajax(BASE + `/position/${latitude},${longitude}`)
// 获取msite页面视频分类列表
export const reqCategories = () => ajax(BASE + '/index_category')
// 获取商铺列表
export const reqShops = ({latitude, longitude}) => ajax(BASE + '/shops', {latitude, longitude})
