<template>
	<view>
		<!-- 自定义导航 -->
		<uni-nav-bar :fixed="true" :statusBar="true" @clickRight="openAdd">
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
		<block v-for="( item, index ) in list" :key="index">
			<common-list :item="item" :index="index"></common-list>
		</block>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	import commonList from '../../components/common/common-list.vue';
	
	export default {
		components:{
			uniNavBar,
			commonList
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{name:"附近",id:"fujin"},
					{name:"关注",id:"guanzhu"},
					{name:"话题",id:"huati"},
					{name:"推荐",id:"tuijian"},
				],
				list:[
					{
						// 文字
						userpic:"../../static/logo.png",
						username:"小酒窝",
						sex:0,    // 0   1
						age:23,
						isguanzhu:false,
						title:"我是标题",
						path:"深圳",
						sharenum:11,
						commentnum:22,
						goodnum:33,
						video:false,
						share:false,
					},
					{
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
						path:"深圳",
						sharenum:11,
						commentnum:22,
						goodnum:33,
						
					},
					{
						// 视频
						userpic:"../../static/logo.png",
						username:"小酒窝",
						sex:1,    // 0   1
						age:23,
						isguanzhu:false,
						title:"我是标题",
						video:{
							looknum:"20w",
							long:"2:13"
						},
						share:false,
						titlepic:"../../static/images/ad-001.png",
						path:"深圳",
						sharenum:11,
						commentnum:22,
						goodnum:33,
						
					},
					{
						// 分享
						userpic:"../../static/logo.png",
						username:"小酒窝",
						sex:0,    // 0   1
						age:23,
						isguanzhu:false,
						title:"我是标题",
						video:false,
						share:{
							title:"标题标题标题标题标",
							titlepic:"../../static/images/ad-005.png"
						},
						path:"深圳",
						sharenum:11,
						commentnum:22,
						goodnum:33,
						
					},
					
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
		font-size: 42upx; 
		margin-right: -40upx;
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
	
</style>
