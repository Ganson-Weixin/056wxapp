(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order-confirm/shop-order-confirm"],{"05f6":function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function n(e,r,t,o,a,n,s){try{var d=e[n](s),u=d.value}catch(i){return void t(i)}d.done?r(u):Promise.resolve(u).then(o,a)}function s(e){return function(){var r=this,t=arguments;return new Promise((function(o,a){var s=e.apply(r,t);function d(e){n(s,o,a,d,u,"next",e)}function u(e){n(s,o,a,d,u,"throw",e)}d(void 0)}))}}var d={data:function(){return{user:{},orderGoods:{},address:{},total:0,type:1,seat:0}},onLoad:function(r){var t=this;return s(o.default.mark((function a(){var n;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(t.type=r.type,t.seat=r.seat,t.orderGoods=e.getStorageSync("orderGoods"),1!=t.seat)for(n=0;n<t.orderGoods.length;n++)0==t.total?t.total=parseFloat(t.orderGoods[n].price)*t.orderGoods[n].buynumber:t.total=parseFloat(t.total)+parseFloat(t.orderGoods[n].price)*t.orderGoods[n].buynumber;else t.total=parseFloat(t.orderGoods[0].total),t.address=t.orderGoods[0].address;t.total=t.total.toFixed(2);case 5:case"end":return o.stop()}}),a)})))()},onShow:function(){var r=this;return s(o.default.mark((function t(){var a,n,s;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.getStorageSync("nowTable"),t.next=3,r.$api.session(a);case 3:if(n=t.sent,r.user=n.data,1==r.seat){t.next=15;break}if(s=e.getStorageSync("address"),!s||r.user.id!=s.userid){t.next=11;break}r.address=e.getStorageSync("address"),t.next=15;break;case 11:return t.next=13,r.$api.defaultAddress(r.user.id);case 13:n=t.sent,r.address=n.data;case 15:case"end":return t.stop()}}),t)})))()},methods:{onSubmitTap:function(){var r=this;return s(o.default.mark((function t(){var a,n;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=r,1==a.seat||a.address){t.next=4;break}return a.$utils.msg("请选择地址"),t.abrupt("return");case 4:n=e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否确认支付",success:function(){var r=s(o.default.mark((function r(t){var s,d,u,i,c,f;return o.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t.confirm){r.next=40;break}if(s=a.type,d=!0,u="已支付",1!=s){r.next=8;break}a.user.money-a.total<0&&(a.$utils.msg("余额不足，请先充值"),d=!1,u="未支付"),r.next=13;break;case 8:if(2!=s){r.next=13;break}if(!(a.user.jifen-a.total<0)){r.next=13;break}return a.$utils.msg("积分不足，兑换商品失败"),d=!1,r.abrupt("return");case 13:i=0;case 14:if(!(i<a.orderGoods.length)){r.next=26;break}return c={orderid:a.$utils.genTradeNo(),tablename:a.orderGoods[i].tablename,userid:a.user.id,goodid:a.orderGoods[i].goodid,goodname:a.orderGoods[i].goodname,picture:a.orderGoods[i].picture,buynumber:a.orderGoods[i].buynumber,discountprice:a.orderGoods[i].price,price:a.orderGoods[i].price,total:a.orderGoods[i].price*a.orderGoods[i].buynumber,discounttotal:a.orderGoods[i].price*a.orderGoods[i].buynumber,type:s,address:a.address.address,tel:a.address.phone,consignee:a.address.name,status:u},1==a.seat&&(c["address"]=a.address,f=a.address.split(",").length,c["buynumber"]=f,c["total"]=a.orderGoods[i].price*f,c["discounttotal"]=a.orderGoods[i].price*f),r.next=19,a.$api.add("orders",c);case 19:if(!a.orderGoods[i].id){r.next=23;break}return r.next=22,a.$api.del("cart",JSON.stringify([a.orderGoods[i].id]));case 22:e.removeStorageSync("cart".concat(a.orderGoods[i].goodid).concat(a.user.id));case 23:i++,r.next=14;break;case 26:if(!d){r.next=40;break}if(1!=s){r.next=35;break}return a.$utils.msgBack("支付成功"),a.user.money=a.user.money-a.total,(a.user.jifen||0==a.user.jifen)&&(a.user.jifen=parseFloat(a.user.jifen)+parseFloat(a.total)),r.next=33,a.$api.update(n,a.user);case 33:r.next=40;break;case 35:if(2!=s){r.next=40;break}return a.$utils.msgBack("兑换成功"),a.user.jifen=a.user.jifen-a.total,r.next=40,a.$api.update(n,a.user);case 40:case"end":return r.stop()}}),r)})));function t(e){return r.apply(this,arguments)}return t}()});case 6:case"end":return t.stop()}}),t)})))()},onAddressTap:function(){this.$utils.jump("../shop-address/shop-address")}}};r.default=d}).call(this,t("543d")["default"])},"46a5":function(e,r,t){},"678f":function(e,r,t){"use strict";var o=t("46a5"),a=t.n(o);a.a},ae39:function(e,r,t){"use strict";var o;t.d(r,"b",(function(){return a})),t.d(r,"c",(function(){return n})),t.d(r,"a",(function(){return o}));var a=function(){var e=this,r=e.$createElement;e._self._c},n=[]},bc31:function(e,r,t){"use strict";t.r(r);var o=t("05f6"),a=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(r,e,(function(){return o[e]}))}(n);r["default"]=a.a},d0e3:function(e,r,t){"use strict";(function(e){t("582f");o(t("66fd"));var r=o(t("fa74"));function o(e){return e&&e.__esModule?e:{default:e}}e(r.default)}).call(this,t("543d")["createPage"])},fa74:function(e,r,t){"use strict";t.r(r);var o=t("ae39"),a=t("bc31");for(var n in a)"default"!==n&&function(e){t.d(r,e,(function(){return a[e]}))}(n);t("678f");var s,d=t("f0c5"),u=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);r["default"]=u.exports}},[["d0e3","common/runtime","common/vendor"]]]);