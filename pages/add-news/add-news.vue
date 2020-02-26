<template>
	<view>
		<!-- 自定义导航 -->
		<uni-nav-bar :statusBar="true" rightText="发布" left-icon="arrowleft" @clickLeft="back" @clickRight="submit">
			<view class="u-f-ajc" @tap="changelook">
				{{yinsi}}
				<view class="icon iconfont icon-tubiao-"></view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view class="uni-textarea">
			<textarea v-model="text" value="" placeholder="发布一条动态吧" />
		</view>
		<!-- 上传多图 -->
		<view class="uni-list list-pd">
			<view class="uni-list-cell cell-pd">
				<view class="uni-uploader">
					<view class="uni-uploader-head">
						<view class="uni-uploader-title">点击可预览选好的图片</view>
						<view class="uni-uploader-info">{{imageList.length}}/9</view>
					</view>
					<view class="uni-uploader-body">
						<view class="uni-uploader__files">
							<block v-for="(image,index) in imageList" :key="index">
								<view class="uni-uploader__file">
									<view class="icon iconfont icon-shanchu" @tap="delect(index)"></view>
									<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
								</view>
							</block>
							<view class="uni-uploader__input-box" v-if="imageList.length == 9 ? false:true">
								<view class="uni-uploader__input" @tap="chooseImage"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 弹出公告 -->
		<uni-popup :show="showpopup" position="middle" mode="fixed" @hidePopup="hidePopup">
			1111
		</uni-popup>
	</view>
</template>

<script>
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
	import uniPopup from '../../components/uni-popup/uni-popup.vue';
	let changelook = ['所有人可见','仅自己可见']
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
		comments:{
			uniNavBar,
			uniPopup 
		},
		data() {
			return {
				yinsi:"所与人可见",
				text:"",
				imageList: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				showpopup:true,
				isget:false
			}
		},
		// 监听返回
		onBackPress(){
			//判断用户是否添加
			if(!this.text && this.imageList.length < 1){
				return ;
			}
			if(!this.isget){
				this.baocun();
				return true;
			}
		},
		methods: {
			// 保存为草稿
			baocun(){
				uni.showModal({
					content: '是否要保存为草稿?',
					cancelText: '不保存',
					confirmText: '保存',
					success: res => {
						if(res.confirm){
							console.log('保存');
						}else{
							console.log('不保存');
						}
						this.isget = true;
						uni.navigateBack({
							delta: 1
						});
					},
				});
			},
			//返回
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			//发布
			submit(){
				uni.showToast({
					title: '发布'
				});
			},
			//隐私
			changelook(){
				uni.showActionSheet({
				    itemList: ['所有人可见', '仅自己可见'],
				    success: (res) => {
						this.yinsi = changelook[res.tapIndex];
				    }
				});
			},
			
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
					},
					fail: (err) => {
						// #ifdef APP-PLUS
						if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
							this.checkPermission(err.code);
						}
						// #endif
						// #ifdef MP
						uni.getSetting({
							success: (res) => {
								let authStatus = false;
								switch (this.sourceTypeIndex) {
									case 0:
										authStatus = res.authSetting['scope.camera'];
										break;
									case 1:
										authStatus = res.authSetting['scope.album'];
										break;
									case 2:
										authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
										break;
									default:
										break;
								}
								if (!authStatus) {
									uni.showModal({
										title: '授权失败',
										content: '需要从您的相机或相册获取图片，请在设置界面打开相关权限',
										success: (res) => {
											if (res.confirm) {
												uni.openSetting()
											}
										}
									})
								}
							}
						})
						// #endif
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
			async checkPermission(code) {
				let type = code ? code - 1 : this.sourceTypeIndex;
				let status = permision.isIOS ? await permision.requestIOS(sourceType[type][0]) :
					await permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' :
						'android.permission.READ_EXTERNAL_STORAGE');
			
				if (status === null || status === 1) {
					status = 1;
				} else {
					uni.showModal({
						content: "没有开启权限",
						confirmText: "设置",
						success: function(res) {
							if (res.confirm) {
								permision.gotoAppSetting();
							}
						}
					})
				}
			
				return status;
			},
			delect(index){
				uni.showModal({
				    title: '提示',
				    content: '是否删除该图片',
				    success: (res) => {
				        if (res.confirm) {
				            // console.log('用户点击确定');
							this.imageList.splice(index, 1);
				        }
				    }
				});
			}
		}
	}
</script>

<style>
.uni-textarea{
	/* border: 1upx solid #EEEEEE; */
}
.cell-pd {
	padding: 22upx 30upx;
}
.uni-uploader__file{
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
.u-f-ajc{
	margin: 0 auto;
}
</style>
