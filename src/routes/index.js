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
    children: [],
    meta: {
      title: '欢迎 - 南通意中裁剪中心',
      description: '欢迎来到南通意中裁剪中心，专业格柏智能裁剪服务商',
      keywords: '南通裁剪中心,欢迎'
    }
  },
  {
    path: '/',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "yiji" */ '@/views/Yiji'),
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
        children: [],
        meta: {
          title: '首页 - 南通意中裁剪中心 | 专业格柏智能裁剪服务',
          description:
            '南通意中裁剪中心，专业格柏智能裁剪服务，提供全自动拉布机、自动裁剪机等设备，毫米级精度，为服装企业提供高效裁剪解决方案。',
          keywords: '南通裁剪中心,格柏裁剪,智能裁剪,自动裁剪机,拉布机,服装裁剪,裁剪设备,裁剪服务'
        }
      },
      {
        path: 'solutions',
        component: () => import(/* webpackChunkName: "solutions" */ '@/views/solutions'),
        children: [],
        meta: {
          title: '解决方案 - 南通意中裁剪中心 | 智能裁剪设备展示',
          description:
            '南通意中裁剪中心提供专业的智能裁剪解决方案，包括全自动拉布机、自动裁剪机等先进设备，展示格柏智能裁剪系统的优势与应用。',
          keywords: '裁剪解决方案,智能裁剪设备,拉布机,自动裁剪机,格柏裁剪系统,裁剪技术'
        }
      },
      {
        path: 'news',
        component: () => import(/* webpackChunkName: "news" */ '@/views/news'),
        children: [],
        meta: {
          title: '新闻动态 - 南通意中裁剪中心 | 行业资讯',
          description:
            '了解南通意中裁剪中心最新动态、行业资讯、裁剪技术发展趋势，掌握智能裁剪行业前沿信息。',
          keywords: '裁剪中心新闻,行业资讯,裁剪技术,智能裁剪动态'
        }
      },
      {
        path: 'business',
        component: () => import(/* webpackChunkName: "business" */ '@/views/business'),
        children: [],
        meta: {
          title: '业务展示 - 南通意中裁剪中心 | 裁剪服务案例',
          description:
            '南通意中裁剪中心业务展示，包括裁剪设备、裁剪服务、成功案例等，为服装企业提供专业裁剪解决方案。',
          keywords: '裁剪业务,裁剪服务,裁剪案例,服装裁剪,裁剪设备展示'
        }
      },
      {
        path: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '@/views/contact'),
        children: [],
        meta: {
          title: '联系我们 - 南通意中裁剪中心 | 咨询与报价',
          description:
            '联系南通意中裁剪中心，获取专业裁剪服务咨询、设备报价、技术支持，我们为您提供优质的裁剪解决方案。',
          keywords: '联系裁剪中心,裁剪咨询,裁剪报价,裁剪服务热线'
        }
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
