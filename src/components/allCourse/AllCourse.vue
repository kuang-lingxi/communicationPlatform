<template>
    <div>
        <div class="main">
            <div class="hot-search">
                <el-input
                    type="text"
                    placeholder="请输入内容"
                    v-model="text"
                    prefix-icon="el-icon-search"
                    style="width:40%"
                >
                    <!-- <i slot="prefix" class="el-input__icon el-icon-search"></i> -->
                </el-input>
                <el-button
                    style="margin-left:-10px;background-color:red;color:white"
                >
                    搜索
                </el-button> <br>
                <span class="hot-text">
                    <span class="item">
                        热搜关键词:
                    </span>
                    <span v-for="item in hotwords" :key="item.id" class="item">
                        {{item.value}}
                    </span>
                </span>
            </div>
        </div>
        <el-row>
            <el-col :span="12" :offset="4">
                <el-row style="padding:20px 0">
                    <el-col :span="3">
                        <Link
                            componentName = "/AllCourse/courses"
                            text="课程"
                        />
                    </el-col>
                    <el-col :span="3">
                        <Link
                            componentName = "/AllCourse/topic"
                            text="话题"
                        />
                    </el-col>
                    <el-col :span="2">
                        <Link
                            componentName = "/AllCourse/group"
                            text="小组"
                        />
                    </el-col>
                    <el-col :span="15">
                        <span class="small-font">
                            共找到{{courses.amount}}个相关内容
                        </span>
                    </el-col>
                </el-row>
                <el-row>
                    <router-view></router-view>
                </el-row>
            </el-col>
            <el-col :span="4">
                <el-row style="padding: 15px 0">
                    <div style="margin-bottom: 15px">vue.js 相关用户</div>
                    <User
                        v-for="user in users"
                        :key="user.id"
                        :imgUrl="user.imgUrl"
                        :username="user.username"
                        class="user"
                    />
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Link from '../common/Link'
    import Course from '../common/Course'
    import User from '../common/User'
    export default {
        name: "AllCourse",
        data() {
            return {
                text:"",
                hotwords:[
                    {id:0, value: 'React.js'},
                    {id:1, value: 'Vue.js'},
                    {id:2, value: 'Java'},
                    {id:3, value: '人工智能'},
                    {id:4, value: 'Python'},
                    {id:5, value: '算法'}
                ],
                courses: {
                    amount: 65,
                    content: [

                    ]
                },
                users: [
                    {id:0, imgUrl: '../../../static/images/userImg.jpg', username: "klx"},
                    {id:1, imgUrl: '../../../static/images/userImg.jpg', username: "klx"},
                    {id:2, imgUrl: '../../../static/images/userImg.jpg', username: "klx"},
                    {id:3, imgUrl: '../../../static/images/userImg.jpg', username: "klx"},
                    {id:4, imgUrl: '../../../static/images/userImg.jpg', username: "klx"},
                    {id:5, imgUrl: '../../../static/images/userImg.jpg', username: "klx"},
                    {id:6, imgUrl: '../../../static/images/userImg.jpg', username: "klx"}
                ]
            }
        },
        components: {
            Link,
            User
        }
    }
</script>

<style lang="scss" scoped>
    .main{
        position: relative;
        background-color: #d9dde1;
        height: 100px;
        width: 100%;
        overflow: hidden;
        margin-bottom:10px;
    }
    .hot-search{
        /* display: inline-block; */
        position: relative;
        top:50%;
        transform: translateY(-50%);
        text-align: center
    }
    .hot-text {
        display: inline-block;
        width:45%;
        text-align: left;
        margin-top:10px;
    }
    .item {
        padding:0 10px;
        font-size: 10px;
        color: #757c81;
    }
    .small-font{
        font-size: 10px;
        color: #888e94;
    }
    .user {
        width:33.33%;
        display: inline-block;
    }
</style>
