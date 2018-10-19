<template>
  <div class="abstract">
    <div class="latest-top">
      <div class="latest-top-center">
        <div class="latest-top-title">抽象图案</div>
        <div style="font-size:14px;color:rgba(99,99,99,1);">ABSTRACT PATTERN</div>
      </div>
      <div class="latest-top-router">
        <img src="../../assets/more2.png">
        <span style="color:rgba(163,163,163,1);line-height:25px;font-size:14px;">MORE</span>
      </div>
    </div>
    <div class="abstract-flex">
      <div class="swiper-container2">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="itemData in slide">
              <div class="abstract-flex-box">
                  <div class="abstract-flex-box-part" v-for="item in itemData.box">
                    <img :src="item.url" class="abstract-flex-box-img">
                    <div class="traditional-flex-box-meng">
                      <div style="font-size:14px;">{{item.name}}</div>
                      <div class="meng-logo"><img src="../../assets/download.png" class="meng-img">{{item.download}}<img src="../../assets/look.png" class="meng-img">{{item.look}}</div>
                    </div>
                    <div class="abstract-hover">
                      <div class="abstract-hover-yuan">
                        <div style="color:rgba(88,88,88,1);font-size:14px;margin-top:30px;">价格</div>
                        <div style="line-height:30px;">￥<span style="font-size:18px;font-weight:600;">{{item.price}}</span></div>
                        <img src="../../assets/download2.png" style="height:20px;width:24px;">
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>          
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';

export default {
  data () {
    return {
      slide:[
      {
        id:1,
        box:[{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },]
      },{
        id:1,
        box:[{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },]
      },{
        id:1,
        box:[{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },]
      },{
        id:1,
        box:[{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },{
          url:'/static/banner-box3.png',
          name:'作品1',
          price:500,
          download:230,
          look:220,
        },]
      },]
    }
  },
  mounted(){
    new Swiper ('.swiper-container2', {
      
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
.latest-top{
  width:1280px;
  margin:0 auto;
  position: relative;
}
.latest-top-router{position: absolute;right: 0;top:20px;}
.latest-top-title{font-size:30px;color:rgba(99,99,99,1);width:212px;border-bottom:1px solid rgba(181,181,181,0.22);margin:0 auto;}
.abstract-flex{width: 100%;position: relative;background-color: #000;margin-top:100px;background: url(../../assets/line3.png) no-repeat center center;display: flex;justify-content: center;margin-bottom: 40px;
}
.swiper-container2{width: 1280px;overflow: hidden;}
.abstract-flex-box-part{
  width: 540px;
  height: 410px;
  float:left;
  margin:30px 10px 30px 60px;
  position: relative;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{bottom:-10px;}
.abstract-flex-box-img{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.meng-logo{
  display: flex;
  transition: all 1s;
}
.meng-img{
  height: 12px;
  width: 15px;
  margin:5px 5px 0px 10px;
}
.traditional-flex-box-meng{
  position: absolute;
  width: 100%;
  background-color: rgba(0,0,0,0.3);
  height: 50px;
  line-height: 20px;
  padding:15px;
  box-sizing: border-box;
  bottom: 0;
  color:#fff;
  display: flex;
  justify-content: space-between;
  left:0;
  transition: all 1s;
}
.abstract-hover{
  position: absolute;
  width: 100%;
  top:130px;
  left: 0;
  display: flex;
  justify-content: space-around;
  opacity: 0;
  transition: all 1s;
}
.abstract-hover-yuan{
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-color: #fff;
}
.abstract-flex-box-part:hover .abstract-hover{
  opacity: 1;
}
</style>
