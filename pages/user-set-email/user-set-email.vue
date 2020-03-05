<template>
	<view class="body">
		<input class="uni-input com-input" v-model="email" type="text" placeholder="输入需要绑定的邮箱" />
		<input class="uni-input com-input" v-model="password" type="text" password="true" placeholder="输入密码" />
		<button class="user-set-btn" :class="{'user-set-btn-disable':disable}" type="primary" @tap="submit" :disabled="disable" :loading="loading">{{buttontext}}</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				email:"",
				password:"",
				disable:true,
				loading:false,
				buttontext:"完成"
			}
		},
		watch:{
			email(val){
				this.cahnge()
			},
			password(val){
				this.cahnge()
			},
		},
		methods: {
				// 实时监听输入框
				cahnge(){
					if(this.email&&this.password){
						this.disable=false
						return;
					}
					this.disable=true
				},
				// 验证层
				check(){
					if(!this.email || this.email == ''){
						uni.showToast({
							title: '请输入邮箱',
							icon: 'none'
							
						});
						return false
					}
					// 验证邮箱格式
					let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
					if(!ePattern.test(this.email)){
						uni.showToast({
							title: '请输入正确的邮箱',
							icon: 'none'
							
						});
						this.buttontext = "完成"
						return false
					}
					if(!this.password || this.password == ''){
						uni.showToast({
							title: '请输入新密码',
							icon: 'none'
							
						});
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
