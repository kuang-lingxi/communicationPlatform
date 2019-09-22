<template>
  <div id="app">
    <el-container>
      <el-dialog
        title="登陆"
        :visible.sync="dialogVisible"
        width="30%"
      >
        <el-form ref="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
      <el-header style="padding-right: 0;overflow: hidden">
        <el-row style="line-height: 60px;">
          <el-col :span="2">
            <router-link to="/">
              <img src="../static/images/buct.jpg" alt="" height="60px" width="60px">
            </router-link>
          </el-col>
          <el-col :span="2">
            <Link
              componentName = "/AllCourse"
              text = "全部课程" 
            />
          </el-col>
          <el-col :span="2">
            <Link
              componentName = "/OnlineBBS"
              text = "在线论坛" 
            />
          </el-col>
          <el-col :span="2">
            <Link
              componentName = "/upload"
              text = "资源上传" 
            />
          </el-col>
          <el-col :span="10">
            <el-input
              placeholder="请输入内容"
              v-model="input"
              prefix-icon="el-icon-search"
            >
            </el-input>
          </el-col>
          <el-col :offset="2" :span="3" style="text-align:right">
            <el-button v-if="!isLogin" size="mini" @click="dialogVisible = true">登陆</el-button>
            <div v-else>
              <span @click="Logout" style="cursor:pointer">注销</span>
              <i class="el-icon-bell" style="margin-left:20px"></i>
              <router-link to="/information">
                <img :src="userImg" alt="" class="userImg" style="vertical-align: middle;margin-left:15px;">
              </router-link>
            </div>
          </el-col>
        </el-row>

      </el-header>
      <el-main style="background-color:#f8fafc">
        <router-view></router-view>
      </el-main>
      <el-footer height="100px">
        <el-row class="center">
          <el-col :span="7" >企业合作</el-col>
          <el-col :span="7">联系我们</el-col>
          <el-col :span="7">意见反馈</el-col>
          <el-col :span="3">友情链接</el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Link from './components/common/Link'

export default {
  name: 'App',
  data() {
    return {
      userImg:'../static/images/userImg.jpg',
      input:'',
      dialogVisible:false,
      username:'',
      password:'',
      isLogin:false,
    };
  },
  components: {
    Link
  },
  methods:{
    submit() {
      var qs = require('qs');
      this.dialogVisible = false;
      this.$axios.post('api/isLegal', qs.stringify({
          username: this.username,
          password: this.password
      }))
      .then((res) => {
        if(res.data) {
          this.$axios.get('api/Message?uid=1')
            .then(res => {
              let data = res.data;
              localStorage.setItem('isLogin', true);
              localStorage.setItem('name', data.name);
              localStorage.setItem('imgUrl', '../static/images/userImg.jpg');
              localStorage.setItem('type', 0);
              this.isLogin = true;
              this.username = "";
              this.password = "";
              this.$message({
                showClose:true,
                message: '登陆成功',
                type: 'success'
              })
            })
        }else {
          this.$message({
            showClose: true,
            message: '用户名或密码错误',
            type: 'error'
          });
          this.username = "";
          this.password = "";
        }
      })
    },
    Logout() {
      localStorage.removeItem('isLogin');
      localStorage.removeItem('name');
      localStorage.removeItem('imgUrl');
      localStorage.removeItem('type');
      this.isLogin = false;
      this.$message({
        showClose:true,
        message: '注销成功',
        type: 'success'
      })
    }
  },
  mounted() {
    if(localStorage.getItem('isLogin')) {
      this.isLogin = true;
    }
  },
  beforeDestroy() {
    localStorage.removeItem('isLogin');
    localStorage.removeItem('name');
    localStorage.removeItem('imgUrl');
    localStorage.removeItem('type');
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
    padding: 0;
    min-height: 80vh;
    padding-bottom: 130px;

    overflow: auto;
  }
  .el-footer{
    width: 100%;
    background-color: #1c1f21;
    color: #838a8e;
    padding: 0px 20% 10px 20%;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  #app {
    min-width: 1400px;
  }
  .center {
    margin-top: 50px;
    transform: translateY(-50%);

  }
</style>
