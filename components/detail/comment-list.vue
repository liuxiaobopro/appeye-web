<template>
	<view>
		<view class="uni-comment-list" :class="{'uni-comment-list-child':(item.fid>0)}">
		    <view class="uni-comment-face">
		        <image :src="item.userpic" mode="widthFix"></image>
		    </view>
		    <view class="uni-comment-body">
		        <view class="uni-comment-top">
		            <text>{{item.username}}</text>
		        </view>
		        <view class="uni-comment-content">{{item.data}}</view>
		        <view class="uni-comment-date">
		            <view>{{item.time}}</view>
		            <!-- <view class="uni-comment-replay-btn">5回复</view> -->
		        </view>
		    </view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style scoped>
	
	.uni-comment-list-child{
		padding: 20upx;
		background-color: #F4F4F4;
		border-bottom: 1upx solid #EEEEEE;
		box-sizing: border-box;
		margin: 0;
		margin-left: 70upx;
		width: auto;
	}
	
</style>
