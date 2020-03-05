<template>
	<view class="user-space-userinfo">
		<view class="user-space-userinfo-item">
			<view>账号信息</view>
			<view>注册时长: {{userinfo.reglongtime}}</view>
			<view>ID: {{userinfo.id}}</view>
		</view>
		<view class="user-space-userinfo-item">
			<view>个人信息</view>
			<view>星座: {{userinfo.xz}}</view>
			<view>职业: {{userinfo.job}}</view>
			<view>故乡: {{userinfo.path}}</view>
			<view>情感: {{userinfo.qg}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			userinfo: Object
		}
	}
</script>

<style scoped>
	.user-space-userinfo{
		padding: 0 30upx;
	}
	.user-space-userinfo-item{
		padding: 20upx 0;
		border-bottom: 1upx solid #EEEEEE;
	}
	.user-space-userinfo-item>view{
		color: #AAAAAA;
	}
	.user-space-userinfo-item>view:first-child{
		color: #333333;
		font-size: 35upx;
		padding: 15upx 0;
	}
</style>
