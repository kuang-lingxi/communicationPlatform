<template>
  <div id="app">
    <el-container>
      <el-header style="padding-right: 0;overflow: hidden">
        <el-row style="line-height: 60px;">
          <el-col :span="2">
            <router-link to="/">
              <img src="../static/images/buct.jpg" alt="" height="60px" width="60px">
            </router-link>
          </el-col>
          <el-col :span="2">
            <Link
              componentName = "/AllCourse"
              text = "全部课程" 
            />
          </el-col>
          <el-col :span="2">
            <Link
              componentName = "/OnlineBBS"
              text = "在线论坛" 
            />
          </el-col>
          <el-col :span="2">
            <Link
              componentName = "/upload"
              text = "资源上传" 
            />
          </el-col>
          <el-col :span="10">
            <el-input
              placeholder="请输入内容"
              v-model="input"
              prefix-icon="el-icon-search"
            >
            </el-input>
          </el-col>
          <el-col :offset="2" :span="4">
            <Link
              componentName = "/Information/myCourse"
              text = "我的课程" 
            />
            <i class="el-icon-bell" style="margin-left:20px"></i>
            <router-link to="/information">
              <img :src="userImg" alt="" class="userImg" style="vertical-align: middle;margin-left:15px;">
            </router-link>
          </el-col>
        </el-row>

      </el-header>
      <el-main style="background-color:#f8fafc">
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
import Link from './components/common/Link'

export default {
  name: 'App',
  data() {
    return {
      userImg:'../static/images/userImg.jpg',
      input:'',
    };
  },
  components: {
    Link
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
    height: 40px;
    width:40px;
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
    padding: 0;
    min-height: 80vh;
    padding-bottom: 30px;
  }
  .el-footer{
    width: 100%;
    background-color: #1c1f21;
    color: #838a8e;
    padding: 0px 20% 10px 20%;
  }
  #app {
    min-width: 1400px;
  }

</style>
