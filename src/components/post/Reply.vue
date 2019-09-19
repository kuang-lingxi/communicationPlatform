<template>
  <el-row style="border:1px solid #ebecef;display:flex">
    <el-col :span="4" class="avatar">
      <el-avatar :src="imgUrl"></el-avatar><br>
      <h6>{{name}}</h6>
      <div class="type">{{type}}</div>
    </el-col>
    <el-col :span="20" class="content">
      <p>{{text}}</p>
      <div class="time">{{time}}</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props:['imgUrl', 'name', 'type', 'text', 'time']
}
</script>

<style scoped>
  .avatar {
    text-align: center;
    padding: 20px 10px;
    background-color: #f5f7fa;
  }
  .type {
    margin-top: 10px;
    display: inline-block;
    padding: 2px 10px;
    border: 1px solid #ebecef;
    font-size: 10px;
    background-color: white;
    border-radius: 10px;
  }
  .content {
    padding: 10px 20px;
    position: relative;
  }
  .time {
    position: absolute;
    right: 10px;
    bottom: 5px;
    font-size: 10px;
  }
</style>