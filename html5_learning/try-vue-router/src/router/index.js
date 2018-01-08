import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Foo from '@/components/Foo.vue'
import Bar from '@/components/Bar.vue'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  // 下面这句话是为了让路由地址显示为无#的地址
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar
    },
  ]
})
