<template>
  <div>
    <Header></Header>
    <Search></Search>
    <div class="style-bgi"></div>
    <div class="flex-center" style="position:relative;">
      <div style="width:1280px;">
        <div class="designer-body-top">
          <div class="designer-body-top-li"></div>
          <div class="designer-body-top-search">
            <input type="" name="" placeholder="搜索">
            <img src="../assets/search2.png">
          </div>
        </div>
      </div>  
      <div style="position:absolute;height:100%;width:50%;background-color: rgba(0,0,0,0.05);left:0;"></div>
    </div>
    <atlasStyle/>
    <atlasStyle2/>
    <atlasStyle3/>
    <img src="../assets/more-jiantou.png" style="margin-top:20px;">
    
    <Footer2></Footer2>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-between{display: flex;justify-content: space-between;}
.flex-center{display: flex;justify-content: center;}
.style-bgi{
  width: 100%;
  height: 100px;
  margin-top:30px;
  background: url(../assets/atlas-background.png) 100% 100%;
}
.designer-body-top{display: flex;justify-content: space-between;height: 80px;line-height: 80px;}
.designer-body-top-search{ width: 200px;border-radius: 20px;border:1px solid rgba(106,106,106,0.5);height: 30px; margin-top:25px;position: relative;}
.designer-body-top-search input{position: absolute;top:12%;left: 10px;height: 70%;width:70%;}
.designer-body-top-search img{position: absolute;top:7px;right: 10px;height: 15px;width:15px;}
</style>
