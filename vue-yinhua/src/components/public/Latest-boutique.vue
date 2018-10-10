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
        LEFT
      </div>
      <div class="latest-body-center">
        <div class="latest-body-center-container">
          <div><img src="/static/banner-box3.png"></div>
          <div><img src="/static/banner-box3.png"></div>
          <div><img src="/static/banner-box3.png"></div>
          <div><img src="/static/banner-box3.png"></div>
          <div><img src="/static/banner-box3.png"></div>
          <div><img src="/static/banner-box3.png"></div>
        </div>
      </div>
      <div class="latest-body-right">
        RIGHT
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
    }
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
.latest-body{margin-top:100px;height:500px;display: flex; }
.latest-body-left{background-color: red;flex: 1;}
.latest-body-right{background-color: yellow;flex: 1;}
.latest-body-center{width:1280px;background-color: #fff;display: relative}
.latest-body-center-container{ 
  display: absolute;
  left: -200px;
  width:100000px;
  display: flex;
  overflow-x: scroll;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  -webkit-overflow-scrolling: touch;
}
</style>
