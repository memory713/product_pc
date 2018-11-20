<template>
  <div>
    <Header></Header>
    <Search></Search>
  	<div class="style-bgi"></div>
    <div style="line-height:100px;font-size:30px;">开始的哈哈大蝴蝶结和作品集展示</div>
    <div  class="flex-center">
      <div  class="atlsaDtails-top">
        <div class="flex-between">
          <img src="/static/banner-box1.png" style="height:50px;width:50px;border-radius:50px;">
          <div style="margin-top:15px;color:#929292;margin-left:20px;">作者：啦啦啦</div>
        </div>
        <div class="flex-between" style="margin-top:15px;"><div style="margin-right:50px;">2018-09</div><div>来源：原创</div> </div>
        <div style="display:flex;" class="atlsaDtails-fenxiang"><span style="margin-top:15px;">分享：</span><img src="../assets/qqt.png"><img src="../assets/wxt.png"><img src="../assets/kjt.png"><img src="../assets/wbt.png"></div>
      </div>
    </div>
    <div class="flex-center" style="margin-bottom:100px;">
      <div  class="atlsaDtails-tuwen">
        <img src="/static/tuwen1.png">
        <img src="/static/tuwen2.png">
        <img src="/static/tuwen1.png">
        <img src="/static/tuwen2.png">
      </div>
    </div>
    <div class="atlsaDtails-tuijian">
      <img src="../assets/line3.png"  class="atlsaDtails-tuijian-img">
      <div class="flex-center atlsaDtails-tuijian-word"  >
        <div style="width:1000px;color:#858585;font-size:18px;" class="flex-between">
          <div><img src="../assets/sun2.png"><span style="margin-left:10px;margin-top:-1px;display:inline-block;">该设计师其他图集推荐</span></div>
          <div style="cursor:pointer;">MORE</div>
        </div>
      </div>
    </div>
    <div class="flex-center" style="margin:50px 0">
      <div style="width:1000px;display:flex;">
        <div v-for="item in 3" style="margin:0 20px;">
          <img src="/static/altsdemo1.png" style="width:300px;height:200px;border-radius:10px;">
          <div class="flex-between" style="margin:10px 0;">
            <div>就到家啊付款了大家按时付款啦</div>
            <div  style="display: flex;"><img src="../assets/download2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">22<img src="../assets/look2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">22</div>
            
          </div>
          <div style="display:flex;margin-top:10px;"><div class="biaoqian" >花朵</div><div class="biaoqian">水墨</div></div>
        </div>
      </div>
    </div>
    <Footer2></Footer2>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted:function(){
    console.log(this.$route.query.id)
  },
  methods:{
    
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.style-bgi{
  width: 100%;
  height: 100px;
  margin-top:30px;
  background: url(../assets/stylebackground.png) 100% 100%;
}
.atlsaDtails-top{width:1000px;border-top:1px solid #B1B0B0;border-bottom:1px solid #B1B0B0;padding:15px 10px;display:flex;justify-content:space-around;}
.atlsaDtails-fenxiang img{height: 40px;width: 40px;margin:5px;}
.atlsaDtails-tuwen{width: 800px;}
.atlsaDtails-tuwen img{margin:10px;}
.atlsaDtails-tuijian{position: relative;width: 100%;height: 50px;}
.atlsaDtails-tuijian-img{position: absolute;width:100%;left: 0;top:0;}
.atlsaDtails-tuijian-word{position: absolute;z-index: 2;width: 100%;top:8px;}
.biaoqian{height: 25px;width:50px;line-height: 25px; border-radius:10px;background-color: #F4F4F4;margin-right: 10px;}

</style>
