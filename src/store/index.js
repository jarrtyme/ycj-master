//VX头部
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: { aaa: true },
  getters: {},
  mutations: {
    aaafn(state) {
      state.aaa = true
    },
    aaafn1(state) {
      state.aaa = false
    }
  },
  actions: {},
  modules: {}
})
