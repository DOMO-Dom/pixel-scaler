(function(e){function t(t){for(var r,i,o=t[0],s=t[1],l=t[2],b=0,p=[];b<o.length;b++)i=o[b],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"19d0":function(e){e.exports=JSON.parse('{"title":"ぴくせる すけゐらぁ","scale":"拡大率","select":"{count}件のファイルを選択中","no-select":"ピクチャを選択(gif/jpeg/png)","download-zip":"ZIPダウンロード","convert":"変換","reset":"リセット","exception":"エラーが発生しました。作った人に下記のテキストを送りつけてください。","usage":"つかいかた","usage-step-01":"左の数字入力欄から<strong>拡大率(100～400%)</strong>を設定する","usage-step-02":"ピクチャを選択ボタンをクリックして<strong>ピクチャを選ぶ</strong>","usage-step-03":"<strong>変換ボタン</strong>をクリックする","usage-step-04":"イラスト調で拡大されたピクチャが出てくる","usage-step-05":"出てきたピクチャかZIPダウンロードボタンをクリックしてピクチャを保存","usage-step-06":"幸せ！","tips":"Tips","tips-01":"原寸のドット絵で変換するとキレイな仕上がりになります","tips-02":"解像度の低いイラスト(ドット絵ではない)はキレイに拡大されません","tips-03":"拡大率を100%に指定することでドット絵にアンチエイリアスをかけることができます","link-share-on-twitter":"共有(twitter)","link-developer":"作った人","link-repository":"リポジトリ","link-booth":"Booth","version-check":"アップデート確認中…","version-new-notice":"最新バージョン v.{version} がリリースされています","version-new-download":"ダウンロードは<a href=\\"{url}\\" target=\\"_blank\\">コチラ</a>から！","version-latest-now":"お使いのバージョンは最新版です"}')},4771:function(e,t,n){n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("96cf");var r=n("c973");"createImageBitmap"in window||(window.createImageBitmap=function(){var e=r(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n;if(t instanceof Blob)n=URL.createObjectURL(t);else{if(!(t instanceof ImageData))throw new Error("createImageBitmap does not handle the provided image source type");var r=document.createElement("canvas"),a=r.getContext("2d");r.width=t.width,r.height=t.height,a.putImageData(t,0,0),n=r.toDataURL()}var c=document.createElement("img");c.addEventListener("load",(function(){e(this)})),c.src=n})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=(n("5377"),{class:"wrapper"}),c={class:"content margin-tb-1"},i={class:"box block margin-tb-2"},o={class:"box block"},s={class:"btn-list"},l={key:0};function u(e,t,n,u,b,p){var d=Object(r["v"])("v-fa"),f=Object(r["v"])("exception-container"),v=Object(r["v"])("howto-container"),g=Object(r["v"])("Loading"),h=Object(r["v"])("image-container"),j=Object(r["v"])("language-container"),O=Object(r["v"])("link-container"),m=Object(r["v"])("version-container");return Object(r["q"])(),Object(r["e"])("div",a,[Object(r["h"])("main",null,[Object(r["h"])("h1",null,Object(r["w"])(e.$t("title")),1),Object(r["h"])("nav",null,[Object(r["A"])(Object(r["h"])("input",{class:"col",type:"number",inputmode:"decimal","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.size=e}),step:"5",min:"100",max:"400",placeholder:e.$t("scale")},null,8,["placeholder"]),[[r["x"],b.size,void 0,{number:!0}]]),Object(r["h"])("label",{class:"col-big box circle hover active pointer",onDragover:t[3]||(t[3]=Object(r["B"])((function(){}),["prevent"])),onDrop:t[4]||(t[4]=Object(r["B"])((function(){return p.setFiles&&p.setFiles.apply(p,arguments)}),["prevent"]))},[Object(r["h"])("input",{type:"file",accept:"image/png, image/jpeg, image/gif",multiple:"",onChange:t[2]||(t[2]=function(){return p.setFiles&&p.setFiles.apply(p,arguments)})},null,32),Object(r["h"])(d,{icon:["far","file-image"]}),Object(r["g"])(" "+Object(r["w"])(b.files.length?e.$t("select",{count:b.files.length}):e.$t("no-select")),1)],32),Object(r["h"])("div",{class:"col box circle hover active pointer",onClick:t[5]||(t[5]=function(){return p.convert&&p.convert.apply(p,arguments)})},[Object(r["h"])(d,{icon:"reply",flip:"vertical"}),Object(r["g"])(" "+Object(r["w"])(e.$t("convert")),1)])]),Object(r["h"])("div",c,[Object(r["A"])(Object(r["h"])("div",i,[Object(r["h"])(d,{icon:"times-circle",class:"close-btn pointer",onClick:t[6]||(t[6]=function(e){return b.errors=[]})}),Object(r["h"])("ul",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(b.errors,(function(e){return Object(r["q"])(),Object(r["e"])("li",{key:e.id},Object(r["w"])(e),1)})),128))])],512),[[r["y"],0!==b.errors.length]]),Object(r["h"])("div",o,[b.exception?(Object(r["q"])(),Object(r["e"])(f,{key:0,onClose:t[7]||(t[7]=function(e){return b.exception=null}),exception:b.exception},null,8,["exception"])):0===b.converted.length?(Object(r["q"])(),Object(r["e"])(v,{key:1})):(Object(r["q"])(),Object(r["e"])(r["a"],{key:2},[Object(r["h"])("div",s,[Object(r["h"])("div",{class:"col box circle hover active pointer margin-lr-1",onClick:t[8]||(t[8]=function(){return p.download&&p.download.apply(p,arguments)})},[Object(r["h"])(d,{icon:["far","file-archive"]}),Object(r["g"])(" "+Object(r["w"])(e.$t("download-zip")),1)]),Object(r["h"])("div",{class:"col box circle hover active pointer margin-lr-1",onClick:t[9]||(t[9]=function(){return p.resetConverted&&p.resetConverted.apply(p,arguments)})},[Object(r["h"])(d,{icon:"eraser"}),Object(r["g"])(" "+Object(r["w"])(e.$t("reset")),1)]),b.flags.convert?(Object(r["q"])(),Object(r["e"])(g,{key:0})):Object(r["f"])("",!0)]),(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(b.converted,(function(e){return Object(r["q"])(),Object(r["e"])(h,{class:"margin-tb-1",key:e.image.filename,original:e.original,converted:e.image},null,8,["original","converted"])})),128))],64))])]),Object(r["h"])(j,{modelValue:e.$i18n.locale,"onUpdate:modelValue":t[10]||(t[10]=function(t){return e.$i18n.locale=t})},null,8,["modelValue"]),p.isWeb()?(Object(r["q"])(),Object(r["e"])(O,{key:0,class:"margin-tb-4"})):Object(r["f"])("",!0),p.isElectron()&&b.flags.showVersionContainer?(Object(r["q"])(),Object(r["e"])(m,{key:1,class:"margin-tb-4",onClose:t[11]||(t[11]=function(e){return b.flags.showVersionContainer=!1}),checkUpdate:b.flags.checkUpdate,isLatest:p.isLatest(),latestVersion:b.latestVersion},null,8,["checkUpdate","isLatest","latestVersion"])):Object(r["f"])("",!0)]),p.isWeb()?(Object(r["q"])(),Object(r["e"])("footer",l," (C) "+Object(r["w"])(p.year())+" ののの茶屋. ",1)):Object(r["f"])("",!0)])}n("99af"),n("07ac");var b=n("b85c"),p=(n("96cf"),n("1da1")),d=(n("d3b7"),n("ac1f"),n("1276"),n("c4e3")),f=n.n(d),v=n("21a6"),g=n.n(v),h={ScaledImagestoZip:function(e){return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=new f.a,r=Object(b["a"])(e);try{for(r.s();!(a=r.n()).done;)c=a.value,n.file(c.filename,c.base64.split(",")[1],{base64:!0})}catch(i){r.e(i)}finally{r.f()}return t.abrupt("return",new Promise((function(e,t){n.generateAsync({type:"blob"}).then((function(t){e(t)})).catch((function(e){t(e)}))})));case 4:case"end":return t.stop()}}),t)})))()},download:function(e,t){g.a.saveAs(e,t)}},j=(n("3ca3"),n("ddb0"),n("2b3d"),n("d4ec")),O=n("bee2"),m=n("45eb"),w=n("7e84"),k=n("262e"),y=n("2caf"),x=n("9072"),q=function(e){Object(k["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(j["a"])(this,n),t.call(this)}return Object(O["a"])(n,[{key:"_readAs",value:function(e,t){var r=this;return new Promise((function(a,c){Object(m["a"])(Object(w["a"])(n.prototype),"addEventListener",r).call(r,"load",(function(e){var t=e.target;return a(t.result)})),Object(m["a"])(Object(w["a"])(n.prototype),"addEventListener",r).call(r,"error",(function(e){var t=e.target;return c(t.error)})),Object(m["a"])(Object(w["a"])(n.prototype),t,r).call(r,e)}))}},{key:"readAsArrayBuffer",value:function(e){return this._readAs(e,"readAsArrayBuffer")}},{key:"readAsDataURL",value:function(e){return this._readAs(e,"readAsDataURL")}},{key:"readAsText",value:function(e){return this._readAs(e,"readAsText")}}]),n}(Object(x["a"])(FileReader)),C={getFileListOnEvent:function(e){return e.target.files||e.dataTransfer.files},toShowable:function(e){return window.URL.createObjectURL(e)},fileToImageData:function(e,t,n){return Object(p["a"])(regeneratorRuntime.mark((function r(){var a,c,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,(new q).readAsDataURL(e);case 2:return a=r.sent,c=document.createElement("canvas"),c.width=t,c.height=n,i=c.getContext("2d"),r.abrupt("return",new Promise((function(e,r){var c=new Image;c.src=a,c.onload=function(){i.drawImage(c,0,0),e(i.getImageData(0,0,t,n))},c.onerror=function(e){r(e)}})));case 8:case"end":return r.stop()}}),r)})))()},imageDataToBase64:function(e){var t=document.createElement("canvas"),n=t.getContext("2d");return t.width=e.width,t.height=e.height,n.putImageData(e,0,0),t.toDataURL()},resizeImageData:function(e,t,n){return Object(p["a"])(regeneratorRuntime.mark((function r(){var a,c,i,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t>>0,c=n>>0,r.next=4,window.createImageBitmap(e,0,0,e.width,e.height);case 4:return i=r.sent,o=document.createElement("canvas"),o.width=a,o.height=c,s=o.getContext("2d"),s.scale(a/e.width,c/e.height),s.drawImage(i,0,0),r.abrupt("return",s.getImageData(0,0,a,c));case 12:case"end":return r.stop()}}),r)})))()},getFileSize:function(e){return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r=new Image;r.onload=function(){var e={width:r.naturalWidth,height:r.naturalHeight};URL.revokeObjectURL(r.src),t(e)},r.onerror=function(e){n(e)},r.src=URL.createObjectURL(e)})));case 1:case"end":return t.stop()}}),t)})))()}},L=(n("ace4"),n("b0c0"),n("466d"),n("8a59"),n("fb2c"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("e099")),_=n("dbed"),R=function(){function e(t){if(Object(j["a"])(this,e),!this._validate(t))throw new Error("failed create scaled image"+JSON.stringify(t));this.base64=t.base64,this.filename=t.filename,this.type=t.type,this.scale=t.scale}return Object(O["a"])(e,[{key:"_validate",value:function(e){var t={base64:{type:"string"},filename:{type:"string"},type:{type:"string"},scale:{type:"number",min:100,max:400}},n=(new L["a"]).rules(e,t);return n.exec()}}]),e}(),I={scale:function(e,t){var n=this;return Object(p["a"])(regeneratorRuntime.mark((function r(){var a,c,i,o,s,l,u,b,p;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=n._toParams(e,t),n._validate(a)){r.next=3;break}return r.abrupt("return",{status:"failed",messages:n._validate(a,!0)});case 3:return r.next=5,C.getFileSize(e);case 5:return c=r.sent,r.next=8,C.fileToImageData(e,c.width,c.height);case 8:return i=r.sent,o=new Uint32Array(i.data.buffer),s=n._getSizeInteger(t),l=n._getXbr(s),u=l(o,c.width,c.height),b=new ImageData(new Uint8ClampedArray(u.buffer),c.width*s,c.height*s),r.next=16,C.resizeImageData(b,c.width*t/100,c.height*t/100);case 16:return p=r.sent,r.abrupt("return",{status:"success",image:new R({base64:C.imageDataToBase64(p),filename:e.name,type:e.type,scale:t}),original:e});case 18:case"end":return r.stop()}}),r)})))()},adjustSize:function(e){return e>400?400:e<100?100:e>>0},_getSizeInteger:function(e){return e<=200?2:e<=300?3:e<=400||400===e?4:void 0},_getXbr:function(e){var t={2:_["a"],3:_["b"],4:_["c"]};return t[e]},_toParams:function(e,t){return{file:e,size:t}},_validate:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={file:{type:"callback",callback:this._validateFile,name:"ファイル"},size:{type:"integer",min:100,max:400,name:"拡大率"}},r=(new L["a"]).rules(e,n);return t?r.errors():r.exec()},_validateFile:function(e){var t=[];return L["a"].isObject(e)&&"[object File]"===toString.call(e)?null==e.type.match(/^image/)?["画像ファイルを選択してください(".concat(e.name,")")]:(null===e.type.match(/^image/)||e.type.match(/^image\/(png|jpeg|gif)/)||t.push("pngかjpegかgifを選択してください(".concat(e.name,")")),t):["画像ファイルを選択してください"]}},S=n("9224"),U={version:function(){return S.version},language:function(){return window.navigator.languages&&window.navigator.languages[0]||window.navigator.language||window.navigator.userLanguage||window.navigator.browserLanguage},isWeb:function(){return!L["a"].hasKeyInObject(Object({NODE_ENV:"production",BASE_URL:""}),"IS_ELECTRON")},isElectron:function(){return!this.isWeb()}},z=(n("a9e3"),n("4d63"),n("25f0"),n("5319"),{check:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e._getVersions();case 2:return n=t.sent,t.abrupt("return",e._compare(U.version(),n[0].name)?n[0].name:"");case 4:case"end":return t.stop()}}),t)})))()},_getVersions:function(){return fetch("https://api.github.com/repos/irokaru/pixel-scaler/tags").then((function(e){return e.ok?e.json():[{name:""}]})).catch((function(){return[{name:""}]}))},_compare:function(e,t){return e=this._parge(e),t=this._parge(t),e<t},_parge:function(e){var t=new RegExp("\\.","g");return Number(e.replace(t,""))}}),E=Object(r["C"])("data-v-6e86ecfe");Object(r["s"])("data-v-6e86ecfe");var P={class:"loader"};Object(r["r"])();var A=E((function(e,t){return Object(r["q"])(),Object(r["e"])("div",P,"Loading...")}));n("a8f7");const D={};D.render=A,D.__scopeId="data-v-6e86ecfe";var $=D,V={class:"margin-t-2"};function B(e,t,n,a,c,i){return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])("h2",null,Object(r["w"])(e.$t("usage")),1),Object(r["h"])("ol",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(c.usageNum,(function(t){return Object(r["q"])(),Object(r["e"])("li",{key:t,innerHTML:e.$t("usage-step-".concat(t))},null,8,["innerHTML"])})),128))]),Object(r["h"])("h2",V,Object(r["w"])(e.$t("tips")),1),Object(r["h"])("ul",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(c.tipsNum,(function(t){return Object(r["q"])(),Object(r["e"])("li",{key:t},Object(r["w"])(e.$t("tips-".concat(t))),1)})),128))])],64)}var T={data:function(){return{usageNum:["01","02","03","04","05","06"],tipsNum:["01","02","03"]}}};T.render=B;var F=T,N={class:"box-reverse block scroll"},M={class:"center"};function W(e,t,n,a,c,i){var o=Object(r["v"])("v-fa");return Object(r["q"])(),Object(r["e"])("div",N,[Object(r["h"])("div",M,[Object(r["h"])("img",{src:i.toShowable(n.original)},null,8,["src"]),Object(r["h"])(o,{icon:"arrow-down",class:"margin-tb-2 big"}),Object(r["h"])("a",{href:n.converted.base64,download:n.converted.filename},[Object(r["h"])("img",{src:n.converted.base64},null,8,["src"])],8,["href","download"])])])}var H={props:{original:{type:Object,required:!0},converted:{type:Object,required:!0}},methods:{toShowable:function(e){return C.toShowable(e)}}};H.render=W;var J=H,Z={class:"languages"};function Y(e,t,n,a,c,i){return Object(r["q"])(),Object(r["e"])("div",Z,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(c.langs,(function(e){return Object(r["q"])(),Object(r["e"])("div",{class:"box circle margin-1 pointer hover active",key:e,onClick:function(t){return i.click(e)}},Object(r["w"])(e),9,["onClick"])})),128))])}var X={props:{modelValue:{type:String,required:!0}},data:function(){return{langs:["ja","en"]}},methods:{click:function(e){this.$emit("update:modelValue",e)}}};X.render=Y;var K=X;function G(e,t,n,a,c,i){var o=Object(r["v"])("v-fa");return Object(r["q"])(),Object(r["e"])("div",null,[(Object(r["q"])(!0),Object(r["e"])(r["a"],null,Object(r["u"])(c.links,(function(t){return Object(r["q"])(),Object(r["e"])("a",{href:t.url,target:"_blank",class:"box circle margin-lr-1 hover active",key:t.url},[Object(r["h"])(o,{icon:t.icon},null,8,["icon"]),Object(r["g"])(" "+Object(r["w"])(e.$t(t.text)),1)],8,["href"])})),128))])}var Q={data:function(){return{links:[{url:"https://bit.ly/3rCWXR0",icon:["fas","share-alt-square"],text:"link-share-on-twitter"},{url:"https://twitter.com/irokaru",icon:["fab","twitter"],text:"link-developer"},{url:"https://github.com/irokaru/pixel-scaler",icon:["fab","github"],text:"link-repository"},{url:"https://nononotyaya.booth.pm/items/2517679",icon:["fas","images"],text:"link-booth"}]}}};Q.render=G;var ee=Q,te={class:"box block"},ne={key:0},re={key:2};function ae(e,t,n,a,c,i){var o=Object(r["v"])("v-fa");return Object(r["q"])(),Object(r["e"])("div",te,[Object(r["h"])(o,{icon:"times-circle",class:"close-btn pointer",onClick:t[1]||(t[1]=function(t){return e.$emit("close")})}),n.checkUpdate?n.isLatest?(Object(r["q"])(),Object(r["e"])(r["a"],{key:1},[Object(r["h"])("p",null,Object(r["w"])(e.$t("version-new-notice",{version:n.latestVersion})),1),Object(r["h"])("p",{innerHTML:e.$t("version-new-download",{url:"https://nononotyaya.booth.pm/items/2517679"})},null,8,["innerHTML"])],64)):(Object(r["q"])(),Object(r["e"])("p",re,Object(r["w"])(e.$t("version-latest-now")),1)):(Object(r["q"])(),Object(r["e"])("p",ne,Object(r["w"])(e.$t("version-check")),1))])}var ce={props:{checkUpdate:{type:Boolean,required:!0},isLatest:{type:Boolean,required:!0},latestVersion:{type:String,required:!0}},emits:["close"]};ce.render=ae;var ie=ce,oe={class:"box-reverse block selectable-all"};function se(e,t,n,a,c,i){var o=Object(r["v"])("v-fa");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(o,{icon:"times-circle",class:"close-btn pointer",onClick:t[1]||(t[1]=function(t){return e.$emit("close")})}),Object(r["h"])("p",null,Object(r["w"])(e.$t("exception")),1),Object(r["h"])("pre",oe,Object(r["w"])(n.exception),1)],64)}var le={props:{exception:{required:!0}},emits:["close"]};le.render=se;var ue=le,be={name:"app",data:function(){return{size:200,files:[],converted:[],errors:[],zip:null,exception:null,latestVersion:"",flags:{convert:!1,checkUpdate:!1,showVersionContainer:!0}}},methods:{setFiles:function(e){this.files=C.getFileListOnEvent(e),this.converted=[],this.zip=null,this.exception=null},convert:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,r,a,c,i,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.converted=[],e.errors=[],e.exception=null,e.size=I.adjustSize(e.size),!e.flags.convert&&0!==e.files.length){t.next=6;break}return t.abrupt("return");case 6:e.flags.convert=!0,n=Object(b["a"])(e.files),t.prev=8,n.s();case 10:if((r=n.n()).done){t.next=19;break}return a=r.value,t.next=14,I.scale(a,e.size).then((function(t){if("success"===t.status)e.converted.push(t);else for(var n=0,r=Object.values(t.messages);n<r.length;n++){var a=r[n];e.errors=e.errors.concat(a)}})).catch((function(t){e.exception=t}));case 14:if(!e.exception){t.next=17;break}return e.flags.convert=!1,t.abrupt("return");case 17:t.next=10;break;case 19:t.next=24;break;case 21:t.prev=21,t.t0=t["catch"](8),n.e(t.t0);case 24:return t.prev=24,n.f(),t.finish(24);case 27:c=[],i=Object(b["a"])(e.converted);try{for(i.s();!(o=i.n()).done;)s=o.value,c.push(s.image)}catch(l){i.e(l)}finally{i.f()}return t.next=32,h.ScaledImagestoZip(c).then((function(t){e.zip=t})).catch((function(t){e.exception=t}));case 32:e.flags.convert=!1;case 33:case"end":return t.stop()}}),t,null,[[8,21,24,27]])})))()},download:function(){this.flags.convert||h.download(this.zip,"images.zip")},resetConverted:function(){this.flags.convert||(this.files=[],this.converted=[],this.errors=[],this.zip=null)},isLatest:function(){return this.flags.checkUpdate&&""!==this.latestVersion},isWeb:function(){return U.isWeb()},isElectron:function(){return U.isElectron()},checkUpdate:function(){return z.check()},year:function(){return(new Date).getFullYear()}},created:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(document.title=e.$t("title"),!e.isElectron()){t.next=6;break}return t.next=4,e.checkUpdate();case 4:e.latestVersion=t.sent,e.flags.checkUpdate=!0;case 6:case"end":return t.stop()}}),t)})))()},components:{Loading:$,HowtoContainer:F,ImageContainer:J,LanguageContainer:K,LinkContainer:ee,VersionContainer:ie,ExceptionContainer:ue}};be.render=u;var pe=be,de=n("ecee"),fe=n("c074"),ve=n("b702"),ge=n("f2d1"),he=n("ad3d"),je=n("47e2"),Oe=n("19d0"),me=n("e088"),we={ja:Oe,en:me},ke=Object(je["a"])({locale:U.language(),fallbackLocale:"ja",messages:we}),ye=ke;n("b751");n("4771"),de["c"].add(fe["a"],ve["a"],ge["a"]);var xe=Object(r["d"])(pe);xe.component("v-fa",he["a"]),xe.use(ye),xe.mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"pixel-scaler","version":"0.1.3","private":true,"description":"pixel art scale app","author":{"name":"irokaru","url":"https://nononotyaya.net/"},"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","deploy":"yarn build && gh-pages -d dist","electron:build":"vue-cli-service electron:build","electron:serve":"vue-cli-service electron:serve","postinstall":"electron-builder install-app-deps","postuninstall":"electron-builder install-app-deps"},"main":"background.js","dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.32","@fortawesome/vue-fontawesome":"^3.0.0-2","core-js":"^3.6.5","vue":"^3.0.0","vue-i18n":"^9.2.0-beta.26"},"devDependencies":{"@fortawesome/free-brands-svg-icons":"^5.15.1","@fortawesome/free-regular-svg-icons":"^5.15.1","@fortawesome/free-solid-svg-icons":"^5.15.1","@vue/cli-plugin-babel":"~4.5.8","@vue/cli-plugin-eslint":"~4.5.8","@vue/cli-service":"~4.5.8","@vue/compiler-sfc":"^3.0.0","babel-eslint":"^10.1.0","electron":"^9.0.0","electron-devtools-installer":"^3.1.0","eslint":"^6.7.2","eslint-plugin-vue":"^7.0.0-0","file-saver":"^2.0.2","gh-pages":"^3.1.0","husky":"^4.3.0","jszip":"^3.5.0","node-sass":"^4.14.1","nonono-validator":"irokaru/nonono-validator","sass-loader":"^10.0.3","vue-cli-plugin-electron-builder":"~2.0.0-rc.5","vue-template-compiler":"^2.6.10","xbr-js":"^2.0.1"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/vue3-essential","eslint:recommended"],"rules":{"no-console":0},"parserOptions":{"parser":"babel-eslint"}},"browserslist":["> 1%","last 2 versions"],"husky":{"hooks":{"pre-commit":"yarn lint"}}}')},a09b:function(e,t,n){},a8f7:function(e,t,n){"use strict";n("a09b")},b751:function(e,t,n){},e088:function(e){e.exports=JSON.parse('{"title":"PiXel ScAler","scale":"scale","select":"{count} files are being selected","no-select":"Select Picture(gif/jpeg/png)","download-zip":"download ZIP","convert":"convert","reset":"reset","exception":"An error has occurred. Please contact the developer.","usage":"Usage","usage-step-01":"Set <strong>the scale factor (100%-400%)</strong> from the numeric input box on the left.","usage-step-02":"Click the \\"Select Picture\\" button to <strong>choose a picture</strong>.","usage-step-03":"Click <strong>convert</strong>.","usage-step-04":"You will see an enlarged picture in an illustrative style.","usage-step-05":"Click on the picture that comes up or the \\"ZIP Download Button\\" to save it.","usage-step-06":"HAPPY!","tips":"Tips","tips-01":"Converting with pixel art of the actual size will give you a beautiful result.","tips-02":"Illustrations that are not pixel art will not be enlarged nicely.","tips-03":"You can anti-alias the pixel art by setting the scale factor to 100%.","link-share-on-twitter":"share(twitter)","link-developer":"developer","link-repository":"repository","link-booth":"Booth","version-check":"checking for updates...","version-new-notice":"The latest version v.{version} has been released","version-new-download":"Click <a href=\\"{url}\\" target=\\"_blank\\">here</a> to download!","version-latest-now":"Your version is the latest."}')}});
//# sourceMappingURL=app.ed19a0d9.js.map