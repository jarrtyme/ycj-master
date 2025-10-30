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
    component: () => import(/* webpackChunkName: "welcome" */ '@/views/welcome'),
    children: []
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "yiji" */ '@/views/Yiji'),
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
        children: []
      },
      {
        path: 'solutions',
        component: () => import(/* webpackChunkName: "solutions" */ '@/views/solutions'),
        children: []
      },
      {
        path: 'news',
        component: () => import(/* webpackChunkName: "news" */ '@/views/news'),
        children: []
      },
      {
        path: 'business',
        component: () => import(/* webpackChunkName: "business" */ '@/views/business'),
        children: []
      },
      {
        path: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '@/views/contact'),
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

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
