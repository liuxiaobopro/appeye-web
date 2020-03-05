<template>
	<view class="user-space-head u-f-ajc">
		<image :src="getBgimg" mode="widthFix" lazy-load @tap="changeBgImg"></image>
		<view class="user-space-head-info u-f-ajc u-f-column">
			<image :src="userinfo.userpic" mode="widthFix" lazy-load></image>
			<view class="common-list-r user-space-margin u-f-ac">
				{{userinfo.username}} <tag-sex-age :age="userinfo.age" :sex="userinfo.sex"></tag-sex-age>
			</view>
			<!-- <template v-if="!userinfo.isguanzhu">
				<view class="icon iconfont icon-jiahao user-space-head-btn user-space-margin" >
					关注
				</view>
			</template>
			<template v-if="userinfo.isguanzhu">
				<view class="active user-space-head-btn user-space-margin" >
					已关注
				</view>
			</template> -->
			<view class=" user-space-head-btn user-space-margin" :class="[isguanzhu ? 'active':'icon iconfont icon-jiahao']" @tap="guanzhu">
				{{!isguanzhu ? "关注":"已关注"}}
			</view>
			
		</view>
	</view>
</template>

<script>
	import tagSexAge from '../common/tag-sex-age.vue';
	export default {
		components:{
			tagSexAge
		},
		props:{
			userinfo: Object
		},
		data() {
			return {
				isguanzhu: this.userinfo.isguanzhu
			}
		},
		computed:{
			getBgimg(){
				return "../../static/bgimg/ad-00"+this.userinfo.bgimg+".png"
			}
		},
		methods:{
			// 关注
			guanzhu(){
				this.isguanzhu = !this.isguanzhu
			},
			// 切换背景
			changeBgImg(){
				let num = parseInt(this.userinfo.bgimg);
				num < 8 ? num++ : num = 1;
				this.userinfo.bgimg = num
			}
		}
	}
</script>

<style scoped>
	.user-space-margin{
		margin: 15upx 0;
	}
	.user-space-head{
		position: relative;
		height: 500upx;
		overflow: hidden;
	}
	.user-space-head>image{
		width: 100%;
	}
	.user-space-head-info{
		position: absolute;
		top: 150upx;
	}
	.user-space-head-info>image{
		width: 150upx;
		height: 150upx;
		border-radius: 100%;
	}
	.user-space-head-info>view:first-of-type{
		color: #FFFFFF;
		font-size: 35upx;
		font-weight: bold;
		/* text-shadow: 2upx 2upx 10upx #333333; */
	}
	.user-space-head-btn{
		background-color: #FFE933;
		color: #333333;
		border-radius: 10upx;
		border: 1upx solid #FFE933;
		padding: 0 15upx;
		font-size: 28upx;
	}
	.active{
		background: none;
		color: #FFFFFF;
		border: 1upx solid #FFFFFF;
	}
</style>
