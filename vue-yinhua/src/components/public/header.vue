<template>
  <div class="header">
    <ul class="header-box">
    	<li><span class="weight">HOME</span><span>首页</span></li>
    	<li><span class="weight">PORTFOLIO</span><span>作品展示</span></li>
    	<li><span class="weight">ATLAS</span><span>设计师图集</span></li>
    </ul>
    <div class="header-logo  header-box">
    	<div style="width:100%;"><span><img src="../../assets/logo.png"></span>
    	<span>共客印花</span></div>
    </div>
    <ul class="header-box">
    	<li><span class="weight">FASHON</span><span>时尚资讯</span></li>
    	<li><span class="weight">DESIGNER</span><span>设计师</span></li>
    	<div class="header-search">
    		<span class="header-button">登陆 </span>
    		<span style="width:30px;"> | </span>
    		<span class="header-button"> 注册</span>
    	</div>
    </ul>
    
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
<style>
.header{
	height: 120px;
	margin: 0 auto;
	display: flex;
	width: 1280px;
	justify-content:center;
	font-size: 14px;
	color: #636363;
}
.header-box{display: flex;margin-top:40px;}
.header-box span{display: block;}
.header-box li{width:180px;}
.header-logo{width:100px;margin-top:20px;}
.header-search{
	width:141px;
	height:30px;
	border:1px solid rgba(136,136,136,1);
	border-radius:15px;
	display: flex;
	justify-content:center;
	line-height: 30px;
	font-size: 14px;
}
.weight{
	font-size: 12px;
}
</style>
