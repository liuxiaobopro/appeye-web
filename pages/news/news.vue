<template>
	<view>
		<!-- 自定义导航 -->
		<news-nav-bar :tabBars="tabBars" :tabIndex="tabIndex" @change-tab="changeTab"></news-nav-bar>
		<!-- 列表 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperheight + 'px'}" :current="tabIndex" @change="tabChange">
				<!-- 关注 -->
				<swiper-item>
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore()">
						<block v-for="( item, index ) in guanzhu.list" :key="index">
							<common-list :item="item" :index="index"></common-list>
						</block>
						<!-- 上拉加载 -->
						<load-more :loadtext="guanzhu.loadtext"></load-more>
					</scroll-view>
				</swiper-item>
				<!-- 话题 -->
				<swiper-item>
					<scroll-view scroll-y="true" class="list">
						<!-- 搜索栏 -->
						<view class="search-input">
							<input type="text" placeholder="搜索内容" placeholder-class="topic-search icon iconfont icon-sousuo" class="uni-input" />
						</view>
						<!-- 轮播图 -->
						<swiper class="topic-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
							<block v-for="(item, index) in topic.swiper" :key="index">
								<swiper-item>
									<image :src="item.src" mode="widthFix" lazy-load=""></image>
								</swiper-item>
							</block>
						</swiper>
						<!-- 热门分类 -->
						<view class="topic-heat">
							<view class="topic-heat-more u-f-ac u-f-jsb">
								<view>热门分类</view>
								<view class="u-f-ac">
									<view class="more">更多</view>
									<view class="icon iconfont icon-ziyuanldpi"></view>
								</view>
							</view>
							<view class="topic-heat-six u-f-ajc">
								<block v-for="(item,index) in heatsix" :key="index">
									<view>{{item.heat}}</view>
								</block>
							</view>
						</view>
						<!-- 最近更新 -->
						<view class="topic-update">
							<view>
								最近更新
							</view>
							<view>
								<block v-for="(item, index) in update.list" :key="index">
									<view class="topic-update-list u-f-ac" @tap="opendetail(index)">
										<view>
											<image :src="item.pic" mode="widthFix" lazy-load=""></image>
										</view>
										<view>
											<view>#{{item.title}}#</view>
											<view>{{item.comment}}</view>
											<view>动态{{item.commentnum}} 今日{{item.today}}</view>
										</view>
									</view>
								</block>
								<!-- 上拉加载 -->
								<load-more :loadtext="update.loadtext"></load-more>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
			
			</swiper>
		</view>
		
	</view>
</template>

<script>
	import newsNavBar from '../../components/news/news-nav-bar.vue';
	import commonList from '../../components/common/common-list.vue';
	import loadMore from "../../components/common/load-more.vue"
	
	export default {
		components:{
			newsNavBar,
			commonList,
			loadMore
		},
		data() {
			return {
				tabIndex:1,
				swiperheight:800,
				tabBars:[
					// {name:"附近",id:"fujin"},
					{name:"关注",id:"guanzhu"},
					{name:"话题",id:"huati"},
					// {name:"推荐",id:"tuijian"},
				],
				topic:{
					swiper:[
						{ src:"../../static/images/ad-003.png" },
						{ src:"../../static/images/ad-006.png" },
						{ src:"../../static/images/ad-009.png" },
					]
				},
				update:{
					loadtext:"上拉加载更多",
					list:[
						{
							pic:"../../static/logo.png",
							title:"原创小段子",
							comment:"每天更新原创小段子,播撒欢乐的种子",
							commentnum:434,
							today:1
						},
						{
							pic:"../../static/images/ku.png",
							title:"原创小段子1111",
							comment:"每天更新原创小段子,播撒欢乐的种子",
							commentnum:434,
							today:1
						},
						{
							pic:"../../static/logo.png",
							title:"原创小段子",
							comment:"每天更新原创小段子,播撒欢乐的种子",
							commentnum:2222222,
							today:1
						},
						{
							pic:"../../static/logo.png",
							title:"原创小段子",
							comment:"每天更新原创小段子,播撒欢乐的种子",
							commentnum:2222222,
							today:1
						},
						{
							pic:"../../static/logo.png",
							title:"原创小段子",
							comment:"每天更新原创小段子,播撒欢乐的种子",
							commentnum:2222222,
							today:1
						},
						{
							pic:"../../static/logo.png",
							title:"原创小段子",
							comment:"每天更新原创小段子,播撒欢乐的种子",
							commentnum:2222222,
							today:1
						},
						{
							pic:"../../static/logo.png",
							title:"原创小段子",
							comment:"每天更新原创小段子,播撒欢乐的种子",
							commentnum:2222222,
							today:1
						},
						{
							pic:"../../static/logo.png",
							title:"原创小段子",
							comment:"每天更新原创小段子,播撒欢乐的种子",
							commentnum:2222222,
							today:1
						},
					]
				},
				guanzhu:{
					loadtext:"上拉加载更多",
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
				},
				heatsix:[
					{heat:"娱乐"},
					{heat:"城市"},
					{heat:"最新"},
					{heat:"喜爱"},
					{heat:"情感"},
					{heat:"打卡"},
				]
			}
		},
		methods: {
			//切换tab
			changeTab(index){
				this.tabIndex = index;
			},
			//滑动事件
			tabChange(e){
				this.tabIndex=JSON.stringify(e.detail.current)
			},
			// 上拉加载
			loadmore(){
				// console.log(index);
				if(this.guanzhu.loadtext != '上拉加载更多'){
					return;
				}
				//修改状态
				this.guanzhu.loadtext = '加载中...';
				//获取数据
				setTimeout(()=> {
					//获取完成
					let obj = {
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
					};
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.list.push(obj);
					this.guanzhu.loadtext = '上拉加载更多';
				}, 1000);
				
				// this.guanzhu.loadtext = '没有数据了';
			},
			opendetail(index){
				uni.showToast({
					title: '第'+index+'个'
				});
			}
		},
		onLoad() {
			uni.getSystemInfo({
			    success: function (res) {
					let height = res.windowHeight-uni.upx2px(100)
					this.swiperheight = height;
			    }
			});
		},
	}
</script>

<style>
	/* 搜索 */
	.search-input{
		padding: 20upx;
	}
	.search-input>input{
		background-color: #f4f4f4;
		border-radius: 20upx;
	}
	.topic-search{
		display: flex;
		justify-content: center;
		font-size: 30upx;
	}
	/* 轮播图 */
	.topic-swiper{
		padding: 0 20upx 20upx 20upx;
	}
	.topic-swiper>image{
		width: 100%;
		border-radius: 10upx;
	}
	/* 热门分类 */
	.topic-heat{
		padding: 20upx;
		border-bottom: 1upx solid #B7B7B733;
	}
	.topic-heat .topic-heat-more>view:nth-child(1){
		font-size: 30upx;
	}
	.topic-heat-more>view:nth-child(2){
		color: #DDDDDD;
	}
	.topic-heat-more>view:nth-child(2)>view{
		font-size: 25upx;
	}
	.topic-heat .topic-heat-six{
		margin-bottom: 20upx;
	}
	.topic-heat .topic-heat-six>view{
		background-color: #F9F9F9;
		margin: 40upx 10upx 0 10upx;
		padding: 10upx 20upx;
		font-size: 25upx;
		border-radius: 10upx;
		color: #B7B7B7;
	}
	/* 最近更新 */
	.topic-update{
		padding: 20upx;
	}
	.topic-update .topic-update-list{
		margin-top: 20upx;
		padding-bottom: 10upx;
		border-bottom: 1upx solid #F2F2F2;
	}
	.topic-update>view:first-child{
		font-size: 30upx;
	}
	.topic-update .topic-update-list>view:nth-child(1){
		margin-right: 20upx;
	}
	.topic-update .topic-update-list>view:nth-child(1)>image{
		width: 120upx;
		height: 120upx;
	}
	.topic-update-list>view:nth-child(2)>view:nth-child(1){
		font-size: 35upx;
	}
	.topic-update-list>view:nth-child(2)>view:nth-child(3){
		padding-bottom: 10upx;
	}
	.topic-update-list>view:nth-child(2)>view:nth-child(n+2){
		color: #B3B3B3;
		font-size: 24upx;
	}
</style>
