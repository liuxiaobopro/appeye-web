(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0dbf":function(i,t,e){"use strict";e.r(t);var n=e("e7dc"),a=e("3cc9");for(var s in a)"default"!==s&&function(i){e.d(t,i,function(){return a[i]})}(s);e("fc25");var u,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"dda4326e",null,!1,n["a"],u);t["default"]=c.exports},"209f":function(i,t,e){"use strict";e.r(t);var n=e("d3b1"),a=e("30d2");for(var s in a)"default"!==s&&function(i){e.d(t,i,function(){return a[i]})}(s);var u,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"bbe38a8e",null,!1,n["a"],u);t["default"]=c.exports},2156:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{loadtext:String}};t.default=n},"28a6":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("c5f6");var n={props:{item:Object,index:Number},data:function(){return{isguanzhu:this.item.isguanzhu,infonum:this.item.infonum}},methods:{guanzhu:function(){this.isguanzhu=!0,uni.showToast({title:"关注成功!"})},caozuo:function(i){switch(i){case"ding":if(1==this.item.infonum.index)return;this.item.infonum.dingnum++,2==this.item.infonum.index&&this.item.infonum.cainum--,this.item.infonum.index=1,uni.showToast({title:"顶了一下!",image:"../../static/images/xiao.png"});break;case"cai":if(2==this.item.infonum.index)return;this.item.infonum.cainum++,1==this.item.infonum.index&&this.item.infonum.dingnum--,this.item.infonum.index=2,uni.showToast({title:"踩了一脚!",image:"../../static/images/ku.png"});break}},opendetail:function(){uni.showToast({title:"进入"})}}};t.default=n},"30d2":function(i,t,e){"use strict";e.r(t);var n=e("641f"),a=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,function(){return n[i]})}(s);t["default"]=a.a},"3cc9":function(i,t,e){"use strict";e.r(t);var n=e("28a6"),a=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,function(){return n[i]})}(s);t["default"]=a.a},"3e98":function(i,t,e){"use strict";e.r(t);var n=e("2156"),a=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,function(){return n[i]})}(s);t["default"]=a.a},"450d":function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("c5f6");var n={props:{tabBars:Array,tabIndex:Number},methods:{tabtap:function(i){this.$emit("tabtap",i)}}};t.default=n},4658:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,".uni-swiper-tab[data-v-5eff09c1]{border-bottom:%?1?% solid #eee}.swiper-tab-list[data-v-5eff09c1]{color:#969696;font-weight:700}.uni-tab-bar .active[data-v-5eff09c1]{color:#343434}.active[data-v-5eff09c1]{font-size:%?35?%}.active .swiper-tab-line[data-v-5eff09c1]{border-bottom:%?6?% solid #fede33;width:%?70?%;margin:auto;border-top:%?6?% solid #fede33;border-radius:%?20?%}",""])},"552e":function(i,t,e){var n=e("e74a");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("6f181540",n,!0,{sourceMap:!1,shadowMode:!1})},6310:function(i,t,e){"use strict";e.r(t);var n=e("9b3a"),a=e("e53b");for(var s in a)"default"!==s&&function(i){e.d(t,i,function(){return a[i]})}(s);e("92ef");var u,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"2affc59a",null,!1,n["a"],u);t["default"]=c.exports},"641f":function(i,t,e){"use strict";var n=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(e("f499")),s=n(e("0dbf")),u=n(e("a3fb")),o=n(e("ff98")),c=n(e("6310")),l={components:{indexList:s.default,swiperTabHead:u.default,loadMore:o.default,noThing:c.default},onNavigationBarSearchInputClicked:function(){uni.navigateTo({url:"../search/search"})},onNavigationBarButtonTap:function(i){switch(i.index){case 1:uni.navigateTo({url:"../add-input/add-input"});break;case 0:break}},data:function(){return{swiperheight:500,tabIndex:1,tabBars:[{name:"关注",id:"guanzhu"},{name:"推荐",id:"tuijian"},{name:"视频",id:"shipin"},{name:"图文",id:"tuwen"},{name:"段子",id:"duanzi"}],newslist:[{loadtext:"上拉加载更多",list:[{userpic:"../../static/logo.png",username:"昵称111",isguanzhu:!1,title:"我是标题111",type:"video",titlepic:"../../static/logo.png",infonum:{index:0,dingnum:11,cainum:22},commentnum:33,sharenum:44,playnum:"20w",long:"2:12"},{userpic:"../../static/images/ad-002.png",username:"昵称111",isguanzhu:!0,title:"我是标题111",type:"img",titlepic:"../../static/images/ad-001.png",infonum:{index:1,dingnum:11,cainum:22},commentnum:33,sharenum:44},{userpic:"../../static/logo.png",username:"昵称111",isguanzhu:!0,title:"我是标题111",type:"text",infonum:{index:2,dingnum:11,cainum:22},commentnum:33,sharenum:44}]},{loadtext:"上拉加载更多",list:[{userpic:"../../static/images/ad-002.png",username:"昵称111",isguanzhu:!0,title:"我是标题111",type:"img",titlepic:"../../static/images/ad-001.png",infonum:{index:1,dingnum:11,cainum:22},commentnum:33,sharenum:44},{userpic:"../../static/images/ad-002.png",username:"昵称111",isguanzhu:!0,title:"我是标题111",type:"img",titlepic:"../../static/images/ad-001.png",infonum:{index:1,dingnum:11,cainum:22},commentnum:33,sharenum:44},{userpic:"../../static/images/ad-002.png",username:"昵称111",isguanzhu:!0,title:"我是标题111",type:"img",titlepic:"../../static/images/ad-001.png",infonum:{index:1,dingnum:11,cainum:22},commentnum:33,sharenum:44}]},{loadtext:"上拉加载更多",list:[{userpic:"../../static/logo.png",username:"昵称111",isguanzhu:!0,title:"我是标题111",type:"text",infonum:{index:2,dingnum:11,cainum:22},commentnum:33,sharenum:44},{userpic:"../../static/logo.png",username:"昵称111",isguanzhu:!0,title:"我是标题111",type:"text",infonum:{index:2,dingnum:11,cainum:22},commentnum:33,sharenum:44}]},{list:[]},{list:[]}]}},onLoad:function(){uni.getSystemInfo({success:function(i){var t=i.windowHeight-uni.upx2px(100);this.swiperheight=t}})},methods:{tabtap:function(i){this.tabIndex=i},tabChange:function(i){this.tabIndex=(0,a.default)(i.detail.current)},loadmore:function(i){var t=this;"上拉加载更多"==this.newslist[i].loadtext&&(this.newslist[i].loadtext="加载中...",setTimeout(function(){var e={userpic:"../../static/logo.png",username:"昵称111",isguanzhu:!1,title:"我是标题111",type:"video",titlepic:"../../static/logo.png",infonum:{index:0,dingnum:11,cainum:22},commentnum:33,sharenum:44,playnum:"20w",long:"2:12"};t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].list.push(e),t.newslist[i].loadtext="上拉加载更多"},1e3))}}};t.default=l},"6e8d":function(i,t,e){"use strict";e.r(t);var n=e("450d"),a=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,function(){return n[i]})}(s);t["default"]=a.a},"8ab7":function(i,t,e){"use strict";var n=e("552e"),a=e.n(n);a.a},"8f87":function(i,t,e){var n=e("4658");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("139916e5",n,!0,{sourceMap:!1,shadowMode:!1})},"92ef":function(i,t,e){"use strict";var n=e("99f2"),a=e.n(n);a.a},9391:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,".index-list[data-v-dda4326e]{padding:%?20?%;border-bottom:%?1?% solid #eee}.index-list1[data-v-dda4326e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.index-list1>uni-view[data-v-dda4326e]:first-child{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999}.index-list1>uni-view:first-child uni-image[data-v-dda4326e]{width:%?90?%;height:%?90?%;border-radius:100%;margin-right:%?10?%}.index-list1>uni-view[data-v-dda4326e]:last-child{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#f4f4f4;border-radius:%?5?%;width:%?100?%;height:%?60?%;font-size:%?25?%;\n\t/* font-weight: bold; */margin-right:%?20?%;padding:0 %?10?%}\n/* .index-list1>view:last-child{\n\tbackground-color: #C0C0C0;\n} */.index-list2[data-v-dda4326e]{font-size:%?32?%;margin:%?20?% 0}.index-list3[data-v-dda4326e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.index-list3>uni-image[data-v-dda4326e]{width:100%;border-radius:%?20?%}.index-list4[data-v-dda4326e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?% 0}.index-list4 uni-view[data-v-dda4326e]{color:#999\n\t/* font-size: 40upx; */}.index-list4>uni-view>uni-view[data-v-dda4326e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.index-list4>uni-view>uni-view[data-v-dda4326e]:first-child{margin-right:%?10?%}.index-list4>uni-view>uni-view>uni-view[data-v-dda4326e]{margin-right:%?15?%}.index-list4>uni-view[data-v-dda4326e]:first-child{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.index-list4>uni-view[data-v-dda4326e]:last-child{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.index-list-play[data-v-dda4326e]{position:absolute;font-size:%?160?%;color:#fff}.index-list-playinfo[data-v-dda4326e]{position:absolute;background-color:rgba(51,51,51,.45);bottom:%?8?%;right:%?8?%;color:#fff;border-radius:%?20?%;padding:0 %?20?%;font-size:%?30?%}.index-list4 .active[data-v-dda4326e],.index-list4 .active>uni-view[data-v-dda4326e]{color:#c5f61c}",""])},"99f2":function(i,t,e){var n=e("b2bd");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("44f740d4",n,!0,{sourceMap:!1,shadowMode:!1})},"9b3a":function(i,t,e){"use strict";var n,a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"nothing u-f-ajc red"},[i._v("没有更多内容了呦..")])],1)},s=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return s}),e.d(t,"a",function(){return n})},a3fb:function(i,t,e){"use strict";e.r(t);var n=e("c34f"),a=e("6e8d");for(var s in a)"default"!==s&&function(i){e.d(t,i,function(){return a[i]})}(s);e("efcf");var u,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"5eff09c1",null,!1,n["a"],u);t["default"]=c.exports},b2bd:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,".nothing[data-v-2affc59a]{font-size:%?40?%;font-weight:700;color:#ccc}\n/* .nothing image{\n\twidth: 50%;\n} */",""])},c2d5:function(i,t,e){},c34f:function(i,t,e){"use strict";var n,a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"uni-tab-bar",staticStyle:{position:"relative"}},[e("v-uni-scroll-view",{staticClass:"uni-swiper-tab",attrs:{"scroll-x":!0}},[i._l(i.tabBars,function(t,n){return[e("v-uni-view",{key:t.id+"_0",staticClass:"swiper-tab-list",class:{active:i.tabIndex==n},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.tabtap(n)}}},[i._v(i._s(t.name)),e("v-uni-view",{staticClass:"swiper-tab-line"})],1)]})],2)],1)],1)},s=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return s}),e.d(t,"a",function(){return n})},d3b1:function(i,t,e){"use strict";var n,a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("swiper-tab-head",{attrs:{tabBars:i.tabBars,tabIndex:i.tabIndex},on:{tabtap:function(t){arguments[0]=t=i.$handleEvent(t),i.tabtap.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-tab-bar"},[e("v-uni-swiper",{staticClass:"swiper-box",style:{height:i.swiperheight+"px"},attrs:{current:i.tabIndex},on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.tabChange.apply(void 0,arguments)}}},[i._l(i.newslist,function(t,n){return[e("v-uni-swiper-item",[e("v-uni-scroll-view",{staticClass:"list",attrs:{"scroll-y":"true"},on:{scrolltolower:function(t){arguments[0]=t=i.$handleEvent(t),i.loadmore(n)}}},[t.list.length>0?[i._l(t.list,function(i,t){return[e("index-list",{key:t+"_0",attrs:{item:i,index:t}})]}),e("load-more",{attrs:{loadtext:t.loadtext}})]:[e("no-thing")]],2)],1)]})],2)],1)],1)},s=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return s}),e.d(t,"a",function(){return n})},e53b:function(i,t,e){"use strict";e.r(t);var n=e("c2d5"),a=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,function(){return n[i]})}(s);t["default"]=a.a},e74a:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,".load-more[data-v-1f2f0c29]{text-align:center;color:#ccc;padding:%?40?% 0}",""])},e7dc:function(i,t,e){"use strict";var n,a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"index-list animated bounceInUp fast"},[e("v-uni-view",{staticClass:"index-list1"},[e("v-uni-view",[e("v-uni-image",{attrs:{src:i.item.userpic,mode:"widthFix","lazy-load":!0}}),i._v(i._s(i.item.username))],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!i.isguanzhu,expression:"!isguanzhu"}],staticClass:"u-faj",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.guanzhu.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"icon iconfont icon-jiahao"}),i._v("关注")],1)],1),e("v-uni-view",{staticClass:"index-list2",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.opendetail.apply(void 0,arguments)}}},[i._v(i._s(i.item.title))]),e("v-uni-view",{staticClass:"index-list3 u-faj",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.opendetail.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:i.item.titlepic,mode:"widthFix","lazy-load":!0}}),"video"==i.item.type?[e("v-uni-view",{staticClass:"icon iconfont icon-bofang index-list-play"}),e("v-uni-view",{staticClass:"index-list-playinfo"},[i._v(i._s(i.item.playnum)+"播放  "+i._s(i.item.long))])]:i._e()],2),e("v-uni-view",{staticClass:"index-list4"},[e("v-uni-view",[e("v-uni-view",{class:{active:1==i.item.infonum.index},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.caozuo("ding")}}},[e("v-uni-view",{staticClass:"icon iconfont icon-xiaolian"}),i._v(i._s(i.item.infonum.dingnum))],1),e("v-uni-view",{class:{active:2==i.item.infonum.index},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.caozuo("cai")}}},[e("v-uni-view",{staticClass:"icon iconfont icon-kulian"}),i._v(i._s(i.item.infonum.cainum))],1)],1),e("v-uni-view",[e("v-uni-view",[e("v-uni-view",{staticClass:"icon iconfont icon-tubiaozhizuo-"}),i._v(i._s(i.item.commentnum))],1),e("v-uni-view",[e("v-uni-view",{staticClass:"icon iconfont icon-zhuanfa"}),i._v(i._s(i.item.sharenum))],1)],1)],1)],1)},s=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return s}),e.d(t,"a",function(){return n})},ed47:function(i,t,e){"use strict";var n,a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"load-more"},[i._v(i._s(i.loadtext))])],1)},s=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return s}),e.d(t,"a",function(){return n})},efcf:function(i,t,e){"use strict";var n=e("8f87"),a=e.n(n);a.a},f0b8:function(i,t,e){var n=e("9391");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("19a95552",n,!0,{sourceMap:!1,shadowMode:!1})},fc25:function(i,t,e){"use strict";var n=e("f0b8"),a=e.n(n);a.a},ff98:function(i,t,e){"use strict";e.r(t);var n=e("ed47"),a=e("3e98");for(var s in a)"default"!==s&&function(i){e.d(t,i,function(){return a[i]})}(s);e("8ab7");var u,o=e("f0c5"),c=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"1f2f0c29",null,!1,n["a"],u);t["default"]=c.exports}}]);