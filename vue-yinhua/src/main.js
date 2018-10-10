// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from '@/components/public/header'
import Search from '@/components/public/search'
import Banner from '@/components/public/banner'
import LatestBoutique from '@/components/public/Latest-boutique'



import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.component('Header',Header)
Vue.component("Search",Search)
Vue.component("Banner",Banner)
Vue.component("Latest-boutique",LatestBoutique)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,Header },
  template: '<App/>'
})
