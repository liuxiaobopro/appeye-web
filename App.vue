<script>
	export default {
		onLaunch: function() {
			// 网络监听
			this.lib.NetWork.On()
		},
		onShow: function() {
			this.lib.NetWork.On()
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 官方css库 */
	@import './common/uni.css';
	/* 阿里图标库 */
	@import './common/icon.css';
	/* animate动画库 */
	@import './common/animate.css';
	/* 公共css */
	@import './common/common.css';
</style>
