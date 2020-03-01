<template>
	<view>
		<view class="paper-left-popup-mask" v-show="show" @tap="hidepopup"></view>
		<view class="paper-left-popup" v-show="show">
			<view class="u-f-ac" hover-class="paper-left-popup-h" @tap="addfriend">
				<view class="icon iconfont icon-sousuo"></view> 加好友
			</view>
			<view class="u-f-ac" hover-class="paper-left-popup-h" @tap="clear">
				<view class="icon iconfont icon-saoba"></view> 清理未读
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			show:Boolean,
		},
		methods:{
			hidepopup(){
				this.$emit('hidepopup')
			},
			addfriend(){
				this.$emit('addfriend')
			},
			clear(){
				this.$emit('clear')
			}
		}
	}
</script>

<style scoped>
	.paper-left-popup-mask{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 199;
	}
	.paper-left-popup{
		position: fixed;
		right: 0;
		top: 10upx;
		background-color: #FFFFFF;
		z-index: 200;
		width: 35%;
		box-shadow: 1upx 1upx 20upx 2upx #CCCCCC;
	}
	.paper-left-popup>view{
		padding: 20upx;
		font-size: 35upx;
	}
	.paper-left-popup>view>view{
		margin-right: 10upx;
		font-weight: bold;
	}
	.paper-left-popup-h{
		background-color: #EEEEEE;
	}
</style>
