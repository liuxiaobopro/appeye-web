<template>
	<view class="uni-list list-pd">
		<view class="uni-list-cell cell-pd">
			<view class="uni-uplouder">
				<view class="uni-uplouder-head">
					<view class="uni-uplouder-title">点击可预览选好的图片</view>
					<view class="uni-uplouder-info">{{imageList.length}}/9</view>
				</view>
				<view class="uni-uplouder-body">
					<view class="uni-uplouder__files">
						<block v-for="(image,index) in imageList" :key="index">
							<view class="uni-uplouder__file">
								<view class="icon iconfont icon-shanchu" @tap="delect(index)"></view>
								<image class="uni-uplouder__img" :src="image" :data-src="image" @tap="previewImage"></image>
							</view>
						</block>
						<view class="uni-uplouder__input-box" v-if="imageList.length == 9 ? false:true">
							<view class="uni-uplouder__input" @tap="chooseImage"></view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		data() {
			return {
				imageList: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		},
		methods:{
			//多图上传
			chooseImage: async function() {
				// #ifdef APP-PLUS
				// TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
				if (this.sourceTypeIndex !== 2) {
					let status = await this.checkPermission();
					if (status !== 1) {
						return;
					}
				}
				// #endif
			
				if (this.imageList.length === 9) {
					// let isContinue = await this.isFullImg();
					// console.log("是否继续?", isContinue);
					// if (!isContinue) {
					// 	return;
					// }
					return ;
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
						this.$emit('uploud', this.imageList);
					}
					
				})
			},
			
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
			// async checkPermission(code) {
			// 	let type = code ? code - 1 : this.sourceTypeIndex;
			// 	let status = permision.isIOS ? await permision.requestIOS(sourceType[type][0]) :
			// 		await permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' :
			// 			'android.permission.READ_EXTERNAL_STORAGE');
			
			// 	if (status === null || status === 1) {
			// 		status = 1;
			// 	} else {
			// 		uni.showModal({
			// 			content: "没有开启权限",
			// 			confirmText: "设置",
			// 			success: function(res) {
			// 				if (res.confirm) {
			// 					permision.gotoAppSetting();
			// 				}
			// 			}
			// 		})
			// 	}
			
			// 	return status;
			// },
			delect(index){
				uni.showModal({
				    title: '提示',
				    content: '是否删除该图片',
				    success: (res) => {
				        if (res.confirm) {
				            // console.log('用户点击确定');
							this.imageList.splice(index, 1);
							this.$emit('uploud', this.imageList);
				        }
				    }
				});
			}
		}
	}
</script>

<style>
	.cell-pd {
		padding: 22upx 30upx;
	}
	.uni-uplouder__file{
		position: relative;
	}
	.list-pd {
		margin-top: 50upx;
	}
	.icon-shanchu{
		position: absolute;
		right: 0;
		top: 0;
		background-color: #333333;
		color: #FFFFFF;
		z-index: 99;
		padding: 2upx 10upx;
		border-radius: 10upx;
	}
</style>
