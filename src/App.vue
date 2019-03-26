<template>
  <div id="app">
    <el-container>
      <el-header>

        <el-row style="line-height: 60px;">
          <el-col :span="2">
            <img src="../static/images/buct.jpg" alt="" height="60px" width="60px">
          </el-col>
          <el-col :span="2">全部课程</el-col>
          <el-col :span="2">在线论坛</el-col>
          <el-col :span="2">资源上传</el-col>
          <el-col :span="10">
            <el-input
              placeholder="请输入内容"
              v-model="input">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-col>
          <el-col :offset="1" :span="2" style="line-height: 60px">
            我的课程
            <i class="el-icon-bell" style="font-size:25px;margin-left: 10px;"></i>
          </el-col>
          <el-col :span="1" style="line-height: 60px">
            <img :src="userImg" alt="" class="userImg">
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
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
  name: 'App',
  data() {
    return {
      userImg:'../static/images/userImg.jpg',
      input:'',
    };
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .userImg{
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    height: 60px;
    width:60px;
  }
  .el-container{
    height: 100%;
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
