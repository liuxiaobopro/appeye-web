<template>
	<view class="index-list animated bounceInUp fast">
		<view class="index-list1">
			<view>
				<image :src="item.userpic" mode="widthFix" lazy-load></image>{{item.username}}
			</view>
			<view  class="u-faj" v-show="!isguanzhu" @tap="guanzhu">
				<view class="icon iconfont icon-jiahao"></view>关注
			</view>
		</view>
		<view class="index-list2" @tap="opendetail">
			{{item.title}}
		</view>
		<view class="index-list3 u-faj" @tap="opendetail">
			<!-- 封面图 -->
			<image :src="item.titlepic" mode="widthFix" lazy-load></image>
			<template v-if="item.type == 'video'">
				<!-- 播放按钮 -->
				<view class="icon iconfont icon-bofang index-list-play"></view>
				<!-- 阅读量 -->
				<view class="index-list-playinfo">{{item.playnum}}播放  {{item.long}}</view>
			</template>
		</view>
		<view class="index-list4">
			<view>
				<view :class="{'active':(item.infonum.index == 1)}" @tap="caozuo('ding')"><view class="icon iconfont icon-xiaolian"></view>{{item.infonum.dingnum}}</view>
				<view :class="{'active':(item.infonum.index == 2)}" @tap="caozuo('cai')"><view class="icon iconfont icon-kulian"></view>{{item.infonum.cainum}}</view>
			</view>
			<view>
				<view><view class="icon iconfont icon-tubiaozhizuo-"></view>{{item.commentnum}}</view>
				<view><view class="icon iconfont icon-zhuanfa"></view>{{item.sharenum}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
		data() {
			return {
				isguanzhu: this.item.isguanzhu,
				infonum: this.item.infonum
			}
		},
		methods:{
			//关注事件
			guanzhu(){
				this.isguanzhu = true;
				uni.showToast({
					title: '关注成功!',
				});
			},
			//顶踩操作
			caozuo(type){
				switch (type){
					case 'ding':
						if(this.item.infonum.index == 1){ return; }
						this.item.infonum.dingnum++;
						if(this.item.infonum.index == 2){ 
							this.item.infonum.cainum--;
						}
						this.item.infonum.index = 1;
						uni.showToast({
							title: '顶了一下!',
							image:'../../static/images/xiao.png',
						});
						break;
					case 'cai':
						if(this.item.infonum.index == 2){ return; }
						this.item.infonum.cainum++;
						if(this.item.infonum.index == 1){
							this.item.infonum.dingnum--;
						}
						this.item.infonum.index = 2;
						uni.showToast({
							title: '踩了一脚!',
							image:'../../static/images/ku.png',
						});
						break;
				}
			},
			//进入详情页
			opendetail(){
				uni.navigateTo({
					url: '../../pages/detail/detail?detailDate='+JSON.stringify(this.item),
				});
			}
		}
	}
</script>

<style scoped>
	.index-list{
		padding: 20upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	.index-list1{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.index-list1>view:first-child{
		display: flex;
		align-items: center;
		color: #999999;
	}
	.index-list1>view:first-child image{
		width: 90upx;
		height: 90upx;
		border-radius: 100%;
		margin-right: 10upx;
	}
	.index-list1>view:last-child{
		display: flex;
		align-items: center;
		background-color: #f4f4f4;
		border-radius: 5upx;
		width: 100upx;
		height: 60upx;
		font-size: 25upx;
		/* font-weight: bold; */
		margin-right: 20upx;
		padding: 0 10upx;
	}
	/* .index-list1>view:last-child{
		background-color: #C0C0C0;
	} */
	.index-list2{
		font-size: 32upx;
		margin: 20upx 0;
	}
	.index-list3{
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.index-list3>image{
		width: 100%;
		border-radius: 20upx;
	}
	.index-list4{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20upx 0;
	}
	.index-list4 view{
		color: #999999;
		/* font-size: 40upx; */
	}
	.index-list4>view>view{
		display: flex;
		align-items: center;
	}
	.index-list4>view>view:first-child{
		margin-right: 10upx;
	}
	.index-list4>view>view>view{
		margin-right: 15upx;
	}
	.index-list4>view:first-child{
		display: flex;
		align-items: center;
	}
	.index-list4>view:last-child{
		display: flex;
		align-items: center;
	}
	.index-list-play{
		position: absolute;
		font-size: 160upx;
		color: #FFFFFF;
	}
	.index-list-playinfo{
		position: absolute;
		background-color: #33333373;
		bottom: 8upx;
		right: 8upx;
		color: #FFFFFF;
		border-radius: 20upx;
		padding: 0 20upx;
		font-size: 30upx;
	}
	.index-list4 .active, .index-list4 .active>view{
		color: #c5f61c;
	}
</style>
