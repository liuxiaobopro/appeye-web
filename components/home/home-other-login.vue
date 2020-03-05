<template>
	<view class="other-login u-f-ac">
		
		<block v-for="(item, index) in providerList" :key="index"  >
			<view class="u-f-ajc u-f1">
				<view class="icon iconfont  type u-f-ajc" :class="[item.icon]" @click="tologin(item)"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
		        providerList: []
		    }
		},
		mounted() {
			this.getLoginAuth()
		},
		methods:{
			getLoginAuth(){
				uni.getProvider({
				    service: 'oauth',
				    success: (result) => {
				        this.providerList = result.provider.map((value) => {
				            let providerName = '';
				            let icon = '';
				            switch (value) {
				                case 'weixin':
									icon = 'icon-weixinhaoyou1'
				                    break;
				                case 'qq':
									icon = 'icon-qq'
				                    break;
				                case 'sinaweibo':
									icon = 'icon-weibo'
				                    break;
								case 'xiaomi':
									icon = 'icon-weibo'
								    break;
				            }
				            return {
				                name: providerName,
								icon: icon,
				                id: value
				            }
				        });
								
				    },
				    fail: (error) => {
				        console.log('获取登录通道失败', error);
				    }
				});
			},
			// 登录
			tologin(provider) {
				console.log(JSON.stringify(this.providerList));
			    uni.login({
			        provider: provider.id,
			        // #ifdef MP-ALIPAY
			        scopes: 'auth_user', //支付宝小程序需设置授权类型
			        // #endif
			        success: (res) => {
						// console.log(JSON.stringify(res));
						// 登录成功
			        },
			        fail: (err) => {
			            console.log('login fail:', err);
			        }
			    });
			}
		}
	}
</script>

<style scoped>
	.other-login{
		padding: 20upx 80upx;
	}
	.other-login .type{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		color: #FFFFFF;
		font-size: 50upx;
	}
	.other-login .icon-weibo{
		background-color: #FF7332;
	}
	.other-login .icon-weixinhaoyou1{
		background-color: #32D555;
	}
	.other-login .icon-qq{
		background-color: #44B3FF;
	}
	
</style>
