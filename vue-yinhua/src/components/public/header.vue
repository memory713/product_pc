<template>
  <div class="header">
    <ul class="header-box">
        <router-link :to="{ path:'/' }">
    	   <li><span class="weight">HOME</span><span>首页</span></li>
        </router-link>
        <router-link :to="{ path:'/works' }">
    	   <li><span class="weight">PORTFOLIO</span><span>作品展示</span></li>
        </router-link>
        <router-link :to="{ path:'/atlas' }">
    	   <li><span class="weight">ATLAS</span><span>设计师图集</span></li>
        </router-link>
    </ul>
    <div class="header-logo  header-box">
    	<div style="width:100%;"><span><img src="../../assets/logo.png"></span>
    	<span>共客印花</span></div>
    </div>
    <ul class="header-box">
        <router-link :to="{ path:'/fashon' }">
    	   <li><span class="weight">FASHON</span><span>时尚资讯</span></li>
        </router-link>
        <router-link :to="{ path:'/designer' }">
    	   <li><span class="weight">DESIGNER</span><span>设计师</span></li>
        </router-link>
    	<div class="header-search" v-if="loginNone">
    		<span class="header-button" @click="logon(1)">登陆 </span>
    		<span style="width:30px;"> | </span>
    		<span class="header-button" @click="logon(2)"> 注册</span>
    	</div>
        <div v-if="loginDone" class="hover-ul">
            <div class="flex-between loginDone">
                <img src="/static/zuopin1.png">
                <div style="line-height:40px;margin-left:10px;color:#A4885B;">{{name}}</div>
            </div>
            <ul class="header-ul">
                <router-link :to="{ path:'/center' }">
                    <li :class="{'checkedRouter':(routeName='center')}">个人主页</li>
                </router-link>
                <li >作品管理</li><li>购物车</li><li>财务明细</li><li>交易记录</li><li>资料和账号</li><li>我的消息</li><li>我的关注</li><li>退出登录</li>
            </ul>
        </div>
        
    </ul>
    
  </div>
</template>

<script>
import $ from 'jquery'

import storage from '../../modle/storange.js'
export default {
  data () {
    return {
      loginNone:true,
      loginDone:false,
      name:'这片村头最酷的仔',
      routeName:'',
    }
  },
  mounted:function(){
    // 判断有没有登录
    var a = storage.get("userId")
    console.log(a)
    if(a!==null){
        this.loginDone = true
        this.loginNone = false
    }
    // 判断当前页面的路由
    this.routeName = this.$route.name
    
  },
  methods:{
    logon(id){
        console.log(id)
        let routeData = this.$router.resolve({ path: '/logon', query: { id: id } });
        window.open(routeData.href, '_blank');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.flex-between{display: flex;justify-content: space-between;}
.flex-center{display: flex;justify-content: center;}
.header{
	height: 120px;
	margin: 0 auto;
	display: flex;
	width: 1280px;
	justify-content:center;
	font-size: 14px;
	color: #636363;
}
.header-box{display: flex;margin-top:40px;}
.header-box span{display: block;}
.header-box li{width:180px;}
.header-logo{width:100px;margin-top:20px;}
.header-search{
	width:141px;
	height:30px;
	border:1px solid rgba(136,136,136,1);
	border-radius:15px;
	display: flex;
	justify-content:center;
	line-height: 30px;
	font-size: 14px;
    cursor: pointer;
}
.weight{
	font-size: 12px;
}
.header-button:hover {
    color:#AF9161;
}
.hover-ul{position: relative;}
.loginDone img{width:40px;height: 40px;border-radius: 50%;}
.header-ul{border:1px solid #EAEAEA;border-radius: 10px;position: absolute;z-index: 999;background-color: #fff;margin-top:20px; display:none ; left:0;cursor: pointer;}
.header-ul li{line-height: 50px;font-size: 16px;}
.hover-ul:hover .header-ul{
    display: inline-block;
}
.header-ul li:hover{
    color:#B39B74;
    text-decoration:line-through
}
.checkedRouter{
    color:#B39B74;
    text-decoration:line-through
}
</style>
