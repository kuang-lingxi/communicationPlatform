<template>
    <div>
      <img :src="imgUrl" alt="" class="img">
      <div class="content">
        <div class="title">{{title}}</div>
        <div class="allTag">
          <span class="tag">{{tag1}}</span>
          <span class="tag">{{tag2}} </span>
          <span class="tag">
            <i class="el-icon-bell"></i>
            {{number}}
          </span>
          <el-rate
            v-model="hot"
            disabled
          >
          </el-rate>
        </div>
        <div class="money">
          ￥ {{money}}
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "course",
        props:['imgUrl', 'title', 'tag1', 'tag2', 'money', 'hot', 'number'],
        data() {
          return {

          }
        }
    }
</script>

<style scoped>
  .content{
    padding: 0 12px;
  }
  .img{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    height: 120px;
    width:180px;
  }
  .title{
    width: 85%;
    /* text-align: center; */
    margin-top:10px;
    font-size: 15px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tag{
    margin-left:5px;
    font-size: 10px;
    color:#b9bec2;
  }

  .allTag {
    width:87%;
    margin-top:2px;
    /* text-align: center; */
  }

  .money {
    margin-top: 10px;
    font-size: 12px;
  }
</style>
