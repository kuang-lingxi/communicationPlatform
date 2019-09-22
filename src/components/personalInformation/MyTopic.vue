<template>
	<el-row>
			<el-col :span="2">
			<div class="year">2018</div>
			<div class="date">7月12日</div>
			</el-col>
			<el-col :span="22" class="main">
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
					:prompt="item.prompt"
					style="margin:10px 0"
				/>
			</el-col>
			<el-col id="pagination" style="margin-top: 20px;">
				<el-pagination
					background
					layout="prev, pager, next"
					:total="100"
				>
				</el-pagination>
			</el-col>
	</el-row>
	<!-- <div>
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
	</!-->
</template>

<script>
import TopicCard from '../common/TopicCard'
export default {
    data() {
        return {
            topics:[
                {id:0, imgUrl:'../../../static/images/userImg.jpg', type:'人工智能', titleFirst:'人工智能', titleSecond:'还有前景吗', amount:4, username:'klx', content:'人工智能（Artificial Intelligence），英文缩写为AI。它是研究、开发用于模拟、延伸和扩展人的智能的理论、方法、技术及应用系统的一门新的技术科学。', prompt: '我发布了'},
                {id:1, imgUrl:'../../../static/images/userImg.jpg', type:'React.js', titleFirst:'Reactjs', titleSecond:'真的好吗?', amount:4, username:'klx', content:'前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。', prompt: '我讨论了'},
                {id:2, imgUrl:'../../../static/images/userImg.jpg', type:'React.js', titleFirst:'Reactjs', titleSecond:'真的好吗?', amount:4, username:'klx', content:'前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。', prompt: '我赞同了'},
                {id:3, imgUrl:'../../../static/images/userImg.jpg', type:'React.js', titleFirst:'Reactjs', titleSecond:'真的好吗?', amount:4, username:'klx', content:'前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。前端开发工程师是Web前端开发工程师的简称，2007年才真正开始受到重视的一个新兴职业。 Web前端开发技术是一个先易后难的过程，主要包括三个要素：HTML（标准通用标记语言下的一个应用）、级联样式表和JavaScript。', prompt: '我讨论了'},
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
		margin-left:50%;
		transform: translateX(-20%)
	}
	.main {
    padding-left: 15px;
    border-left: 1px solid #c5c9cd;

    position: relative;
  }
  .main::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #c5c9cd;

    position: absolute;
    left: -5px;
    top: -5px;
  }
  .year {
    color: #c5c9cd;
    font-size: 15px;

    text-align: right;
    margin-right: 15px;
  }
  .date {
    color: #c5c9cd;
    font-size: 10px;

    text-align: right;
    margin-right: 10px;
  }
</style>