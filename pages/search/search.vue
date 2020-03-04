<template>
	<view>
		<template v-if="list.searchlist.length > 0">
			<block v-for="(item, index) in list.searchlist" :key="index">
				<index-list :item="item" :index="index"></index-list>
			</block>
			<!-- 上拉加载 -->
			<load-more :loadtext="list.loadtext"></load-more>
		</template>
		<template v-else-if="issearch && list.searchlist.length < 1">
			<view style="text-align: center;">没有东西呀</view>
		</template>
	</view>
</template>

<script>
	import indexList from "../../components/index/list-index.vue";
	import loadMore from "../../components/common/load-more.vue"
	export default {
		components:{
			indexList,
			loadMore
		},
		data() {
			return {
				searchtext: "",
				issearch:false,
				list:{
					loadtext:"上拉加载更多",
					searchlist:[]
				},
			}
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
			this.searchtext = e.text
		},
		//监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。	
		onNavigationBarSearchInputConfirmed(e){
			if(e.text){
				this.getdata()
			}
		},
		// 触底事件
		onReachBottom(){
			this.loadmore()
		},
		// 下拉刷新
		// onPullDownRefresh(){
		// 	this.getdata()
		// 	uni.stopPullDownRefresh()
		// },
		methods: {
			// 搜索事件
			getdata(){
				uni.showLoading({
					title: '正在搜索',
				});
				setTimeout(()=>{
					let arr = [
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
						}
					];
					this.list.searchlist = arr
					uni.hideLoading()
					this.issearch = true
				}, 2000);
				
				
			},
			loadmore(index){
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
					this.list.searchlist.push(obj);
					this.list.loadtext = '上拉加载更多';
				}, 1000);
				
				// this.list.loadtext = '没有数据了';
			},
		},
	}
</script>

<style>

</style>
