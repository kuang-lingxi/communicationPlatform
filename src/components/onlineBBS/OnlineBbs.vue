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
    <el-col :span="4">

    </el-col>
  </el-row>
</template>

<script>
import Link from '@/components/common/Link'
export default {
  data() {
    return {
      value: false
    }
  },
  components: {
    Link
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
</style>