<template>
	<view>
		<!-- 模糊背景 -->
		<view class="topic-bg">
			<image :src="topicInfo.titlepic" mode="aspectFill" lazy-load></image>
		</view>
		<!-- 话题信息 -->
		<view class="topic-info">
			<view class="topic-info-t u-f-ac">
				<image :src="topicInfo.titlepic" mode="widthFix" lazy-load></image>
				<view>#{{topicInfo.title}}#</view>
			</view>
			<view class="topic-info-c u-f-ac">
				<view>动态 {{topicInfo.commentnum}}</view>
				<view>今日 {{topicInfo.today}}</view>
			</view>
			<view class="topic-info-b">
				{{topicInfo.desc}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			topicInfo:Object
		}
	}
</script>

<style scoped>
	/* 图片 */
	.topic-bg{
		width: 100%;
		height: 300upx;
		position: relative;
		overflow: hidden;
	}
	.topic-bg>image{
		width: 100%;
		position: absolute;
		filter: blur(10px);
	}
	/* 头部信息 */
	.topic-info{
		padding: 0 25upx;
	}
	.topic-info-t{
		position: relative;
	}
	.topic-info-t>image{
		width: 150upx;
		height: 150upx;
		border-radius: 20upx;
		position: absolute;
		top: -75upx;
	}
	.topic-info-t>view{
		font-size: 35upx;
		margin-left: 180upx;
		flex: 1;
	}
	.topic-info-c{
		padding: 40upx 0 10upx 0;
	}
	.topic-info-c>view{
		margin-right: 20upx;
	}
	.topic-info-c>view{
		color: #E1E1E1;
	}
	.topic-info-b{
		font-size: 30upx;
		color: #ABABAB;
		padding-bottom: 10upx;
	}
</style>
