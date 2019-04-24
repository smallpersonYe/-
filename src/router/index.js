import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
Vue.use(VueRouter)

export default new VueRouter({
  routes,
  mode: 'history' // 去除路径中的#号
})
