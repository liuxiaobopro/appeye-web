<template>
	<view class="body">
		<view class="">
			<block v-for="(item, index) in homelist" :key="index">
				<home-list-item :item="item" :index="index"></home-list-item>
			</block>
		</view>
		<button class="user-set-btn" type="primary">退出登录</button>
	</view>
</template>

<script>
	import homeListItem from '../../components/home/home-list-item.vue';
	export default {
		components:{
			homeListItem
		},
		data() {
			return {
				homelist:[
					{ text:"账号与安全", clicktype:"navigateTo", url:"../../pages/user-set-repassword/user-set-repassword" },
					{ text:"绑定邮箱", clicktype:"navigateTo", url:"../../pages/user-set-email/user-set-email" },
					{ text:"资料编辑", clicktype:"navigateTo", url:"../../pages/user-set-userinfo/user-set-userinfo" },
					{ text:"小纸条", clicktype:"navigateTo", url:"" },
					{ text:"清理缓存", clicktype:"clear", url:"" },
					{ text:"意见反馈", clicktype:"navigateTo", url:"../../pages/user-set-help/user-set-help" },
					{ text:"关于我们", clicktype:"navigateTo", url:"../../pages/user-set-about/user-set-about" },
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.body{
		padding: 0 20upx;
	}
	.user-set-btn{
		width: 100%;
		margin: 20upx 0;
		background-color: #ffe933!important;
		color: #333333!important;
		border: 0!important;
	}
</style>
