<template>
  <div class="login flex-center"  ref="elememt">
    <div class="login-body " ref="elememtchild">
      <div class="flex-between" style="width:100%;height:100%;" v-show = "method == 1">
        <div style="width:350px;">
          <div class="swiper-container" style="height:100%;">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in  swiper" >
                <img :src="item">
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div style="width:650px;padding:70px;">
          <div class="flex-center"><img src="../assets/logo.png"></div>
          <div class="login-right-choose flex-between">
            <div style="width:50%;" :class="{'chooselogin' : chooseChecked==1 }" @click="chooselogin(chooseChecked=1)">企业登录</div>
            <div style="width:50%;" :class="{'chooselogin' : chooseChecked==2 }" @click="chooselogin(chooseChecked=2)">个人登录</div>
          </div>
          <input type="" name="" class="login-input" placeholder="请输入手机号码">
          <input type="" name="" class="login-input" placeholder="请输入密码">
          <div class="flex-between" style="line-height:80px;font-size:14px;">
            <div @click="rememberMe" style="cursor:pointer;"><span class="rememberMe"  :class="{'rememberMe2' : rememberChecked, 'rememberMe': !rememberChecked }"></span>记住我</div>
            <div style="cursor:pointer;"><span>忘记密码</span><span style="margin:0 10px;">|</span><span>注册账号</span></div>
          </div>
          <div class="login-right-choose" style="margin-top:0;">
            <div style="background:#A29675;color:#fff;width:100%;">登录</div>
          </div>
          <div  class="login-right-bottom"><span>其他方式登录：</span><img src="../assets/qq.png"><img src="../assets/wechats.png"></div>
        </div>
      </div>
      <div v-show = "method == 2">
        
      </div>
      
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';

export default {
  data () {
    return {
      swiper: ['/static/login-swiper.png','/static/login-swiper.png','/static/login-swiper.png',],
      rememberChecked:false,
      chooseChecked:1,
      method:1,
    }
  },
  mounted:function(){
    console.log(this.$route.query.id)
    if(this.$route.query.id == 1){
      this.method = 1
    }else{
      this.method = 2
    }
    var w = document.documentElement.clientWidth || document.body.clientWidth;
    var h = document.documentElement.clientHeight || document.body.clientHeight;
    this.$refs.elememt.style.height = h +'px';
    this.$refs.elememtchild.style.height = h-300 +'px';

    new Swiper ('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    
    }) 

  },
  methods:{
    rememberMe(){
      if(this.rememberChecked){
        this.rememberChecked = false
      }else{
        this.rememberChecked = true
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.flex-between{display: flex;justify-content: space-between;}
.flex-center{display: flex;justify-content: center;}
 .login{
  background: url(../assets/big-bg.png) no-repeat 100% 100%;
  padding-top:150px;

 }
 .login-body{
  width:1000px;
  background-color: #fff;
  background: url(../assets/small-bg.png) no-repeat 100% 100%;
   border-radius: 10px;
 }
 .chooselogin{background:#A29675;color:#fff;width:50%;}
 .login-right-choose{height: 60px;border-radius: 10px;overflow: hidden;line-height: 60px;font-size: 16px;letter-spacing:8px;margin:30px 0;background:#ECECEC;color:#000;}
 .login-input{width:100%;color:#E0E0E1;border-bottom: 1px solid #E0E0E1;height: 80px;font-size: 18px;color:#000;}
.login-input::-webkit-input-placeholder {
    color:#E0E0E1;
}
.rememberMe{display: inline-block;height: 10px;width:10px;border:1px solid #000;border-radius: 5px;margin:0 10px 0 0;}
.rememberMe2{display: inline-block;height: 10px;width:10px;border:1px solid #A29675;border-radius: 5px;margin:0 10px 0 0;background-color: #A29675;}
.login-right-bottom{display:flex;line-height:35px;}

</style>
