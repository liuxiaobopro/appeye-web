<template>
	<view>
		<!-- 话题介绍 -->
		<topic-info :topicInfo="topicInfo"></topic-info>
		<!-- tab切换 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap='tabtap' scrollItemStyle="width:50%;"></swiper-tab-head>
		<!-- 列表 -->
		<view class="topic-detail-list">
			<!-- <block v-for="(item, index) in tablist" :key="index">
				<template v-if="tabIndex==index">
					<block v-for="(itemss, indexss) in item.list" :key="indexss">
						<common-list :item="itemss" :index="indexss"></common-list>
					</block>
				</template>
			</block> -->
			<template v-if="tabIndex==0">
				<block v-for="(itemss, indexss) in tablist[0].list" :key="indexss">
					<common-list :item="itemss" :index="indexss"></common-list>
				</block>
				<!-- 上拉加载 -->
				<load-more :loadtext="tablist[0].loadtext"></load-more>
			</template>
			<template v-if="tabIndex==1">
				<block v-for="(itemss, indexss) in tablist[1].list" :key="indexss">
					<common-list :item="itemss" :index="indexss"></common-list>
				</block>
				<!-- 上拉加载 -->
				<load-more :loadtext="tablist[1].loadtext"></load-more>
			</template>
			
		</view>
	</view>
</template> 

<script>
	import topicInfo from '../../components/topic/topic-info.vue';
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import commonList from '../../components/common/common-list.vue';
	import loadMore from "../../components/common/load-more.vue"
	export default {
		components:{
			topicInfo,
			swiperTabHead,
			commonList,
			loadMore
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{ name:'默认',id:'tablist[this.tabIndex]' },
					{ name:'最新',id:'tuijian' },
				],
				tablist:[
					{
						loadtext:"上拉加载更多",
						list:[
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
						],
					},
					{
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
							}
						],
					},
				],
				topicInfo:{
					"titlepic":"../../static/images/wu.png",
					"title":"忆往事",
					"desc":"我是描述....",
					"commentnum":22,
					"today":1
				},
				
				
			}
		},
		// 上拉触底事件
		onReachBottom(){
			// 上拉加载
			this.loadmore()
		},
		// 下拉刷新事件
		onPullDownRefresh(){
			this.getdata()
		},
		methods: {
			//下拉刷新
			getdata(){
				setTimeout(()=> {
					// 获取数据
					let arr = [
						{
							// 文字
							userpic:"../../static/logo.png",
							username:"3333小酒窝",
							sex:0,    // 0   1
							age:23,
							isguanzhu:false,
							title:"我是标题11111",
							path:"深圳",
							sharenum:11,
							commentnum:22,
							goodnum:33,
							video:false,
							share:false,
						},
					];
					// 赋值
					this.tablist[this.tabIndex].list = arr;
					// 手动停止下拉刷新
					uni.stopPullDownRefresh();
				}, 2000);
			},
			//上拉加载
			loadmore(){
				// console.log(index);
				if(this.tablist[this.tabIndex].loadtext != '上拉加载更多'){
					return;
				}
				//修改状态
				this.tablist[this.tabIndex].loadtext = '加载中...';
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
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].loadtext = '上拉加载更多';
				}, 1000);
				
				// this.tablist[this.tabIndex].loadtext = '没有数据了';
			},
			//tabbao点击事件
			tabtap(index){
				this.tabIndex = index;
			},
		}
	}
</script>

<style>
	
</style>
