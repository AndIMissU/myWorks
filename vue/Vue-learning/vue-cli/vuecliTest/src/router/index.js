import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/hi'
import Hi1 from '@/components/hi1'
import Hi2 from '@/components/hi2'
import Params from '@/components/Params'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  routes: [
    // 2. 但页面多路由处理
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      }
    },
    { // 1. 父子路由
      path: '/hi',
      component: Hi,
      children: [
        {path: '/', name: 'Hi', component: Hi},
        {path: 'hi1', name: 'Hi1', component: Hi1},
        {path: 'hi2', name: 'Hi2', component: Hi2},
      ]
    },
    { // 父子路由
      path: '/youyou',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Hi2,
        right: Hi1
      }
    },
    {
      // 3. 传递 newsId 和 nesTitle 用 : 进行绑定 来配置路由  这样就可以提供传递参数了
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params
    },
    {
      // 4. 重定向 redirect
      path: '/goHome',
      redirect: '/'
    },
    {
      // 4. 当重定向 也需要传递Url参数时 也很简单 如下：
      path: '/goparams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '/hi3',
      component: Hi1,
      alias:'/hahaha'
    },
    // 404 页面编写
    {
      path: '*',
      component: Error
    }
  ]
})
