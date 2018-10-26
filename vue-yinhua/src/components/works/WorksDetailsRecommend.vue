<template>
  <div class="WorksDetailsRecommend">
    <img src="../../assets/tuijian.png" style="width:100%;margin-top:150px;margin-bottom:50px;">
    <div class="flex-center">
      <div style="width:1000px;">
          <div class="swiper-container" style="height:350px;">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in swiper">
                <div class="fashon-swipe">
                  <img :src="item.url">
                  <div class="style-meng">
                    <div style="margin-top:10px;">
                      <div style="color:#fff;margin-bottom:20px;">作品名称</div>
                      <div style="background-color:#fff;border-radius:50%;height:100px;width:100px;padding-top:20px;">
                        <div style="">价格</div>
                        <div>￥<span style="font-size:18px;">500</span></div>
                        <img src="../../assets/download2.png" style="height:16px;width:20px;">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex-between" style="margin:10px 0;">
                  <div>ningchenghji</div>
                  <div  style="display: flex;"><img src="../../assets/download2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">22<img src="../../assets/look2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">22</div>
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
      swiper: [{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},],
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView : 3,
      slidesPerGroup : 3,
      spaceBetween : 50,
    })        
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fashon-swipe{position: relative;overflow: hidden;}
.fashon-swipe img{
  width: 300px;
  height:250px;
}
.fashon-swipe:hover .style-meng{
  top:0;
  padding:50px;
}
.style-meng{position: absolute;height: 100%;width: 100%;background-color: rgba(0,0,0,0.5);z-index: 2;top:100%;left: 0;display: flex;justify-content: center;transition: all 1s;}
</style>
