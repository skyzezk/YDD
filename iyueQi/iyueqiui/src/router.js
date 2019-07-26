import Vue from 'vue'
import Router from 'vue-router'
import Myhome from './components/Myhome.vue'
import Sort from './components/Sort.vue'
import Search from './components/Search.vue'
import Shopcart from './components/Shopcart.vue'
import Vip from './components/Vip.vue'
import ProductInfo from './components/ProductInfo.vue'

//1.引入Exam01.vue组件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Myhome
    },
    {
      path: '/top',
      component: Myhome
    },
    {
      path: '/sort',
      component: Sort,
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/vip',
      component: Vip
    },
    {
      path: '/proInfo',
      component: ProductInfo
    },
  ],
})
