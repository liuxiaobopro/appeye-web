<template>
	<view>
		<!-- 背景图+用户基本信息 -->
		<user-space-head :userinfo="userinfo"></user-space-head>
		<!-- 统计 tab -->
		<view class="user-space-data">
			<home-info :homeinfo="homeinfo"></home-info>
		</view>
		<view style="height: 20upx;background-color: #F4F4F4;"></view>
		<!-- tab切换 -->
		<!-- <swiper-tab-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap='tabtap' scrollItemStyle="width:33%;"></swiper-tab-head> -->
		<!-- 主体 -->
		<!-- <block v-for="(item, index) in tablist" :key="index">
			<template v-if="tabIndex==index">
				<block v-for="(itemss, indexss) in item.list" :key="indexss">
					<common-list :item="itemss" :index="indexss"></common-list>
				</block>
			</template> 
		</block> -->
		<template v-if="tabIndex==0">
			<user-space-userinfo :userinfo="userinfo"></user-space-userinfo>
		</template>
		<template v-if="tabIndex==1">
			<block v-for="(itemss, indexss) in qslist" :key="indexss">
				<common-list :item="itemss" :index="indexss"></common-list>
			</block>
		</template>
		<template v-if="tabIndex==2">
			<block v-for="(itemss, indexss) in dtlist" :key="indexss">
				<common-list :item="itemss" :index="indexss"></common-list>
			</block>
		</template>
		<paper-left-popup :show="show" @hidepopup="hidepopup" @addfriend="addfriend" @clear="clear"></paper-left-popup>
		
		
	</view>
</template>

<script>
	import userSpaceHead from '../../components/user-space/user-space-head.vue';
	import homeInfo from '../../components/home/home-info.vue';
	import swiperTabHead from "../../components/index/swiper-tab-head.vue";
	import commonList from '../../components/common/common-list.vue';
	import userSpaceUserinfo from '../../components/user-space/user-space-userinfo.vue';
	export default {
		components:{
			userSpaceHead,
			homeInfo,
			swiperTabHead,
			commonList,
			userSpaceUserinfo
		},
		data() {
			return {
				tabIndex:0,
				tabBars:[
					{ name:'主页',id:'11' },
					{ name:'糗事',id:'22' },
					{ name:'动态',id:'33' },
				],
				userinfo:{
					bgimg: 1,
					userpic:"../../static/logo.png",
					username:"xiaojiuwo",
					age: 23,
					sex: 0,
					isguanzhu: false,
					reglongtime: "150天14小时",
					id: 1234561,
					xz: "巨蟹座",
					job: "IT",
					path: "广东",
					qg: "已婚"
					
				},
				homeinfo:[
					{
						text:"获赞",
						num:"10k"
					},
					{
						text:"关注",
						num:0
					},
					{
						text:"粉丝",
						num:20
					},
				],
				qslist:[
					{
						userpic:"../../static/logo.png",
						username:"昵称111",
						isguanzhu:false,
						title:"糗事",
						age: 23,
						type:"video",  //img video text
						titlepic:"../../static/logo.png",
						infonum:{
							index:0,    //0未表态  1顶  2踩
							dingnum:11,
							cainum:22
						},
						commentnum:33,
						sharenum:44,
						playnum:"20w",
						long:"2:12"
					},
					{
						userpic:"../../static/images/ad-002.png",
						username:"昵称111",
						isguanzhu:true,
						title:"我是标题111",
						type:"img",  //img video text
						titlepic:"../../static/images/ad-001.png",
						infonum:{
							index:1,    //0未表态  1顶  2踩
							dingnum:11,
							cainum:22
						},
						commentnum:33,
						sharenum:44,
						// playnum:"20w",
						// long:"2:12"
					},
					{
						userpic:"../../static/logo.png",
						username:"昵称111",
						isguanzhu:true,
						title:"我是标题111",
						type:"text",  //img video text
						// titlepic:"../../static/logo.png",
						infonum:{
							index:2,    //0未表态  1顶  2踩
							dingnum:11,
							cainum:22
						},
						commentnum:33,
						sharenum:44,
						// playnum:"20w",
						// long:"2:12"
					},
				],
				dtlist:[
					{
						userpic:"../../static/logo.png",
						username:"昵称111",
						isguanzhu:false,
						title:"动态",
						type:"video",  //img video text
						titlepic:"../../static/logo.png",
						infonum:{
							index:0,    //0未表态  1顶  2踩
							dingnum:11,
							cainum:22
						},
						commentnum:33,
						sharenum:44,
						playnum:"20w",
						long:"2:12"
					},
					{
						userpic:"../../static/images/ad-002.png",
						username:"昵称111",
						isguanzhu:true,
						title:"我是标题111",
						type:"img",  //img video text
						titlepic:"../../static/images/ad-001.png",
						infonum:{
							index:1,    //0未表态  1顶  2踩
							dingnum:11,
							cainum:22
						},
						commentnum:33,
						sharenum:44,
						// playnum:"20w",
						// long:"2:12"
					},
					{
						userpic:"../../static/logo.png",
						username:"昵称111",
						isguanzhu:true,
						title:"我是标题111",
						type:"text",  //img video text
						// titlepic:"../../static/logo.png",
						infonum:{
							index:2,    //0未表态  1顶  2踩
							dingnum:11,
							cainum:22
						},
						commentnum:33,
						sharenum:44,
						// playnum:"20w",
						// long:"2:12"
					},
				]
				
			}
		},
		computed:{
			
		},
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0:
					break;
				default:
					break;
			}
		},
		methods: {
			//tabbao点击事件
			tabtap(index){
				this.tabIndex = index;
			},
			
		}
	}
</script>

<style>
	.user-space-margin{
		margin: 15upx 0;
	}
	.user-space-data{
		background-color: #FFFFFF;
		position: relative;
		z-index: 99;
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
		margin-top: -15upx;
	}
	
	
</style>
