<template>
	<div style="height:100%;width:100%;color;#696969；">
		<div class="tab2-top"></div>
		<div style="width:100%;display:flex;justify-content:center;">
			<div class="worksDetails-body">
				<div class="works2-body-left" >
					<div style="width:520px;background-color:#fff;padding:0 50px 20px 50px;">
						<div class="works2-body-left-top">
							<span>红色烟花喜庆狗年快乐不打烊淘宝售价爆款产品红色烟花喜庆狗年快乐不打烊淘宝售价爆款产品</span>
							<div style="width:30%;padding-top:10px;"><img src="../../assets/banquan.png"><img src="../../assets/shangyong.png"></div>
						</div>
						<div class="works2-body-left-middle"></div>
						<div style="text-align:center;">
							<div style="font-size:18px;line-height:50px;">作品详情</div>
							<span style="line-height:20px;font-size:14px;color:#696969;line-height:25px;">本作褐色背景增加吸引里，面具增加吸引力，和多彩的表情。<br>
								作者可以为买断客户提供原素材。本作褐色背景增加吸引里，面具增加吸引力，和多彩的表情。<br>
								作者可以为买断客户提供原素材。<br></span>
						</div>
						<div style="margin-top:20px;"><img src="../../assets/moredown.jpg"></div>
					</div>
					<div style="width:80px;background-color:rgba(245,246,248,1);padding:10px;text-align:center;">
						<div style="font-size:16px;font-weight:600;margin-bottom:20px;">特效<br>展示</div>
						<div><img src="../../assets/style2.png"><div class="style-word">平铺图</div></div>
						<div><img src="../../assets/style1.png"><div class="style-word">立体图</div></div>
						<div><img src="../../assets/style3.png"><div class="style-word">实拍图</div></div>
					</div>
				</div>
				<div class="works2-body-right">
					<div class="works2-body-right-part1">
						<div style="display:flex;"><div style="line-height:28px;">购买使用权：</div><img src="../../assets/why.png"></div>
						<div class="works2-body-right-part1-price">{{price}}元/年</div>
						<div style="display:flex;"><span class="clickNumer" @click="reduce">-</span><span style="width:20px;display:inline-block;line-height:18px;">{{number}}</span><span class="clickNumer" @click="add">+</span></div>
						<div style="display:flex;justify-content:space-between;margin-top:10px;">
							<div class="works2-body-right-button">加入购物车</div>
							<div class="works2-body-right-button" style="color:#fff;background-color:#AF9161;">立即支付</div>
						</div>

						<div style="display:flex;margin-top:20px"><div style="line-height:28px;">购买版权：</div><img src="../../assets/why.png"></div>
						<div class="works2-body-right-part1-price">30000元/年</div>
						
						<div style="display:flex;justify-content:space-between;margin-top:10px;">
							<div class="works2-body-right-button">加入购物车</div>
							<div class="works2-body-right-button" style="color:#fff;background-color:#AF9161;">立即支付</div>
						</div>
					</div>

					<div class="works2-body-right-part2">
						<div ><img src="/static/userhead.png" style="height:50px;width:50px;border-radius:50%;"></div>
						<div class="works2-body-right-part2-right">
							<div>作者昵称</div>
							<div class="flex-between" style="width:100%;">
								<div style="color:#AF9161;margin-right:10px;"> 作者图集 >></div>
								<div class="works2-body-right-part2-right-logo"><img src="../../assets/look2.png">浏览:1250<img src="../../assets/download2.png">下载:1500</div>
							</div>
						</div>
					</div>

					<div class="works2-body-right-part3">
						<div style="color:#AF9161;text-align:left;font-size:16px;margin-bottom:10px;">作品介绍</div>
						<div class="flex-between works2-body-right-part3-line">
							<div>图片编号：</div>
							<div>552563256</div>
						</div>
						<div class="flex-between works2-body-right-part3-line">
							<div>颜色模式：</div>
							<div>RGB</div>
						</div>
						<div class="flex-between works2-body-right-part3-line">
							<div>作品尺寸：</div>
							<div>2m*1.2m</div>
						</div>
						<div class="flex-between works2-body-right-part3-line">
							<div>分辨率：</div>
							<div>300dpi</div>
						</div>
						<div class="flex-between works2-body-right-part3-line">
							<div>上传时间：</div>
							<div>2018-01-14    11：33：00</div>
						</div>
					</div>
					
					<div class="works2-body-right-part3">
						<div style="color:#AF9161;text-align:left;font-size:16px;margin-bottom:10px;">提供格式</div>
						<div style="width:70%;margin-left:15%;" class="flex-between">
							<img src="../../assets/ps.png" style="width:50px;height:50px;">
							<div style="text-align:left;">
								<div>文件格式：PSD</div>
								<div style="margin-top:10px;">推荐软件：PhotoShop CS6</div>
							</div>
						</div>
					</div>
					<div class="works2-body-right-part5" style="display:flex;">
						<div>分享：</div>
						<img src="../../assets/qqt.png"><img src="../../assets/wxt.png"><img src="../../assets/kjt.png"><img src="../../assets/wbt.png">
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
    	number:1,
    	price:300,
    }
  },
  // this.$route.params.title
  mounted:function(){
  	console.log(this.$route.query.id)
  },
  methods:{
  	add(){
  		if(this.number >10){
  			this.$message('太多啦');
  		}else{
  			this.number ++ ;
  			this.price = this.number * 300;
  		}
  	},
  	reduce(){
  		if(this.number==1){
  			this.$message('已经是最小数量');
  		}else{
  			this.number -- ;
  			this.price = this.number * 300;
  		}
  		
  	},
  }
}
</script>
<style scoped>
	
.tab2-top{background: url(../../assets/tab2-bg.jpg)  center center;height: 100px;width: 100%;margin-top:20px;}
.worksDetails-body{width:1000px;display: flex;justify-content: space-between;margin-top:40px;}
.works2-body-left{width:600px;display: flex;border-radius: 8px;border:1px solid rgba(245,246,248,1);box-shadow: 2px 2px 20px rgba(0,0,0,0.5);}
.works2-body-right{width:350px;}
.works2-body-left-top{height: 50px;width:80%;margin-left: 10%; display: flex;}
.works2-body-left-top span{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;line-height: 50px;width:70%;font-size: 16px;}
.works2-body-left-middle{
	background:url(/static/woks.png) no-repeat;
	height: 600px;
}
.style-word{width:100%;margin-bottom: 20px;}
.works2-body-right-part1{
	border:1px solid rgba(245,246,248,1);box-shadow: 2px 2px 20px rgba(0,0,0,0.5);padding:10px 20px 10px 20px;
}
.works2-body-right-part1-price{background:linear-gradient(-90deg,rgba(242,131,22,1),rgba(253,168,19,1));width:100%;height: 50px;border-radius: 5px;margin:10px 0;color:#fff;line-height: 50px;font-size: 25px;}
.clickNumer{border:1px solid rgba(181,181,181,1);background:rgba(238,238,238,1);width: 20px;height: 20px;display: inline-block;line-height: 18px;cursor: pointer;}
.works2-body-right-button{width: 45%;height: 40px;border:1px solid #AF9161;border-radius: 5px; color:#AF9161;font-size: 16px;line-height: 38px;}
.works2-body-right-part2{border-top:1px solid rgba(193,193,193,1);border-bottom:1px solid rgba(193,193,193,1); padding:20px 0; display: flex;margin-top:40px;}
.works2-body-right-part3{border-bottom:1px solid rgba(193,193,193,1); padding:20px 0;}
.works2-body-right-part2-right{text-align: left;margin-left: 20px;line-height:25px;color: #9297A3;}
.works2-body-right-part2-right-logo{font-size:12px;}
.works2-body-right-part2-right-logo img{height: 12px;width: 15px;margin:0 5px;margin-top:5px;}
.works2-body-right-part3-line{line-height:30px;color:#696969;}
.works2-body-right-part5{line-height: 50px;}
.works2-body-right-part5 img{height: 30px;width: 30px;margin:10px 5px;}

</style>