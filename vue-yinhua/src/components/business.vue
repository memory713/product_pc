<template>
  <div>
    <Header></Header>
    <Search></Search>
    <centerTop/>
    <div class="flex-center" style="background-color: #fff;">
      <div class="center-top-with">发布作品</div>
    </div>
    <centerList/>
    <div class="flex-center">
      <div class="business">
        <div class="money-top flex-between">
          <div  style="color:#998054;cursor:pointer;margin-top:10px;"><span  class="checkedRouter2"></span>交易记录</div>
          <div>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </div>
        <div class="business-tab--choose">
          <div :style="(buyType==1) ? 'color:#AF9161':'' " @click="buyGoods(1)">买入作品：{{buyChoose1.length}}</div>
          <div :style="(buyType==2) ? 'color:#AF9161':'' " @click="buyGoods(2)">卖出作品：{{buyChoose2.length}}</div>
          <div :style="(buyType==3) ? 'color:#AF9161':'' " @click="buyGoods(3)">使用中作品：{{buyChoose3.length}}</div>
        </div>
        <div class="business-tab">
          <div>
            <div v-for="(item,index) in buyChoose">
              <div class="business-type1-top" style="background-color:#EEEEEE;font-size:16px;">
                <div class="business-type1-top-child">订单号:{{item.danhao}}</div><div class="business-type1-top-child">格式</div><div class="business-type1-top-child">下单时间</div><div class="business-type1-top-child">完成时间</div><div class="business-type1-top-child">类型</div><div class="business-type1-top-child">总计</div><div class="business-type1-top-child">状态</div><div class="business-type1-top-child">操作</div>
              </div>
              <div class="business-type1-top">
                <div class="business-type1-top-child" style="display:flex;">
                  <img src="/static/people.png" style="height:80px;width:80px;border-radius:5px;">
                  <div style="margin-left:10px;width:50%;">
                    <div class="ellipsis">{{item.goodsName}}</div>
                    <div style="margin-top:13px;">共计 {{item.goodsNumber}} 件</div>
                    <div style="margin-top:13px;">实收：<span style="color:#E10040;">￥{{item.goodsPrice}}</span></div>
                  </div>
                </div>
                <div class="business-type1-top-child">
                  <div >尺寸:2000x200像素</div>
                  <div style="margin-top:13px;">分辨率：300bi</div>
                  <div style="margin-top:13px;">格式：PS</div>
                </div>
                <div class="business-type1-top-child" style="">
                  <div style="margin-top:25px;" v-html="item.beginTime"></div>
                  
                </div>
                <div class="business-type1-top-child">
                  <div style="margin-top:25px;" v-html="item.endTime"></div>
                </div>
                <div class="business-type1-top-child" style="margin-top:30px;">
                  {{item.buyTimeOwner}}
                </div>
                <div class="business-type1-top-child" style="margin-top:30px;color:#E10040;">￥{{item.goodsPrice}}</div>
                <div class="business-type1-top-child" style="margin-top:30px;">
                  <span style="color:#E10040;" v-show="(item.goodsStatusType==3)">{{item.goodsStatus}}</span>
                  <span style="color:#4DA2FD;" v-show="(item.goodsStatusType==2)">{{item.goodsStatus}}</span>
                  <span style="color:#998054;" v-show="(item.goodsStatusType==1)">{{item.goodsStatus}}</span>
                </div>
                <div class="business-type1-top-child" style="margin-top:30px;" @click="deleteGoods(index)">删除</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-center">
      <div class="flex-between"style="margin:20px 0;color:#8F8F8F;padding:10px;width:1000px;">
        <div></div>
        <div class="flex-between">
          <div style="margin:6px 10px;"></div>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage1"
            :page-size="5"
            layout="total, prev, pager, next"
            :total="buyChoose.length"
            >
          </el-pagination>
        </div>
        
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value1: '',
      buyType:1,
      buyChoose:[{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:2,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:2,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'等待付款',goodsStatusType:1,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'订单取消',goodsStatusType:3,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:1,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},],
      buyChoose1:[{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:2,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:2,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'等待付款',goodsStatusType:1,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'订单取消',goodsStatusType:3,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:1,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},],
      buyChoose2:[{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:2,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:2,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'等待付款',goodsStatusType:1,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'订单取消',goodsStatusType:3,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:1,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:1,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:2,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'等待付款',goodsStatusType:1,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'订单取消',goodsStatusType:3,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:2,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},],
      buyChoose3:[{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'等待付款',goodsStatusType:1,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'订单取消',goodsStatusType:3,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},{danhao:15121121212,goodsName:"买入的作品",goodsNumber:4,goodsPrice:300,goodsStatus:'交易成功',goodsStatusType:2,beginTime:"2018-10-21 </br> 10:22",endTime:'2018-11-21 </br> 10:22',buyTimeOwner:'一年版权',},],
      currentPage1: 5,
    }
  },
  methods:{
    buyGoods(a){
      if(a ==1){
        this.buyChoose = this.buyChoose1
        this.buyType=1
      }else if(a ==2){
        this.buyChoose = this.buyChoose2
        this.buyType=2
      }else if(a ==3){
        this.buyChoose = this.buyChoose3
        this.buyType=3
      }

    },
    deleteGoods(index){
      this.buyChoose.splice(index,1)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-top-with{width:150px;height: 40px;line-height: 40px;color:#978E7C;border:1px solid #978E7C;border-radius:5px;margin-top:20px;}
.business{width: 1000px;background-color: #fff;box-shadow:0px 0px 10px #D5D5D5;margin-top:30px;padding:10px;}
.money-top{border-bottom: 1px solid #dcdfe6;padding:10px;}
.checkedRouter2{width:25px;height: 25px;display: inline-block;background: url(../assets/sun2.png) no-repeat;margin:-8px 10px;}
/deep/ .el-input__inner{height: 30px;line-height: 30px;border-radius: 20px;}
/deep/ .el-input__icon{line-height: 30px;}
.business-tab--choose{display: flex;padding:20px 10px;color:#444444;cursor: pointer;}
.business-tab--choose div{width: 20%;text-align: left;}
.business-type1-top{display: flex;text-align: center;padding:20px 10px;}
.business-type1-top .business-type1-top-child:nth-child(1){width:25%; text-align: left;}
.business-type1-top .business-type1-top-child:nth-child(2){width:17%; text-align: left;}
.business-type1-top .business-type1-top-child:nth-child(3){width:12%;text-align:left;}
.business-type1-top .business-type1-top-child:nth-child(4){width:12%;text-align:left;}
.business-type1-top .business-type1-top-child:nth-child(5){width:6%;}
.business-type1-top .business-type1-top-child:nth-child(6){width:9%;}
.business-type1-top .business-type1-top-child:nth-child(7){width:9%;}
.business-type1-top .business-type1-top-child:nth-child(8){width:9%;cursor: pointer;}
</style>
