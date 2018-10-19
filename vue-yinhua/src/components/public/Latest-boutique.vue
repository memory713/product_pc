<template>
  <div style="margin-top:80px;">
    <div class="latest-top">
      <div class="latest-top-center">
        <div class="latest-top-title">最新精品</div>
        <div style="font-size:14px;color:rgba(99,99,99,1);">LATEST BOUTIQUE</div>
      </div>
      <div class="latest-top-router">
        <img src="../../assets/more2.png">
        <span style="color:rgba(163,163,163,1);line-height:25px;font-size:14px;">MORE</span>
      </div>
    </div>
    <div class="latest-body">
      <div class="latest-body-left">
        <div class="latest-body-left-box">
          <ul>
            <li><span>最新</span><span class="latest-left-point"></span></li>
          </ul>
        </div>
      </div>
      <div class="latest-body-center">
        <div class="swiper-container">
          <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="/static/banner-box3.png"></div>
              <div class="swiper-slide"><img src="/static/banner-box3.png"></div>
              <div class="swiper-slide"><img src="/static/banner-box3.png"></div>
              <div class="swiper-slide"><img src="/static/banner-box3.png"></div>
              <div class="swiper-slide"><img src="/static/banner-box3.png"></div>
              <div class="swiper-slide"><img src="/static/banner-box3.png"></div>
          </div>
          <div class="swiper-scrollbar"></div>        
        </div>
        <div class="latest-body-right">
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
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
      scrollbar: {
        el: '.swiper-scrollbar',
        type : 'progressbar',
      },
      centeredSlides : false,
      slidesPerView : 3,
      spaceBetween : 45,
      slidesOffsetAfter : 600,
    })        
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.latest-top{
  width:1150px;
  margin:0 auto;
  position: relative;
}
.latest-top-router{position: absolute;right: 0;top:20px;}
.latest-top-title{font-size:30px;color:rgba(99,99,99,1);width:212px;border-bottom:1px solid rgba(181,181,181,0.22);margin:0 auto;}
.latest-body{margin-top:90px;height:400px;display: flex; }
.latest-body-left{flex: 1;width:20%;}
.latest-body-left-box{width:100px;border-right:2px solid rgba(170,170,170,1);}
.latest-left-point{height:5px;width:5px;border-radius: 50%;background-color: #000;display: inline-block;}


.latest-body-right{background-color: rgba(255,255,255,0.6);position: absolute;width:32%;height:100%;right:0;top:0;z-index:5;}
.latest-body-center{width:80%;background-color: #fff;position: relative;}
.swiper-container {
  width: 100%;
  height: 100%;
  
}
.swiper-slide img{width:100%;height: 100%;}
.swiper-slide{
  height: 80%;
}
.swiper-container-horizontal > .swiper-scrollbar{
  position: absolute;
  width: 50%;
  left: 10%;
  bottom:0px;
}
</style>
