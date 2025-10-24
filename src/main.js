import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/font/iconfont.css'

// 配置 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false

// 左凡真好看
// 导入自定义全局组件111
// import header from "@/components/header";
// import binner from "@/components/binner";
// import zkForm from "@/components/zk-form/Index.vue";
// import qfForm from "@/components/qf-form/Index";
// import qfTable from "@/components/qf-table/Index";
// import qfCard from "@/components/qf-card/Index";
Vue.use((Vue) => {
  // Vue.component("my-header", header);
  // Vue.component("my-binner", binner);
  //   Vue.component("zk-form", zkForm);
  //   Vue.component("qfForm", qfForm);
  //   Vue.component("qfTable", qfTable);
  //   Vue.component("qfCard", qfCard);
})

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
