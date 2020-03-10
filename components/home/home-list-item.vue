<template>
	<view class="home-list-item u-f-ac u-f-jsb animated fadeIn fast" hover-class="home-list-hover" @tap="clickeven">
		<view class="u-f-ac">
			<view v-if="item.listicon" class="icon iconfont" :class="item.listicon"></view>{{item.text}}
		</view>
		<view class="icon iconfont icon-ziyuanldpi"></view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
		methods:{
			clickeven(){
				switch (this.item.clicktype){
					case "navigateTo":
					if(this.item.url){
						uni.navigateTo({
							url: this.item.url,
						});
					}
						break;
					case "clear":
					uni.showModal({
						title: '提示',
						content: '是否清除缓存?',
						cancelText: '不了',
						confirmText: '立即清除',
						success: res => {
							if(res.confirm){
								uni.clearStorage()
								uni.showToast({
									title: '清理缓存成功'
								});
							}
						},
					});
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style scoped>
	.icon-ziyuanldpi{
		font-size: 20upx;
	}
	.home-list{
		padding: 20upx;
	}
	.home-list-item{
		padding: 20upx;
		margin: 10upx 0;
		/* border-bottom: 1upx solid #EEEEEE; */
		/* border-top: 1upx solid #EEEEEE; */
	}
	.home-list-item>view:first-child{
		color: #333333;
		font-size: 32upx;
		/* font-weight: bold; */
	}
	.home-list-item>view:first-child>view{
		margin-right: 10upx;
	}
	.home-list-item>view:last-child{
		color: #CCCCCC;
	}
	.home-list-hover{
		background-color: #F4F4F4;
	}
</style>
