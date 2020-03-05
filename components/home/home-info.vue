<template>
	<view class="home-data u-f-ac">
		<block v-for="(item, index) in homeinfo" :key="index">
			<view class="u-f1 u-f-ac u-f-column">
				<view>{{item.num}}</view>{{item.text}}
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			homeinfo:Array
		}
	}
</script>

<style scoped>
	.home-data{
		padding: 20upx 40upx;
	}
	.home-data>view{
		color: #999999;
	}
	.home-data>view>view{
		font-size: 32upx;
		color: #333333;
	}
</style>
