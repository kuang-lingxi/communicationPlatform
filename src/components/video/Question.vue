<template>
  <div>
    <el-row>
      <el-col :offset="20" :span="3">
        <div class="publish">我要发布</div>
      </el-col>
    </el-row>
    <el-row class="content">
      <el-col :offset="2" :span="3">
        <el-avatar src="../../../static/images/userImg.jpg"></el-avatar>
      </el-col>
      <el-col :span="18">
        <h5>UI好学吗?</h5>
        <div class="answer">我来回答 +2积分</div><br>
        <span class="font">0 回答</span>
        <span class="font">83 浏览</span>
        <span class="font time">2019-7-2</span>
      </el-col>
    </el-row>
    <el-row class="content">
      <el-col :offset="2" :span="3">
        <el-avatar src="../../../static/images/userImg.jpg"></el-avatar>
      </el-col>
      <el-col :span="18">
        <h5>有UI大神吗?问几个问题可以吗？</h5>
        <div class="answer">我来回答 +2积分</div><br>
        <span class="font">17 回答</span>
        <span class="font">813 浏览</span>
        <span class="font time">2019-8-2</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .content {
    padding: 20px 15px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 10px;
  }
  .publish {
    padding: 7px 1px;
    background-color: #e8eaec;
    text-align: center;
    border-radius: 10px;
    font-size: 12px;
    cursor: pointer;
  }
  .answer {
    display: inline-block;
    background-color: #ffe33b;
    padding:2px 15px;
    font-size: 12px;
    border-radius: 10px;

    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .font{
    font-size: 12px;
    color: #bec1c4;
    margin-right: 10px;
  }
  .time {
    margin-left: 55%;
  }
</style>