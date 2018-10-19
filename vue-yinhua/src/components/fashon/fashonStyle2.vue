<template>
  <div style="">

    <div class="fashon-top flex-center">
        <div style="width:1000px;margin:20px 0" class="flex-between">
          <div >
            <div class="fashon-top-word" style="font-style:italic;">POPULAR INFORMATION</div>
            <div class="fashon-top-word">流行资讯</div>
          </div>
          <div>
            <div class="fashon-top-word2">MORE</div>
            <img src="../../assets/line5.png">
          </div>
        </div>
      </div>

      <div class="flex-center" >
        <div style="width:1000px;margin:20px 0;display:flex;height:300px;">
         
          <div class="fashon-body-right">
            <div style="line-height:50px;color:#666666;font-size:14px;">标题</div>
            <div style="line-height:25px;">不买一条印花连衣裙，怎么美美地出门不买一条印花连衣裙，怎么美美地出门不买一条印花连衣裙，怎</div>
            <div style="border-bottom:1px solid #9C9C9C;height:1px;width:100%;margin-top:120px;"></div>
            <div class="flex-between " style="color:#9C9C9C;line-height:30px;">
              <div>2018-9-08</div>
              <div>了解详情</div>
            </div>
          </div>
          <div class="fashon-body-middle"><div class="xiaosanjiao2"></div></div>
          <div class="fashon-body-left"><img src="/static/news1.png"></div>
        </div>
      </div>

      <div class="flex-center" style="position:relative;">
        <img src="../../assets/new.png" style="position:absolute;right:0;">
        <div style="width:1000px;overflow:hidden;">
          <div class="swiper-container2" style="height:350px;">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in swiper">
                <div class="fashon-swipe">
                  <img :src="item.url">
                  <div class="fashon-swipe-meng">
                    <div style="line-height:50px;font-size:18px;font-style:italic;">新闻标题</div>
                    <div style="line-height:20px;">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</div>
                  </div>
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
      swiper: [{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},]
    }
  },
  mounted(){
    new Swiper ('.swiper-container2', {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView : 3,
      slidesPerGroup : 3,
      spaceBetween : 50,
    })        
  }
}
</script>

<style>
.flex-between{display: flex;justify-content: space-between;}
.flex-center{display: flex;justify-content: center;}
.fashon-top-word{font-size: 25px;color:#606060;line-height: 35px;text-align: left;font-weight: 400;}
.fashon-top-word2{font-size: 20px;color:#606060;line-height: 35px;text-align: right;}
.fashon-body-left{width:650px;height: 100%;}
.fashon-body-left img{height: 100%;width: 100%;}
.fashon-body-middle{width:50px;position: relative;}
.xiaosanjiao2{position: absolute;width:0;
    height:0;
    border-width:20px 0px 20px 20px;
    border-style:solid;
    border-color:transparent  transparent transparent rgba(0,0,0,0.1);/*透明 灰 透明 透明 */
    left:0;
    top:50px;
  }
.fashon-body-right{width:300px;background-color: rgba(0,0,0,0.1);padding:20px;text-align: left;color:#888888;}
.fashon-swipe{position: relative;overflow: hidden;}
.fashon-swipe-meng{position: absolute;height: 100%;width: 100%;background-color: rgba(255,255,255,0.5);top:250px;left: 0;transition: all 1s;padding:0 50px 50px 50px;}
.fashon-swipe img{
  width: 300px;
  height: 300px;
}
.fashon-swipe:hover .fashon-swipe-meng{
  top:0;
  padding:50px;
}
</style>
