<template>
  <el-row class="main">
    <el-col :span="2">
      <img src="../../../static/images/userImg.jpg" width="50" height="50">
    </el-col>
    <el-col :offset="1" :span="21">
      <el-row>
        <el-col :span="24" class="small">
          <span>来自</span>
          <span class="ml">Java</span>
          <span class="ml">Mysql</span>
          <span class="ml">Linux</span>
        </el-col>
        <el-col>
          <span class="title">Mysql用户创建了但是无法登陆是怎么回事</span>
        </el-col>
        <el-col class="mt">
          <span class="normal">幕无忌 </span>
          <span class="small">回答</span>
        </el-col>
        <el-col class="mt">
          <span class="normal">尴尬, 刚百度了一下就解决了, init_connect 的问题, 设置一下就好了</span>
        </el-col>
        <el-col class="mt">
          <el-row>
            <el-col :span="5">
              <div class="helper">
                已帮助用户 2
              </div>
            </el-col>
            <el-col :span="4">
              <span class="small">0人反对</span>
            </el-col>
            <el-col :span="4">
              <span class="small">分享</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .main {
    border-bottom: 1px solid #dadada;
    padding: 30px 10px 15px 10px;
  }
  .small {
    font-size: 10px;
    color: #94989c;
  }
  .normal {
    font-size: 13px;
  }
  .ml {
    margin-left: 10px;
  }
  .title {
    font-weight: bold;
  }
  .helper {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #c9c9c9;
    font-size: 10px;
    color: #c9c9c9;
  }
  .mt {
    margin-top: 10px;
  }
</style>