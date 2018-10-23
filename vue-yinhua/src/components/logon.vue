<template>
  <div class="login flex-center"  ref="elememt">
    <div class="login-body " ref="elememtchild">

    <!-- 登录：method = 1  企业登陆： chooseChecked =1  个人登陆：chooseChecked =2 
    注册：method = 2 企业注册：chooseChecked=1 个人注册：chooseChecked =2 忘记密码：chooseChecked = 3-->
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
        <div style="width:650px;padding:50px;background-color:#fff;">
          <div class="flex-center"><div><img src="../assets/logo.png"><div style="margin-top:10px;font-size:16px;">共客印花</div></div></div>
          <div class="login-right-choose flex-between">
            <div 
              style="width:50%;" 
              :class="{'chooselogin' : chooseChecked==1 }" 
              @click="chooselogin(chooseChecked=1)"
            >企业登录</div>
            <div 
              style="width:50%;" 
              :class="{'chooselogin' : chooseChecked==2 }" 
              @click="chooselogin(chooseChecked=2)"
            >个人登录</div>
          </div>
          <input 
            type="number" 
            name="" 
            class="login-input" 
            placeholder="请输入手机号码" 
            v-model="loginPhone" 
            @focus="focusLoginPhone()"
          >
          <input 
            type="password" 
            name="" 
            class="login-input" 
            placeholder="请输入密码" 
            v-model="loginPassword" 
            @focus="focusLoginPassword()"
          >
          <div class="flex-between" style="line-height:80px;font-size:14px;">
            <div @click="rememberMe" style="cursor:pointer;">
              <span class="rememberMe"  :class="{'rememberMe2' : rememberChecked, 'rememberMe': !rememberChecked }"
            ></span>记住我
            </div>
            <div style="cursor:pointer;">
              <span @click="forget()">忘记密码</span>
              <span style="margin:0 10px;">|</span>
              <span @click="method = 2">注册账号</span>
            </div>
          </div>
          <div class="login-right-choose" style="margin-top:0;">
            <div style="background:#A29675;color:#fff;width:100%;" @click="login()">登录</div>
          </div>
          <div  class="login-right-bottom"><span>其他方式登录：</span><img src="../assets/qq.png"><img src="../assets/wechats.png"></div>
        </div>
      </div>

      <!-- 注册 -->
      <div v-show = "method == 2" style="width:100%;height:100%;position:relative;">
        <div class="swiper-container2" style="overflow:hidden;height:100%;width:100%;position:absolute;">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in  swiper2" >
              <img :src="item">
            </div>
          </div>
          <div class="swiper-pagination2" style="bottom:20px;"></div>
        </div>
        <div class="registe" v-if="chooseChecked!==3">
          <div><img src="../assets/logo.png"><div style="margin-top:10px;font-size:16px;">共客印花</div></div>
          <div class="registe-right-choose flex-between">
            <div style="width:50%;" :class="{'chooselogin' : chooseChecked==1 }" @click="chooseregist(chooseChecked=1)">企业注册</div>
            <div style="width:50%;" :class="{'chooselogin' : chooseChecked==2 }" @click="chooseregist(chooseChecked=2)">个人注册</div>
          </div>
          <!-- 个人注册 -->
          <div class="people-regist" v-if="chooseChecked==2">
            <input type="" name="" placeholder="手机号码" class="registe-all">
            <input type="" name="" placeholder="密码" class="registe-all">
            <div class="flex-between">
              <input type="" name="" placeholder="输入验证码" class="registe-all-half">
              <div class="yanzhengma" style="margin-top:20px;" @click="yanzhengma2" :class=" {'yanzhengma2':!disabled2 }">{{time2}}</div>
            </div>
            <div class="registe-button">注册</div>
            <div  class="login-right-bottom flex-between"><div><span>其他方式登录：</span><img src="../assets/qq.png"><img src="../assets/wechats.png"></div><div style="cursor:pointer;" @click="method = 1">已有账号返回登录</div></div>
          </div>
          <!-- 企业注册 -->
          <div class="com-regist" v-if="chooseChecked==1">
            <div class="flex-between" ><input type="" name="" class="registe-half-input" placeholder="企业名称"><input type="" name="" class="registe-half-input" placeholder="负责人姓名"></div>
            <div class="flex-between"><input type="" name="" class="registe-half-input" placeholder="企业法人"><input type="" name="" class="registe-half-input" placeholder="负责人手机号"></div>
            <div class="flex-between" style="margin-bottom:10px;">
              <input type="" name="" class="registe-half-input" placeholder="密码">
              <div class="flex-between" style="width:45%;">
                <input type="" name="" class="registe-half-input" placeholder="请输入验证码" style="width:60%;">
                <div class="yanzhengma" :class=" {'yanzhengma2':!disabled }"  @click="yanzhengma">{{time}}</div>
              </div>
            </div>
           <!--  <v-distpicker @selected="onSelected"></v-distpicker> -->
            <div class="registe-button">注册</div>
            <div  class="login-right-bottom flex-between"><div><span>其他方式登录：</span><img src="../assets/qq.png"><img src="../assets/wechats.png"></div><div style="cursor:pointer;" @click="method = 1">已有账号返回登录</div></div>
          </div>
        </div>
        <!-- 忘记密码 -->
        <div v-if="chooseChecked==3" class="registe">
          <div style="font-size:25px;line-height:80px;">修改密码</div>
          <input type="" name="" placeholder="请输入密码" class="registe-all">
          <input type="" name="" placeholder="请输入手机号码" class="registe-all">
          <mouseSlide />
          <div class="flex-between" style="margin-top:10px;">
            <input type="" name="" placeholder="请输入验证码" class="registe-half-input" style="width:60%;">
            <div class="yanzhengma" style="width:39%;">发送验证码</div>
          </div>
          <div class="yanzhengma" style="width:100%;">确认</div>
          <div class="flex-between" style="line-height:60px;padding:0 10px;cursor:pointer;">
            <div @click="method = 1,chooseChecked=1">返回登录</div>
            <div @click="method = 2,chooseChecked=1">返回注册</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import VDistpicker from 'v-distpicker'
import storage from '../modle/storange.js'

export default {
  components: { VDistpicker },
  data () {
    return {
      swiper: ['/static/login-swiper.png','/static/login-swiper.png','/static/login-swiper.png',],
      swiper2:['/static/small-bg.png','/static/small-bg.png','/static/small-bg.png',],
      rememberChecked:false,
      chooseChecked:1,
      method:1,
      select: { province: '广东省', city: '广州市', area: '海珠区' },
      time: "获取验证码",
      currentTime: 61,
      disabled:true,
      time2: "获取验证码",
      currentTime2: 61,
      disabled2:true,
      loginPhone:'',
      loginPassword:'',
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

    new Swiper ('.swiper-container2', {
      pagination: {
        el: '.swiper-pagination2',
      },
    }) 

  },
  methods:{
    // 得到焦点清空INPUT
    focusLoginPhone(){
      this.loginPhone = ""
    },
    focusLoginPassword(){
      this.loginPassword = ""
    },
    // 记住我
    rememberMe(){
      if(this.rememberChecked){
        this.rememberChecked = false
      }else{
        this.rememberChecked = true
      }
    },
    // 登陆注册切换
    chooselogin(){

    },
    chooseregist(){
      
    },

    // 忘记密码
    forget(){
      this.method = 2
      this.chooseChecked = 3
    },

    // 发送验证码
    yanzhengma(){
      var that = this
      if(this.disabled){
        var interval = setInterval(function () {
          that.currentTime--
          that.time= that.currentTime + '秒'
          that.disabled=false
          if (that.currentTime <= 0) {
              clearInterval(interval)
              that.time='重新发送'
              that.currentTime= 61
              that.disabled=true
          }
        }, 1000)
      }
    },
    yanzhengma2(){
      var that = this
      if(this.disabled2){
        var interval = setInterval(function () {
          that.currentTime2--
          that.time2= that.currentTime2 + '秒'
          that.disabled2=false
          if (that.currentTime2 <= 0) {
              clearInterval(interval)
              that.time2='重新发送'
              that.currentTime2= 61
              that.disabled2=true
          }
        }, 1000)
      }
    },

    // 登录
    login(){
      console.log(this.loginPhone)
      console.log(this.loginPassword)
      // 验证
      if(this.loginPhone.length !== 11){
        this.$message.error('请输入正确的手机号码');
      }else if(this.loginPassword.length < 6){
        this.$message.error('密码最少六位');
      }else{
        // 缓存
        storage.set("userId",this.loginPhone)
        // 跳转至HOME
        this.$router.push({path:"/"})
        this.$message({
          message: '登录成功',
          type: 'success'
        });
      }
    }


    // 三级联动
    // onSelected(data) {
    //   // alert(data.province + ' | ' + data.city + ' | ' + data.area)
    //   console.log(data)
    // },
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
/*  background: url(../assets/small-bg.png) no-repeat 100% 100%;
*/   border-radius: 10px;
overflow: hidden;
 }
 .chooselogin{background:#A29675;color:#fff;width:50%;}
 .login-right-choose{height: 60px;border-radius: 10px;overflow: hidden;line-height: 60px;font-size: 16px;letter-spacing:8px;margin-top:40px;background:#ECECEC;color:#000;}
 .login-input{width:100%;color:#E0E0E1;border-bottom: 1px solid #E0E0E1;height: 80px;font-size: 18px;color:#000;}
.login-input::-webkit-input-placeholder {
    color:#E0E0E1;
}
.rememberMe{display: inline-block;height: 10px;width:10px;border:1px solid #000;border-radius: 5px;margin:0 10px 0 0;}
.rememberMe2{display: inline-block;height: 10px;width:10px;border:1px solid #A29675;border-radius: 5px;margin:0 10px 0 0;background-color: #A29675;}
.login-right-bottom{display:flex;line-height:35px;margin-top:20px;}
.registe{position: absolute;z-index: 999;width: 500px;left:250px;top:10%;height: 80%;border-radius: 10px;padding:20px;background-color: #fff;}
 .registe-right-choose{height: 40px;border-radius: 10px;overflow: hidden;line-height: 40px;font-size: 16px;letter-spacing:8px;margin-top:20px;background:#ECECEC;color:#000;}
 .com-regist{padding-top:10px;}
 .registe-half-input{ border:1px solid #DCDCDC; border-radius: 10px;height: 40px;padding-left: 10px;margin:10px 0;width:45%;box-sizing: border-box;width:45%;}
 .registe-half-input::-webkit-input-placeholder {
    color:#DCDCDC;
}
.registe-button{height: 40px;border-radius: 10px;overflow: hidden;line-height: 40px;font-size: 16px;letter-spacing:8px;margin-top:20px;background:#A29675;color:#fff;width:100%;}
.registe-all{width: 100%;border:1px solid #DCDCDC;border-radius: 10px;padding-left: 10px;height: 40px;margin-top:20px;box-sizing: border-box;}
 .registe-all::-webkit-input-placeholder {
    color:#DCDCDC;
}
.registe-all-half{width: 48%;border:1px solid #DCDCDC;border-radius: 10px;padding-left: 10px;height: 40px;margin-top:20px;box-sizing: border-box;line-height: 40px;}
 .registe-all-half::-webkit-input-placeholder {
    color:#DCDCDC;
}
/deep/ .distpicker-address-wrapper select{height: 30px;padding:0;float: left;margin-bottom:10px;margin-right: 5px;}
.yanzhengma{height:40px;line-height:40px;margin-top:10px;color:#fff;border-radius:10px;width:35%;background-color:rgba(0160, 149, 113,0.9);cursor:pointer;}
.yanzhengma2{background-color:#838383;color: #fff;}
.login-input::-webkit-outer-spin-button,
.login-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.login-input[type="number"]{
    -moz-appearance: textfield;
}
</style>
