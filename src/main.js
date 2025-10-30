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

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
