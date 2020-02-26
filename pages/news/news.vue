<template>
	<view>
		<!-- 自定义导航 -->
		<uni-nav-bar :statusBar="true" @clickRight="openAdd">
			<!-- 左边 -->
			<!-- <block slot="left">
				<view class="nav-left">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block> -->
			<!-- 中间 -->
			<view class="u-f-ajc nav-tab-bar">
				<block v-for="(item, index) in tabBars" :key="index">
					<view class="u-f-ajc" :class="{active:index == tabIndex}" @tap="changeTab(index)">{{item.name}}</view>
				</block>
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right u-f-ajc" @tap="addNews">
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</block>
		</uni-nav-bar>
		<!-- 列表 -->
		<view class="common-list u-f">
			<view class="common-list-l">
				<image src="../../static/logo.png" mode="widthFix" lazy-load></image>
			</view>
			<view class="common-list-r">
				<view class="u-f-ac u-f-jsb">
					<view class="u-f-ac">昵称<view class="icon iconfont icon-nanxing">25</view></view>
					<view class="icon iconfont icon-jiahao">关注</view>
				</view>
				<view>我是标题</view>
				<view>
					<image src="../../static/images/ad-004.png" mode="widthFix" lazy-load></image>
				</view>
				<view class="u-f-ac u-f-jsb">
					<view style="margin-right: 115px;">深圳 龙岗</view>
					<view class="u-f-ac">
						<view class="icon iconfont icon-zhuanfa">11</view>
						<view class="icon iconfont icon-tubiaozhizuo-">22</view>
						<view class="icon iconfont icon-dianzan">33</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	
	export default {
		comments:{
			uniNavBar
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{name:"附近",id:"fujin"},
					{name:"关注",id:"guanzhu"},
					{name:"话题",id:"huati"},
					{name:"推荐",id:"tuijian"},
				]
			}
		},
		methods: {
			//切换tab
			changeTab(index){
				this.tabIndex = index;
			},
			addNews(){
				uni.navigateTo({
					url: '../add-news/add-news',
				});
			}
		}
	}
</script>

<style>
	/* 左侧图标 */
	.icon-qiandao{
		/* border: 1px solid red; */
		color: rgb(244, 234, 42); 
		font-size: 72upx; 
		margin-top: -6upx;
		margin-left: -3upx;
	}
	/* 右侧图标 */
	.icon-bianji1{
		font-size: 52upx; 
	}
	/* 顶部导航 */
	.nav-tab-bar>view{
		/* border: 1px solid #007AFF; */
		font-size: 40upx;
		font-weight: bold;
		color: #969696;
		padding: 0 10upx;
		
	}
	.active{
		color: #333333!important;
		font-size: 45upx!important;
	}
	/* 列表 */
	.common-list{
		padding: 20upx;
	}
	.common-list-l{
		flex-shrink: 0;
	}
	.common-list-l image{
		width: 90upx;
		height: 90upx;
		border-radius: 100%;
	}
	.common-list-r>view:nth-child(3)>image{
		width: 100%;
		border-radius: 10upx;
	}
</style>
