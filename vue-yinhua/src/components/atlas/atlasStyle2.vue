<template>
  <div class="style">
  <!-- 背景蒙层 -->
  	<div class="style-half"></div>
  	<img src="../../assets/k.png" class="style-half-zimu">

   	<div class="style-header">
   		<div style="position:relative;">
   			<div style="font-size:25px;font-weight:bold;">中国风作品集</div>
   			<router-link :to="{ path:'/atlasMore' }">
   				<div style="display:flex;position:absolute;top:10px;right:15%;cursor:pointer;"><img src="../../assets/more2.png" style=""><span style="color:rgba(163,163,163,1);margin:3px 0 0 3px;;">MORE</span></div>
   			</router-link>
   		</div>
   		<div class="style-line"></div>
   		<div style="font-size:14xp;">CHINESE STYLE COLLECTION</div>
   	</div>
   	<div class="style-body">
		<div class="swiper-container2" style="width:1000px;overflow:hidden;">
	   		<div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="itemSwipe in swipe">
	            	<div style="width:1000px;">

			   			<div class="style-body-left" v-for="itemleft in itemSwipe.swipebox">
			   				<div class="style-body-left-img">
			   					<img :src="itemleft.url" class="left-nei-img">
			   				</div>
			   				<div class="style-body-left-details">
			   					<div>{{itemleft.name}}</div>
			   					<div  style="display: flex;"><img src="../../assets/download2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{itemleft.download}}<img src="../../assets/look2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{itemleft.look}}</div>
			   				</div>
			   				<div style="display:flex;margin-top:10px;"><div class="biaoqian" >花朵</div><div class="biaoqian">水墨</div></div>
			   			</div>
		   				<div class="style-body-right-box" v-for="itemright in itemSwipe.swipechilds">
		   					<div class="style-img-ang-meng">
		   						<img :src="itemright.url" style="width:100%;height:100%;border-radius: 20px;">
		   					</div>
		   					<div class="style-body-words">
		   						<div>{{itemright.name}}</div>
		   						<div  style="display: flex;"><img src="../../assets/download2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{itemright.download}}<img src="../../assets/look2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{itemright.look}}</div>
		   					</div>
		   					<div style="display:flex;margin-top:10px;"><div class="biaoqian" >花朵</div><div class="biaoqian">水墨</div></div>
		   				</div>

		   				<div class="style-body-left" v-for="itemleft in itemSwipe.swipebox2">
			   				<div class="style-body-left-img">
			   					<img :src="itemleft.url" class="left-nei-img">
			   				</div>
			   				<div class="style-body-left-details">
			   					<div>{{itemleft.name}}</div>
			   					<div  style="display: flex;"><img src="../../assets/download2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{itemleft.download}}<img src="../../assets/look2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{itemleft.look}}</div>
			   				</div>
			   				<div style="display:flex;margin-top:10px;"><div class="biaoqian" >花朵</div><div class="biaoqian">水墨</div></div>
			   			</div>

			   		</div> 
	            </div>
	        </div>
       		<div class="swiper-pagination" style="width:1000px;bottom:15px;left:50%;margin-left:-500px;text-align:center;"></div>        
        </div>
   	</div>
  </div>
</template>
<script>
import Swiper from 'swiper';

export default {
  data () {
    return {
    	swipe:[
    	{swipechilds:[{url:'/static/altsdemo2.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/altsdemo3.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/altsdemo6.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/altsdemo5.png',price:500,download:20,look:200,name:"花朵的hi和"}],swipebox2:[{url:'/static/altsdemo4.png',price:500,download:20,look:200,name:"花朵的hi和"}],swipebox:[{url:'/static/altsdemo1.png',price:500,download:20,look:200,name:"花朵的hi和"}],},
    	{swipechilds:[{url:'/static/altsdemo2.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/altsdemo3.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/altsdemo6.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/altsdemo5.png',price:500,download:20,look:200,name:"花朵的hi和"}],swipebox2:[{url:'/static/altsdemo4.png',price:500,download:20,look:200,name:"花朵的hi和"}],swipebox:[{url:'/static/altsdemo1.png',price:500,download:20,look:200,name:"花朵的hi和"}],},
    	{swipechilds:[{url:'/static/altsdemo2.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/altsdemo3.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/altsdemo6.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/altsdemo5.png',price:500,download:20,look:200,name:"花朵的hi和"}],swipebox2:[{url:'/static/altsdemo4.png',price:500,download:20,look:200,name:"花朵的hi和"}],swipebox:[{url:'/static/altsdemo1.png',price:500,download:20,look:200,name:"花朵的hi和"}],},
    	]
    }
  },
  mounted(){
    new Swiper ('.swiper-container2', {
      pagination: {
        el: '.swiper-pagination',
      },
      // autoplay:true,
    })        
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.style{position:relative; }
.style-half{position: absolute;height: 100%;width: 50%;background-color: rgba(0,0,0,0.05);right: 0;}
.style-half-zimu{position: absolute;right:20px;top:80px;}
.swiper-container1{background: url(../../assets/gkyh.png) no-repeat 100% -4%;background-size:60% 25%;}
.style-header{
	padding-top:50px;
	color:rgba(99,99,99,1);
}
.style-line{
	height: 10px;
	width: 100%;
	background: url(../../assets/styleline.png) center center;
}
.style-body{width:100%;display: flex;justify-content: center;padding:50px 0;position: relative;}
.style-body-left{width: 50%;display: inline-block;float: left;padding:0 20px;}
.style-body-left-details{width: 100%;display: flex;justify-content: space-between;margin-top:10px;}
.style-body-left-img{width:100%;height: 320px;}
.left-nei-img{height: 100%;width: 100%;border-radius: 20px;}
.style-body-right-box{width:25%;float:left;padding:0 10px;box-sizing: border-box;height: 400px;float: left;}
.style-img-ang-meng{height: 80%;}
.style-body-words{display: flex;justify-content: space-between;margin-top: 10px;}
.biaoqian{height: 25px;width:50px;line-height: 25px; border-radius:10px;background-color: rgba(255,255,255,0.5);margin-right: 10px;}


</style>
