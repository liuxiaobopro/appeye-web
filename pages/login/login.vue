<template>
	<view>
		<!-- 状态栏 -->
		<uni-status-bar :bgcolor="bgcolor"></uni-status-bar>
		<!-- 关闭图标 -->
		<view class="icon iconfont icon-ziyuan" @tap="back"></view>
		<!-- 背景图 -->
		<image src="../../static/images/ad-009.png" mode="widthFix" lazy-load></image>
		<!-- 账号密码登录 -->
		<template v-if="!status">
			<view class="body">
				<input class="uni-input com-input" v-model="username" type="text" placeholder="名称/手机号/邮箱" />
				<view class="login-input-box">
					<input class="uni-input com-input forget-input" v-model="password" type="text" password placeholder="请输入密码" />
					<view class="forget u-f-ajc logn-font-color">忘记密码?</view>
				</view>
				<button class="user-set-btn" :class="{'user-set-btn-disable':disable}" type="primary" @tap="submit" :disabled="disable" :loading="loading">{{buttontext}}</button>
			</view>
		</template>
		<!-- 验证码登录 -->
		<template v-if="status">
			<view class="body">
				<view class="login-input-box">
					<view class="phone u-f-ajc">+86</view>
					<input class="uni-input com-input phone-input" v-model="phone" type="number" placeholder="手机号" />
				</view>
				<view class="login-input-box">
					<input class="uni-input com-input forget-input" v-model="checknum" type="number" placeholder="请输入验证码" />
					<view class="forget u-f-ajc logn-font-color yanzhengma" @tap="getCheckNum"><view class="u-f-ajc">{{!codetime ? "获取验证码" : codetime + " s"}}</view></view>
				</view>
				<button class="user-set-btn" :class="{'user-set-btn-disable':disable}" type="primary" @tap="submit" :disabled="disable" :loading="loading">{{buttontext}}</button>
			</view>
		</template>
		<!-- 登录状态切换 -->
		<view class="login-status u-f-ajc login-padding logn-font-color" @tap="changeStatus">
			{{status == 0 ? "验证码登录":"账号密码登录"}}<view class="icon iconfont icon-ziyuanldpi"></view>
		</view>
		<!-- 第三方登录 -->
		<view class="other-login-title u-f-ajc login-padding logn-font-color">
			第三方登录
		</view>
		<home-other-login></home-other-login>
		<!-- 协议 -->
		<view class="login-rule u-f-ajc login-padding logn-font-color">
			注册即代表同意 <view>xxx协议</view>
		</view>
	</view>
</template>

<script>
	import uniStatusBar from '../../components/uni-status-bar/uni-status-bar.vue';
	import homeOtherLogin from '../../components/home/home-other-login.vue';
	export default {
		components:{
			uniStatusBar,
			homeOtherLogin
		},
		data() {
			return {
				bgcolor: "#CDE8FF",
				disable:true,
				loading:false,
				buttontext:"登录",
				status: false,    //false账号密码   true手机验证码
				username:"",
				password:"",
				phone:"",
				checknum:"",
				codetime:0
			}
		},
		watch:{
			username(val){
				this.OnBtnChange()
			},
			password(val){
				this.OnBtnChange()
			},
			phone(val){
				this.OnBtnChange()
			},
			checknum(val){
				this.OnBtnChange()
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			submit(){
				if(this.status){
					// 验证码登录
					// 验证手机号合法性
					if(!this.isPhone()){
						uni.showToast({
							title: '请输入正确的电话号码',
							icon: 'none'
						});
						return 
					}
				}else{
					// 账号密码登录
				}
			},
			// 验证手机号码
			isPhone(){
				return (/^1[3456789]\d{9}$/).test(this.phone)
			},
			// 初始化表单
			initInput(){
				this.username = ''
				this.password = ''
				this.phone = ''
				this.checknum = ''
			},
			// 切换登录形式
			changeStatus(){
				this.initInput()
				this.status = !this.status
			},
			// 改变状态按钮
			OnBtnChange(){
				if((this.username && this.password) || (this.phone && this.checknum)){
					this.disable = false
					return;
				}
				this.disable = true
				return;
			},
			// 获取验证码
			getCheckNum(){
				if(this.codetime > 0){
					return
				}
				// 验证手机号合法性
				if(!this.isPhone()){
					uni.showToast({
						title: '请输入正确的电话号码',
						icon: 'none'
					});
					return 
				}
				this.codetime = 60
				let timer = setInterval(() => {
					this.codetime --
					if(this.codetime < 1){
						clearInterval(timer)
						this.codetime = 0
					}
				}, 1000);
			}
				
		}
	}
</script>

<style>
	image{
		box-sizing: border-box;
		width: 100%;
	}
	.icon-ziyuan{
		position: fixed;
		top: 60upx;
		left: 30upx;
		font-size: 40upx;
		font-weight: bold;
		z-index: 99;
	}
	.login-padding{
		padding: 20upx 0;
	}
	.logn-font-color{
		color: #CCCCCC;
	}
	.icon-ziyuanldpi{
		font-size: 20upx;
	}
	.other-login-title{
		position: relative;
	}
	.other-login-title:before,.other-login-title:after{
		content: "";
		position: absolute;
		background-color: #CCCCCC;
		height: 1upx;
		width: 100upx;
		top: 50%;
	}
	.other-login-title:before{
		left: 25%;
	}
	.other-login-title:after{
		right: 25%;
	}
	.login-input-box{
		position: relative;
	}
	.login-input-box .forget-input{
		padding-right: 150upx;
	}
	.login-input-box .forget{
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		width: 150upx;
		z-index: 99;
	}
	
	.login-input-box .phone{
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 50upx;
		z-index: 99;
		font-weight: bold;
	}
	.login-input-box .phone-input{
		padding-left: 70upx;
	}
	.yanzhengma>view{
		background-color: #EEEEEE;
		border-radius: 10upx;
		font-size: 25upx;
		width: 150upx;
		padding: 10upx 0;
	}
</style>
