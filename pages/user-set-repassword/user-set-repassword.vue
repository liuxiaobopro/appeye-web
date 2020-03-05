<template>
	<view class="body">
		<input class="uni-input com-input" v-model="oldpassword" type="text" password="true" placeholder="输入旧密码" />
		<input class="uni-input com-input" v-model="newpassword" type="text" password="true" placeholder="输入新密码" />
		<input class="uni-input com-input" v-model="renewpassword" type="text" password="true" placeholder="确认新密码" />
		<button class="user-set-btn" :class="{'user-set-btn-disable':disable}" type="primary" @tap="submit" :disabled="disable" :loading="loading">{{buttontext}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				oldpassword:"",
				newpassword:"",
				renewpassword:"",
				disable:true,
				loading:false,
				buttontext:"完成"
			}
		},
		watch:{
			oldpassword(val){
				this.cahnge()
			},
			newpassword(val){
				this.cahnge()
			},
			renewpassword(val){
				this.cahnge()
			},
		},
		methods: {
			// 实时监听输入框
			cahnge(){
				if(this.oldpassword&&this.newpassword&&this.renewpassword){
					this.disable=false
					return;
				}
				this.disable=true
			},
			// 验证层
			check(){
				if(!this.oldpassword || this.oldpassword == ''){
					uni.showToast({
						title: '请输入旧密码',
						icon: 'none'
						
					});
					return false
				}
				if(!this.newpassword || this.newpassword == ''){
					uni.showToast({
						title: '请输入新密码',
						icon: 'none'
						
					});
					return false
				}
				if(!this.renewpassword || this.renewpassword == ''){
					uni.showToast({
						title: '请确认新密码',
						icon: 'none'
						
					});
					return false
				}
				if(this.newpassword !== this.renewpassword){
					uni.showToast({
						title: '两次新密码不一致',
						icon: 'none'
						
					});
					this.buttontext = "完成"
					return false
				}
				return true;
			},
			// 提交
			submit(){
				this.loading = true;
				this.disable = true;
				this.buttontext = "加载中..."
				if(!this.check()){
					this.loading = false;
					this.disable = true;
					return;
				}
				setTimeout(() => {
					uni.showToast({
						title: '验证通过'
					});
					this.disable = false
					this.loading = false;
					this.buttontext = "完成"
				}, 2000);
				
			}
		}
	}
</script>

<style>
	
</style>
