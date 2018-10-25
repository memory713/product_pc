<template>
  <div class="centerTop">
    <div class="centerTop-bg flex-center">
    	<div class="centerTop-line">
    		<div class="centerTop-line-li">
    			<h2>作品集</h2>
    			<h1>300</h1>
    		</div>
    		<div>
    			<h2>作品总数</h2>
    			<h1>300</h1>
    		</div>
    		<div>
    			<img src="/static/header.png" style="border:5px solid #fff;border-radius:50%;width:100px;height:100px;margin-top:20px;">
    		</div>
    		<div>
    			<h2>已出售作品</h2>
    			<h1>300</h1>
    		</div>
    		<div>
    			<h2>粉丝</h2>
    			<h1>300</h1>
    		</div>
    	</div>
    </div>
    <div class="centerTop-name">
    	<div style="">
    		<div style="border-bottom:1px solid #7F7673;padding:6.5px 10px;">关注</div>
    		<div style="padding:5px 10px;"></div>
    	</div>
    	<div style="text-align:left;position:relative;">
    		<div style="border-bottom:1px solid #7F7673;padding:5px 10px;border-left:1px solid #7F7673;font-weight:600;font-size: 18px;">这片村头最酷的仔</div>
    		<div style="padding:5px 10px;color:#A2A2A2;border-left:1px solid #7F7673;">北京 | 设计师</div>
    		<div class="centerTop-name-point"></div>
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
.flex-between{display: flex;justify-content: space-between;}
.flex-center{display: flex;justify-content: center;}
.centerTop{background-color: #fff;}
.centerTop-bg{
	margin-top:50px;
	background: url(../../assets/desiger-topbg.jpg) no-repeat 100% 100%;
	width:100%;
	height: 180px;
}
.centerTop-line{width:1280px;display:flex;justify-content:space-around;color:#fff;height:80px;margin-top:100px;}
.centerTop-name{color:#000;margin-top:70px;font-size: 16px;display: flex;justify-content: center;}
.centerTop-name-point{position: absolute;height: 10px;width:10px;background-color: #958B79;border-radius: 50%;top:45%;left:-4px;}
</style>
