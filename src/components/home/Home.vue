<template>
  <div>
    <main class="main">
      <el-row>
        <el-col :span="6" class="mainLeft">
          <div class="item" v-for="val in item" :key="val.id">
            <div class="item">
              {{val.msg}}
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </el-col>
        <el-col :span="18">
          <el-carousel>
            <el-carousel-item v-for="item in 4" :key="item">
              {{item}}
            </el-carousel-item>
          </el-carousel>
          <el-row style="padding: 10px">
                <span class="mainBottom" v-for="item in bottom" :key="item.id">
                  <img class="mainBottomImg" :src="item.imgUrl" alt="">
                  <p class="mainBottomTitle">{{item.title}}</p>
                  <p class="mainBottomContent">{{item.content}}</p>
                </span>
          </el-row>
        </el-col>
      </el-row>
    </main>
    <div style="width: 100%;text-align: center;font-weight: bold;margin: 20px 0;">课程推荐</div>
    <div class="recommendedMain">
      <course
        v-for="item in course"
        :key="item.id"
        :imgUrl="item.imgUrl"
        :title="item.title"
        :tag1="item.tag1"
        :tag2="item.tag2"
        :money="item.money"
        :number="item.number"
        :hot="item.hot"
        class="course"
      />
    </div>

  </div>
</template>

<script>
    import course from '@/components/common/Course'
    export default {
        name: "home",
        components:{
          course
        },
        data() {
          return {
            item:[
              {id:0, msg:'前沿/区块链/人工智能'},
              {id:1, msg:'前沿/区块链/人工智能'},
              {id:2, msg:'前沿/区块链/人工智能'},
              {id:3, msg:'前沿/区块链/人工智能'},
              {id:4, msg:'前沿/区块链/人工智能'},
              {id:5, msg:'前沿/区块链/人工智能'},
              {id:6, msg:'前沿/区块链/人工智能'},
            ],
            bottom:[
              {id:0, title:'Web前端攻城狮子', content:'互联网时代最火爆的技术', imgUrl:'../static/images/userImg.jpg'},
              {id:1, title:'Web前端攻城狮子', content:'互联网时代最火爆的技术', imgUrl:'../static/images/userImg.jpg'},
              {id:2, title:'Web前端攻城狮子', content:'互联网时代最火爆的技术', imgUrl:'../static/images/userImg.jpg'},
              {id:3, title:'Web前端攻城狮子', content:'互联网时代最火爆的技术', imgUrl:'../static/images/userImg.jpg'},
              {id:4, title:'Web前端攻城狮子', content:'互联网时代最火爆的技术', imgUrl:'../static/images/userImg.jpg'},
            ],
            recommende:[
              {id:0, imgUrl:'', title:'1', content:'11'},
              {id:1, imgUrl:'', title:'2', content:'22'},
              {id:2, imgUrl:'', title:'3', content:'33'},
              {id:3, imgUrl:'', title:'4', content:'44'},
              {id:4, imgUrl:'', title:'5', content:'55'}
            ],
            course:[
              {id:0, imgUrl: '../../../static/images/userImg.jpg',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
              {id:1, imgUrl: '../../../static/images/userImg.jpg',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
              {id:2, imgUrl: '../../../static/images/userImg.jpg',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
              {id:3, imgUrl: '../../../static/images/userImg.jpg',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
              {id:4, imgUrl: '../../../static/images/userImg.jpg',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
             ]
          }
        }
    }
</script>

<style scoped>

  .main{
    margin: 10px auto;
    border:1px solid black;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    border-radius: 7px;
    width:65%;
  }
  .mainLeft{
    background-color: #2b333b;
    color:#aaadb1;
  }


  /*走马灯底部链接的样式*/
  .mainBottom{
    width: 19%;
    /*border:1px solid black;*/
    display: inline-block;
    text-align: center;
    margin-top: 10px;
  }
  .mainBottomImg{
    width:30px;
    height: 30px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
  }
  .mainBottomTitle{
    font-size: 10px;
    margin-top:10px;
    margin-bottom: 5px;
  }
  .mainBottomContent{
    font-size: 10px;
  }
  /*走马灯底部链接*/


  /*左边列表*/
  .item{
    cursor: pointer;
    padding: 10px;
  }

  /*走马灯效果*/
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /*走马灯效果*/

  /*推荐课程*/
  .recommendedMain{
    margin: 0px auto;
    width:1025px;
    /*border: 1px solid black;*/
    overflow: hidden;
  }
  .recommendeContent{
    display: inline-block;
    width:20%
  }
  /*推荐课程*/

  /*单个课程设置浮动排列一行*/
  .course {
    float: left;
    margin-left: 5px;
  }
</style>
