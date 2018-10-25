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
      <div class="money">
        <div class="money-top flex-between">
          <div style="display:flex;cursor:pointer;margin-top:10px;">
            <div :style="(part ==1) ? 'color:#998054' : ''" @click="(part=1)"><span :class="(part ==1) ? 'checkedRouter2' : 'centerlist-li-span'"></span>财务明细</div>
            <div :style="(part ==2) ? 'color:#998054' : ''" @click="(part=2)"><span :class="(part ==2) ? 'checkedRouter2' : 'centerlist-li-span'"></span>交易记录</div>
          </div>
          <div>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
        </div>
        <div v-show="(part == 1)">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%;margin-top:30px;">
            <el-table-column
              prop="dingdan"
              label="订单信息"
              >
            </el-table-column>
            <el-table-column
              prop="name"
              label="商品信息"
              >
            </el-table-column>
            <el-table-column
              prop="date"
              label="下单日期">
            </el-table-column>
            <el-table-column
              prop="date2"
              label="成交日期">
            </el-table-column>
            <el-table-column
              prop="num"
              label="数量">
            </el-table-column>
            <el-table-column
              prop="price"
              label="成交金额">
            </el-table-column>
          </el-table>
          <div class="flex-between"style="margin:20px 0;color:#8F8F8F;padding:10px;">
            <div style="display:flex;">
              <div style="margin-right:30px;">支出：￥3000</div>
              <div style="margin-right:30px;">收入：￥3000</div>
              <div>余额：￥3000</div>
            </div>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="5"
              layout="total, prev, pager, next"
              :total="tableData.length"
              class="money-part1-bottom"
              >
            </el-pagination>
          </div>
          
        </div>
        <div v-show="(part == 2)">
          <el-table
            :data="tableData2"
            stripe
            style="width: 100%;margin-top:30px;">
            <el-table-column
              prop="dingdan"
              label="提现订单">
            </el-table-column>
            <el-table-column
              prop="date"
              label="开始时间">
            </el-table-column>
            <el-table-column
              prop="date2"
              label="结束时间">
            </el-table-column>
            <el-table-column
              prop="name"
              label="到账账号">
            </el-table-column>
            <el-table-column
              width="100"
              label="金额">
              <template slot-scope="scope">
                 <span style="color: red">{{ scope.row.price }}</span>
              </template>
            </el-table-column>
            <el-table-column
              width="100"
              label="状态">
              <template slot-scope="scope">
                    <span v-if="scope.row.typeChoose=== 2" style="color:#4DA2FD;">成功到账</span>
                    <span v-else-if="scope.row.typeChoose=== 1" style="color:#998054;">发起提现</span>
                    <span v-else style="color: #E35563;">提现失败</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="delete"
              width="80"
              label="操作">
              <template slot-scope="scope">
                <span  style="cursor:pointer;" @click="deleteLine(scope.$index)">删除</span>
              </template>
            </el-table-column>
          </el-table>
          <div class="flex-between"style="margin:20px 0;color:#8F8F8F;padding:10px;">
            <div style="display:flex;">
              <div style="margin-right:30px;">支出：￥3000</div>
              <div style="margin-right:30px;">收入：￥3000</div>
              <div>余额：￥3000</div>
            </div>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="5"
              layout="total, prev, pager, next"
              :total="tableData2.length"
              class="money-part1-bottom"
              >
            </el-pagination>
        </div>
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
      part:2,
      value1:'',
      tableData:[{dingdan:"4568455143212315",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',num:4,price:'-￥200',name:'易安华印花印花易安华印花印花易安华印花印花易安'},{dingdan:"4568455143212315",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',num:4,price:'-￥200',name:'易安华印花印花易安华印花印花易安华印花印花易安'},{dingdan:"4568455143212315",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',num:4,price:'-￥200',name:'易安华印花印花易安华印花印花易安华印花印花易安'},{dingdan:"4568455143212315",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',num:4,price:'-￥200',name:'易安华印花印花易安华印花印花易安华印花印花易安'},{dingdan:"4568455143212315",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',num:4,price:'-￥200',name:'易安华印花印花易安华印花印花易安华印花印花易安'},{dingdan:"4568455143212315",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',num:4,price:'-￥200',name:'易安华印花印花易安华印花印花易安华印花印花易安'},{dingdan:"4568455143212315",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',num:4,price:'-￥200',name:'易安华印花印花易安华印花印花易安华印花印花易安'},{dingdan:"4568455143212315",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',num:4,price:'-￥200',name:'易安华印花印花易安华印花印花易安华印花印花易安'},{dingdan:"4568455143212315",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',num:4,price:'-￥200',name:'易安华印花印花易安华印花印花易安华印花印花易安'},{dingdan:"4568455143212315",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',num:4,price:'-￥200',name:'易安华印花印花易安华印花印花易安华印花印花易安'},{dingdan:"4568455143212315",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',num:4,price:'-￥200',name:'易安华印花印花易安华印花印花易安华印花印花易安'},{dingdan:"4568455143212315",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',num:4,price:'-￥200',name:'易安华印花印花易安华印花印花易安华印花印花易安'},],
      currentPage1: 5,
      tableData2:[{dingdan:"45684551",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',type:"成功到账",typeChoose:2,price:'￥2000',name:'0235115155151523658955',delete:"删除"},{dingdan:"45684551",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',type:"提现失败",typeChoose:3,price:'￥2000',name:'0235115155151523658955',delete:"删除"},{dingdan:"45684551",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',type:"发起提现",typeChoose:1,price:'￥2000',name:'0235115155151523658955',delete:"删除"},{dingdan:"45684551",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',type:"成功到账",typeChoose:2,price:'￥2000',name:'0235115155151523658955',delete:"删除"},{dingdan:"45684551",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',type:"提现失败",typeChoose:3,price:'￥2000',name:'0235115155151523658955',delete:"删除"},{dingdan:"45684551",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',type:"发起提现",typeChoose:1,price:'￥2000',name:'0235115155151523658955',delete:"删除"},{dingdan:"45684551",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',type:"成功到账",typeChoose:2,price:'￥2000',name:'0235115155151523658955',delete:"删除"},{dingdan:"45684551",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',type:"提现失败",typeChoose:3,price:'￥2000',name:'0235115155151523658955',delete:"删除"},{dingdan:"45684551",date:'2016-05-02 10:22:22',date2:'2016-06-02 10:22:22',type:"发起提现",typeChoose:1,price:'￥2000',name:'0235115155151523658955',delete:"删除"},]
    }
  },
  watch: {
    value1: function () {
      console.log(this.value1)
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    deleteLine(index){
      console.log(index)
      this.tableData2.splice(index,1)
    }

  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center-top-with{width:150px;height: 40px;line-height: 40px;color:#978E7C;border:1px solid #978E7C;border-radius:5px;margin-top:20px;}
.ellipsis{white-space: nowrap;text-overflow:ellipsis;overflow:hidden;}
.money{width: 1000px;background-color: #fff;box-shadow:0px 0px 10px #D5D5D5;margin-top:30px;padding:10px;}
.centerlist-li-span{width:5px;height: 5px;border-radius: 50%;display: inline-block;background-color: #909090;margin:2px 20px;}
.checkedRouter2{width:25px;height: 25px;display: inline-block;background: url(../assets/sun2.png) no-repeat;margin:-8px 10px;}
.money-top{border-bottom: 1px solid #dcdfe6;padding:10px;}
/deep/ .el-input__inner{height: 30px;line-height: 30px;border-radius: 20px;}
/deep/ .el-input__icon{line-height: 30px;}
/deep/ .el-table td, .el-table th.is-leaf{text-align: center;}
/deep/ .el-table th, .el-table tr{background-color: #FAFAFA;text-align: center;}
.tablered{color:#D80000;}
</style>
