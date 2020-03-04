<template>
	<!-- animated bounceInUp fast -->
	<view class="common-list u-f ">
		<view class="common-list-l">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<view class="common-list-r">
			<view>
				<view class="u-f-ac u-f-jsb">
					<view class="u-f-ac">
						{{item.username}}
						<!-- 性别年龄 -->
						<tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age>
					</view>
					<view class="icon iconfont icon-jiahao" v-show="!isguanzhu" @tap="guanzhu">关注</view>
				</view>
				<view class="common-list-r-time">
					16:33
				</view>
			</view>
			<view>{{item.title}}</view>
			<view class="u-f-ac" style="flex-wrap:wrap">
				
				<!-- 图片 -->
				<block v-for="(items, indexs) in item.morepic" :key="indexs">
					<image style="width: 30%;margin: 5upx;" v-if="items" :src="items" mode="widthFix" lazy-load @tap="imgdetail(indexs)"></image>
				</block>
				
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
	import tagSexAge from '../common/tag-sex-age.vue';
	export default {
		components:{
			tagSexAge
		},
		props:{
			item:Object,
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
			},
			imgdetail(index){
				// 预览图片
				uni.previewImage({
					current:index,
					urls: this.item.morepic,
					
				});
			}
		}
	}
	
</script>

<style scoped>
@import url("../../common/list.css");
.common-list-r{
	border-bottom: 0;
}
.common-list{
	border-bottom: 1upx solid #EEEEEE;
}
.common-list-r-time{
	padding: 15upx 0;
	color: #CCCCCC!important;
	font-size: 25upx;
	background-color: #FFFFFF!important;
}
.common-list-r>view:nth-child(1)>view:nth-child(1)>view:last-child{
	background-color: #EEEEEE;
	padding: 0 10upx;
	font-size: 26upx;
}
</style>
