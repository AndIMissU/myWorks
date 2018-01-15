// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import { currency } from './currency'

Vue.config.productionTip = false
// 过滤器 将不需要的过滤掉  还有vue.component
Vue.filter('currency', currency)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
