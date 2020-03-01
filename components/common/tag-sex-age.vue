<template>
	<view class="tag-sex icon iconfont"  :class="sex == 1?'icon-nanxing':'icon-nvxing'">
	{{age}}
	</view>
</template>

<script>
	export default {
		props:{
			sex:Number,
			age:Number,
		}
	}
</script>

<style scoped>
	.common-list-r .icon-nvxing{
		background-color: #ff007f;
	}
	.tag-sex{
		background-color: #007AFF;
		color: #FFFFFF;
		font-size: 23upx;
		padding: 2upx 10upx;
		margin-left: 10upx;
		border-radius: 20upx;
		line-height: 30upx;
		display: inline-block;
	}
</style>
