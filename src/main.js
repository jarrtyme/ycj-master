import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'

import '@/assets/font/iconfont.css'

// 配置 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

import '@/utils/mixins.js'
import '@/utils/filters.js'
import '@/utils/directives.js'

// SEO工具
import { updateSEO, generateOrganizationSchema, generateWebSiteSchema } from '@/utils/seo'

// 路由守卫 - 更新SEO信息
router.beforeEach((to, from, next) => {
  // 获取当前路由的meta信息
  const meta = to.matched[to.matched.length - 1]?.meta || {}

  // 更新SEO信息
  if (meta.title || meta.description || meta.keywords) {
    updateSEO({
      title: meta.title,
      description: meta.description,
      keywords: meta.keywords
    })
  }

  next()
})

// 初始化结构化数据
if (typeof window !== 'undefined') {
  generateOrganizationSchema()
  generateWebSiteSchema()
}

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
