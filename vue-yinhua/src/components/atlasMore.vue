<template>
  <div>
    <Header></Header>
    <Search></Search>
  	<div class="style-bgi"></div>
    <div class="c flex-center" >
      <div class="morebody-top-part1 flex-between">
        <div style="width:100px;float:left;line-height:60px;">分类：</div>
        <div style="width:1080px;float:left;"><ul class="top-part1-ul"><li v-for="item in fenlei" :class="(item.checked) ? 'checked-li':'' ">{{item.name}}</li></ul></div>
      </div>
    </div>
    <div class="flex-center">
      <div class="flex-between" style="width:1000px;">
        <div style="display:flex;margin-top:20px;">
          <div style="width:80px;">排序：</div>
          <div class="worksMoreBody-paixu">
            <div :style="(pauxuType==1) ? 'color:#AF9161':'' " @click="paixu(1)">查看最多</div><div :style="(pauxuType==2) ? 'color:#AF9161':'' " @click="paixu(2)">时间升序</div><div :style="(pauxuType==3) ? 'color:#AF9161':'' " @click="paixu(3)">时间降序</div>
          </div>
        </div>
        <div class="designer-body-top-search">
          <input type="" name="" placeholder="花卉图集">
          <img src="../assets/search2.png">
        </div>
      </div>
    </div>
    <div class="flex-center" style="margin-bottom:20px;">
      <div style="width:1000px;">
        <div class="atlsaMoreBody-body" v-for="(item,index) in tuji" @click="atlasDetails(item.id)">
          <div class="worksMoreBody-body-bg" :style="{backgroundImage:'url(' + item.url + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center',backgroundSize:'100%'}"></div>
          <div class="worksMoreBody-body-meng flex-between">
            <div>{{item.name}}</div>
            <div  style="display: flex;"><img src="../assets/download.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{item.download}}<img src="../assets/look.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{item.look}}</div>
          </div>
        </div>
      </div>
    </div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="2"
      layout="total, prev, pager, next"
      :total="tuji.length"
      >
    </el-pagination>
    <Footer2></Footer2>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fenlei:[{name:'全部',checked:true},{name:'完整图',checked:false},{name:'循环图',checked:false},{name:'图形元素',checked:false},{name:'logo',checked:false},{name:'icon',checked:false},{name:'面料',checked:false},{name:'纸质',checked:false},{name:'电子图像',checked:false},{name:'T恤',checked:false},{name:'连衣裙',checked:false},{name:'成片面料',checked:false},{name:'包装盒',checked:false},{name:'ppt',checked:false},{name:'图片',checked:false},{name:'视频',checked:false},{name:'全部',checked:false},{name:'完整图',checked:false},{name:'循环图',checked:false},],
      pauxuType:1,
      tuji:[{url:'/static/altsdemo2.png',id:1,name:'dhauid',download:22,look:20},{url:'/static/altsdemo2.png',id:1,name:'dhauid',download:22,look:20},{url:'/static/altsdemo2.png',id:1,name:'dhauid',download:22,look:20},{url:'/static/altsdemo2.png',id:1,name:'dhauid',download:22,look:20},{url:'/static/altsdemo2.png',id:1,name:'dhauid',download:22,look:20},{url:'/static/altsdemo2.png',id:1,name:'dhauid',download:22,look:20},{url:'/static/altsdemo2.png',id:1,name:'dhauid',download:22,look:20},{url:'/static/altsdemo2.png',id:1,name:'dhauid',download:22,look:20},{url:'/static/altsdemo2.png',id:1,name:'dhauid',download:22,look:20},{url:'/static/altsdemo2.png',id:1,name:'dhauid',download:22,look:20},{url:'/static/altsdemo2.png',id:1,name:'dhauid',download:22,look:20},{url:'/static/altsdemo2.png',id:1,name:'dhauid',download:22,look:20},],
      currentPage1: 6,
    }
  },
  methods:{
    paixu(a){
      this.pauxuType = a
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    atlasDetails(id){
      console.log(id)
      let routeData = this.$router.resolve({ path: '/atlasDetais', query: { id: id } });
      window.open(routeData.href, '_blank');
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.style-bgi{
  width: 100%;
  height: 100px;
  margin-top:30px;
  background: url(../assets/atlaslist-background.png) 100% 100%;
}
.morebody-top-part1{width:1000px;font-size: 16px;font-weight: 500;border-bottom: 1px solid #EEEEEE;padding-bottom: 10px;}
.top-part1-ul{margin-top:12px;}
.top-part1-ul li{float: left; width: 80px;line-height: 40px;text-align: left;}
.top-part1-ul li:hover {
  color:#AF9161;
  text-decoration:line-through;
}
.checked-li{color:#AF9161;text-decoration:line-through;}
.designer-body-top-search{ width: 200px;border-radius: 20px;border:1px solid rgba(106,106,106,0.5);height: 30px; margin-top:25px;position: relative;}
.designer-body-top-search input{position: absolute;top:12%;left: 10px;height: 70%;width:70%;}
.designer-body-top-search img{position: absolute;top:7px;right: 10px;height: 15px;width:15px;}
.worksMoreBody-paixu{cursor: pointer;display: flex;}
.worksMoreBody-paixu div{padding:0 20px;}
.atlsaMoreBody-body{width: 300px;height: 300px;position: relative;margin:15px;display: inline-block;overflow: hidden;cursor: pointer;}
.worksMoreBody-body-bg{position: absolute;height: 100%;width: 100%;left:0;top:0;}
.worksMoreBody-body-meng{position: absolute;z-index: 10;width: 100%;left: 0;bottom: 0;background-color: rgba(0,0,0,0.5);padding: 10px;color: #fff;}
</style>
