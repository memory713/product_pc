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
import center from '@/components/center'
import money from '@/components/money'
import business from '@/components/business'
import atlasMore from '@/components/atlasMore'
import atlasDetais from '@/components/atlasDetais'


Vue.use(Router)

export default new Router({
  routes: [ 
    { path: '/',name: 'HelloWorld',component: HelloWorld },
    { path: '/logon',name: 'logon',component: logon },
    { path: '/works',name: 'works',component: Works },
    { path: '/worksMore',name: 'worksMore',component: worksMore },
    { path: '/worksDetails',name: 'worksDetails', component: worksDetails },
    { path: '/designer',name: 'designer',component: designer },
    { path: '/atlas',  name: 'atlas',  component: atlas },
    { path: '/fashon',  name: 'fashon',  component: fashon },
    { path: '/center',  name: 'center',  component: center },
    { path: '/money',  name: 'money',  component: money },
    { path: '/business',  name: 'business',  component: business },
    { path: '/atlasMore',  name: 'atlasMore',  component: atlasMore },
    { path: '/atlasDetais',  name: 'atlasDetais',  component: atlasDetais },
    
  
  ]
})
