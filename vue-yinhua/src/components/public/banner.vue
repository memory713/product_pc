<template>
  <div style="margin-top:30px;position:relative;">
    <template >
	  <el-carousel :interval="50000" arrow="always">
	    <el-carousel-item v-for="item in backgroundUrl" :key="item.id + '-label'">
	      <img  v-bind:src="item.url">
	    </el-carousel-item>
	  </el-carousel>
	</template>
	<div class="banner-up">
		<div class="banner-up-box">
			<div class="banner-up-box-top">
				<div class="banner-top-left">
					<div class="banner-tab" :class="classA ? 'banner-tab  banner-checked' : 'banner-tab'" @click="qiehuan(1)">时尚资讯</div>
					<div class="banner-tab" :class="classA ? 'banner-tab' : 'banner-tab banner-checked'" @click="qiehuan(2)" style="margin-left:16px;">流行趋势</div>
				</div>
				<div class="banner-more">
					<div>MORE</div>
					<div><img src="../../assets/more1.png"></div>
				</div>
			</div>
			<div class="banner-up-box-body">
				<div class="banner-body-left">
					<div v-for="(item,index) in bannerImg" class="banner-body-left-box" :class="{ cur:changeRed == index}">
						<div class="banner-body-img"><img :src="item.url"  @click="bannerTab(index)"></div>
					</div>
				</div>
				<div class="banner-body-right">
					<div v-html="bannerWords.title" class="banner-right-title" ></div>
					<div class="banner-right-word" >{{bannerWords.word}}</div>
					<div class="banner-right-line"></div>
					<div class="banner-right-bottom">
						<div>{{bannerWords.time}}</div>
						<div>了解详情</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>

export default {

  data () {
    return {
    	backgroundUrl:[{
    		url:"/static/banner.png",
    		id:1,
    	},{
    		url:"/static/banner.png",
    		id:2,
    	},{
    		url:"/static/banner.png",
    		id:3,
    	},],
    	classA:true,
    	changeRed: 0,
    	bannerImg:[{
    		url:"/static/banner-box1.png",
    		id:1,
    		words:{
    			title:"浪漫的印花裙<br>带给你不一样的少女情怀",
    			word:"作为每一个时尚的111111女性，她们都有过属于自己的公主梦，除了我们日常见到的公主裙之外，还有哪些裙装能够给女生带来他们的少女情怀呢？",
    			time:'2018-9-08',
    		}
    	},{
    		url:"/static/banner-box2.png",
    		id:2,
    		words:{
    			title:"浪漫的印花裙<br>带给你不一样的少女情怀",
    			word:"作为每一个时尚222222的女性，她们都有过属于自己的公主梦，除了我们日常见到的公主裙之外，还有哪些裙装能够给女生带来他们的少女情怀呢？",
    			time:'2018-4-08'
    		}
    	},{
    		url:"/static/banner-box1.png",
    		id:3,
    		words:{
    			title:"浪漫的印花裙<br>带给你不一样的少女情怀",
    			word:"作为每一个时尚333333的女性，她们都有过属于自己的公主梦，除了我们日常见到的公主裙之外，还有哪些裙装能够给女生带来他们的少女情怀呢？",
    			time:'2018-1-08',
    		}
    	},],
    	bannerWords:{title:"浪漫的印花裙<br>带给你不一样的少女情怀",
    			word:"作为每一个时尚0000的女性，她们都有过属于自己的公主梦，除了我们日常见到的公主裙之外，还有哪些裙装能够给女生带来他们的少女情怀呢？",
    			time:'2018-9-08',}
    }
  },
  methods:{
  	qiehuan(a){
  		if(a == 1){
  			this.classA = true
  		}else{
  			this.classA = false
  		}
  	},
  	bannerTab(a){
  		console.log(a)
  		this.changeRed = a;
  		console.log(this.bannerImg[a].words)
  		this.bannerWords = this.bannerImg[a].words
  	}
  }
}
</script>

<style scoped>
.el-carousel__item div {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
}
/deep/ .el-carousel__arrow{
	display: none;
}
/deep/ .el-carousel__container{
	height: 550px;

}
.banner-more{
	font-size:12px;
	color:rgba(102,102,102,1);
}
.banner-up{
	width:1150px;
	position: absolute;
	top:25px;
	z-index: 2;
	left:50%;
	margin-left: -575px;
}
.banner-up-box{
	width:470px;
	height: 496px;
	background-color: #fff;
	float:right;
	padding:25px;
	box-sizing: border-box;
}
.banner-up-box-top{display: flex;justify-content: space-between;}
.banner-top-left{
	display: flex;
}
.banner-tab{
	width:101px;
	height:28px;
	border:1px solid #E5E5E5;
	border-radius:14px;
	color: #908F8F;
	line-height: 28px;
}
.banner-checked{
	color:#AF9161;
	border:1px solid #AF9161;
}
.banner-up-box-body{
	display: flex;
	justify-content: space-between;
	margin-top:35px;
}
.banner-body-right{
	width:257px;
	height:337px;
	background:rgba(238,238,238,0.3);
	padding:20px;
	box-sizing: border-box;
}
.banner-body-left-box{
	margin-bottom:8px;
	border:1px solid #fff;
}
.cur {
   border:2px solid #000;
}
.banner-right-title{text-align:left;font-size:14px;line-height:20px;color:rgba(72,72,72,1);}
.banner-right-word{text-align:left;color:rgba(140,140,140,1);line-height:30px;margin-top:30px;}
.banner-right-line{width:100%;border-bottom:1px solid rgba(153,153,153,1);opacity:0.27;margin-top:90px;}
.banner-right-bottom{font-size:12px;color:rgba(158,158,158,0.62);display: flex;justify-content: space-between;line-height: 30px;}
</style>
