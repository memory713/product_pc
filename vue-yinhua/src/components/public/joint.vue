<template>
  <div class="joint">
    <div class="joint-header">
      <div class="joint-header-center">
        <div class="latest-top-title">合作企业</div>
        <div style="font-size:14px;color:rgba(99,99,99,1);">JOINT VENTURE</div>
      </div>
    </div>
    <div class="joint-body">
      <div class="joint-body-details">
        <div class="swiper-container3">
          <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="itemLOGO in logoswipe">
                <div v-for="item in itemLOGO.logo" class="joint-logo">
                  <img :src="item.url" style="margin-top:40px;">
                </div>
              </div>
          </div>
          <div class="swiper-pagination"></div>        
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';

export default {
  data () {
    return {
      logoswipe:[
        {logo:[{url:'/static/joinlogo1.jpg',},{url:'/static/joinlogo2.jpg',},{url:'/static/joinlogo3.jpg',},{url:'/static/joinlogo4.jpg',},{url:'/static/joinlogo5.jpg',},{url:'/static/joinlogo5.jpg',},{url:'/static/joinlogo4.jpg',},{url:'/static/joinlogo3.jpg',},{url:'/static/joinlogo2.jpg',},{url:'/static/joinlogo1.jpg',},{url:'/static/joinlogo2.jpg',},{url:'/static/joinlogo3.jpg',},{url:'/static/joinlogo4.jpg',},{url:'/static/joinlogo5.jpg',},{url:'/static/joinlogo1.jpg',
        }]},
        {logo:[{url:'/static/joinlogo1.jpg',},{url:'/static/joinlogo2.jpg',},{url:'/static/joinlogo3.jpg',},{url:'/static/joinlogo4.jpg',},{url:'/static/joinlogo5.jpg',},{url:'/static/joinlogo5.jpg',},{url:'/static/joinlogo4.jpg',},{url:'/static/joinlogo3.jpg',},{url:'/static/joinlogo2.jpg',},{url:'/static/joinlogo1.jpg',},{url:'/static/joinlogo2.jpg',},{url:'/static/joinlogo3.jpg',},{url:'/static/joinlogo4.jpg',},{url:'/static/joinlogo5.jpg',},{url:'/static/joinlogo1.jpg',
        }]},
        {logo:[{url:'/static/joinlogo1.jpg',},{url:'/static/joinlogo2.jpg',},{url:'/static/joinlogo3.jpg',},{url:'/static/joinlogo4.jpg',},{url:'/static/joinlogo5.jpg',},{url:'/static/joinlogo5.jpg',},{url:'/static/joinlogo4.jpg',},{url:'/static/joinlogo3.jpg',},{url:'/static/joinlogo2.jpg',},{url:'/static/joinlogo1.jpg',},{url:'/static/joinlogo2.jpg',},{url:'/static/joinlogo3.jpg',},{url:'/static/joinlogo4.jpg',},{url:'/static/joinlogo5.jpg',},{url:'/static/joinlogo1.jpg',
        }]},
      ]
    }
  },
  mounted(){
    new Swiper ('.swiper-container3', {
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay:true,
    })        
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.joint-header{width:100%;height: 150px;background: url(../../assets/joint.png) 100% 100%; padding:50px;box-sizing: border-box;}
.latest-top-title{font-size:30px;color:rgba(99,99,99,1);width:212px;border-bottom:1px solid rgba(181,181,181,0.22);margin:0 auto;}
.joint-body{width:100%;padding:45px;box-sizing: border-box;display: flex;justify-content: center;position: relative;}
.joint-body-details{width: 1280px;border:1px solid rgba(181,181,181,0.6);}
.swiper-container3{width: 100%;overflow: hidden;}
.joint-logo{width: 255px;float: left;height: 140px;border-top:1px solid rgba(181,181,181,0.3);border-right:1px solid rgba(181,181,181,0.3);background-color: #fff;}
</style>
