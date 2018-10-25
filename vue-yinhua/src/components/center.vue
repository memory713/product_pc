<template>
  <div>
    <Header></Header>
    <Search></Search>
    <centerTop/>
    <div class="flex-center" style="background-color: #fff;">
      <div class="center-top-with">发布作品</div>
    </div>
    <centerList/>
    <!-- part1 -->
    <div class="flex-center" style="margin-top:50px;">
      <div class="centerPart1 flex-between">
        <div class="centerPart1-left">
          <div class="centerPart1-left-top flex-between">
            <div style="color:#A4885A;border-bottom:1px solid #A4885A;">余额</div>
            <div>设置支付密码</div>
          </div>
          <div style="color:#DD172B;font-size:18px;height:150px;line-height:150px;"> ￥<span style="font-size:40px;">3000</span></div>
          <div class="centerPart1-left-bottom flex-between">
            <div >提现</div>
            <div style="color:#A4885A;border:1px solid #A4885A;">充值</div>
          </div>
        </div>
        <div class="centerPart1-right" >
          <div class="centerPart1-left-top flex-between" style="color:#A4885A;">
            <div style="border-bottom:1px solid #A4885A;">留言</div>
            <div >MORE</div>
          </div>
          <div class="flex-between" style="padding:10px 0;border-bottom:1px solid #D4D4D4;" v-for="item in message">
            <div class="centerPart1-right-message" >
              <img :src="item.headUrl" class="centerPart1-right-message-headurl">
              <div class="centerPart1-right-message-details">
                <div> <span style="font-size:16px;display:inline-block;margin-right:5px;">{{item.name}}</span> <span style="color:#D4D4D4;">{{item.time}}</span></div>
                <div class="ellipsis" style="margin-top:10px;">{{item.word}}</div>
              </div>
            </div>
            <div class="centerPart1-right-icon">
              <img src="../assets/message.png">
            </div>
          </div>
        </div>
      </div>
    </div>
<!-- part2 -->
    <div class="flex-center" style="margin-top:50px;">
      <div class="centerPart2">
        <div class="centerPart2-top flex-between">
          <div style="display:flex;cursor:pointer;">
            <div style="padding-bottom:10px;" @click="tabChoose(1)" :class="(chooseTab==1) ? 'tabStyle' : ''">作品</div><span class="centerPart2-top-point"></span><div @click="tabChoose(2)" :class="(chooseTab==2) ? 'tabStyle' : ''">作品集</div><span class="centerPart2-top-point"></span><div @click="tabChoose(3)" :class="(chooseTab==3) ? 'tabStyle' : ''">使用中作品</div>
          </div>
          <div style="color:#A5895B;cursor:pointer;">MORE</div>
        </div>
        <!-- v-bind:style="{backgroundImage:'url(' + item.videopic + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}" -->
        <div class="centerPart2-tab">
          <div class="centerPart2-tab-box" v-for="item in part1">
            <div class="centerPart2-tab-box-img" v-bind:style="{backgroundImage:'url(' + item.url + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}"></div>
            <div class="flex-between" style="margin-top:10px;">
              <div class="ellipsis">{{item.name}}</div>
              <div  style="display: flex;"><img src="../assets/download2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{item.download}}<img src="../assets/look2.png" style="height: 12px;width: 15px;margin:2px 5px 0px 10px;">{{item.look}}</div>
            </div>
          </div>
        </div>

      </div>    
    </div>
    <!-- part3 -->
    <div class="flex-center" style="margin-top:50px;">
      <div class="centerPart3 flex-between">
        <div class="centerPart3-left">
          <div class="centerPart1-left-top flex-between">
            <div style="color:#A4885A;border-bottom:1px solid #A4885A;">交易记录</div>
            <div style="color:#A4885A;cursor:pointer;">MORE</div>
          </div>
          <div  class="centerPart3-shai"><div @click="part3Tab(1)" :class="(chooseTime==1) ? 'color-change' : ''">买入作品：{{choosePart1.length}}</div><div @click="part3Tab(2)" :class="(chooseTime==2) ? 'color-change' : ''">卖出作品：{{choosePart2.length}}</div><div @click="part3Tab(3)" :class="(chooseTime==3) ? 'color-change' : ''">到期提醒：{{choosePart3.length}}</div><div @click="part3Tab(4)" :class="(chooseTime==4) ? 'color-change' : ''">过期提醒：{{choosePart4.length}}</div></div>
          <div class="centerPart3-goods-all">
            <div class="centerPart3-goods" v-for="item in choosePart1">
              <div  class="centerPart3-goods-img" v-bind:style="{backgroundImage:'url(' + item.imgUrl + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}"></div>
              <div class="centerPart3-goods-part" style="width:30%;"><div class="ellipsis" style="font-size:16px;color:#000;">{{item.name}}</div><div style="margin-top:15px;">{{item.time}}</div></div>
              <div class="centerPart3-goods-part"><div>尺寸：800*800像素</div><div>分辨率：300bi</div><div>格式：PS</div></div>
              <div class="centerPart3-goods-part" style="line-height:50px;font-size:18px;color:#E35361;">￥{{item.price}}</div>
              <div class="centerPart3-goods-part"style="padding:0 5px;font-size:16px;line-height:50px;color:#A5895B;">{{item.type}}</div>
            </div>
          </div>
        </div>
        <div class="centerPart3-right">
          <div class="centerPart1-left-top flex-between">
            <div style="color:#A4885A;border-bottom:1px solid #A4885A;">购物车</div>
            <div style="color:#A4885A;cursor:pointer;">MORE</div>
          </div>
          <div class="flex-between" style="padding:10px 0;">
            <div style="display:flex;">
              <span class="centerPart3-right-check" @click="checkedAllClick"><img src="../assets/red-right.png" class="centerPart3-right-icon" v-show="checkedAll"></span>
              <div>全部商品：{{gouwuche.length}}</div>
            </div>
            <div style="height:20px;width:20px;color:#fff;">333</div>
          </div>
          <div class="centerPart3-goods-all">
            <div class="centerPart3-goods" v-for="(item,index) in gouwuche" >
              <span class="centerPart3-right-check" style="margin-top:7%;" @click="checkGouwuche(index)"><img src="../assets/red-right.png" class="centerPart3-right-icon" v-show="item.checked"></span>
              <div v-bind:style="{backgroundImage:'url(' + item.url + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center'}" class="centerPart3-right-check-img"></div>
              <div style="width:45%;text-align:left;">
                <div class="ellipsis">{{item.name}}</div>
                <div style="color:#EB0027;margin-top:20px;">￥{{item.price}}</div>
              </div>
              <div class="centerPart3-right-number" >
                <div class="centerPart3-right-number-box" @click="jianNumber(index)">-</div>
                <div class="centerPart3-right-number-box" style="width:25px;cursor:auto;">{{item.number}}</div>
                <div class="centerPart3-right-number-box" style="border:none;" @click="addNumber(index)">+</div>
              </div>
            </div>
          </div>
          <div class="centerPart3-right-buy">结算</div>
          
  
        </div>
      </div>
    </div>


    <Footer2></Footer2>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message:[{headUrl:'/static/altsdemo4.png',name:"hi的罚款",time:"2018-10-23  10:22",word:'牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼',},{headUrl:'/static/altsdemo4.png',name:"hi的罚款",time:"2018-10-23  10:22",word:'牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼',},{headUrl:'/static/altsdemo4.png',name:"hi的罚款",time:"2018-10-23  10:22",word:'牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼牛逼',},],
      part1:[{name:"作品",download:22,look:22,url:"/static/altsdemo1.png"},{name:"作品",download:22,look:22,url:"/static/altsdemo1.png"},{name:"作品",download:22,look:22,url:"/static/altsdemo1.png"},{name:"作品",download:22,look:22,url:"/static/altsdemo1.png"},{name:"作品",download:22,look:22,url:"/static/altsdemo1.png"},{name:"作品",download:22,look:22,url:"/static/altsdemo1.png"},{name:"作品",download:22,look:22,url:"/static/altsdemo1.png"},{name:"作品",download:22,look:22,url:"/static/altsdemo1.png"},{name:"作品",download:22,look:22,url:"/static/altsdemo1.png"},{name:"作品",download:22,look:22,url:"/static/altsdemo1.png"},],
      part2:[{name:"作品集",download:22,look:22,url:"/static/altsdemo2.png"},{name:"作品集",download:22,look:22,url:"/static/altsdemo2.png"},{name:"作品集",download:22,look:22,url:"/static/altsdemo2.png"},{name:"作品集",download:22,look:22,url:"/static/altsdemo2.png"},{name:"作品集",download:22,look:22,url:"/static/altsdemo2.png"},{name:"作品集",download:22,look:22,url:"/static/altsdemo2.png"},{name:"作品集",download:22,look:22,url:"/static/altsdemo2.png"},{name:"作品集",download:22,look:22,url:"/static/altsdemo2.png"},{name:"作品集",download:22,look:22,url:"/static/altsdemo2.png"},{name:"作品",download:22,look:22,url:"/static/altsdemo2.png"},],
      part3:[{name:"使用中的作品",download:22,look:22,url:"/static/altsdemo3.png"},{name:"使用中的作品",download:22,look:22,url:"/static/altsdemo3.png"},{name:"使用中的作品",download:22,look:22,url:"/static/altsdemo3.png"},{name:"使用中的作品",download:22,look:22,url:"/static/altsdemo3.png"},{name:"使用中的作品",download:22,look:22,url:"/static/altsdemo3.png"},{name:"使用中的作品",download:22,look:22,url:"/static/altsdemo3.png"},{name:"使用中的作品",download:22,look:22,url:"/static/altsdemo3.png"},{name:"使用中的作品",download:22,look:22,url:"/static/altsdemo3.png"},{name:"使用中的作品",download:22,look:22,url:"/static/altsdemo3.png"},{name:"作品",download:22,look:22,url:"/static/altsdemo3.png"},],
      chooseTab:1,
      chooseTime:1,
      choosePart1:[{imgUrl:'/static/styledemo6.png',name:"买入作品",time:'2018-05-30 10:25',price:'300',type:'交易成功'},{imgUrl:'/static/styledemo6.png',name:"买入作品",time:'2018-05-30 10:25',price:'300',type:'交易成功'},{imgUrl:'/static/styledemo6.png',name:"买入作品",time:'2018-05-30 10:25',price:'300',type:'交易成功'},{imgUrl:'/static/styledemo6.png',name:"买入作品",time:'2018-05-30 10:25',price:'300',type:'交易成功'},{imgUrl:'/static/styledemo6.png',name:"买入作品",time:'2018-05-30 10:25',price:'300',type:'交易成功'},{imgUrl:'/static/styledemo6.png',name:"买入作品",time:'2018-05-30 10:25',price:'300',type:'交易成功'},],
      choosePart2:[{imgUrl:'/static/styledemo1.png',name:"卖出作品",time:'2018-05-30 10:25',price:'300',type:'交易成功'},{imgUrl:'/static/styledemo1.png',name:"卖出作品",time:'2018-05-30 10:25',price:'300',type:'交易成功'},{imgUrl:'/static/styledemo1.png',name:"卖出作品",time:'2018-05-30 10:25',price:'300',type:'交易成功'},{imgUrl:'/static/styledemo1.png',name:"卖出作品",time:'2018-05-30 10:25',price:'300',type:'交易成功'},{imgUrl:'/static/styledemo1.png',name:"卖出作品",time:'2018-05-30 10:25',price:'300',type:'交易成功'},{imgUrl:'/static/styledemo1.png',name:"卖出作品",time:'2018-05-30 10:25',price:'300',type:'交易成功'},],
      choosePart3:[{imgUrl:'/static/styledemo9.png',name:"到期提醒",time:'2018-05-30 10:25',price:'300',type:'即将到期'},{imgUrl:'/static/styledemo9.png',name:"到期提醒",time:'2018-05-30 10:25',price:'300',type:'即将到期'},{imgUrl:'/static/styledemo9.png',name:"到期提醒",time:'2018-05-30 10:25',price:'300',type:'即将到期'},{imgUrl:'/static/styledemo9.png',name:"到期提醒",time:'2018-05-30 10:25',price:'300',type:'即将到期'},{imgUrl:'/static/styledemo9.png',name:"到期提醒",time:'2018-05-30 10:25',price:'300',type:'即将到期'},{imgUrl:'/static/styledemo9.png',name:"到期提醒",time:'2018-05-30 10:25',price:'300',type:'即将到期'},],
      choosePart4:[{imgUrl:'/static/styledemo6.png',name:"过期提醒",time:'2018-05-30 10:25',price:'300',type:'已过期'},{imgUrl:'/static/styledemo6.png',name:"过期提醒",time:'2018-05-30 10:25',price:'300',type:'已过期'},{imgUrl:'/static/styledemo6.png',name:"过期提醒",time:'2018-05-30 10:25',price:'300',type:'已过期'},{imgUrl:'/static/styledemo6.png',name:"过期提醒",time:'2018-05-30 10:25',price:'300',type:'已过期'},{imgUrl:'/static/styledemo6.png',name:"过期提醒",time:'2018-05-30 10:25',price:'300',type:'已过期'},{imgUrl:'/static/styledemo6.png',name:"过期提醒",time:'2018-05-30 10:25',price:'300',type:'已过期'},],
      gouwuche:[{price:300,name:'蝴蝶花饭卡上俯瞰迪斯科解放塞夫',number:2,id:1,url:"/static/styledemo6.png",checked:false},{price:300,name:'蝴蝶花饭卡上俯瞰迪斯科解放塞夫',number:2,id:2,url:"/static/styledemo6.png",checked:false},{price:300,name:'蝴蝶花饭卡上俯瞰迪斯科解放塞夫',number:2,id:3,url:"/static/styledemo6.png",checked:false},{price:300,name:'蝴蝶花饭卡上俯瞰迪斯科解放塞夫',number:2,id:4,url:"/static/styledemo6.png",checked:false},{price:300,name:'蝴蝶花饭卡上俯瞰迪斯科解放塞夫',number:2,id:5,url:"/static/styledemo6.png",checked:false},],
      gouwucheTrue:[],
      checkedAll:false,
    }
  },
  methods:{
    tabChoose(a){
      console.log(a)
      this.chooseTab = a
      if(a ==1){
        this.part1=this.part1
      }else if(a == 2){
        this.part1=this.part2
      }else if(a == 3){
        this.part1=this.part3
      }
    },
    part3Tab(a){
      this.chooseTime = a
      if(a ==1){
        this.choosePart1=this.choosePart1
      }else if(a == 2){
        this.choosePart1=this.choosePart2
      }else if(a == 3){
        this.choosePart1=this.choosePart3
      }else if(a == 4){
        this.choosePart1=this.choosePart4
      }
    },
    // 点击多选框
    checkGouwuche(index){
      console.log(index)
      if(this.gouwuche[index].checked){
        this.gouwuche[index].checked = false
        // splice
        for (var i = 0; i < this.gouwucheTrue.length; i++) {
          if(this.gouwucheTrue[i].id == this.gouwuche[index].id ){
            this.gouwucheTrue.splice(i,1)
          }
        }
      }else{
        this.gouwuche[index].checked = true
        // push
        this.gouwucheTrue.push(this.gouwuche[index])

      }
     console.log(this.gouwucheTrue) 
     console.log("长度为："+this.gouwucheTrue.length) 

    },
    // 全选
    checkedAllClick(){
      if(this.checkedAll){
        this.gouwucheTrue = []
        this.checkedAll = false
        for (var i = 0; i < this.gouwuche.length; i++) {
          this.gouwuche[i].checked = false
        }
      }else{
        this.gouwucheTrue = this.gouwuche
        this.checkedAll = true
        for (var i = 0; i < this.gouwuche.length; i++) {
          this.gouwuche[i].checked = true
        }
      }
    },
    // 减
    jianNumber(index){
      
      if(this.gouwuche[index].number <= 0){
        this.gouwuche[index].number = 0
        this.$message.error('已经是最少啦');
      }else{
        this.gouwuche[index].number --;
      }
    },
    // 加
    addNumber(index){
      
      if(this.gouwuche[index].number >= 100){
        this.gouwuche[index].number = 100
        this.$message.error('已经是最多啦');
      }else{
        this.gouwuche[index].number ++;
      }
    },


  }
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ellipsis{white-space: nowrap;text-overflow:ellipsis;overflow:hidden;}
.center-top-with{width:150px;height: 40px;line-height: 40px;color:#978E7C;border:1px solid #978E7C;border-radius:5px;margin-top:20px;}
.centerPart1,.centerPart3{width:1000px;color: #686868;font-size: 14px;}
.centerPart1-left,.centerPart3-right{background-color: #fff;width:350px;box-shadow:0px 0px 10px #D5D5D5;padding:20px;}
.centerPart1-right,.centerPart3-left{background-color: #fff;width:600px;box-shadow:0px 0px 10px #D5D5D5;padding:20px;}

.centerPart1-left-top{border-bottom: 1px solid #D4D4D4;}
.centerPart1-left-top div{padding-bottom: 10px;}
.centerPart1-left-bottom{width:80%;margin-left: 10%;margin-bottom: 20px;}
.centerPart1-left-bottom div{height: 40px;width: 80px;border-radius: 5px;border:1px solid #C0C0C0;font-size: 18px;line-height: 40px;}
.centerPart1-right-message{display: flex;}
.centerPart1-right-message-headurl{width:50px;height: 50px;border-radius: 50%;}
.centerPart1-right-message-details{width: 400px;text-align: left;margin-left: 10px;}
.centerPart2{width: 1000px;background-color: #fff;box-shadow:0px 0px 10px #D5D5D5;padding:20px;}
.centerPart2-top{border-bottom: 1px solid #D4D4D4;}
.centerPart2-top-point{width: 5px;height: 5px;background-color: #878787;border-radius: 50%;display: inline-block;margin:8px 10px 0px 10px;}
.centerPart2-tab{padding:20px 0;}
.centerPart2-tab-box{padding:10px;width:192px;display: inline-block;}
.centerPart2-tab-box-img{height: 172px;width:172px;background-color: #878787;}
.tabStyle{border-bottom:1px solid #A5895B;}
.centerPart3-shai{display:flex;padding:10px 0;cursor: pointer;}
.centerPart3-shai div{width: 20%;text-align: left;}
.centerPart3-goods-img,.centerPart3-right-check-img{height: 56px;width:56px;border-radius: 5px;}
.centerPart3-goods-part{text-align: left;}
.centerPart3-goods{display:flex;border-bottom:1px solid #D4D4D4;padding:10px 0;justify-content:space-around;}
.centerPart3-goods-all{max-height: 320px;overflow-y: scroll;padding-right: 20px;}
 /*滚动条样式*/
.centerPart3-goods-all::-webkit-scrollbar {/*滚动条整体样式*/width: 2px;     /*高宽分别对应横竖滚动条的尺寸*/height: 2px;}
.centerPart3-goods-all::-webkit-scrollbar-thumb {/*滚动条里面小方块*/border-radius: 5px;background:#A5895B;}
.centerPart3-goods-all::-webkit-scrollbar-track {/*滚动条里面轨道*/background: #D4D4D4;}
.color-change{color:#A5895B;}
.centerPart3-right-check{height: 12px;width: 12px;border:1px solid #D4D4D4;border-radius: 5px;margin-right: 10px;margin-top:3px;}
.centerPart3-right-number{width:66px;display:flex;border:1px solid #868686;border-radius:5px;height: 22px;margin-top:35px;}
.centerPart3-right-number-box{width:20px;height: 20px;border-right: 1px solid #D4D4D4;cursor: pointer;}
.centerPart3-right-icon{width:80%;height:80%;margin-left:10%;margin-top:10%;}
.centerPart3-right-buy{float: right;background:linear-gradient(-90deg,rgba(167,155,119,1),rgba(194,176,157,1));border-radius:3px;color:#fff;padding:5px 10px;margin-top:20px;cursor: pointer;}
</style>
