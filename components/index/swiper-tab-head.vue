<template>
	<view>
		<view class="uni-tab-bar">
			<scroll-view scroll-x class="uni-swiper-tab" style="background-color: #FFFFFF;">
				<block v-for="(tab, index) in tabBars" :key='tab.id'>
					<view class="swiper-tab-list" :class="{'active':tabIndex == index}" @tap='tabtap(index)' :style="scrollItemStyle">
						{{tab.name}}{{tab.num?tab.num:''}}
						 <view class="swiper-tab-line"></view>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			tabBars:Array,
			tabIndex:Number,
			scrollItemStyle:{
				type:String,
				default:""
			}
		},
		methods:{
			//tabbao点击事件
			tabtap(index){
				this.$emit('tabtap', index);
			},
		}
	}
</script>

<style scoped>
.uni-swiper-tab{
	border-bottom: 1upx solid #EEEEEE;
}
.swiper-tab-list{
	color: #969696;
	font-weight: bold;
}
.uni-tab-bar .active{
	color: #343434;
}
.active{
	font-size: 35upx;
}
.active .swiper-tab-line{
	border-bottom: 6upx solid #fede33;
	width: 70upx;
	margin: auto;
	border-top: 6upx solid #fede33;
	border-radius: 20upx;
}
</style>
