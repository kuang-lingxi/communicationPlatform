<template>
    <div>
        <el-row>
            <TopicCard
                v-for="item in topics"
                :key="item.id"
                :imgUrl="item.imgUrl"
                :type="item.type"
                :titleFirst="item.titleFirst"
                :titleSecond="item.titleSecond"
                :amount="item.amount"
                :username="item.username"
                :content="item.content"
                style="margin:10px 0"
            />
        </el-row>
        <div id="pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                :total="100"
            >
            </el-pagination>
        </div>
    </div>
</template>

<script>
import TopicCard from '../common/TopicCard.vue';
export default {
    data() {
        return {
            topics:[
                {id:0, imgUrl:'../../../static/images/userImg.jpg', type:'React.js', titleFirst:'大创课题', titleSecond:'国际化交流平台', amount:4, username:'klx', content:'前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。'},
                {id:1, imgUrl:'../../../static/images/userImg.jpg', type:'React.js', titleFirst:'大创课题', titleSecond:'国际化交流平台', amount:4, username:'klx', content:'前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。'},
                {id:2, imgUrl:'../../../static/images/userImg.jpg', type:'React.js', titleFirst:'大创课题', titleSecond:'国际化交流平台', amount:4, username:'klx', content:'前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。'},
                {id:3, imgUrl:'../../../static/images/userImg.jpg', type:'React.js', titleFirst:'大创课题', titleSecond:'国际化交流平台', amount:4, username:'klx', content:'前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。'},
                ]
        }
    },
    components: {
        TopicCard
    }
}
</script>

<style scoped>
    #pagination {
        margin-left:40%;
        transform: translateX(-30%)
    }
</style>
