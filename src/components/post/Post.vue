<template>
  <el-row>
    <el-col :offset="4" :span="16">
      <el-row class="title">
        <el-col :span="2">
          <el-avatar class="centerImg" src="../../../static/images/userImg.jpg"></el-avatar>
        </el-col>
        <el-col :span="7" style="line-height: 70px;">
          <h4>有没有UI大神？问几个问题可以吗？</h4>
        </el-col>
        <el-col :span="15" style="line-height: 75px;font-size: 10px;color:#c2c3c4">
          <span>参与人数: 15</span>
          <span>回帖: 20</span>
        </el-col>
      </el-row>
      <el-row style="display:flex">
        <el-col :span="18">
          <Reply
            v-for="item in reply"
            :key="item.key"
            :name="item.name"
            :imgUrl="item.imgUrl"
            :text="item.text"
            :type="item.type"
            :time="item.time"
          />
        </el-col>
        <el-col :span="6" class="recommend">
          <h6>热门帖子</h6>
          <el-row class="item">
            <el-col :span="19">
              <span class="sp">1</span>
              <span>人工智能的未来发展</span>
            </el-col>
            <el-col :span="5">
              <span class="people">12314</span>
            </el-col>
          </el-row>
          <el-row class="item">
            <el-col :span="19">
              <span class="sp">2</span>
              <span>人工智能的未来发展</span>
            </el-col>
            <el-col :span="5">
              <span class="people">12314</span>
            </el-col>
          </el-row>
          <el-row class="item">
            <el-col :span="19">
              <span class="sp">3</span>
              <span>UI设计小技巧教学</span>
            </el-col>
            <el-col :span="5">
              <span class="people">12314</span>
            </el-col>
          </el-row>
          <el-row class="item">
            <el-col :span="19">
              <span class="normal">4</span>
              <span>UI设计到底如何入门</span>
            </el-col>
            <el-col :span="5">
              <span class="people">1432</span>
            </el-col>
          </el-row>
          <el-row class="item">
            <el-col :span="19">
              <span class="normal">5</span>
              <span>计算机真的那么火吗？</span>
            </el-col>
            <el-col :span="5">
              <span class="people">888</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
      </el-row>
      <el-row class="reply">
        <el-col>
          <i class="el-icon-edit-outline"></i>
          <h6 style="display:inline">发表回复</h6>
        </el-col>
        <el-col>
          <div class="content">
            <textarea name="" id="" cols="100" rows="20" style="background-color:#ffffff"></textarea>
          </div>
        </el-col>
        <el-col style="margin-top: 10px">
          <el-button size="mini" type="primary">回复</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import Reply from './Reply'
export default {
  data() {
    return {
      reply:[
        {key:1, imgUrl:'../../../static/images/buct.jpg', name:'好好学习', text:'你想问什么倒是说啊', type:'学生', time:'1楼 2019-8-19 10:08'},
        {key:2, imgUrl:'../../../static/images/buct.jpg', name:'好好学习1', text:'我觉得这个问题很好', type:'学生', time:'2楼 2019-8-19 10:08'},
        {key:3, imgUrl:'../../../static/images/buct.jpg', name:'好好学习2', text:'我是三楼', type:'学生', time:'3楼 2019-8-19 10:08'},
        {key:4, imgUrl:'../../../static/images/buct.jpg', name:'好好学习3', text:'请不要水帖', type:'学生', time:'4楼 2019-8-19 10:08'},
        {key:5, imgUrl:'../../../static/images/buct.jpg', name:'好好学习4', text:'我是五楼', type:'学生', time:'5楼 2019-8-19 10:08'},
        {key:6, imgUrl:'../../../static/images/buct.jpg', name:'好好学习5', text:'交个朋友', type:'学生', time:'6楼 2019-8-10 10:08'},
        {key:7, imgUrl:'../../../static/images/buct.jpg', name:'好好学习6', text:'good job', type:'老师', time:'7楼 2019-8-20 10:08'}
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  components: {
    Reply
  },
   methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
}
</script>

<style scoped>
  .title {
    background-color: #f4f6f9;
    height: 70px;
    padding: 0 20px;
    overflow: hidden;
  }
  .centerImg {
    margin-top: 35px;
    transform: translateY(-50%);
    /* vertical-align: middle; */
  }
  .titleFont {
    line-height: 70px;
  }
  .recommend {
    border-right:1px solid #ebecef;
    border-bottom:1px solid #ebecef;
    padding:10px;
  }
  .item {
    font-size: 10px;
    position: relative;
  }
  .sp {
    width: 15px;
    height: 15px;;
    display: inline-block;
    background-color: #ff7f42;
    line-height: 15px;
    text-align: center;
    margin-top: 5px;
  }
  .normal {
    width: 15px;
    height: 15px;;
    display: inline-block;
    line-height: 15px;
    text-align: center;
    margin-top: 5px;
  }
  .people {
    height: 15px;
    display: inline-block;
    line-height: 15px;
    margin-top: 5px;
  }
  .pagination {
    padding:20px;
    border:1px solid #ebecef;
  }
  .reply {
    background-color: #f5f5f5;
    padding: 20px 15px;
  }
  .content {
    border: 1px solid #dfdfdf;
    padding: 30px 20px;
    margin-top: 15px;
    width: 70%;
  }
</style>