import shop from '../../api/shop'
import * as types from '../mutation-types'
const state = {
  // 声明state
  all: []
}

const getters = {
  // 向外暴露只读属性
  allProducts: state => state.all
}

const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },
  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(product => product.id === id).inventory--
  }
}

const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

export default {
  state,
  mutations,
  // actions 负责所有api的通信  在action里面取数据
  actions,
  getters
}
