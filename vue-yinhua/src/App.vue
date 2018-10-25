<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background:url(./assets/base.png) ;
  overflow-x: hidden;
  min-width:1280px;
}
#app {
  font-family:"微软雅黑";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html {} 
body {margin:0; padding:29px00; font:14px"\5B8B\4F53",sans-serif;} 
div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,blockquote,p{padding:0; margin:0;} 
table,td,tr,th{font-size:12px;} 
li{list-style-type:none;} 
img{vertical-align:top;border:0;} 
ol,ul {list-style:none;} 
h1,h2,h3,h4,h5,h6{ font-weight:normal;} 
address,cite,code,em,th {font-weight:normal; font-style:normal;} 
a{text-decoration:none; 
color:#333; }
div{box-sizing: border-box;}
input{border:none;outline:none;}
</style>
