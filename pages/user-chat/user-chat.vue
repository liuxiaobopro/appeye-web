<template>
	<view>
		<!-- 聊天列表 -->
		<view class="user-chat-list u-f-ac user-chat-me">
			<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
			<view class="user-chat-list-body">
				<text>
					iuwox
				</text>
			</view>
		</view>
		<!-- 输入框 -->
		<user-chat @submit="submit"></user-chat>
	</view>
</template>

<script>
	import userChat from '../../components/usre-chat/user-chat.vue';
	export default {
		components:{
			userChat
		},
		data() {
			return {
				
			}
		},
		methods: {
			submit(data){
				// 发送逻辑
				uni.showToast({
					title: data
				});
			}
		}
	}
</script>

<style>
	.user-chat-list{
		
	}
	.user-chat-list>image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		flex-shrink: 0;
	}
	.user-chat-list-body{
		position: relative;
		background-color: #F4F4F4;
		/* padding: 25upx; */
		margin-left: 20upx;
		border-radius: 20upx;
		margin-right: 100upx;
	}
	.user-chat-list-body:after{
		position: absolute;
		left: -30upx;
		top: 30upx;
		right: 0;
		content: '';
		height: 0;
		width: 0;
		border: 16upx solid #F4F4F4;
		border-color: transparent #F4F4F4 transparent transparent;
	}
	.user-chat-me{
		justify-content: flex-end;
	}
	.user-chat-me .user-chat-list-body{
		margin-right: 20upx;
		margin-left: 100upx;
	}
	.user-chat-me .user-chat-list-body::after{
		left:auto;
		right: -30upx;
		border-color: transparent transparent transparent #F4F4F4;
	}
</style>
