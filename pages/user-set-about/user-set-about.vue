<template>
	<view>
		<view class="body">
			<image src="../../static/images/ad-002.png" mode="widthFix" lazy-load></image>
			<view class="u-f-ajc">version 1.0.0</view>
			<block v-for="(item, index) in homelist" :key="index">
				<home-list-item :item="item" :index="index"></home-list-item>
			</block>
		</view>
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
					{ text:"新版本检测", clicktype:"navigateTo", url:"" },
					{ text:"用户协议", clicktype:"navigateTo", url:"" },
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	image{
		box-sizing: border-box;
		width: 100%;
		margin: 20upx 0;
	}
</style>
