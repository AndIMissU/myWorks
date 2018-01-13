// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})


// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// // import VueRouter from 'vue-router'
// import App from './App'
// // import Post from '@/pages/Post'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(ElementUI)
// // Vue.use(VueRouter)
// Vue.config.productionTip = false
// // // 组件模版
// // const Home = { template: '<div>home</div>' }

// // const router = new VueRouter({
// //   // hashtag 默认的mode 当使用hashtag 本身的#是用来描点定位的
// //   mode: 'history',
// //   base: __dirname,
// //   routes: [
// //     { path: '/', component: Home },
// //     { path: '/post/:id', component: Post },
// //   ]
// // })

// /* eslint-disable no-new */
// new Vue({
//   el:'#app',
//   template: <App/>,
//   components: { App }
// })
