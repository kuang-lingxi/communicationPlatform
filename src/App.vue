<template>
  <div id="app">
    <el-container>
      <el-header style="padding-right: 0;overflow: hidden">
        <el-row style="line-height: 60px;">
          <el-col :span="2">
            <img src="../static/images/buct.jpg" alt="" height="60px" width="60px">
          </el-col>
          <el-col :span="2">
            <router-link to="allCourse" tag="span" class="link">全部课程</router-link>
          </el-col>
          <el-col :span="2">
            <router-link to="OnlineBBS" tag="span" class="link">在线论坛</router-link>
          </el-col>
          <el-col :span="2">
            <router-link to="upload" tag="span" class="link">资源上传</router-link>
          </el-col>
          <el-col :span="10">
            <el-input
              placeholder="请输入内容"
              v-model="input">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </el-col>
          <el-col :offset="2" :span="4">
            <router-link to="MyCourse" tag="span" class="link">我的课程</router-link>
            <i class="el-icon-bell" style="margin-left:20px"></i>
            <img :src="userImg" alt="" class="userImg" style="vertical-align: middle;margin-left:15px;">
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
    /*height: 1000px;*/
    margin-bottom: 100px;
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

  /*设置路由高亮*/
  .router-link-active{
    position: relative;
    color:red;
  }
  .router-link-active::after{
    content: '';
    display: block;

    position: absolute;
    top: 30px;
    left: 10%;

    height: 2px;
    width: 80%;
    background-color: red;
  }

  /*设置手指型鼠标*/
  .link{
    cursor: pointer;
  }


</style>
