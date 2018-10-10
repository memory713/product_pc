<template>
  <div class="search">
    <div class="search-input">
    	<!-- element ui -->
    	<template>
		  <el-select v-model="value" placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
		</template>
		<input type="text" name="" placeholder="背景" class="search-input-nei">
    </div>
    <div class="search-button"></div>
  </div>
</template>

<script>

export default {

  data () {
    return {
    	options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    }
  }
}
</script>

<style scoped>
.search{
	display: flex;
	justify-content: center;
}
.search-input-nei::-webkit-input-placeholder {
   	font-size:14px;
	font-weight:400;
	color:rgba(153,153,153,0.8);
	line-height: 30px;
}
/deep/ .el-input__inner::-webkit-input-placeholder{
	color:rgba(35,35,35,1);
}
.search-input-nei{border:none;height:22px;margin-top:5px;padding-left:10px;float:left;outline:none; width:600px;border-left: 1px solid rgba(229,229,229,1);}
.search-input{
	width:859px;
	height:32px;
	border:1px solid rgba(229,229,229,1);
	border-radius:19px;
	background-color: #fff;
}
.search-button{height: 34px;width:34px;background: url(../../assets/search.png) center;margin-left: 15px;}
/deep/ .el-input__inner{
	border:none;
	height: 32px;
	color:rgba(35,35,35,1);
}
/deep/ .el-select{
	float: left;
	margin-left: 10px;
}
/deep/ .el-input__icon{
	line-height: 0px;

}
/deep/ .el-select{
	width: 100px;
}
</style>
