<template>
  <div>
    <Header></Header>
    <Search></Search>
    <div class="style-bgi"></div>
    <div class="fashon-top flex-center">
      <div style="width:1000px;margin:20px 0" class="flex-between">
        <div ></div>
        <div class="designer-body-top-search">
          <input type="" name="" placeholder="搜索">
          <img src="../assets/search2.png">
        </div>
      </div>
    </div>
    <div class="flex-center">
      <div style="display:flex;width:300px;">
        <div class="fashonlist-tab" :class="(tabId == 1) ? 'fashonlist-tab-checked' : '' " @click="tabChange(1)">
          <span></span>
          <div>时尚资讯</div>
        </div>
        <div class="fashonlist-tab" :class="(tabId == 2) ? 'fashonlist-tab-checked' : '' " @click="tabChange(2)">
          <span></span>
          <div>流行趋势</div>
        </div>
      </div>
    </div>

      <div class="flex-center" >
        <div style="width:1000px;margin:20px 0;display:flex;position:relative;">
          <div class="fashon-time">
            <div style="position:relative;width:100%;">
              <el-date-picker
                v-model="value5"
                type="year"
                style="width:110px;"
                placeholder="选择年">
              </el-date-picker>
              <ul style="position:absolute;width:100%;right:-5px;">
                <li class="flex-between fashon-time-li"  v-for="(item,index) in time" @click="choose(index)">
                  <span :class="{'fashon-word-color' : item.checked, '': item.checked }">{{item.time}}</span>
                  <span class="fashon-time-point"  :class="{'fashon-time-point1' : item.checked, 'fashon-time-point': item.checked }"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex-between" style="width:100%;">
            <div class="fashonList-top-list" v-for="item in 3" @click="fashonDetails()">
              <img src="/static/fashonlist1.jpg">
              <div class="fashonList-top-list-word" >jkasjfkjdkasj</div>
            </div>
          </div>

        </div>
      </div>

      <div class="flex-center" style="position:relative;">
        <img src="../assets/gkyh-big.png" style="position:absolute;left:0;">
        <div style="width:1000px;">
          <div class="swiper-container" style="height:350px;">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in swiper">
                <div class="fashon-swipe">
                  <img :src="item.url">
                  <div class="fashon-swipe-meng">
                    <div style="line-height:50px;font-size:18px;font-style:italic;">新闻标题</div>
                    <div style="line-height:20px;">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <img src="../assets/line3.png" style="width:100%;margin:50px 0;" >
      <div style="width:100%;" class="flex-center" v-for="item in 5">
        <div class="" style="width:1000px;display:flex;margin-bottom:50px;"  >
          <img src="/static/fashonlist4.png" style="width:250px;height:200px;margin-right:30px;">
          <div style="height:200px;border-bottom:1px solid #959595;width:700px;color:#959595;">
            <div style="color:#343434;font-size:18px;line-height:50px;text-align:left;font-weight:600;">卡拉疯狂的斯拉夫卡是 </div>
            <div style="height:100px;text-align:left;margin-top:20px;">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
            <div class="flex-between" style="height:30px;margin-top:">
              <div>2018-05-12</div>
              <div style="cursor:pointer;">MORE</div>
            </div>
          </div>
        </div>
      </div>
      <el-pagination
      :page-size="10"
      :pager-count="5"
      style="margin:50px 0;"
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
    <footer2></footer2>

  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  data () {
    return {
      swiper: [{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news3.png",title:"标题",neirong:'内容内容内容内容内容内容'},{url:"/static/news2.png",title:"标题",neirong:'内容内容内容内容内容内容'},],
      time:[{time:2018,checked:false},{time:2017,checked:false},{time:2016,checked:false},{time:2015,checked:false},{time:2014,checked:true},],
      value5: '',
      tabId:1,
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView : 3,
      slidesPerGroup : 3,
      spaceBetween : 50,
    })

    console.log(this.$route.query.id)
    this.tabId = this.$route.query.id        
  },
  watch: {
    value5: function () {
      var timeSplit = Number(String(this.value5).split(" ")[3])
      if(String(this.value5).length < 5){
        timeSplit = 2018
      }
      console.log(this.value5)
      console.log(timeSplit)
      for (var i = 0; i < this.time.length; i++) {
        this.time[i].checked = false
        this.time[i].time = timeSplit - i
        this.time[0].checked = true
      }
    }
  },
  methods:{
    choose(index){
      console.log(index)
      for (var i = 0; i < this.time.length; i++) {
        this.time[i].checked = false
        this.time[index].checked = true
      }
      
    },
    fashonDetails(id){
      console.log(id)
      let routeData = this.$router.resolve({ path: '/fashonDetais', query: { id: id } });
      window.open(routeData.href, '_blank');
    },
    tabChange(a){
      this.tabId = a
    },
  }
}
</script>

<style>
.style-bgi{
  width: 100%;
  height: 100px;
  margin-top:30px;
  background: url(../assets/stylebackground.png) 100% 100%;
}
.fashon-time{
  position: absolute;
  top:50px;
  left:-120px;
  width:55px;
  height: 290px;
  border-right:1px solid #AFAFAF;
  color:#AFAFAF;
  z-index: 99;
}
.fashon-time-li{height: 50px;line-height: 50px;cursor: pointer;}
.fashon-time-point{height: 10px;width:10px;border-radius: 50%;background-color: #AFAFAF;display: inline-block;margin-top:20px;}
.fashon-time-point1{box-shadow: 0px 0px 20px #000; background-color: #000;height: 10px;width:10px;}
.fashon-word-color{color:#000;}

.flex-between{display: flex;justify-content: space-between;}
.flex-center{display: flex;justify-content: center;}
.fashon-top-word{font-size: 25px;color:#606060;line-height: 35px;text-align: left;font-weight: 400;}
.fashon-top-word2{font-size: 20px;color:#606060;line-height: 35px;text-align: right;cursor: pointer;}
.fashon-body-left{width:650px;height: 100%;}
.fashon-body-left img{height: 100%;width: 100%;}
.fashon-body-middle{width:50px;position: relative;}
.xiaosanjiao{position: absolute;width:0;
    height:0;
    border-width:20px 20px 20px 0;
    border-style:solid;
    border-color:transparent rgba(0,0,0,0.1) transparent transparent;/*透明 灰 透明 透明 */
    right:0;
    top:50px;
  }
.fashon-body-right{width:300px;background-color: rgba(0,0,0,0.1);padding:20px;text-align: left;color:#888888;}
.fashon-swipe{position: relative;overflow: hidden;}
.fashon-swipe-meng{position: absolute;height: 100%;width: 100%;background-color: rgba(255,255,255,0.5);top:250px;left: 0;transition: all 1s;padding:0 50px 50px 50px;}
.fashon-swipe img{
  width: 300px;
  height: 300px;
}
.fashon-swipe:hover .fashon-swipe-meng{
  top:0;
  padding:50px;
}
.designer-body-top-search{
  width: 200px;
  border-radius: 20px;
  border: 1px solid rgba(106,106,106,0.5);
  height: 30px;
  position: relative;
}
.designer-body-top-search input{
  position: absolute;
  top: 15%;
  left: 10px;
  height: 70%;
  width: 70%;
}
.designer-body-top-search img{
    position: absolute;
    top: 7px;
    right: 10px;
    height: 15px;
    width: 15px;
}
.fashonlist-tab{width:50%;color:#858585;display: flex;font-size: 20px;text-align: center;justify-content: center;cursor: pointer;}
.fashonlist-tab span{display: inline-block;width: 12px;height: 12px;border-radius: 50%;border:1px solid #858585;margin-right: 20px;margin-top:7px;}
.fashonlist-tab div{text-align: center;}
.fashonlist-tab-checked{color:#AF9161;text-decoration: line-through;}
.fashonlist-tab-checked span{border:1px solid #AF9161;}
.fashonList-top-list{position: relative;width: 300px;height: 300px;overflow: hidden;cursor: pointer;}
.fashonList-top-list-word{position:absolute;bottom:0;background-color:rgba(0,0,0,0.8);width:100%;line-height:50px;color:#fff;}
</style>
