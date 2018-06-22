import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import city from '@/pages/city/city'
import detail from '@/pages/detail/detail'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'homeLink',
      component: home
    },
    {
      path: '/city',
      name: 'cityLink',
      component: city
    },
    {
      path: '/detail/:id',
      name: 'detailLink',
      component: detail
    },
  ],
  /** 路由跳转的时候从顶部显示，浏览器退回显示原位置 */
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
