<template>
	<view class="body">
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>头像</view>
			<view class="u-f-ac" @tap="changeimg">
				<image :src="userpic" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>昵称</view>
			<view class="u-f-ac">
				<input type="text" v-model="username" />
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>性别</view>
			<view class="u-f-ac" @tap="changeOne('sex')">
				<view>{{sex}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>生日</view>
			<view class="u-f-ac">
				<picker mode="date" :value="brithday" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input" style="padding: 0;" >{{brithday}}</view>
				</picker>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>情感</view>
			<view class="u-f-ac" @tap="changeOne('qg')">
				<view>{{qg}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>职业</view>
			<view class="u-f-ac" @tap="changeOne('job')">
				<view>{{job}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view>
		<!-- <view class="user-set-userinfo-list u-f-ac u-f-jsb">
			<view>家乡</view>
			<view class="u-f-ac">
				<view>{{pickerText}}</view>
				<view class="icon iconfont icon-bianji1"></view>
			</view>
		</view> -->
		<!-- <mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker> -->
		<button class="user-set-btn" type="primary" @tap="submit" >完成</button>
	</view>
</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue';
	export default {
		components:{
			mpvueCityPicker
		},
		data() {
			return {
				userpic:"../../static/logo.png",
				username:"小酒窝",
				sex:"不限",
				qg:"未婚",
				job:"无业游民",
				brithday:"1970-00-00",
				sexlist:["不限", "男", "女"],			    
				qglist:["未婚", "已婚"],			    
				joblist:["无业游民", "在职人员"],
				themeColor:"#007AFF",
				pickerText:""
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			onConfirm(e){
				this.pickerText = JSON.stringify(e)
			},
			// 单列选择
			changeOne(val){
				let arr = [];
				switch (val){
					case "sex":
					arr = this.sexlist
						break;
					case "qg":
					arr = this.qglist
						break;
					case "job":
					arr = this.joblist
						break;
					default:
						break;
				}
				uni.showActionSheet({
				    itemList: arr,
				    success: (res) => {
				        // console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
						switch (val){
							case "sex":
							this.sex = arr[res.tapIndex]
								break;
							case "qg":
							this.qg = arr[res.tapIndex]
								break;
							case "job":
							this.job = arr[res.tapIndex]
								break;
							default:
								break;
						}
						
				    }
				});
				
			},
			// 修改头像
			changeimg(){
				uni.chooseImage({
				    count: 1, //默认9
				    success:(res) => {
						this.userpic = res.tempFilePaths
				    },
					fail:(res) => {
						// 取消时会执行这里
					}
				});
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
	
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			bindDateChange(e) {
				this.brithday = e.target.value
			},
			// 提交
			submit(){
				
			}
		}
	}
</script>

<style>
	.user-set-userinfo-list{
		padding: 20upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	.user-set-userinfo-list>view:first-child{
		font-size: 32upx;
		font-weight: bold;
		color: #9B9B9B;
	}
	.user-set-userinfo-list>view:last-child>image{
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
	}
	.user-set-userinfo-list>view:last-child>input{
		text-align: right;
		font-size: 30upx;
	}
	.user-set-userinfo-list>view:last-child>view:last-of-type{
		margin-left: 20upx;
		color: #9B9B9B;;
	}
	
</style>
