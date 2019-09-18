<template>
  <div>
    <el-row class="video">
      <el-col :span="17">
        <video src="https://www.runoob.com/try/try.php?filename=tryhtml5_video_all" width="100%" height="600px" controls></video>
      </el-col>
      <el-col :offset="1" :span="6">
        <div class="pading">
          <p>当前章节</p>
          <p>1-1 introduction for python</p>
        </div>
        <div class="pading">
          <p>章节内容:</p>
          <p>Python是一种跨平台的计算机程序设计语言。是一种面向对象的动态类型语言，最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越来越多被用于独立的、大型项目的开发。</p>
        </div>
        <el-row class="teacher">
          <el-col :span="5">
            <el-avatar src="../../../static/images/userImg.jpg"></el-avatar>
          </el-col>
          <el-col :span="19">
            <p class="name">Brain</p>
            <p class="small">都柏林理工学院教授</p>
          </el-col>
        </el-row>
        <el-row class="small" style="padding-left: 30px">
          <p>教授简介:</p>
          <p>Brain为都柏林理工学院计算机系的教授, 主要研究方向为机器学习与人工只能</p>
        </el-row>
      </el-col>
    </el-row>
    <el-row class="nav">
      <el-col :offset="4" :span="3">
        <Link
          componentName="/Video/introduce"
          text="课程简介"
          class="center"
        />
      </el-col>
      <el-col :span="3">
        <Link
          componentName="/Video/chapter"
          text="课程章节"
          class="center"
        />
      </el-col>
      <el-col :span="3">
        <Link
          componentName="/Video/question"
          text="问答"
          class="center"
        />
      </el-col>
    </el-row>
    <el-row style="margin-top: 15px;">
      <el-col :offset="4" :span="10">
        <router-view></router-view>
      </el-col>
      <el-col :offset="1" :span="9" style="margin-top: 15px;">
        <h6>分类标签</h6>
        <el-tag class="tag" size="mini">数据学科</el-tag>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Link from '@/components/common/Link'
export default {
  components:{
    Link
  }
}
</script>

<style scoped>
  .video {
    background-color: #1b1f21;
    padding: 30px 20px;
    color:#9c9d9e;
  }
  .pading {
    padding:20px 30px;
  }
  .teacher {
    padding: 0px 30px;
    padding-top: 60px;
    padding-bottom: 20px;
  }
  .name {
    font-size: 10px;
    color: white;
  }
  .small {
    font-size: 10px;
  }
  .nav {
    background-color: #fff;
    height: 50px;
  }
  .center {
    line-height: 50px;
  }
  .tag {
    margin-top: 5px;
    margin-right: 5px;
  }
</style>