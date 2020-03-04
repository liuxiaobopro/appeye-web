<template>
	<view>
		<detail-info :item="detail"></detail-info>
		<!-- 评论区 start -->
		<view class="u-comment-title">最新评论 {{comment.count}}</view>
		<view class="uni-comment u-comment">
			<block v-for="(item, index) in comment.list" :key="index">
				<!-- uni-comment-list-child -->
				<comment-list :item="item" :index="index"></comment-list>
			</block>
		</view>
		<view style="height: 130upx;"></view>
		<!-- 输入框 -->
		<user-chat @submit="submit"></user-chat>
		<!-- 分享 -->
		<more-share :shareshow="shareshow" @show="show"></more-share>
	</view>
</template>

<script>
	import detailInfo from '../../components/detail/detail-info.vue';
	import commentList from '../../components/detail/comment-list.vue';
	import userChat from '../../components/usre-chat/user-chat.vue';
	import time from '../../common/time.js';
	import moreShare from '../../components/common/more-share.vue';
	export default {
		components:{
			detailInfo,
			commentList,
			userChat,
			moreShare
		}, 
		data() {
			return {
				shareshow:false,
				comment:{
					count:20,
					list:[]
				},
				detail:{
						// 图片
						userpic:"../../static/logo.png",
						username:"小酒窝",
						sex:0,    // 0   1
						age:23,
						isguanzhu:false,
						title:"我是图片标题",
						video:false,
						share:false,
						titlepic:"../../static/images/ad-005.png",
						morepic:["../../static/images/ad-005.png","../../static/images/ad-005.png","../../static/images/ad-005.png","../../static/images/ad-005.png","../../static/images/ad-005.png"],
						path:"深圳",
						sharenum:11,
						commentnum:22,
						goodnum:33,
					},
			}
		},
		onLoad(e){
			// console.log(e.detailDate);
			this.initdata(JSON.parse(e.detailDate))
			this.getcomment()
		},
		// 监听导航右侧按钮
		onNavigationBarButtonTap(e){
			if(e.index == 0){
				this.show()
			}
		},
		methods: {
			// 分享
			show(){
				this.shareshow = !this.shareshow
			},
			// 发送消息
			submit(data){
				// 发送逻辑
				let obj = {
					id:1111,
					fid:0,
					userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
					username:"小酒窝",
					time:time.getTime.getTime(),
					data:data,
				};
				this.comment.list.push(obj)
			},
			// 初始化数据
			initdata(obj){
				uni.setNavigationBarTitle({
					title: obj.title
				})
			},
			// 获取评论
			getcomment(){
				let arr = [
					
						// 一级评论
						{
							id:1,
							fid:0,
							userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
							username:"小酒窝",
							time:"14:33",
							data:"支持国产，支持DCloud!",
						},
						// 二级评论
						{
							id:2,
							fid:1,
							userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
							username:"小酒窝",
							time:"14:34",
							data:"我是二级评论",
						},
						{
							id:3,
							fid:1,
							userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
							username:"小酒窝",
							time:"14:34",
							data:"我是二级评论",
						},
						{
							id:4,
							fid:0,
							userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
							username:"小酒窝",
							time:"14:34",
							data:"我是一级评论",
						},
						{
							id:5,
							fid:4,
							userpic:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",
							username:"小酒窝",
							time:"14:34",
							data:"我是二级评论",
						},
					
				];
				this.comment.list = arr
			}
		}
	}
</script>

<style>
	/* 评论 */
	.u-comment{
		padding: 0 20upx;
	}
	.u-comment-title{
		padding: 20upx;
		font-size: 30upx;
		font-weight: bold;
	}
	/* 分享 */
	
	
</style>
