<template>
  <div>
    <Header></Header>
    <Search></Search>
    <div class="designer-topbg"></div>
    <div class="flex-center">
      <div style="width:1280px;">
        <div class="designer-body-top">
          <div class="designer-body-top-li"><ul>排序：<li v-for="item in paixu" >{{item}}</li></ul></div>
          <div class="designer-body-top-search">
            <input type="" name="" placeholder="设计师名字">
            <img src="../assets/search2.png">
          </div>
        </div>
      </div>  
    </div>
      
      <div v-for="itemall in peopleTwo">
        <div class="flex-center ">
          <div class="designer-body-main" v-for="item1 in itemall.people1">
            <div class="designer-body-people">
              <img :src="item1.touxiangurl" class="designer-body-people-left">
              <div class="designer-body-people-right">
                <div class="flex-between"><span style="font-size:25px;font-weight:600;line-height:40px;">{{item1.name}}</span><img src="../assets/guanzhu1.png" style="width:50px;height:30px;"></div>
                <div style="line-height:40px;text-align:left;color:#878787;font-size:14px;">{{item1.address}} | {{item1.zhiye}}</div>
                <div class="designer-jianjie" title="itemall.jianjie">简介：{{item1.jianjie}}</div>
              </div>
            </div>
            <div class="designer-body-works">
              <div class="swiper-container" style="width:100%;height:200px;">
                <div class="swiper-wrapper">
                  <div class="swiper-slide desiger-swiper" v-for="itemurl in item1.itemswipe"><img :src="itemurl.url" @click="zuopin(itemurl.id)"></div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-center designer-body">
          <div class="designer-body-main" v-for="item2 in itemall.people2">
            <div class="designer-body-works">
              <div class="swiper-container" style="width:100%;height:200px;">
                <div class="swiper-wrapper">
                  <div class="swiper-slide desiger-swiper" v-for="itemurl in item2.itemswipe"><img :src="itemurl.url" @click="zuopin(itemurl.id)"></div>
                </div>
                <div class="swiper-pagination"></div>
              </div>
            </div>
            <div class="designer-body-people">
              <img :src="item2.touxiangurl" class="designer-body-people-left">
              <div class="designer-body-people-right">
                <div class="flex-between"><span style="font-size:25px;font-weight:600;line-height:40px;">{{item2.name}}</span><img src="../assets/guanzhu2.png" style="width:50px;height:30px;"></div>
                <div style="line-height:40px;text-align:left;color:#878787;font-size:14px;">{{item2.address}} | {{item2.zhiye}}</div>
                <div class="designer-jianjie" title="item2.jianjie">简介：{{item2.jianjie}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="desiger-body-line"></div>
    </div>
    <el-pagination
      :page-size="10"
      :pager-count="5"
      style="margin:50px 0;"
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
    <Footer2></Footer2>
  </div>
</template>
<script>
import Swiper from 'swiper';

export default {
  data () {
    return {
      paixu: ['人气最高','作品最多','下载最多'],
     
      peopleTwo:[{
        people1:[{touxiangurl:'/static/people.png',name:"xxx",address:'北京',zhiye:'设计师',jianjie:'圣诞假爱的大家按时缴纳但回到沙发贺卡说服大家按时饭卡是否',itemswipe:[{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:15},{url:"/static/works.jpg",id:12},{url:"/static/works.jpg",id:13},{url:"/static/works.jpg",id:134},{url:"/static/works.jpg",},{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:7}]}],
        people2:[{touxiangurl:'/static/people.png',name:"xxx",address:'北京',zhiye:'设计师',jianjie:'圣诞假爱的大家按时缴纳但回到沙发贺卡说服大家按时饭卡是否',itemswipe:[{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:15},{url:"/static/works.jpg",id:12},{url:"/static/works.jpg",id:13},{url:"/static/works.jpg",id:134},{url:"/static/works.jpg",},{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:7}]}],
      },{
        people1:[{touxiangurl:'/static/people.png',name:"xxx",address:'北京',zhiye:'设计师',jianjie:'圣诞假爱的大家按时缴纳但回到沙发贺卡说服大家按时饭卡是否',itemswipe:[{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:15},{url:"/static/works.jpg",id:12},{url:"/static/works.jpg",id:13},{url:"/static/works.jpg",id:134},{url:"/static/works.jpg",},{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:7}]}],
        people2:[{touxiangurl:'/static/people.png',name:"xxx",address:'北京',zhiye:'设计师',jianjie:'圣诞假爱的大家按时缴纳但回到沙发贺卡说服大家按时饭卡是否',itemswipe:[{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:15},{url:"/static/works.jpg",id:12},{url:"/static/works.jpg",id:13},{url:"/static/works.jpg",id:134},{url:"/static/works.jpg",},{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:7}]}],
      },{
        people1:[{touxiangurl:'/static/people.png',name:"xxx",address:'北京',zhiye:'设计师',jianjie:'圣诞假爱的大家按时缴纳但回到沙发贺卡说服大家按时饭卡是否',itemswipe:[{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:15},{url:"/static/works.jpg",id:12},{url:"/static/works.jpg",id:13},{url:"/static/works.jpg",id:134},{url:"/static/works.jpg",},{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:7}]}],
        people2:[{touxiangurl:'/static/people.png',name:"xxx",address:'北京',zhiye:'设计师',jianjie:'圣诞假爱的大家按时缴纳但回到沙发贺卡说服大家按时饭卡是否',itemswipe:[{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:15},{url:"/static/works.jpg",id:12},{url:"/static/works.jpg",id:13},{url:"/static/works.jpg",id:134},{url:"/static/works.jpg",},{url:"/static/works.jpg",id:11},{url:"/static/works.jpg",id:7}]}],
      }]
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
      autoplay: true,//可选选项，自动滑动
      pagination: {
        el: '.swiper-pagination',
        type : 'progressbar',
        progressbarOpposite: true,
      },
      slidesPerView : 3,
      slidesPerGroup : 3,
      spaceBetween : 20,
    })        
  },
  methods:{
    zuopin(id){
      console.log(id)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-between{display: flex;justify-content: space-between;}
.flex-center{display: flex;justify-content: center;}

.designer-topbg{
width: 100%;
height: 80px;
background: url(../assets/desiger-topbg.jpg) no-repeat 100% 100%;
margin-top:20px;
}
.designer-body-top{display: flex;justify-content: space-between;height: 80px;line-height: 80px;border-bottom:1px solid rgba(149,149,149,0.1);}
.designer-body-top-li ul{display: flex;font-size: 16px;font-weight: 600;}
.designer-body-top-li ul li{width:100px;font-size: 14px;font-weight: 400;}
.designer-body-top-search{ width: 200px;border-radius: 20px;border:1px solid rgba(106,106,106,0.5);height: 30px; margin-top:25px;position: relative;}
.designer-body-top-search input{position: absolute;top:12%;left: 10px;height: 70%;width:70%;}
.designer-body-top-search img{position: absolute;top:7px;right: 10px;height: 15px;width:15px;}
.designer-body-main{display: flex;justify-content: space-between;margin:50px 0;width:1280px;}
.designer-body-people{width:40%;display: flex;justify-content: space-between;margin:20px 0;}
.designer-body-people-left{width:120px;height: 120px;border-radius: 50%;border:1px solid rgba(0,0,0,0.5);}
.designer-body-people-right{width:60%;}
.designer-jianjie{line-height:40px;text-align:left;color:#515151;font-size:16px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
.designer-body-works{
  width: 55%;
}
.desiger-swiper img{
  height: 100%;
  width:100%;
}
.desiger-body-line{background: url(../assets/line3.png);width:100%;height: 40px;}
</style>
