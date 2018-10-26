// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from '@/components/public/header'
import Search from '@/components/public/search'
import Banner from '@/components/public/banner'
import LatestBoutique from '@/components/public/Latest-boutique'
import Traditional from '@/components/public/traditional'
import Abstract from '@/components/public/abstract'
import Joint from '@/components/public/joint'
import Footer from '@/components/public/footer'
import Footer2 from '@/components/public/footer2'

// works
import Style from '@/components/works/style'
import Style2 from '@/components/works/style2'
import Style3 from '@/components/works/style3'
import Style4 from '@/components/works/style4'
import WorksMoreBody from '@/components/works/worksMoreBody'
import WorksDetailsBody from '@/components/works/WorksDetailsBody'
import WorksDetailsRecommend from '@/components/works/WorksDetailsRecommend'



// atlas
import atlasStyle from '@/components/atlas/atlasStyle'
import atlasStyle2 from '@/components/atlas/atlasStyle2'
import atlasStyle3 from '@/components/atlas/atlasStyle3'
// fashon
import fashonStyle from '@/components/fashon/fashonStyle'
import fashonStyle2 from '@/components/fashon/fashonStyle2'

// logon
import mouseSlide from '@/components/public/mouseSlide'
// center
import centerTop from '@/components/center/centerTop'
import centerList from '@/components/center/centerList'


import 'swiper/dist/css/swiper.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VDistpicker from 'v-distpicker'
import $ from 'jquery'

Vue.component('v-distpicker', VDistpicker)
Vue.use(ElementUI);

Vue.component('Header',Header)
Vue.component("Search",Search)
Vue.component("Banner",Banner)
Vue.component("Latest-boutique",LatestBoutique)
Vue.component("Traditional",Traditional)
Vue.component("Abstract",Abstract)
Vue.component("Joint",Joint)
Vue.component("Footer",Footer)
Vue.component("Footer2",Footer2)

// works
Vue.component("Style",Style)
Vue.component("Style2",Style2)
Vue.component("Style3",Style3)
Vue.component("Style4",Style4)
Vue.component("WorksMoreBody",WorksMoreBody)
Vue.component("WorksDetailsBody",WorksDetailsBody)
Vue.component("WorksDetailsRecommend",WorksDetailsRecommend)

// atlas
Vue.component("atlasStyle",atlasStyle)
Vue.component("atlasStyle2",atlasStyle2)
Vue.component("atlasStyle3",atlasStyle3)
// fashon
Vue.component("fashonStyle",fashonStyle)
Vue.component("fashonStyle2",fashonStyle2)
// login
Vue.component("mouseSlide",mouseSlide)
// center
Vue.component("centerTop",centerTop)
Vue.component("centerList",centerList)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,Header },
  template: '<App/>'
})
