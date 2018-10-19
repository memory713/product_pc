<template>
  <div class="footer">
    <div class="footer-part1">
      <img src="../../assets/logo.png">
      <div style="color:#8E8E8E;line-height:26px;">共客印花图案商业设计平台，为设计师或工作室与企业公司间提供合作平台。设计师可直接在网站中悬挂出自己的作品供企业选购，企业也可直接向设计师委派设计任务。</div>
    </div>
    <div class="footer-part2">
      <div class="footer-part2-box">
        <div style="font-size:16px;">时尚资讯</div>
        <ul style="opacity:0.72;margin-top:20px;">
          <li>时尚资讯</li><li>时尚资讯</li><li>时尚资讯</li><li>时尚资讯</li>
        </ul>
      </div>

      <div class="footer-part2-box">
        <div style="font-size:16px;">流行趋势</div>
        <ul style="opacity:0.72;margin-top:20px;">
          <li>流行趋势</li><li>流行趋势</li><li>流行趋势</li><li>流行趋势</li>
        </ul>
      </div>
        
    </div>
    <div class="footer-part3">
      <div style="font-size:16px;margin-top:20px;opacity:1;">联系我们</div>
      <div>邮箱：gongkgsm@gonks.com</div>
      <div>地址：共客印花平台工作室</div>
      <div>宁波江北区</div>
      <div>电话：0574-22761732</div>
    </div>
    <div class="footer-part4">
      <img src="../../assets/2weima.png">
      <div style="opacity:0.72;line-height:40px;">关注共客商盟微信公众号</div>
      
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
.footer{
  width: 100%;
  margin-top:50px;
  height:316px;
  color:#000;
  background:#fff;
  display: flex;
  justify-content: center;
  padding:50px;
  box-sizing: border-box;
}
.footer-part1{width:300px;border-right: 1px solid rgba(50,54,67,0.3);padding-right:70px;box-sizing: border-box;}
.footer-part1 img{
  width:60px;
  height: 60px;
  margin:20px;
}
.footer-part2{width:300px;border-right: 1px solid rgba(50,54,67,0.3);font-size: 14px;line-height: 35px;}
.footer-part2-box{width: 50%;float:left;}
.footer-part3{border-right: 1px solid rgba(50,54,67,0.3);width:280px;}
.footer-part4{width:250px;padding:20px;box-sizing: border-box;}
.footer-part3 div{
  opacity: 0.72;
  line-height: 35px;
  font-size: 14px;
}
</style>
