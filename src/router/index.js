//路由头部
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//路由多次点击报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const routes = [
  {
    path: '/welcome',
    //欢迎页 可以用重定向强制跳转
    component: () => import(/* webpackChunkName: "welcome" */ '@/views/welcome'),
    children: []
  },
  {
    path: '/',
    redirect: '/home',
    // //欢迎页 可以用重定向强制跳转
    component: () => import(/* webpackChunkName: "yiji" */ '@/views/yiji'),
    children: [
      {
        path: 'home',
        //欢迎页 可以用重定向强制跳转
        component: () => import(/* webpackChunkName: "shouye" */ '@/views/shouye'),
        children: []
      },
      {
        path: 'fangan',
        component: () => import(/* webpackChunkName: "fangan" */ '@/views/fangan'),
        children: []
      },
      {
        path: 'information',
        component: () => import(/* webpackChunkName: "zixun" */ '@/views/zixun'),
        children: []
      },
      {
        path: 'vocational',
        component: () => import(/* webpackChunkName: "yewu" */ '@/views/yewu'),
        children: []
      },
      {
        path: 'contact',
        component: () => import(/* webpackChunkName: "women" */ '@/views/women'),
        children: []
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 跳转后自动返回页面顶部
router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
