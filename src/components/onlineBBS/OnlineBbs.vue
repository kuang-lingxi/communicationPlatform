<template>
  <el-row>
    <el-col :offset="5" :span="12" class="title">
      <el-row>
        <span class="titleFont">话题社区</span>
        <el-button type="danger" class="publish">发表话题</el-button>
      </el-row>
      <el-row class="chose">
        <el-col :offset="2" :span="4">
          <Link
            componentName = "/OnlineBBS/recommended"
            text="推荐"
          />
        </el-col>
        <el-col :span="4">
          <Link
            componentName="/OnlineBBS/new"
            text="最新"
          />
        </el-col>
        <el-col :offset="8" :span="6">
            <span>只显示关注内容</span>
            <el-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="#dadada"
            ></el-switch>
        </el-col>
      </el-row>
      <el-row>
        <router-view></router-view>
      </el-row>
    </el-col>
    <el-col :offset="1" :span="4">
      <div class="user">
        <el-row>
          <el-col :span="5">
            <el-avatar src="../../../static/images/userImg.jpg"></el-avatar> 
          </el-col>
          <el-col :span="19"><span>Drelity</span></el-col>
        </el-row>
        <div class="line"></div>
        <el-row>
          <el-col :offset="3" :span="7">
            <span>提问</span>
          </el-col>
          <el-col :span="7">
            <span>回答</span>
          </el-col>
          <el-col :span="7">
            <span>关注</span>
          </el-col>
        </el-row>
      </div>
      <div>
        <div class="hotTitle">热门话题</div>
        <HotTopic/>
        <HotTopic/>
        <HotTopic/>
      </div>
      
    </el-col>
  </el-row>
</template>

<script>
import Link from '@/components/common/Link'
import HotTopic from './HotTopic'
export default {
  data() {
    return {
      value: false
    }
  },
  components: {
    Link,
    HotTopic
  }
}
</script>

<style scoped>
  .title {
    height: 100px;
    background-color: #d5d5d5;

    margin-top: 30px;
  }
  .titleFont {
    line-height: 100px;
    margin-left: 20px;
    font-size: 20px;
  }
  .publish{
    float: right;
    margin-top: 50px;
    transform: translateY(-50%);
    margin-right: 20px;

    background-color: red;
  }
  .chose {
    height: 70px;
    line-height: 70px;

    border-bottom: 1px solid #dadada;
  }
  .user {
    background-color: #f3f3f3;
    padding: 15px;
    margin-top: 30px;
  }
  .line {
    width:90%;
    margin: 10px auto;
    height: 1px;
    background-color: #d8d8d8;
  }
  .hotTitle {
    padding: 20px 0;

    border-bottom: 1px solid #d8d8d8;
  }
</style>