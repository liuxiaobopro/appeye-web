<template>
	<view>
		<template v-if="!islogin">
			<!-- 未登录 -->
			<view class="u-f-ajc">登录糗百,体验更多功能</view>
			<!-- 第三方登录 -->
			<home-other-login></home-other-login>
			<!-- 账号密码登录 -->
			<view class="u-f-ajc" @tap="login">账号密码登录<view class="icon iconfont icon-ziyuanldpi"></view></view>
		</template>
		<template v-if="islogin">
			<!-- 登录 -->
			<home-user :homeuser="homeuser"></home-user>
		</template>
		<!-- 数据 -->
		<home-info :homeinfo="homeinfo"></home-info>
		<!-- 广告位 -->
		<view class="home-adv u-f-ajc">
			<image src="../../static/images/ad-006.png" mode="scaleToFill" lazy-load></image>
		</view>
		<!-- 功能列表 -->
		<view class="home-list">
			<block v-for="(item, index) in homelist" :key="index">
				<home-list-item :item="item" :index="index"></home-list-item>
			</block>
		</view>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue';
	import homeInfo from '../../components/home/home-info.vue';
	import homeUser from '../../components/home/home-user.vue';
	import homeOtherLogin from '../../components/home/home-other-login.vue';
	export default {
		components:{
			homeListItem,
			homeInfo,
			homeUser,
			homeOtherLogin
		},
		data() {
			return {
				islogin:true,
				homelist:[
					{
						listicon:"icon-weibo",
						text:"浏览历史",
						clicktype:"",
						url:""
					},
					{
						listicon:"icon-qq",
						text:"糗百认证",
						clicktype:"",
						url:""
					},
					{
						listicon:"icon-weibo",
						text:"审核糗事",
						clicktype:"",
						url:""
					},
				],
				homeinfo:[
					{
						text:"糗事",
						num:1
					},
					{
						text:"动态",
						num:10
					},
					{
						text:"关注",
						num:0
					},
					{
						text:"粉丝",
						num:20
					},
				],
				homeuser:{
					userpic:"../../static/logo.png",
					username:"小酒窝",
					totalnum:"112",
					todaynum:"22"
				}
			}
		},
		onNavigationBarButtonTap(e){
			if(e.index == 0){
				uni.navigateTo({
					url: '../user-set/user-set',
					
				});
			}
		},
		methods: {
			login(){
				uni.navigateTo({
					url: '../login/login',
					animationType: 'slide-in-bottom',
					animationDuration: 200
				});
			}
		}
	}
</script>

<style>
	
	.home-adv{
		padding: 20upx;
	}
	.home-adv image{
		height: 200upx;
		border-radius: 20upx;
	}
	.icon-ziyuanldpi{
		font-size: 20upx;
	}
	
</style>
