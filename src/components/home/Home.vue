<template>
  <div>
    <main class="main">
      <el-row>
        <el-col :span="6" class="mainLeft">
          <div class="item" v-for="val in item">
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
      <span class="recommendeContent" v-for="item in recommende" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <p>{{item.title}}</p>
        <p>{{item.content}}</p>
      </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "home",
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
            ]
          }
        }
    }
</script>

<style scoped>
  /*走马灯底部链接*/
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

  .item{
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
    width:65%;
    border: 1px solid black;
  }
  .recommendeContent{
    display: inline-block;
    width:20%
  }
</style>
