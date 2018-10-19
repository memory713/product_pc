<template>
  <div class="worksMoreBody">
  <div>
    <div class="worksMoreBody-top" >
      <div class="morebody-top-part1">
        <div style="width:100px;float:left;line-height:60px;">分类：</div>
        <div style="width:1080px;float:left;"><ul class="top-part1-ul"><li v-for="item in fenlei">{{item}}</li></ul></div>
      </div>
    </div>
    <div class="worksMoreBody-top-other" >
      <div class="morebody-top-part1">
        <div style="width:100px;float:left;line-height:60px;">格式：</div>
        <div style="width:1080px;float:left;height:60px;line-height:60px;text-align:left;padding-left:20px;">
          <template>
            <el-radio v-model="radio" label="1">全部</el-radio>
            <el-radio v-model="radio" label="2">AI</el-radio>
            <el-radio v-model="radio" label="3">CDR</el-radio>
            <el-radio v-model="radio" label="4">EPS</el-radio>
            <el-radio v-model="radio" label="5">MAX</el-radio>
            <el-radio v-model="radio" label="6">JPG</el-radio>
            <el-radio v-model="radio" label="7">PNG</el-radio>
          </template>
        </div>
      </div>
    </div>
    <div class="worksMoreBody-top-other" >
      <div class="morebody-top-part1">
        <div style="width:100px;float:left;line-height:60px;">排序：</div>
        <div style="width:1080px;float:left;"><ul class="top-part1-ul"><li v-for="item in paixu">{{item}}</li></ul></div>
      </div>
    </div>

    <div class="worksMoreBody-main" >
      <div style="width:1000px;">
        <div v-for="item in goods" style="width:225px;float:left;margin-right:25px;margin-bottom:30px;">
          <div class="worksMoreBody-main-top worksMoreBody-main-hover">
            <img :src="item.url" style="width:100%;height:300px;" class="">
            <div class="worksMoreBody-main-meng" @click="tiaozhuan(item.id)">
              <div style="height:100px;width:100px;background-color:#fff;border-radius:50%;margin-top:50%;padding-top:20px;">
                <div style="">价格</div>
                <div>￥<span style="font-size:18px;">{{item.price}}</span></div>
                <img src="../../assets/download2.png" style="height:16px;width:20px;">
              </div>
            </div>
          </div>
          <div class="worksMoreBody-main-bottom">
            <div>{{item.name}}</div>
            <div  style="display: flex;"><img src="../../assets/download2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{item.download}}<img src="../../assets/look2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{item.look}}</div>
          </div>
          <div style="margin-top:10px;">
            <div class="worksMoreBody-main-bioaqian" v-for="itemb in item.itemb">{{itemb}}</div>
          </div>
        </div>
      </div>
    </div>
      
    <el-pagination
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    </div>
    
  </div>

</template>
<script>
export default {
  data () {
    return {
      fenlei:["全部","完整图","循环图","图形元素","logo","icon","面料","纸质","电子图像","T恤","连衣裙","成片面料","包装盒","ppt","图片","视频","全部","完整图","循环图"],
      paixu:["精品推荐","热门下载","最新上传","价格高低",],
      radio: '1',
      goods:[{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo1.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo2.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo3.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo4.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo1.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo2.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo3.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo4.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo1.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo2.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo3.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo4.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo1.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo2.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo3.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo4.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo1.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo2.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo3.png'},{id:2,download:20,look:20,itemb:["花朵","水墨"],price:500,name:"寄到啊",url:'/static/goods-demo4.png'},]
    }
  },
  methods:{
    tiaozhuan(id){
      console.log(id)
      let routeData = this.$router.resolve({ path: '/worksDetails', query: { id: id } });
      window.open(routeData.href, '_blank');
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.worksMoreBody{
  width: 100%;
  margin-top:30px;
  
}
.worksMoreBody-top{display: flex;justify-content: center;background: url(../../assets/worksMoreBG.png) no-repeat; -webkit-background-size: 100% 100%;
background-size: 100% 100%;}
.worksMoreBody-top-other{display: flex;justify-content: center;}
.morebody-top-part1{width:1180px;font-size: 16px;font-weight: 500;}
.top-part1-ul li{float: left; width: 80px;line-height: 60px;}
.top-part1-ul li:hover {
  color:#AF9161;
}
/deep/ .el-radio__inner::after{
  height: 0;width: 0;
}
/deep/ .el-radio__input.is-checked+.el-radio__label{color:#AF9161;}
/deep/ .el-radio__input.is-checked .el-radio__inner{border-color:#AF9161;background-color:#AF9161;}
.worksMoreBody-main{width: 100%;display: flex;justify-content: center;margin-top:30px;}
.worksMoreBody-main-bottom{width: 100%;display: flex;justify-content: space-between;margin-top:15px;}
.worksMoreBody-main-bioaqian{
  width:50px;
  height:20px;
  background:rgba(244,244,244,1);
  border-radius:8px;
  float:left;
  margin-right: 10px;
  line-height: 20px;
}
.worksMoreBody-main-top{position: relative;overflow: hidden;}
.worksMoreBody-main-meng{position: absolute;background-color: rgba(0,0,0,0.5);top:-100%;left: 0;height: 100%;width: 100%;display: flex;justify-content: center;transition: all 1s;}
.worksMoreBody-main-hover:hover .worksMoreBody-main-meng{
  top: 0;
}
/deep/ .el-pagination{
  color:rgba(110,110,110,1);
  font-weight: 0;
  margin:20px 0;
}
</style>
