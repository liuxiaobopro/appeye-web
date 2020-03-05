<template>
	<view class="home-user u-f-ac" @tap="userSpace">
		<view class="home-userpic">
			<image :src="homeuser.userpic" mode="widthFix" lazy-load></image>
		</view>
		<view class="home-userinfo u-f1">
			<view>{{homeuser.username}}</view>
			<view>总访客 {{homeuser.totalnum}} 今日 {{homeuser.todaynum}} </view>
		</view>
		<view class="icon iconfont icon-ziyuanldpi home-user-right"></view>
	</view>
</template>

<script>
	export default {
		props:{
			homeuser:Object
		},
		methods:{
			userSpace(){
				uni.navigateTo({
					url: '../../pages/user-space/user-space',
				});
			}
		}
	}
</script>

<style scoped>
	.home-user{
		padding: 20upx;
	}
	.home-user .home-userpic>image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		margin-right: 20upx;
		flex-shrink: 0;
	}
	.home-user .home-userinfo>view:first-child{
		font-size: 32upx;
	}
	.home-user .home-userinfo>view:last-child{
		color: #BBBBBB;
		font-size: 28upx;
	}
	.home-user .home-user-right{
		margin-right: 20upx;
		color: #CCCCCC;
	}
</style>
