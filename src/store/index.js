import Vue from 'vue'
import Vuex from 'vuex'

import shouwang from './modules/shouwang'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shouwang
  }
})
