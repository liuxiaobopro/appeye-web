<template>
	<view class="common-list u-f animated fadeIn fast">
		<view class="common-list-l">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<view class="common-list-r">
			<view class="u-f-ac u-f-jsb">
				<view class="u-f-ac">
					{{item.username}}
					<!-- 性别年龄 -->
					<tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age>
				</view>
				<view class="icon iconfont icon-jiahao" v-show="!isguanzhu" @tap="guanzhu">关注</view>
			</view>
			<view>{{item.title}}</view>
			<view class="u-f-ajc">
				
				<!-- 图片 -->
				<image v-if="item.titlepic" :src="item.titlepic" mode="widthFix" lazy-load></image>
				<!-- 视频 -->
				<template v-if="item.video">
					<view class="common-list-play icon iconfont icon-bofang"></view>
					<view class="common-list-playinfo">{{item.video.looknum}}播放  {{item.video.looknum}}</view>
				</template>
				<!-- 分享 -->
				<view class="common-list-share u-f-ac" v-if="item.share">
					<image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
					<view>{{item.share.title}}</view>
				</view>
				
			</view>
			<view class="u-f-ac u-f-jsb">
				<view style="margin-right: 115px;">{{item.path}}</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa">{{item.sharenum}}</view>
					<view class="icon iconfont icon-tubiaozhizuo-">{{item.commentnum}}</view>
					<view class="icon iconfont icon-dianzan">{{item.goodnum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from './tag-sex-age.vue';
	export default {
		components:{
			tagSexAge
		},
		props:{
			item:Object,
			index:Number
		},
		data() {
			return {
				isguanzhu: this.item.isguanzhu
			}
		},
		methods:{
			guanzhu(){
				this.isguanzhu = true
				uni.showToast({
					title: '关注成功'
				});
			}
		}
	}
	
</script>

<style scoped>
	@import url("../../common/list.css");
</style>
