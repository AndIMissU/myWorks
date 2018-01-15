import * as types from '../mutation-types'
const state = {
  added: []//  表示被添加到购物车的商品
}

const getters = {
  cartProducts: (state, getters, rootState) => {
    // 返回购物车里面添加的商品
    return state.added.map(({ id, quantity }) => {
      // rootState 根节点上的state allproducts在根节点上  不存在carts上 现用现查
      const product = rootState.products.all.find(product => product.id === id)
      // 通过getters 找到商品的信息 然后返回商品信息
      return {
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

const actions = {}

const mutations = {
  [types.ADD_TO_CART] (state, { id }) {
    const record = state.added.find(product => product.id === id)
    if (!record) {
      state.added.push({
        id,
        quantity: 1//  初始化数量为1
      })
    } else {
      record.quantity++
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
