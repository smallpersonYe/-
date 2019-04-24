/*
* 包含n个用于间接更新状态数据的方法的对象
* */
import {reqAddress, reqCategories, reqShops} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_CATEGORIES, RECEIVE_SHOPS} from './mutation-types'

export default {
// 获取地址的异步action
  async getAddress ({commit, state}) {
    // 1.执行异步请求
    const {latitude, longitude} = state
    const result = await reqAddress(latitude, longitude)
    // 2.根据结果, 提交mutation
    if (result.code === 0) {
      const address = result.data.address
      commit(RECEIVE_ADDRESS, address)
    }
  },
// 获取食品分类列表的异步action
  async getCategories ({commit}) {
    const result = await reqCategories()
    if (result.code === 0) {
      const categories = result.data
      commit(RECEIVE_CATEGORIES, categories)
    }
  },
// 获取商家列表的异步action
  async getShops ({commit, state}) {
    const {latitude, longitude} = state
    const result = await reqShops({latitude, longitude})
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  }
}
