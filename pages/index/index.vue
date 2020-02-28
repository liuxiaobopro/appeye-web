<template>
	<view>
		<!-- 导航栏 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap='tabtap'></swiper-tab-head>
		<!-- 内容 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperheight + 'px'}" :current="tabIndex" @change="tabChange">
				<block v-for="(newitem, newindex) in newslist" :key='newindex'>
					<swiper-item>
						<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore(newindex)">
							<template v-if="newitem.list.length > 0">
								<!-- 列表 -->
								<block v-for="(item, index) in newitem.list" :key="index">
									<index-list :item="item" :index="index"></index-list>
								</block>
								<!-- 上拉加载 -->
								<load-more :loadtext="newitem.loadtext"></load-more>
							</template>
							<template v-else>
								<!-- 无内容默认 -->
								<no-thing></no-thing>
							</template>
						</scroll-view>
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>

<script>
	import indexList from "../../components/index/list-index.vue";
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import loadMore from "../../components/common/load-more.vue"
	import noThing from "../../components/common/no-thing.vue";
	export default {
		//注册组件
		components:{
			indexList,
			swiperTabHead,
			loadMore,
			noThing
		},
		//监听搜索框
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url: '../search/search',
			});
		},
		//监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(e){
			switch (e.index){
				case 1:
					//打开发布页面
					uni.navigateTo({
						url: '../add-input/add-input',
					});
					break;
				case 0:
					//打开签到页面
					break;
			}
		},
		data() {
			return {
				swiperheight:500,
				tabIndex:1,
				tabBars:[
					{ name:'关注',id:'guanzhu' },
					{ name:'推荐',id:'tuijian' },
					{ name:'视频',id:'shipin' },
					{ name:'图文',id:'tuwen' },
					{ name:'段子',id:'duanzi' },
					// { name:'其他',id:'qita' },
				],
				newslist:[
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/logo.png",
								username:"昵称111",
								isguanzhu:false,
								title:"我是标题111",
								type:"video",  //img video text
								titlepic:"../../static/logo.png",
								infonum:{
									index:0,    //0未表态  1顶  2踩
									dingnum:11,
									cainum:22
								},
								commentnum:33,
								sharenum:44,
								playnum:"20w",
								long:"2:12"
							},
							{
								userpic:"../../static/images/ad-002.png",
								username:"昵称111",
								isguanzhu:true,
								title:"我是标题111",
								type:"img",  //img video text
								titlepic:"../../static/images/ad-001.png",
								infonum:{
									index:1,    //0未表态  1顶  2踩
									dingnum:11,
									cainum:22
								},
								commentnum:33,
								sharenum:44,
								// playnum:"20w",
								// long:"2:12"
							},
							{
								userpic:"../../static/logo.png",
								username:"昵称111",
								isguanzhu:true,
								title:"我是标题111",
								type:"text",  //img video text
								// titlepic:"../../static/logo.png",
								infonum:{
									index:2,    //0未表态  1顶  2踩
									dingnum:11,
									cainum:22
								},
								commentnum:33,
								sharenum:44,
								// playnum:"20w",
								// long:"2:12"
							},
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/images/ad-002.png",
								username:"昵称111",
								isguanzhu:true,
								title:"我是标题111",
								type:"img",  //img video text
								titlepic:"../../static/images/ad-001.png",
								infonum:{
									index:1,    //0未表态  1顶  2踩
									dingnum:11,
									cainum:22
								},
								commentnum:33,
								sharenum:44,
								// playnum:"20w",
								// long:"2:12"
							},
							{
								userpic:"../../static/images/ad-002.png",
								username:"昵称111",
								isguanzhu:true,
								title:"我是标题111",
								type:"img",  //img video text
								titlepic:"../../static/images/ad-001.png",
								infonum:{
									index:1,    //0未表态  1顶  2踩
									dingnum:11,
									cainum:22
								},
								commentnum:33,
								sharenum:44,
								// playnum:"20w",
								// long:"2:12"
							},
							{
								userpic:"../../static/images/ad-002.png",
								username:"昵称111",
								isguanzhu:true,
								title:"我是标题111",
								type:"img",  //img video text
								titlepic:"../../static/images/ad-001.png",
								infonum:{
									index:1,    //0未表态  1顶  2踩
									dingnum:11,
									cainum:22
								},
								commentnum:33,
								sharenum:44,
								// playnum:"20w",
								// long:"2:12"
							},
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[
							{
								userpic:"../../static/logo.png",
								username:"昵称111",
								isguanzhu:true,
								title:"我是标题111",
								type:"text",  //img video text
								// titlepic:"../../static/logo.png",
								infonum:{
									index:2,    //0未表态  1顶  2踩
									dingnum:11,
									cainum:22
								},
								commentnum:33,
								sharenum:44,
								// playnum:"20w",
								// long:"2:12"
							},
							{
								userpic:"../../static/logo.png",
								username:"昵称111",
								isguanzhu:true,
								title:"我是标题111",
								type:"text",  //img video text
								// titlepic:"../../static/logo.png",
								infonum:{
									index:2,    //0未表态  1顶  2踩
									dingnum:11,
									cainum:22
								},
								commentnum:33,
								sharenum:44,
								// playnum:"20w",
								// long:"2:12"
							},
						]
					},
					{
						list:[
							
						]
					},
					{
						list:[
							
						]
					}
				],
				
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
		methods: {
			//tabbao点击事件
			tabtap(index){
				// console.log(index);
				this.tabIndex = index;
			},
			//滑动事件
			tabChange(e){
				this.tabIndex=JSON.stringify(e.detail.current)
			},
			//上拉加载更多
			loadmore(index){
				// console.log(index);
				if(this.newslist[index].loadtext != '上拉加载更多'){
					return;
				}
				//修改状态
				this.newslist[index].loadtext = '加载中...';
				//获取数据
				setTimeout(()=> {
					//获取完成
					let obj = {
						userpic:"../../static/logo.png",
						username:"昵称111",
						isguanzhu:false,
						title:"我是标题111",
						type:"video",  //img video text
						titlepic:"../../static/logo.png",
						infonum:{
							index:0,    //0未表态  1顶  2踩
							dingnum:11,
							cainum:22
						},
						commentnum:33,
						sharenum:44,
						playnum:"20w",
						long:"2:12"
					};
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext = '上拉加载更多';
				}, 1000);
				
				// this.newslist[index].loadtext = '没有数据了';
			},
		}
	}
</script>

<style>

</style>
