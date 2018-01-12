import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import totalpages from '@/components/activeManage'
import activePublic from '@/components/activePublic'
import step1 from '@/page/activePublic/step1.vue'
import step2 from '@/page/activePublic/step2.vue'
import step3 from '@/page/activePublic/step3.vue'
import step4 from '@/page/activePublic/step4.vue'

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
      component: activePublic,
      children: [
        {
          path: '',
          component: step1
        },
        {
          path: 'step1',
          component: step1
        },
        {
          path: 'step2',
          component: step2
        },
        {
          path: 'step3',
          component: step3
        },
        {
          path: 'step4',
          component: step4
        }
      ]
    }
  ]
})
