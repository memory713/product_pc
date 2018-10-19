<template>
  <div>
    <Header></Header>
    <Search></Search>
    <div class="style-bgi"></div>
    
    <fashonStyle/>
    <fashonStyle2/>
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
.fashon-top-word{font-size: 25px;color:#606060;line-height: 35px;text-align: left;font-weight: 400;}
.fashon-top-word2{font-size: 20px;color:#606060;line-height: 35px;text-align: right;}

</style>
