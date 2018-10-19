<template>
  <div class="traditional" style="margin-top: 80px;">
    <div class="latest-top">
      <div class="latest-top-center">
        <div class="latest-top-title">传统风采</div>
        <div style="font-size:14px;color:rgba(99,99,99,1);">TRADITIONAL DEMEANOR</div>
      </div>
      <div class="latest-top-router">
        <img src="../../assets/more2.png">
        <span style="color:rgba(163,163,163,1);line-height:25px;font-size:14px;">MORE</span>
      </div>
    </div>
    <div class="traditional-body">
      <div class="traditional-body-down">
        <div class="tra-bgi-1"><img src="../../assets/line1.png" style="float:left;"></div>
        <div class="tra-bgi-2"><img src="../../assets/gkyh.png" style="width:1500px;margin-top:50px;margin-bottom:70px;"></div>
        <div class="tra-bgi-3"><img src="../../assets/line2.png" style="float:right;"></div>
      </div>
      <div class="traditional-body-up">

        <div class="traditional-flex">
          <div class="traditional-flex-box" v-for="item in zuopin1">
            <img :src="item.url" class="traditional-flex-box-img">
            <div class="traditional-flex-box-meng">
              <div class="yuan"><div class="yuan-nei"></div></div>
              <div style="font-size:14px;">{{item.name}}</div>
              <div class="meng-logo"><img src="../../assets/download.png" class="meng-img">{{item.download}}<img src="../../assets/look.png" class="meng-img">{{item.look}}</div>
              <div class="meng-money">{{item.money}}</div>
            </div>
          </div>
        </div>
        <div class="traditional-flex">
          <div class="traditional-flex-box" v-for="item in zuopin2">
            <img :src="item.url" class="traditional-flex-box-img">
            <div class="traditional-flex-box-meng">
              <div class="yuan"><div class="yuan-nei"></div></div>
              <div style="font-size:14px;">{{item.name}}</div>
              <div class="meng-logo"><img src="../../assets/download.png" class="meng-img">{{item.download}}<img src="../../assets/look.png" class="meng-img">{{item.look}}</div>
              <div class="meng-money">{{item.money}}</div>
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
      zuopin1:[{
        money:"￥100",
        name:"作品名称1",
        download:10,
        look:22,
        url:"/static/zuopin2.png"
      },{
        money:"￥2020",
        name:"作品名称2",
        download:13,
        look:22,
        url:"/static/zuopin1.png"
      },{
        money:"￥1030",
        name:"作品名称1",
        download:10,
        look:22,
        url:"/static/zuopin2.png"
      },],
      zuopin2:[{
        money:"￥3330",
        name:"作品名称4",
        download:140,
        look:242,
        url:"/static/zuopin1.png"
      },{
        money:"￥2200",
        name:"作品名称5",
        download:133,
        look:242,
        url:"/static/zuopin2.png"
      },{
        money:"￥1600",
        name:"作品名称6",
        download:140,
        look:2424,
        url:"/static/zuopin2.png"
      },]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.latest-top{
  width:1150px;
  margin:0 auto;
  position: relative;
}
.latest-top-router{position: absolute;right: 0;top:20px;}
.latest-top-title{font-size:30px;color:rgba(99,99,99,1);width:212px;border-bottom:1px solid rgba(181,181,181,0.22);margin:0 auto;}
.traditional-body{position: relative;height: 870px;margin:250px 0px 0px 0; }
.traditional-body-down{}
.traditional-body-up{position: absolute;top:-160px;left:50%;margin-left: -575px;}
.traditional-flex{display: flex;width: 1150px;justify-content: space-between;text-align: center;margin-bottom: 70px;}
.traditional-flex-box{
  position: relative;
  width:280px;
  height: 400px;
  overflow: hidden;
}
.traditional-flex-box-meng{
  position: absolute;
  width: 100%;
  background-color: rgba(0,0,0,0.3);
  height: 50px;
  line-height: 20px;
  padding:15px;
  box-sizing: border-box;
  bottom: 0;
  color:#fff;
  display: flex;
  justify-content: space-between;
  left:0;
  transition: all 1s;
}
.traditional-flex-box:hover .traditional-flex-box-meng{
  height: 100%;
  display: inline-block;
}
.traditional-flex-box:hover .yuan{
  margin-top:60%;
  display: inline-block;
  margin-bottom: 20px;
}
.traditional-flex-box:hover .meng-logo{
  display: none;
}
.traditional-flex-box:hover .meng-money{
  display: inline-block;
}
.meng-money{
  display: none;
  font-size: 18px;
  line-height: 30px;
}
.meng-logo{
  display: flex;
  transition: all 1s;
}
.traditional-flex-box-img{
  width:100%;
  height: 100%;
}
.meng-img{
  height: 12px;
  width: 15px;
  margin:5px 5px 0px 10px;
}
.yuan{
  height: 50px;
  width: 50px;border-radius:50%;
  padding:20px;display: none;
  line-height: 0px;
  box-sizing: border-box;
  background-color: rgba(255,255,255,0.5);
  transition: all 1s;
}
.yuan-nei{
  height: 10px;width:10px;background-color: #000;border-radius:50%;
}
</style>
