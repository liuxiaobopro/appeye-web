<template>
	<view>
		<!-- tab切换 -->
		<swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap='tabtap' scrollItemStyle="width: 33.3%"></swiper-tab-head>
		<!-- 列表 -->
		<!-- <block v-for="(item, index) in list.userlist" :key="index">
			<user-list :item="item"></user-list>
		</block> -->
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height: swiperheight + 'px'}" :current="tabIndex" @change="tabChange">
				<block v-for="(newitem, newindex) in newslist" :key='newindex'>
					<swiper-item>
						<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore(newindex)">
							<template v-if="newitem.userlist.length > 0">
								<!-- 列表 -->
								<block v-for="(item, index) in newitem.userlist" :key="index">
									<user-list :item="item" @chat="chat(newindex, index)"></user-list>
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
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import loadMore from "../../components/common/load-more.vue";
	import userList from '../../components/paper/user-list.vue';
	export default {
		components:{
			swiperTabHead,
			loadMore,
			userList
		},
		data() {
			return {
				swiperheight:500,
				tabIndex:0,
				tabBars:[
					{ name:'互关',id:'huguan',num:0 },
					{ name:'关注',id:'guanzhu',num:0 },
					{ name:'粉丝',id:'fensi',num:0 },
				],
				newslist:[
					{
						
							loadtext:"上拉加载更多",
							userlist:[
								{
									userpic:"../../static/logo.png",
									username:"互关2222222",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:1,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:1,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝2222222",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:1,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								
							],
						
					},
					{
						
							loadtext:"上拉加载更多",
							userlist:[
								{
									userpic:"../../static/logo.png",
									username:"关注2222222",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:1,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝2222222",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:1,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝2222222",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:1,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝2222222",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:1,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								
							],
						
					},
					{
						
							loadtext:"上拉加载更多",
							userlist:[
								{
									userpic:"../../static/logo.png",
									username:"粉丝2222222",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:1,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝2222222",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:1,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝2222222",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:1,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝2222222",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:1,
									age:23,
								},
								{
									userpic:"../../static/logo.png",
									username:"小酒窝",
									sex:0,
									age:23,
								},
								
							],
						
					}
				],
				list:{},
			}
		},
		onLoad() {
			uni.getSystemInfo({
			    success: function (res) {
					let height = res.windowHeight-uni.upx2px(100)
					this.swiperheight = height;
			    }
			});
			this.tabBars[0].num = this.newslist[0].userlist.length;
			this.tabBars[1].num = this.newslist[1].userlist.length;
			this.tabBars[2].num = this.newslist[2].userlist.length;
		},
		//监听原生标题栏按钮点击事件
		onNavigationBarButtonTap(e){
			// console.log(JSON.stringify(e));
			if(e.index == 0){
				uni.navigateBack({
					delta: 1
				});
			}
		},
		//监听原生标题栏搜索输入框输入内容变化事件	
		onNavigationBarSearchInputChanged(e){
			// console.log(e);
		},
		//监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。	
		onNavigationBarSearchInputConfirmed(e){
			// console.log(e);
		},
		// 上拉加载
		onReachBottom(){
			this.loadmore()
		},
		methods: {
			// 消息详情
			chat(newsindex, index){
				uni.showToast({
					title: '第'+newsindex+'列第'+index+'行'
				});
				uni.navigateTo({
					url: '../HM-chat/HM-chat',
				});
			},
			//tabbao点击事件
			tabtap(index){
				// console.log(index);
				this.tabIndex = index;
			},
			//滑动事件
			tabChange(e){
				this.tabIndex=JSON.stringify(e.detail.current)
			},
			// 上拉加载
			loadmore(){
				// console.log(index);
				if(this.newslist[this.tabIndex].loadtext != '上拉加载更多'){
					return;
				}
				//修改状态
				this.newslist[this.tabIndex].loadtext = '加载中...';
				//获取数据
				setTimeout(()=> {
					//获取完成
					let obj = {
						userpic:"../../static/logo.png",
						username:"小酒窝2222222",
						sex:0,
						age:23,
					};
					this.newslist[this.tabIndex].userlist.push(obj);
					this.newslist[this.tabIndex].loadtext = '上拉加载更多';
				}, 1000);
				
				// this.guanzhu.loadtext = '没有数据了';
			},
		}
	}
</script>

<style>
	
	
</style>
