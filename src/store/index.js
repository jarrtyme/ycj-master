import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerVisible: true
  },
  getters: {},
  mutations: {
    showHeader(state) {
      state.headerVisible = true
    },
    hideHeader(state) {
      state.headerVisible = false
    }
  },
  actions: {},
  modules: {}
})
