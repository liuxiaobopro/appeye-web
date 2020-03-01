<template>
	<view class="usre-chat-bottom u-f-ac">
		<input type="text" placeholder="文明发言" v-model="text" />
		<view class="icon iconfont icon-zhifeijifasong u-f-ajc" @tap="submit"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: ''
			}
		},
		methods:{
			submit(){
				this.$emit('submit', this.text)
				this.text = ''
			}
		}
	}
</script>

<style scoped>
	.usre-chat-bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 120upx;
		padding: 0 20upx;
		background-color: #FFFFFF;
		border-top: 1upx solid #EEEEEE;
	}
	.usre-chat-bottom>input{
		flex: 1;
		margin-right: 20upx;
		padding: 10upx;
		border-radius: 10upx;
		background-color: #F7F7F7;
	}
	.usre-chat-bottom>view{
		width: 80upx;
		font-size: 45upx;
	}
</style>
