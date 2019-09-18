<template>
  <div>
    <div class="content">
      <h6>{{title}}</h6>
      <p class="introduce">{{introduce}}</p>
      <div v-for="item in content" :key="item.key" class="item">
        <i class="el-icon-video-play"></i>
        <span >{{item.text}}</span>
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['title', 'introduce', 'content']
}
</script>

<style lang="scss" scoped>
  .content {
    padding: 20px 15px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 10px;
  }
  .introduce {
    font-size: 10px;
    color: #aaaeb2;

    margin-bottom: 20px;
  }
  .item {
    margin-left: 10px;
    margin-top: 5px;
    position: relative;
    font-size: 10px;
    color: #9f9f9f;

    span {
      margin-left: 10px;
    }
  }
  .circle {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    border:1px solid #9f9f9f;

    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
</style>