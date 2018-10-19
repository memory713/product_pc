<template>
  <div class="style">
   	<div class="style-header">
   		<div style="position:relative;">
   			<div style="font-size:25px;font-weight:bold;">中国风图案</div>
   			<router-link :to="{ path:'/worksMore' }">
   				<div style="display:flex;position:absolute;top:10px;right:15%;"><img src="../../assets/more2.png" style=""><span style="color:rgba(163,163,163,1);margin:3px 0 0 3px;;">MORE</span></div>
   			</router-link>
   		</div>
   		<div class="style-line"></div>
   		<div style="font-size:14xp;">CHINESE STYLE PATTERN</div>
   	</div>
   	<div class="style-body">
		<div class="swiper-container1" style="width:1000px;overflow:hidden;">
	   		<div class="swiper-wrapper">
	            <div class="swiper-slide" v-for="itemSwipe in swipe">
	            	<div style="width:1000px;display:flex;">
			   			<div class="style-body-left" v-for="itemleft in itemSwipe.swipebox">
			   				<div class="style-body-left-img style-meng-hover">
			   					<img :src="itemleft.url" class="left-nei-img">
			   					<div class="style-meng">
			   						<div style="margin-top:170px;">
			   							<div style="background-color:#fff;border-radius:50%;height:100px;width:100px;padding-top:20px;">
			   								<div style="">价格</div>
			   								<div>￥<span style="font-size:18px;">{{itemleft.price}}</span></div>
			   								<img src="../../assets/download2.png" style="height:16px;width:20px;">
			   							</div>
			   						</div>
			   					</div>
			   				</div>
			   				<div class="style-body-left-details">
			   					<div>{{itemleft.name}}</div>
			   					<div  style="display: flex;"><img src="../../assets/download2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{itemleft.download}}<img src="../../assets/look2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{itemleft.look}}</div>
			   				</div>
			   			</div>
			   			<div class="style-body-right" >
			   				<div class="style-body-right-box" v-for="itemright in itemSwipe.swipechilds">
			   					<div class="style-img-ang-meng style-meng-hover">
			   						<img :src="itemright.url" style="width:100%;height:100%;">
			   						<div class="style-meng">
				   						<div style="margin-top:50px;">
				   							<div style="background-color:#fff;border-radius:50%;height:100px;width:100px;padding-top:20px;">
				   								<div style="">价格</div>
				   								<div>￥<span style="font-size:18px;">{{itemright.price}}</span></div>
				   								<img src="../../assets/download2.png" style="height:16px;width:20px;">
				   							</div>
				   						</div>
				   					</div>
			   					</div>
			   					<div class="style-body-words">
			   						<div>{{itemright.name}}</div>
			   						<div  style="display: flex;"><img src="../../assets/download2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{itemright.download}}<img src="../../assets/look2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{itemright.look}}</div>
			   					</div>
			   				</div>
			   			</div>
			   		</div> 
	            </div>
	        </div>
       		<div class="swiper-pagination" style="width:1000px;bottom:-50px;left:50%;margin-left:-500px;text-align:right;"></div>        
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
    	{swipechilds:[{url:'/static/styledemo2.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/styledemo3.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/styledemo4.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/styledemo5.png',price:500,download:20,look:200,name:"花朵的hi和"}],swipebox:[{url:'/static/styledemo1.png',price:500,download:20,look:200,name:"花朵的hi和"}]},
    	{swipechilds:[{url:'/static/styledemo2.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/styledemo3.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/styledemo4.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/styledemo5.png',price:500,download:20,look:200,name:"花朵的hi和"}],swipebox:[{url:'/static/styledemo1.png',price:500,download:20,look:200,name:"花朵的hi和"}]},
    	{swipechilds:[{url:'/static/styledemo2.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/styledemo3.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/styledemo4.png',price:500,download:20,look:200,name:"花朵的hi和"},{url:'/static/styledemo5.png',price:500,download:20,look:200,name:"花朵的hi和"}],swipebox:[{url:'/static/styledemo1.png',price:500,download:20,look:200,name:"花朵的hi和"}]},
    	]
    }
  },
  mounted(){
    new Swiper ('.swiper-container1', {
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
.style{background: url(../../assets/g.png) no-repeat  bottom right ;background-size:12% 28%	;margin-bottom: 100px;}
.swiper-container1{background: url(../../assets/gkyh.png) no-repeat 100% -4%;background-size:60% 25%;}
.style-header{
	margin-top:50px;
	color:rgba(99,99,99,1);
}
.style-line{
	height: 10px;
	width: 100%;
	background: url(../../assets/styleline.png) center center;
}
.style-body{width:100%;display: flex;justify-content: center;margin:50px 0;position: relative;}
.style-body-left{width: 350px;}
.style-body-left-details{width: 100%;display: flex;justify-content: space-between;margin-top:10px;}
.style-body-right{width:650px;margin-left: 35px; margin-top:20px;}
.style-body-left-img{width:100%;height: 450px;}
.left-nei-img{height: 450px;width: 100%;box-shadow: 10px 10px 1px rgba(0,0,0,0.5);}
.style-body-right-box{width:50%;float:left;padding:10px;box-sizing: border-box;height: 235px;}
.style-img-ang-meng{height: 185px;}
.style-body-words{display: flex;justify-content: space-between;margin-top: 10px;}

.style-meng-hover{position: relative;overflow: hidden;}
.style-meng{position: absolute;height: 100%;width: 100%;background-color: rgba(0,0,0,0.5);z-index: 2;top:-100%;left: 0;display: flex;justify-content: center;transition: all 1s;}
.style-meng-hover:hover .style-meng{ top: 0; }

</style>
