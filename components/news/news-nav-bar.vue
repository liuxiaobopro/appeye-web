<template>
	<view>
		<uni-nav-bar :fixed="true" :statusBar="true" :border="false" @clickRight="openAdd">
			<!-- 左边 -->
			<!-- <block slot="left">
				<view class="nav-left">
					<view class="icon iconfont icon-qiandao"></view>
				</view>
			</block> -->
			<!-- 中间 -->
			<view class="u-f-ajc nav-tab-bar">
				<block v-for="(item, index) in tabBars" :key="index">
					<view class="u-f-ajc" :class="{active:index == tabIndex}" @tap="changeTab(index)">
						{{item.name}}
						<view class="u-f-ac" :class="{navtabbarline:index == tabIndex}"></view>
					</view>
				</block>
			</view>
			<!-- 右边 -->
			<block slot="right">
				<view class="nav-right u-f-ajc" @tap="addNews">
					<view class="icon iconfont icon-bianji1"></view>
				</view>
			</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components:{
			uniNavBar
		},
		props:{
			tabBars:Array,
			tabIndex:Number
		},
		methods:{
			//切换tab
			changeTab(index){
				// this.tabIndex = index;
				this.$emit('change-tab', index)
			},
			addNews(){
				uni.navigateTo({
					url: '../add-news/add-news',
				});
			}
		}
	}
</script>

<style scoped>
	.u-f-ajc{
		margin: 0 auto;
	}
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
	.nav-tab-bar{
		position: relative;
	}
	.navtabbarline{
		border-top: 6upx solid #FEDE33;
		border-bottom: 6upx solid #FEDE33;
		width: 90upx;
		position: absolute;
		bottom: 0;
	}
	
</style>
