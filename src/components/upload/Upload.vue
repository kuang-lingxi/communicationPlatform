<template>
  <el-row class="mt" :gutter="10">
    <el-col :span="4" :offset="4">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="1">
          <i class="el-icon-upload"></i>
          <span>上传</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-coordinate"></i>
          <span slot="title">正则审核</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-check"></i>
          <span slot="title">已审核</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="10">
      <el-row>
        <el-upload
          class="upload-demo center"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传AVI/MPEG文件，且不超过500MB</div>
        </el-upload>
      </el-row>
      <el-row>
        <el-col :span="24" class="title">视频信息</el-col>
      </el-row>
      <el-row>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="视频名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="视频描述">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="添加标签">
            <el-tag
              class="ml"
              v-for="tag in tags"
              :key="tag.name"
              closable
              :type="tag.type">
              {{tag.name}}
            </el-tag>
            <div class="chose">
              <div>可选:</div>
              <el-tag
                class="ml"
                v-for="tag in tags"
                :key="tag.name"
                :type="tag.type">
                {{tag.name}}
              </el-tag>
            </div>
          </el-form-item>
          <el-checkbox v-model="checked" class="center">我承诺上传视频均为原创或已得到版权</el-checkbox>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" class="center">立即上传</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  export default {
     data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        checked: '',
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      click() {
        alert('click')
      },
      onSubmit() {

      }
    }
  }
</script>

<style scoped>
  .mt {
    margin-top: 20px;
  }
  .center {
    /* margin: 0 auto; */
    margin-left: 50%;
    transform: translateX(-50%);
  }
  .title {
    background-color: #f5f5f5;
    padding:10px;
    margin: 10px;
  }
  .ml {
    margin-left: 5px;
  }
  .chose {
    border: 1px solid #d6d6d6;
    border-radius: 10px;
    margin-top: 5px;
    padding: 10px 20px;
  }
</style>