<template>
	<view>{{item.heat}}</view>
</template>

<script>
	export default {
		props:{
			item:Array
		}
	}
</script>

<style scoped>
	
	.topic-heat .topic-heat-six{
		margin-bottom: 20upx;
	}
	.topic-heat .topic-heat-six>view{
		background-color: #F9F9F9;
		margin: 40upx 10upx 0 10upx;
		padding: 10upx 20upx;
		font-size: 25upx;
		border-radius: 10upx;
		color: #B7B7B7;
	}
</style>
