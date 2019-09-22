<template>
  <div>
    <el-dialog
      title="提问"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-input type="textarea" v-model="textarea"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <el-row>
      <el-col :offset="20" :span="3">
        <div class="publish" @click="publish">我要发布</div>
      </el-col>
    </el-row>
    <el-row class="content" v-for="item in question" :key="item.title">
      <el-col :offset="2" :span="3">
        <el-avatar src="../../../static/images/userImg.jpg"></el-avatar>
      </el-col>
      <el-col :span="18">
        <h5>{{item.title}}</h5>
        <div class="answer">我来回答 +2积分</div><br>
        <span class="font">{{item.answer}}</span>
        <span class="font">{{item.view}}</span>
        <span class="font time">{{item.time}}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: [
        {title:'有UI大神吗?问几个问题可以吗', answer:'17 回答', view: '814浏览', time:'2019/9/22 上午9:43:50'},
        {title:'UI好学吗', answer:'0 回答', view: '814浏览', time:'2019/9/22 上午9:43:50'}
      ],
      dialogVisible: false,
      textarea: "",
    }
  },
  methods: {
    publish() {
      this.dialogVisible = true;
    },
    submit() {
      this.dialogVisible = false;
      let temp = {};
      temp.title = this.textarea;
      temp.answer = "0 回答"
      temp.view = "0 浏览"
      temp.time = new Date().toLocaleString();
      this.question.push(temp);
      localStorage.setItem('question', JSON.stringify(this.question));
    }
  },
  mounted() {
    if(localStorage.getItem('question')) {
      this.question = JSON.parse(localStorage.getItem('question'));
    }
    console.log(this.question);
  }
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
    margin-left: 40%;
  }
</style>