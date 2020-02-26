<template>
	<view>
		<view class="load-more">{{loadtext}}</view>
	</view>
</template>

<script>
	export default {
		props:{
			loadtext:String
		}
	}
</script>

<style scoped>
.load-more{
	text-align: center;
	color: #CCCCCC;
	padding: 40upx 0;
}
</style>
