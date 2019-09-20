<template>
    <div>
        <div id="content">
            <Course
                v-for="item in course"
                :key="item.id"
                :title="item.title"
                :imgUrl="item.imgUrl"
                :tag1="item.tag1"
                :tag2="item.tag2"
                :money="item.money"
                :hot="item.hot"
                :number="item.number"
                class="course"
            />
        </div>
        <div id="pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="100"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
import Course from '../common/Course'
export default {
    data() {
        return {
            course:[
              {id:0, imgUrl: '../../../static/images/5d4ceaef09c3cb6612000676.png',title:'Vue2.x饿了么实战xwefwheufhwiefuhiwuefhiwuehfiwuefhuw', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
              {id:1, imgUrl: '../../../static/images/5d4ceaef09c3cb6612000676.png',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
              {id:2, imgUrl: '../../../static/images/5d4ceaef09c3cb6612000676.png',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
              {id:3, imgUrl: '../../../static/images/5d4ceaef09c3cb6612000676.png',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
              {id:4, imgUrl: '../../../static/images/5d4ceaef09c3cb6612000676.png',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
              {id:5, imgUrl: '../../../static/images/5d4ceaef09c3cb6612000676.png',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
              {id:6, imgUrl: '../../../static/images/5d4ceaef09c3cb6612000676.png',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
              {id:7, imgUrl: '../../../static/images/5d4ceaef09c3cb6612000676.png',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
              {id:8, imgUrl: '../../../static/images/5d4ceaef09c3cb6612000676.png',title:'Vue2.x饿了么实战', tag1:'实战', tag2:'中级', money:280, hot:3.7, number:2100},
             ]
        }
    },
    components: {
        Course
    }
}
</script>

<style scoped>
    #content {
        width:100%;
        /* height: 75vh;
        overflow: scroll; */
    }
    #pagination {
        text-align: center;
        margin-top:25px;
    }
    .course {
        display: inline-block;
        box-sizing: border-box;
        width: 33.333%;
        padding:0 10px;
    }
</style>
