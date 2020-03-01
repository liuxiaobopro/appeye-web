<template>
	<view class="user-list u-f-ac" @tap="chat">
		<image :src="item.userpic" mode="widthFix" lazy-load></image>
		<view>
			<view>{{item.username}}</view>
			<view>
				<tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age>
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
			item:Object
		},
		methods:{
			chat(){
				this.$emit('chat')
			}
		}
	}
</script>

<style scoped>
	.user-list .icon-nvxing{
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
		
	}
	.user-list{
		width: 90%;
		margin: 0 auto;
		padding: 10upx 0upx;
		border-bottom: 1px solid #F3F3F3;
	}
	.user-list>image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		margin-right: 20upx;
		flex-shrink: 0;
	}
	.user-list>view>view:first-child{
		flex: 1;
		margin-left: 10upx;
		font-size: 35upx;
	}
	.user-list>view>view:last-child{
		width: 100%;
		flex-shrink: 0;
	}
	
	
</style>
