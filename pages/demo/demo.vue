<template>
	<view>
		
		<view v-for="(val, index) in list" :key='index'>
			{{index}} -- {{val}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemdata:"啊啊啊啊",
				list:[
					'篮球',
					'足球',
					'云毛球'
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.box{
	border: 1upx solid #333333;
	height: 500upx;
	width: 100%;
	display: flex;
}
.box>view{
	background-color: red;
	color: #ffffff;
	font-size: 40upx;
	font-weight: bold;
	flex: 1;
	height: 500upx;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1upx solid #fff;
}
</style>
