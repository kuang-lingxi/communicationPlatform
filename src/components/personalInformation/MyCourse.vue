<template>
    <el-row>
        <el-col :span="2">
        <div class="year">2018</div>
        <div class="date">7月12日</div>
        </el-col>
        <el-col :span="22" class="main">
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
					<CourseCard/>
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
</template>

<script>
import CourseCard from '@/components/common/CourseCard';
export default {
    components: {
        CourseCard
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