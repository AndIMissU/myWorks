import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import totalpages from '@/components/activeManage'
import activePublic from '@/components/activePublic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/activeManage',
      component: totalpages
    },
    {
      path: '/activePublic',
      component: activePublic
    }
  ]
})
