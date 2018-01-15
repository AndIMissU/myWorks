import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import * as actions from './actions'
import cart from './modules/cart'

Vue.use(Vuex)

// 一个应用程序只有一个实例
export default new Vuex.Store({
  modules: {
    products,
    cart
  },
  actions
})
