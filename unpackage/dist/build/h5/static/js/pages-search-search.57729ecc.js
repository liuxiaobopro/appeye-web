(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"07aa":function(i,t,e){var n=e("a7dd");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("65637936",n,!0,{sourceMap:!1,shadowMode:!1})},"0dbf":function(i,t,e){"use strict";e.r(t);var n=e("1042"),a=e("3cc9");for(var s in a)"default"!==s&&function(i){e.d(t,i,function(){return a[i]})}(s);e("6438");var o,u=e("f0c5"),c=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"0d87876d",null,!1,n["a"],o);t["default"]=c.exports},1042:function(i,t,e){"use strict";var n,a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"index-list animated bounceInUp fast"},[e("v-uni-view",{staticClass:"index-list1"},[e("v-uni-view",[e("v-uni-image",{attrs:{src:i.item.userpic,mode:"widthFix","lazy-load":!0}}),i._v(i._s(i.item.username))],1),e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!i.isguanzhu,expression:"!isguanzhu"}],staticClass:"u-faj",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.guanzhu.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"icon iconfont icon-jiahao"}),i._v("关注")],1)],1),e("v-uni-view",{staticClass:"index-list2",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.opendetail.apply(void 0,arguments)}}},[i._v(i._s(i.item.title))]),e("v-uni-view",{staticClass:"index-list3 u-faj",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.opendetail.apply(void 0,arguments)}}},[e("v-uni-image",{attrs:{src:i.item.titlepic,mode:"widthFix","lazy-load":!0}}),"video"==i.item.type?[e("v-uni-view",{staticClass:"icon iconfont icon-bofang index-list-play"}),e("v-uni-view",{staticClass:"index-list-playinfo"},[i._v(i._s(i.item.playnum)+"播放  "+i._s(i.item.long))])]:i._e()],2),e("v-uni-view",{staticClass:"index-list4"},[e("v-uni-view",[e("v-uni-view",{class:{active:1==i.item.infonum.index},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.caozuo("ding")}}},[e("v-uni-view",{staticClass:"icon iconfont icon-xiaolian"}),i._v(i._s(i.item.infonum.dingnum))],1),e("v-uni-view",{class:{active:2==i.item.infonum.index},on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.caozuo("cai")}}},[e("v-uni-view",{staticClass:"icon iconfont icon-kulian"}),i._v(i._s(i.item.infonum.cainum))],1)],1),e("v-uni-view",[e("v-uni-view",[e("v-uni-view",{staticClass:"icon iconfont icon-tubiaozhizuo-"}),i._v(i._s(i.item.commentnum))],1),e("v-uni-view",[e("v-uni-view",{staticClass:"icon iconfont icon-zhuanfa"}),i._v(i._s(i.item.sharenum))],1)],1)],1)],1)},s=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return s}),e.d(t,"a",function(){return n})},2156:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{loadtext:String}};t.default=n},"28a6":function(i,t,e){"use strict";var n=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(e("f499"));e("c5f6");var s={props:{item:Object,index:Number},data:function(){return{isguanzhu:this.item.isguanzhu,infonum:this.item.infonum}},methods:{guanzhu:function(){this.isguanzhu=!0,uni.showToast({title:"关注成功!"})},caozuo:function(i){switch(i){case"ding":if(1==this.item.infonum.index)return;this.item.infonum.dingnum++,2==this.item.infonum.index&&this.item.infonum.cainum--,this.item.infonum.index=1,uni.showToast({title:"顶了一下!",image:"../../static/images/xiao.png"});break;case"cai":if(2==this.item.infonum.index)return;this.item.infonum.cainum++,1==this.item.infonum.index&&this.item.infonum.dingnum--,this.item.infonum.index=2,uni.showToast({title:"踩了一脚!",image:"../../static/images/ku.png"});break}},opendetail:function(){uni.navigateTo({url:"../../pages/detail/detail?detailDate="+(0,a.default)(this.item)})}}};t.default=s},"3cc9":function(i,t,e){"use strict";e.r(t);var n=e("28a6"),a=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,function(){return n[i]})}(s);t["default"]=a.a},"3e98":function(i,t,e){"use strict";e.r(t);var n=e("2156"),a=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,function(){return n[i]})}(s);t["default"]=a.a},4331:function(i,t,e){"use strict";e.r(t);var n=e("5b42"),a=e("9cde");for(var s in a)"default"!==s&&function(i){e.d(t,i,function(){return a[i]})}(s);var o,u=e("f0c5"),c=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"64865fc0",null,!1,n["a"],o);t["default"]=c.exports},"552e":function(i,t,e){var n=e("e74a");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("6f181540",n,!0,{sourceMap:!1,shadowMode:!1})},"5b42":function(i,t,e){"use strict";var n,a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[i.list.searchlist.length>0?[i._l(i.list.searchlist,function(i,t){return[e("index-list",{key:t+"_0",attrs:{item:i,index:t}})]}),e("load-more",{attrs:{loadtext:i.list.loadtext}})]:i.issearch&&i.list.searchlist.length<1?[e("v-uni-view",{staticStyle:{"text-align":"center"}},[i._v("没有东西呀")])]:i._e()],2)},s=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return s}),e.d(t,"a",function(){return n})},6438:function(i,t,e){"use strict";var n=e("07aa"),a=e.n(n);a.a},"8ab7":function(i,t,e){"use strict";var n=e("552e"),a=e.n(n);a.a},"9cde":function(i,t,e){"use strict";e.r(t);var n=e("b6e0"),a=e.n(n);for(var s in n)"default"!==s&&function(i){e.d(t,i,function(){return n[i]})}(s);t["default"]=a.a},a7dd:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,".index-list[data-v-0d87876d]{padding:%?20?%;border-bottom:%?1?% solid #eee}.index-list1[data-v-0d87876d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.index-list1>uni-view[data-v-0d87876d]:first-child{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#999}.index-list1>uni-view:first-child uni-image[data-v-0d87876d]{width:%?90?%;height:%?90?%;border-radius:100%;margin-right:%?10?%}.index-list1>uni-view[data-v-0d87876d]:last-child{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#f4f4f4;border-radius:%?5?%;width:%?100?%;height:%?60?%;font-size:%?25?%;\n\t/* font-weight: bold; */margin-right:%?20?%;padding:0 %?10?%}\n/* .index-list1>view:last-child{\n\tbackground-color: #C0C0C0;\n} */.index-list2[data-v-0d87876d]{font-size:%?32?%;margin:%?20?% 0}.index-list3[data-v-0d87876d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative}.index-list3>uni-image[data-v-0d87876d]{width:100%;border-radius:%?20?%}.index-list4[data-v-0d87876d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?20?% 0}.index-list4 uni-view[data-v-0d87876d]{color:#999\n\t/* font-size: 40upx; */}.index-list4>uni-view>uni-view[data-v-0d87876d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.index-list4>uni-view>uni-view[data-v-0d87876d]:first-child{margin-right:%?10?%}.index-list4>uni-view>uni-view>uni-view[data-v-0d87876d]{margin-right:%?15?%}.index-list4>uni-view[data-v-0d87876d]:first-child{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.index-list4>uni-view[data-v-0d87876d]:last-child{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.index-list-play[data-v-0d87876d]{position:absolute;font-size:%?160?%;color:#fff}.index-list-playinfo[data-v-0d87876d]{position:absolute;background-color:rgba(51,51,51,.45);bottom:%?8?%;right:%?8?%;color:#fff;border-radius:%?20?%;padding:0 %?20?%;font-size:%?30?%}.index-list4 .active[data-v-0d87876d],.index-list4 .active>uni-view[data-v-0d87876d]{color:#c5f61c}",""])},b6e0:function(i,t,e){"use strict";var n=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(e("0dbf")),s=n(e("ff98")),o={components:{indexList:a.default,loadMore:s.default},data:function(){return{searchtext:"",issearch:!1,list:{loadtext:"上拉加载更多",searchlist:[]}}},onNavigationBarButtonTap:function(i){0==i.index&&uni.navigateBack({delta:1})},onNavigationBarSearchInputChanged:function(i){this.searchtext=i.text},onNavigationBarSearchInputConfirmed:function(i){i.text&&this.getdata()},onReachBottom:function(){this.loadmore()},methods:{getdata:function(){var i=this;uni.showLoading({title:"正在搜索"}),setTimeout(function(){var t=[{userpic:"../../static/logo.png",username:"昵称111",isguanzhu:!1,title:"我是标题111",type:"video",titlepic:"../../static/logo.png",infonum:{index:0,dingnum:11,cainum:22},commentnum:33,sharenum:44,playnum:"20w",long:"2:12"},{userpic:"../../static/logo.png",username:"昵称111",isguanzhu:!1,title:"我是标题111",type:"video",titlepic:"../../static/logo.png",infonum:{index:0,dingnum:11,cainum:22},commentnum:33,sharenum:44,playnum:"20w",long:"2:12"}];i.list.searchlist=t,uni.hideLoading(),i.issearch=!0},2e3)},loadmore:function(i){var t=this;"上拉加载更多"==this.list.loadtext&&(this.list.loadtext="加载中...",setTimeout(function(){var i={userpic:"../../static/logo.png",username:"昵称111",isguanzhu:!1,title:"我是标题111",type:"video",titlepic:"../../static/logo.png",infonum:{index:0,dingnum:11,cainum:22},commentnum:33,sharenum:44,playnum:"20w",long:"2:12"};t.list.searchlist.push(i),t.list.loadtext="上拉加载更多"},1e3))}}};t.default=o},e74a:function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,".load-more[data-v-1f2f0c29]{text-align:center;color:#ccc;padding:%?40?% 0}",""])},ed47:function(i,t,e){"use strict";var n,a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"load-more"},[i._v(i._s(i.loadtext))])],1)},s=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return s}),e.d(t,"a",function(){return n})},ff98:function(i,t,e){"use strict";e.r(t);var n=e("ed47"),a=e("3e98");for(var s in a)"default"!==s&&function(i){e.d(t,i,function(){return a[i]})}(s);e("8ab7");var o,u=e("f0c5"),c=Object(u["a"])(a["default"],n["b"],n["c"],!1,null,"1f2f0c29",null,!1,n["a"],o);t["default"]=c.exports}}]);