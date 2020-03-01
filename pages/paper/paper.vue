<template>
	<view>
		<!-- 操作菜单 -->
		<paper-left-popup :show="show" @hidepopup="hidepopup" @addfriend="addfriend" @clear="clear"></paper-left-popup>
		<!-- 小纸条列表 -->
		<block v-for="(item, index) in list.infolist" :key="index">
			<paper-list :item="item" :index="index"></paper-list>
		</block>
		<!-- 上拉加载 -->
		<template v-if="list.infolist.length>7">
			<load-more :loadtext="list.loadtext"></load-more>
		</template>
	</view>
</template>

<script>
	import paperList from '../../components/paper/paper-list.vue';
	import loadMore from "../../components/common/load-more.vue";
	import paperLeftPopup from '../../components/paper/paper-left-popup.vue';
	export default {
		components:{
			paperList,
			loadMore,
			paperLeftPopup
		},
		data() {
			return {
				show:false,
				list:{
					loadtext:"上拉加载更多",
					infolist:[
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":0,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":1,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":4,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":4,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":4,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":4,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":4,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":4,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":4,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":4,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":4,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":4,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":4,
						},
					],
				}
				
			}
		},
		// 下拉刷新事件
		onPullDownRefresh(){
			this.getdata()
		},
		// 上拉触底事件
		onReachBottom(){
			// 上拉加载
			this.loadmore()
		},
		// 监听按钮事件
		onNavigationBarButtonTap(e) {
			// 左边
			if(e.index == 0){
				this.hidepopup();
				uni.navigateTo({
					url: '../user-list/user-list',
				});
			}
			// 右边
			if(e.index == 1){
				this.show = !this.show
			}
			
		},
		methods: { 
			//下拉刷新
			getdata(){
				setTimeout(()=> {
					// 获取数据
					let arr = [
						{
							userpic:"../../static/logo.png",
							username:"我是新的",
							"time":"2:10",
							"info":"普天同庆,对对对11111111...",
							"num":0,
						},
						{
							userpic:"../../static/logo.png",
							username:"小酒窝1111",
							"time":"2:10",
							"info":"普天同庆,对对对...",
							"num":0,
						},
					];
					// 赋值
					this.list.infolist = arr;
					// 手动停止下拉刷新
					uni.stopPullDownRefresh();
				}, 1000);
			},
			//上拉加载
			loadmore(){
				// console.log(index);
				if(this.list.loadtext != '上拉加载更多'){
					return;
				}
				//修改状态
				this.list.loadtext = '加载中...';
				//获取数据
				setTimeout(()=> {
					//获取完成
					let obj = {
						userpic:"../../static/logo.png",
						username:"小酒窝1111",
						"time":"2:10",
						"info":"普天同庆,对对对...",
						"num":0,
					};
					this.list.infolist.push(obj);
					this.list.loadtext = '上拉加载更多';
				}, 1000);
				
				// this.list.loadtext = '没有数据了';
			},
			addfriend(){
				uni.showToast({
					title: '加好友'
				});
			},
			clear(){
				
				uni.showToast({
					title: '已清理'
				});
				this.hidepopup()
			},
			hidepopup(){
				this.show=false
			},
			showpopup(){
				this.show=true
			}
		}
	}
</script>

<style>

</style>
