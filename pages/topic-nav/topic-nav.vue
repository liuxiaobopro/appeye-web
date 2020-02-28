<template>
	<view>
		<!-- 导航栏 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap='tabtap'></swiper-tab-head>
		<!-- 列表 -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperheight + 'px'}" :current="tabIndex" @change="tabChange">
				<block v-for="(newitem, newindex) in newslist" :key='newindex'>
					<swiper-item>
						<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore(newindex)">
							<template v-if="newitem.list.length > 0">
								<!-- 列表 -->
								<view class="topic-view">
									<block v-for="(item, index) in newitem.list" :key="index">
										<topic-update :item="item" :index="index"></topic-update>
									</block>
								</view>
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
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import noThing from "../../components/common/no-thing.vue";
	import loadMore from "../../components/common/load-more.vue";
	import topicUpdate from '../../components/news/topic-update.vue';
	export default {
		components:{
			swiperTabHead,
			noThing,
			loadMore,
			topicUpdate
		},
		data() {
			return {
				tabIndex:0,
				swiperheight:500,
				tabBars:[
					{ name:'娱乐',id:'yule1' },
					{ name:'最新',id:'yule2' },
					{ name:'情感',id:'yule3' },
					{ name:'游戏',id:'yule4' },
					{ name:'城市',id:'yule5' },
					{ name:'故事',id:'yule6' },
					{ name:'喜爱',id:'yule7' },
					{ name:'娱乐',id:'yule8' },
					{ name:'娱乐',id:'yule9' },
					{ name:'娱乐',id:'yule0' },
				],
				newslist:[
					{
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
								pic:"../../static/logo.png",
								title:"原创小段子",
								comment:"每天更新原创小段子,播撒欢乐的种子",
								commentnum:434,
								today:1
							},
							{
								pic:"../../static/logo.png",
								title:"原创小段子",
								comment:"每天更新原创小段子,播撒欢乐的种子",
								commentnum:434,
								today:1
							},
							{
								pic:"../../static/logo.png",
								title:"原创小段子",
								comment:"每天更新原创小段子,播撒欢乐的种子",
								commentnum:434,
								today:1
							},
							{
								pic:"../../static/logo.png",
								title:"原创小段子",
								comment:"每天更新原创小段子,播撒欢乐的种子",
								commentnum:434,
								today:1
							},
							{
								pic:"../../static/logo.png",
								title:"原创小段子",
								comment:"每天更新原创小段子,播撒欢乐的种子",
								commentnum:434,
								today:1
							},
							{
								pic:"../../static/logo.png",
								title:"原创小段子",
								comment:"每天更新原创小段子,播撒欢乐的种子",
								commentnum:434,
								today:1
							},
							{
								pic:"../../static/logo.png",
								title:"原创小段子",
								comment:"每天更新原创小段子,播撒欢乐的种子",
								commentnum:434,
								today:1
							},
							{
								pic:"../../static/logo.png",
								title:"原创小段子",
								comment:"每天更新原创小段子,播撒欢乐的种子",
								commentnum:434,
								today:1
							},
							{
								pic:"../../static/logo.png",
								title:"原创小段子",
								comment:"每天更新原创小段子,播撒欢乐的种子",
								commentnum:434,
								today:1
							},
						]
					},
					{
						loadtext:"上拉加载更多",
						list:[]
					},
					{
						loadtext:"上拉加载更多",
						list:[]
					},
					{
						loadtext:"上拉加载更多",
						list:[]
					},
					
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
						pic:"../../static/logo.png",
						title:"原创小段子",
						comment:"每天更新原创小段子,播撒欢乐的种子",
						commentnum:434,
						today:1
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
.topic-view{
	padding: 0 20upx;
}
</style>
