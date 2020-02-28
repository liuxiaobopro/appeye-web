<template>
	<view>
		<!-- 话题介绍 -->
		<topic-info :topicInfo="topicInfo"></topic-info>
		<!-- tab切换 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap='tabtap' scrollItemStyle="width:50%;"></swiper-tab-head>
		<!-- 列表 -->
		<view class="topic-detail-list">
			<block v-for="(item, index) in tablist" :key="index">
				<template v-if="tabIndex == index">
					<block v-for="(item1, index1) in item.list" :key="index1">
						<common-list :item="item1" :index="index1"></common-list>
					</block>
				</template>
			</block>
		</view>
	</view>
</template>

<script>
	import topicInfo from '../../components/topic/topic-info.vue';
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import commonList from '../../components/common/common-list.vue';
	export default {
		components:{
			topicInfo,
			swiperTabHead,
			commonList
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{ name:'默认',id:'guanzhu' },
					{ name:'最新',id:'tuijian' },
				],
				tablist:[
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
		methods: {
			//tabbao点击事件
			tabtap(index){
				// console.log(index);
				this.tabIndex = index;
			},
		}
	}
</script>

<style>
	
</style>
