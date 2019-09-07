<template>
	<el-row class="card" gutter="20">
		<el-col :span="5" style="overflow:hidden">
			<img src="../../../static/images/userImg.jpg" alt="" width="150px" height="80px">
		</el-col>
		<el-col :span="14">
			<el-row class="mt">
				<span class="title">MAYA-NURBS曲线建模</span>
				<span class="small">更新至2-4</span>
			</el-row>
			<el-row class="mt">
				<el-col :span="4">
					<span class="small" style="color:red">已学 0%</span>
				</el-col>
				<el-col :span="4">
					<span class="small">用时17分</span>
				</el-col>
				<el-col :span="13">
					<span class="small">学习至1-1曲线工具简单介绍</span>
				</el-col>
			</el-row>
			<el-row class="mt">
				<el-col :span="8">
					<span class="small">笔记 20</span>
				</el-col>
				<el-col :span="8">
					<span class="small">代码 0</span>
				</el-col>
				<el-col :span="8">
					<span class="small">问答: 33</span>
				</el-col>
			</el-row>
		</el-col>
		<el-col :span="4">
			<div class="button">继续学习</div>
		</el-col>
		<i class="el-icon-arrow-down" style="cursor: pointer"></i>
	</el-row>
</template>

<script>
export default {

}
</script>

<style scoped>
	.title {
		color: rgba(28, 31, 33, 1);
		font-weight: bold;
	}
	.small {
		font-size: 10px;
		color: rgba(147, 153, 159, 1);
	}
	.card {
		margin-top: 10px;
		padding-bottom: 15px;

		border-bottom: 1px solid #e0e0e0;
	}
	/* .card::after {
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		background-color: #e0e0e0;

		position: relative;
		top: 20px;
	} */
	.mt {
		margin-top: 5px;
	}
	.button {
		padding: 5px 10px;
		border: 1px solid red;
		color: red;
		text-align: center;
		font-size: 15px;
		margin-top: 50px;
		cursor: pointer;
	}
</style>