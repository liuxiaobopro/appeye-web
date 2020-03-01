<template>
	<view class="paper u-f-ac animated bounceInUp fast" @tap="opendetail">
		<view class="paper-left u-f-ac">
			<image :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
		<view class="paper-right">
			<view class="paper-right-name u-f-ac u-f-jsb">
				<view>{{item.username}}</view>
				<view>{{item.time}}</view>
			</view>
			<view class="paper-right-info u-f-ac u-f-jsb">
				<view>{{item.info}}</view>
				<template v-if="item.num>0">
					<view>
						<uni-badge class="uni-badge-left-margin" size="small" :text="item.num" type="error" />
					</view>
				</template>
			</view>
		</view>
	</view>
</template>

<script>
	import uniBadge from '../../components/uni-badge/uni-badge.vue';
	export default {
		components:{
			uniBadge
		},
		props:{
			item:Object,
			index:Number
		},
		methods:{
			opendetail(){
				uni.navigateTo({
					url: '../../pages/HM-chat/HM-chat',
				});
			}
		}
	}
</script>

<style scoped>
	.paper{
		width: 95%;
		margin: 0 auto;
		padding: 20upx 0;
	}
	.paper-left>image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		flex-shrink: 0;
	}
	.paper-right{
		padding-left: 20upx;
		flex: 1;
	}
	.paper-right .paper-right-name>view:first-child{
		font-weight: bold;
	}
	.paper-right .paper-right-name>view:last-child{
		color: #D6D6D6;
	}
	.paper-right .paper-right-info>view:first-child{
		color: #C2C2C2;
	}
	.paper-right .paper-right-info>view:last-child{
		border-radius: 100%;
	}
</style>
