<template>
  <div id="app">
    <el-container>
      <el-header >header</el-header>
      <el-main>main</el-main>
      <el-footer height="100px">
        <el-row>
          <el-col :span="6">企业合作</el-col>
          <el-col :span="6">联系我们</el-col>
          <el-col :span="6">意见反馈</el-col>
          <el-col :span="6">友情链接</el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .el-header{
    -webkit-box-shadow: 0px 10px 5px #888888;
    -moz-box-shadow: 0px 10px 5px #888888;
    box-shadow: 0px 10px 5px #888888;
  }
  .el-main{
    /*height: 1000px;*/
  }
  .el-footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #1c1f21;
    color: #838a8e;
    padding: 0px 20% 10px 20%;
  }
</style>
