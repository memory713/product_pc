import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Works from '@/components/works'
import worksMore from '@/components/worksMore'
import worksDetails from '@/components/worksDetails'
import designer from '@/components/designer'
import atlas from '@/components/atlas'
import fashon from '@/components/fashon'
import logon from '@/components/logon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/logon',
      name: 'logon',
      component: logon
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/worksMore',
      name: 'worksMore',
      component: worksMore
    },
    {
      path: '/worksDetails',
      name: 'worksDetails',
      component: worksDetails
    },
    {
      path: '/designer',
      name: 'designer',
      component: designer
    },
    {
      path: '/atlas',
      name: 'atlas',
      component: atlas
    },
    {
      path: '/fashon',
      name: 'fashon',
      component: fashon
    },
  
  ]
})
