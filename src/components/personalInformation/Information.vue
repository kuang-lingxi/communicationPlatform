<template>
  <div>
    <el-row id="header">
      <el-col :offset="4" :span="2">
        <el-avatar :size="100" src="../../../static/images/userImg.jpg" id="img"></el-avatar>
      </el-col>
      <el-col :span="4">
        <div class="message center">
          <span>Dreity</span> <br>
          <span style="font-size:10px;color:#bcc1ca">学生 保密 | 更多信息 </span>
        </div>
      </el-col>
      <el-col :offset="4" :span="1" class="center font">
        <div>10</div>
        <div style="font-size:10px">经验</div>
      </el-col>
      <el-col :span="1" class="center font">
        <div>3</div>
        <div style="font-size:10px">关注</div>
      </el-col>
      <el-col :span="1" class="center font">
        <div>1</div>
        <div style="font-size:10px">粉丝</div>
      </el-col>
      <el-col :span="4" class="center">
        <div class="setting">
          <i class="el-icon-setting"></i>
          个人设置
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 15px;">
      <el-col :offset="6" :span="6">
        <el-row :gutter="10">
          <el-col :span="6">
            <Link
              componentName="/Information/myCourse"
              text="我的课程"
            />
            
          </el-col>
          <el-col :span="6">
            <Link 
              componentName="/Information/myTopic"
              text="我的帖子"
            />
          </el-col>
          <el-col :span="6">
            <Link 
              componentName="/Information/myGroup"
              text="我的小组"
            />
          </el-col>
        </el-row> 
      </el-col>
      <el-col :offset="6" :span="14" style="margin-top: 20px" >
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Link from '@/components/common/Link'
export default {
    components: {
      Link
    }
}
</script>

<style scoped>
  #header {
    width: 100%;
    height: 100px;
    background-color: #102542;
    position: relative;
  }
  #img {
    transform: translateY(15px)
  }
  .message {
    color: white;
  }
  .font {
    color: white;
  }
  .center {
    margin-top: 50px;
    transform: translateY(-50%);
  }
  .setting {
    display: inline-block;
    padding:5px 10px;
    font-size: 10px;
    color: #bcc1ca;
    border: 1px solid #304258;
    border-radius: 15px;

    cursor: pointer;
  }
  
</style>