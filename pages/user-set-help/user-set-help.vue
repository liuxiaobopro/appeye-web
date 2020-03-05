<template>
	<view>
		<view class="body">
			<view v-for="(item, index) in list" :key="index">
				<!-- <uni-section :title="item.name" type="line"></uni-section> -->
				<uni-collapse ref="add" class="warp" @change="change">
					<uni-collapse-item v-for="(sub, key) in item.data" :key="key" :open="sub.open" :show-animation="sub.showAnimation" :disabled="sub.disabled" :title="sub.subName">
						<text class="content">{{ sub.content }}</text>
					</uni-collapse-item>
				</uni-collapse>
			</view>
			<button class="user-set-btn" type="primary" >意见反馈</button>
		</view>
	</view>
</template>

<script>
	import uniCollapse from '../../components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '../../components/uni-collapse-item/uni-collapse-item.vue'
	// import uniSection from '../../components/uni-section/uni-section.vue'
	export default {
		components: {
			// uniSection,
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				list:[
					{
						name: '添加动画效果',
						data: [
							{
								type: true,
								subName: '动画效果',
								showAnimation: true,
								content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
							},
							{
								type: true,
								subName: '动画效果',
								showAnimation: true,
								content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
							},
							{
								type: true,
								subName: '动画效果',
								showAnimation: true,
								content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。'
							},
						]
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
