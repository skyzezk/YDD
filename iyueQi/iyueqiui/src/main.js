import Vue from 'vue'
import App from './App.vue'
import router from './router'
//1.完整引入mint-ui
import MintUI from 'mint-ui'
//2.单引入mint-ui样式
import'mint-ui/lib/style.css'
//3.将mint-ui注册vue
Vue.use(MintUI)
//4.引入图标字体样式文件
// import'./font/iconfont.css'
//5.引入axios.js文件
import axios from "./axios"
// 6.引入vuex
import Vuex from 'vuex'
// 7.注册vuex组件
Vue.use(Vuex);
// 8.创建vuex实例store
var store=new Vuex.Store({  
  //vuex中全局共享数据
  state:{cartCount:0},
  // 修改vuex中全局共享数据
  mutations:{
    // 购物车数量+1
    increment(state){
      state.cartCount++;
    },
    clear(state){
      state.cartCount=0;
    },
    // 购物车数量增加喜欢值
    updateCount(state,c){
      state.cartCount+=c;
    }
  },
  // 获取vuex中全局共享函数
  getters:{
    getCartCount:function(state){
      return state.cartCount;
    }
  }
});
// 9.将store保存在vue实例中
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});