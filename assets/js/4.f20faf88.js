(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{119:function(t,e,n){"use strict";var i=n(36);n.n(i).a},121:function(t,e,n){"use strict";n.r(e);n(37),n(45),n(46);var i,o,a=n(47),r={name:"HelloWorld",data:function(){return{context:"",lang:"Chinese",isShow:!1,datas:["2020—02-14 00:00:00","Honey, this is our time together","64days 1536Hour 92160Minute 5529600Second","Boy name is YuBo","Girl name is LuYao","The boy love the girl;","~ AS time goes on.","The boy can not be separated the girl;","~ Still in the distant future.","The boy has but one dream;","The boy wants the girl could well have been happy.","～ I want to say:","Baby, I love you forever","I will guard you with my whole life"],china:["2020—02-14 00:00:00","亲爱的，这是我们在一起的时光","64天 1536小时 92160分钟 5529600秒","男孩的名字是 玉博","女孩的名字是 路遥","这个男孩喜欢上了这个女孩。","～ 随着时间的推移，","男孩离不开女孩。","～ 在遥远的未来","这个男孩只有一个梦想","男孩想让女孩每天都很开心","～ 我想说的是：","宝贝，我永远爱你","我会用我的一生去守护你！"],copys:[],color:"red",colors:["#fff","blue","red","green","yellow","purple","orange","gray"]}},props:{msg:String},mounted:(o=Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.typewriter(0),this.toCanvas();case 2:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),methods:{changeLang:function(){"English"===this.lang?(this.lang="Chinese",this.copys=this.datas):(this.lang="English",this.copys=this.china)},typewriter:(i=Object(a.a)(regeneratorRuntime.mark((function t(e,n){var i,o,a,r=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n||this.datas[e],o=0,n&&(this.context=""),t.next=4,setInterval((function(){"<"==i.substr(o,1)?o=i.indexOf(">",o)+1:o++,n?r.context=i.substring(0,o)+(1&o?"_":""):r.$set(r.copys,e,i.substring(0,o)+(1&o?"_":"")),o>=i.length&&(clearInterval(a),++e<r.datas.length&&!n&&r.typewriter(e),e>=r.datas.length&&(r.typewriter(0,"I LOVE YOU"),r.isShow=!0))}),n?200:100);case 4:return a=t.sent,t.abrupt("return");case 6:case"end":return t.stop()}}),t,this)}))),function(t,e){return i.apply(this,arguments)}),changeColor:function(){var t=this,e=0;setInterval((function(){++e,t.color=t.colors[e],e>=t.colors.length&&(e=0)}),500)},toCanvas:function(){var t=this,e={length:500,duration:2,velocity:100,effect:-.75,size:30};!function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-t)),o=window.setTimeout((function(){e(n+i)}),i);return t=n+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var n=function(){function t(t,e){this.x=void 0!==t?t:0,this.y=void 0!==e?e:0}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.length=function(t){return void 0===t?Math.sqrt(this.x*this.x+this.y*this.y):(this.normalize(),this.x*=t,this.y*=t,this)},t.prototype.normalize=function(){var t=this.length();return this.x/=t,this.y/=t,this},t}(),i=function(){function t(){this.position=new n,this.velocity=new n,this.acceleration=new n,this.age=0}return t.prototype.initialize=function(t,n,i,o){this.position.x=t,this.position.y=n,this.velocity.x=i,this.velocity.y=o,this.acceleration.x=i*e.effect,this.acceleration.y=o*e.effect,this.age=0},t.prototype.update=function(t){this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t,this.velocity.x+=this.acceleration.x*t,this.velocity.y+=this.acceleration.y*t,this.age+=t},t.prototype.draw=function(t,n){var i,o=n.width*(i=this.age/e.duration,--i*i*i+1);t.globalAlpha=1-this.age/e.duration,t.drawImage(n,this.position.x-o/2,this.position.y-o/2,o,o)},t}(),o=function(){var t,n=0,o=0,a=e.duration;function r(e){t=new Array(e);for(var n=0;n<t.length;n++)t[n]=new i}return r.prototype.add=function(e,i,a,r){t[o].initialize(e,i,a,r),++o==t.length&&(o=0),n==o&&n++,n==t.length&&(n=0)},r.prototype.update=function(e){var i;if(n<o)for(i=n;i<o;i++)t[i].update(e);if(o<n){for(i=n;i<t.length;i++)t[i].update(e);for(i=0;i<o;i++)t[i].update(e)}for(;t[n].age>=a&&n!=o;)++n==t.length&&(n=0)},r.prototype.draw=function(e,i){if(n<o)for(var a=n;a<o;a++)t[a].draw(e,i);if(o<n){for(var r=n;r<t.length;r++)t[r].draw(e,i);for(var s=0;s<o;s++)t[s].draw(e,i)}},r}();!function(i){var a,r=i.getContext("2d"),s=new o(e.length),c=e.length/e.duration;function h(t){return new n(160*Math.pow(Math.sin(t),3),130*Math.cos(t)-50*Math.cos(2*t)-20*Math.cos(3*t)-10*Math.cos(4*t)+25)}var l=function(){var n=document.createElement("canvas"),i=n.getContext("2d");function o(t){var n=h(t);return n.x=e.size/2+n.x*e.size/350,n.y=e.size/2-n.y*e.size/350,n}n.width=e.size,n.height=e.size,i.beginPath();var a=-Math.PI,r=o(a);for(i.moveTo(r.x,r.y);a<Math.PI;)r=o(a+=.01),i.lineTo(r.x,r.y);i.closePath(),console.log(t.color),i.fillStyle=t.color,i.fill();var s=new Image;return s.src=n.toDataURL(),s}();function u(){requestAnimationFrame(u);var t=(new Date).getTime()/1e3,n=t-(a||t);a=t,r.clearRect(0,0,i.width,i.height);for(var o=c*n,d=0;d<o;d++){var f=h(Math.PI-2*Math.PI*Math.random()),w=f.clone().length(e.velocity);s.add(i.width/2+f.x,i.height/2-f.y,w.x,-w.y)}s.update(n),s.draw(r,l)}function d(){i.width=i.clientWidth+300,i.height=i.clientHeight+300}window.onresize=d,setTimeout((function(){console.log("123"),d(),u()}),1)}(document.getElementById("pinkboard"))}}},s=(n(119),n(0)),c=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[[n("div",{staticClass:"main"},[n("div",{staticClass:"title"},[t._v(t._s(t.context))]),t._v(" "),n("canvas",{attrs:{id:"pinkboard"}}),t._v(" "),n("div",{staticClass:"langBtn"},[t.isShow?n("span",{on:{click:t.changeLang}},[t._v(t._s(t.lang))]):t._e()]),t._v(" "),t._l(t.copys,(function(e,i){return n("div",{key:i,staticClass:"item",style:{color:t.color}},[n("i",[t._v(t._s(e))])])}))],2)]],2)}),[],!1,null,null,null);e.default=c.exports},36:function(t,e,n){}}]);