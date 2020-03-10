<template>
	<view class="topic-update-list u-f-ac animated fadeIn fast" @tap="opendetail(index)">
		<view>
			<image :src="item.pic" mode="widthFix" lazy-load=""></image>
		</view>
		<view>
			<view>#{{item.title}}#</view>
			<view>{{item.comment}}</view>
			<view>动态{{item.commentnum}} 今日{{item.today}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
		methods:{
			opendetail(index){
				this.$emit('opendetail', index);
			}
		}
	}
</script>

<style scoped>
	.topic-update-list{
		margin-top: 20upx;
		padding-bottom: 10upx;
		border-bottom: 1upx solid #F2F2F2;
	}
	.topic-update-list>view:nth-child(1){
		margin-right: 20upx;
	}
	.topic-update-list>view:nth-child(1)>image{
		width: 120upx;
		height: 120upx;
		border-radius: 20upx;
	}
	.topic-update-list>view:nth-child(2)>view:nth-child(1){
		font-size: 35upx;
	}
	.topic-update-list>view:nth-child(2)>view:nth-child(3){
		padding-bottom: 10upx;
	}
	.topic-update-list>view:nth-child(2)>view:nth-child(n+2){
		color: #B3B3B3;
		font-size: 24upx;
	}
</style>
