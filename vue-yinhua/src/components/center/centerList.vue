<template>
  <div class="flex-center" style="background-color: #fff;box-shadow:5px 5px 5px #F5F5F5;">
    <div class="centerlist">
      <ul class="flex-around">
        <router-link :to="{ path:'/center' }">
          <li class="centerlist-li" :style="(routeName=='center') ? 'color:#A4885A;' : ''"><span :class="(routeName=='center') ? 'checkedRouter2' : 'centerlist-li-span'"></span>个人主页</li>
        </router-link>
        <li class="centerlist-li" :style="(routeName=='myWorks') ? 'color:#A4885A;' : ''"><span :class="(routeName=='myWorks') ? 'checkedRouter2' : 'centerlist-li-span'"></span>作品管理</li>
        <li class="centerlist-li" :style="(routeName=='gouwuche') ? 'color:#A4885A;' : ''"><span :class="(routeName=='gouwuche') ? 'checkedRouter2' : 'centerlist-li-span'"></span>购物车</li>
        <router-link :to="{ path:'/money' }">
          <li class="centerlist-li" :style="(routeName=='money') ? 'color:#A4885A;' : ''"><span :class="(routeName=='money') ? 'checkedRouter2' : 'centerlist-li-span'"></span>财务明细</li>
        </router-link>
        <li class="centerlist-li" :style="(routeName=='business') ? 'color:#A4885A;' : ''"><span :class="(routeName=='business') ? 'checkedRouter2' : 'centerlist-li-span'"></span>交易记录</li>
        <li class="centerlist-li" :style="(routeName=='data') ? 'color:#A4885A;' : ''"><span :class="(routeName=='data') ? 'checkedRouter2' : 'centerlist-li-span'"></span>资料和账号</li>
        <li class="centerlist-li" :style="(routeName=='message') ? 'color:#A4885A;' : ''"><span :class="(routeName=='message') ? 'checkedRouter2' : 'centerlist-li-span'"></span>我的消息</li>
        <li class="centerlist-li" :style="(routeName=='follow') ? 'color:#A4885A;' : ''"><span :class="(routeName=='follow') ? 'checkedRouter2' : 'centerlist-li-span'" ></span>我的关注</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routeName:'',
    }
  },
  mounted:function(){
    // 判断当前页面的路由
    this.routeName = this.$route.name
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-between{display: flex;justify-content: space-between;}
.flex-center{display: flex;justify-content: center;}
.flex-around{display: flex;justify-content: space-around;}
.centerlist{width:1000px;margin-top:30px;}
.centerlist-li{width:125px;text-align: center;line-height: 50px;font-size: 14px;}

.checkedRouter2{width:25px;height: 25px;display: inline-block;background: url(../../assets/sun2.png) no-repeat;margin:-8px 10px;}
.centerlist-li-span{width:5px;height: 5px;border-radius: 50%;display: inline-block;background-color: #909090;margin:2px 20px;}
</style>
