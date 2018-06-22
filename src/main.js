// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import fastclick from 'fastclick' /**解决300毫秒延迟 */
import 'babel-polyfill'  /* 解决浏览器不支持promise es6语法 */

//swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/styles/reset.css'
//边框一像素解决
import './assets/styles/border.css'
//iconfont
import '@/assets/styles/iconfont.css'
//swiper
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(elementUI)
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  elementUI,
  components: { App },
  template: '<App/>'
})
