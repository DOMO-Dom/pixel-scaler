(function(e){function t(t){for(var r,c,i=t[0],l=t[1],s=t[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"003a":function(e,t,n){"use strict";n("0812")},"0812":function(e,t,n){},"19d0":function(e){e.exports=JSON.parse('{"title":"ぴくせる すけゐらぁ","original-pixel-size":"ピクセルのサイズ","scale":"拡大率","select":"{count}件のファイルを選択中","no-select":"ピクチャを選択(gif/jpeg/png)","download-zip":"ZIPダウンロード","convert":"変換","reset":"リセット","exception":"エラーが発生しました。作った人に下記のテキストを送りつけてください。","error-invalid-file":"ファイルを選択してください ({filename})","error-invalid-image-type":"pngかjpegかgifを選択してください ({filename})","error-invalid-image-size":"ピクセルのサイズとピクチャのサイズが一致しません ({filename})","attention":"注意","attention-01":"iPhoneのsafari14では変換ができない不具合が発生しています。ご利用の方はPC等でお試しください。","whatis":"なにこれ","whatis-detail":"<a href=\\"https://github.com/joseprio/xBRjs\\" target=\\"_blank\\">xBRjs</a>を用いたスケーリングアプリです。比較的お手軽にピクセルアートをイラスト調に変換することができます。","usage":"つかいかた","usage-step-01":"入力するピクセルアートが拡大済みの場合は<strong>ピクセルのサイズ(1px～4px)</strong>を選択する","usage-step-02":"拡大率(%)入力欄から<strong>拡大率(100%～400%)</strong>を設定する","usage-step-03":"ピクチャを選択ボタンをクリックして<strong>ピクチャを選ぶ</strong>","usage-step-04":"<strong>変換ボタン</strong>をクリックする","usage-step-05":"イラスト調で拡大されたピクチャが出てくる","usage-step-06":"出てきたピクチャ下部の「ダウンロードボタン」か「ZIPダウンロードボタン」をクリックしてピクチャを保存","usage-step-07":"幸せ！","tips":"Tips","tips-01":"原寸のドット絵で変換するとキレイな仕上がりになります","tips-02":"解像度の低いイラスト(ドット絵ではない)はキレイに拡大されません","tips-03":"拡大率を100%に指定することでドット絵にアンチエイリアスをかけることができます","tips-04":"ピクセルの大きさの指定値とピクセルアートのピクセルの大きさが異なる場合は変換に失敗する場合があります","link-share-on-twitter":"共有(twitter)","link-developer":"作った人","link-repository":"リポジトリ","link-booth":"Booth","link-license":"ライセンス","version-check":"アップデート確認中…","version-new-notice":"最新バージョン v.{version} がリリースされています","version-new-download":"ダウンロードは<a href=\\"{booth}\\" target=\\"_blank\\">booth</a>か<a href=\\"{github}\\" target=\\"_blank\\">github</a>から！","version-latest-now":"お使いのバージョンは最新版です"}')},"431c":function(e,t,n){"use strict";n("98ea")},4771:function(e,t,n){var r=n("c973").default;n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("d9e2"),"createImageBitmap"in window||(window.createImageBitmap=function(){var e=r(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var n;if(t instanceof Blob)n=URL.createObjectURL(t);else{if(!(t instanceof ImageData))throw new Error("createImageBitmap does not handle the provided image source type");var r=document.createElement("canvas"),a=r.getContext("2d");r.width=t.width,r.height=t.height,a.putImageData(t,0,0),n=r.toDataURL()}var o=document.createElement("img");o.addEventListener("load",(function(){e(this)})),o.src=n})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a=(n("5377"),n("b0c0"),{class:"wrapper"}),o={class:"row margin-b-1"},c={class:"col"},i={class:"top-label"},l=["value"],s={class:"col"},u={class:"top-label"},p=["placeholder"],d={class:"row margin-tb-2"},b={class:"col margin-tb-1"},g={class:"col margin-tb-1"},m={class:"content margin-tb-1"},v={class:"box block margin-tb-2"},f={key:1,class:"box block"},h={key:2,class:"box block"},j={class:"box block btn-list margin-tb-2"},O={class:"grid-list"},k={key:0};function w(e,t,n,w,x,y){var E=Object(r["resolveComponent"])("v-fa"),V=Object(r["resolveComponent"])("attention-container"),N=Object(r["resolveComponent"])("exception-container"),B=Object(r["resolveComponent"])("howto-container"),C=Object(r["resolveComponent"])("Loading"),S=Object(r["resolveComponent"])("image-container"),D=Object(r["resolveComponent"])("language-container"),L=Object(r["resolveComponent"])("link-container"),P=Object(r["resolveComponent"])("version-container"),_=Object(r["resolveComponent"])("preview-conteiner");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",a,[Object(r["createElementVNode"])("main",null,[Object(r["createElementVNode"])("h1",null,Object(r["toDisplayString"])(e.$t("title")),1),Object(r["createElementVNode"])("nav",null,[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("div",c,[Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(E,{icon:["fas","th"]}),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.$t("original-pixel-size")),1)]),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(x.pixelSize.list,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("label",{class:Object(r["normalizeClass"])(["radio box hover active flex-grow-1",{on:x.pixelSize.org==e}]),key:e},[Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=function(e){return x.pixelSize.org=e}),value:e},null,8,l),[[r["vModelRadio"],x.pixelSize.org,void 0,{number:!0}]]),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e)+"px ",1)],2)})),128))]),Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",u,[Object(r["createVNode"])(E,{icon:["fas","search-plus"]}),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.$t("scale"))+"(%)",1)]),Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{class:"flex-grow-1",type:"number",inputmode:"decimal","onUpdate:modelValue":t[1]||(t[1]=function(e){return x.scale=e}),step:"5",min:"100",max:"400",placeholder:e.$t("scale")},null,8,p),[[r["vModelText"],x.scale,void 0,{number:!0}]])])]),Object(r["createElementVNode"])("div",d,[Object(r["createElementVNode"])("div",b,[Object(r["createElementVNode"])("label",{class:"box circle hover active pointer flex-grow-1 margin-tb-1",onDragover:t[3]||(t[3]=Object(r["withModifiers"])((function(){}),["prevent"])),onDrop:t[4]||(t[4]=Object(r["withModifiers"])((function(){return y.setFiles&&y.setFiles.apply(y,arguments)}),["prevent"]))},[Object(r["createElementVNode"])("input",{type:"file",accept:"image/png, image/jpeg, image/gif",multiple:"",onChange:t[2]||(t[2]=function(){return y.setFiles&&y.setFiles.apply(y,arguments)})},null,32),Object(r["createVNode"])(E,{icon:["far","file-image"]}),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(x.files.length?e.$t("select",{count:x.files.length}):e.$t("no-select")),1)],32)]),Object(r["createElementVNode"])("div",g,[Object(r["createElementVNode"])("div",{class:"box circle hover active pointer flex-grow-1 margin-tb-1",onClick:t[5]||(t[5]=function(){return y.convert&&y.convert.apply(y,arguments)})},[Object(r["createVNode"])(E,{icon:"reply",flip:"vertical"}),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.$t("convert")),1)])])])]),Object(r["createElementVNode"])("div",m,[x.flags.showAttention?(Object(r["openBlock"])(),Object(r["createBlock"])(V,{key:0,onClose:t[6]||(t[6]=function(e){return x.flags.showAttention=!1})})):Object(r["createCommentVNode"])("",!0),Object(r["withDirectives"])(Object(r["createElementVNode"])("div",v,[Object(r["createVNode"])(E,{icon:"times-circle",class:"close-btn pointer",onClick:t[7]||(t[7]=function(e){return x.errors=[]})}),Object(r["createElementVNode"])("ul",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(x.errors,(function(t){var n;return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:t.id},Object(r["toDisplayString"])(e.$t(t.message,{filename:null!==(n=t.org.name)&&void 0!==n?n:"???"})),1)})),128))])],512),[[r["vShow"],0!==x.errors.length]]),x.exception?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",f,[Object(r["createVNode"])(N,{onClose:t[8]||(t[8]=function(e){return x.exception=null}),exception:x.exception},null,8,["exception"])])):0===x.converted.length?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",h,[Object(r["createVNode"])(B)])):(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:3},[Object(r["createElementVNode"])("div",j,[Object(r["createElementVNode"])("div",{class:"col box circle hover active pointer margin-1",onClick:t[9]||(t[9]=function(){return y.downloadZip&&y.downloadZip.apply(y,arguments)})},[Object(r["createVNode"])(E,{icon:["far","file-archive"]}),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.$t("download-zip")),1)]),Object(r["createElementVNode"])("div",{class:"col box circle hover active pointer margin-1",onClick:t[10]||(t[10]=function(){return y.resetConverted&&y.resetConverted.apply(y,arguments)})},[Object(r["createVNode"])(E,{icon:"eraser"}),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.$t("reset")),1)]),x.flags.convert?(Object(r["openBlock"])(),Object(r["createBlock"])(C,{key:0})):Object(r["createCommentVNode"])("",!0)]),Object(r["createElementVNode"])("div",O,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(x.converted,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(S,{class:"margin-tb-1",key:e.image.filename,org:e.org,converted:e.image,onClose:function(e){return y.deleteConverted(t)},onPreview:function(e){return y.setPreviewConverted(t)}},null,8,["org","converted","onClose","onPreview"])})),128))])],64))]),Object(r["createVNode"])(D,{modelValue:e.$i18n.locale,"onUpdate:modelValue":t[11]||(t[11]=function(t){return e.$i18n.locale=t})},null,8,["modelValue"]),y.isWeb()?(Object(r["openBlock"])(),Object(r["createBlock"])(L,{key:0,class:"margin-tb-4"})):Object(r["createCommentVNode"])("",!0),y.isElectron()&&x.flags.showVersionContainer?(Object(r["openBlock"])(),Object(r["createBlock"])(P,{key:1,class:"margin-tb-4",onClose:t[12]||(t[12]=function(e){return x.flags.showVersionContainer=!1}),checkUpdate:x.flags.checkUpdate,isLatest:y.isLatest(),latestVersion:x.latestVersion},null,8,["checkUpdate","isLatest","latestVersion"])):Object(r["createCommentVNode"])("",!0)]),y.isWeb()?(Object(r["openBlock"])(),Object(r["createElementBlock"])("footer",k," (C) "+Object(r["toDisplayString"])(y.year())+" ののの茶屋. ",1)):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])(r["Transition"],{name:"fade"},{default:Object(r["withCtx"])((function(){return[x.flags.showPreviewConverted?(Object(r["openBlock"])(),Object(r["createBlock"])(_,{key:0,image:x.previewConverted,onClose:t[13]||(t[13]=function(e){return x.flags.showPreviewConverted=!1})},null,8,["image"])):Object(r["createCommentVNode"])("",!0)]})),_:1})])}var x=n("b85c"),y=n("3835"),E=n("1da1"),V=(n("96cf"),n("d81d"),n("a434"),n("d3b7"),n("ac1f"),n("1276"),n("c4e3")),N=n.n(V),B=n("21a6"),C=n.n(B),S={ScaledImagestoZip:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=new N.a,r=Object(x["a"])(e);try{for(r.s();!(a=r.n()).done;)o=a.value,n.file(o.filename,o.base64.split(",")[1],{base64:!0})}catch(c){r.e(c)}finally{r.f()}return t.abrupt("return",new Promise((function(e,t){n.generateAsync({type:"blob"}).then((function(t){e(t)})).catch((function(e){t(e)}))})));case 4:case"end":return t.stop()}}),t)})))()},download:function(e,t){C.a.saveAs(e,t)}},D=(n("3ca3"),n("ddb0"),n("2b3d"),n("9861"),n("d4ec")),L=n("bee2"),P=n("45eb"),_=n("7e84"),R=n("262e"),I=n("2caf"),z=n("9072"),T=function(e){Object(R["a"])(n,e);var t=Object(I["a"])(n);function n(){return Object(D["a"])(this,n),t.call(this)}return Object(L["a"])(n,[{key:"_readAs",value:function(e,t){var r=this;return new Promise((function(a,o){Object(P["a"])(Object(_["a"])(n.prototype),"addEventListener",r).call(r,"load",(function(e){var t=e.target;return a(t.result)})),Object(P["a"])(Object(_["a"])(n.prototype),"addEventListener",r).call(r,"error",(function(e){var t=e.target;return o(t.error)})),Object(P["a"])(Object(_["a"])(n.prototype),t,r).call(r,e)}))}},{key:"readAsArrayBuffer",value:function(e){return this._readAs(e,"readAsArrayBuffer")}},{key:"readAsDataURL",value:function(e){return this._readAs(e,"readAsDataURL")}},{key:"readAsText",value:function(e){return this._readAs(e,"readAsText")}}]),n}(Object(z["a"])(FileReader)),$={getFileListOnEvent:function(e){return e.target.files||e.dataTransfer.files},toShowable:function(e){return window.URL.createObjectURL(e)},fileToImageData:function(e,t,n){var r=arguments;return Object(E["a"])(regeneratorRuntime.mark((function a(){var o,c,i,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=r.length>3&&void 0!==r[3]?r[3]:1,a.next=3,(new T).readAsDataURL(e);case 3:return c=a.sent,i=document.createElement("canvas"),i.width=t*o,i.height=n*o,l=i.getContext("2d"),l.imageSmoothingEnabled=!1,a.abrupt("return",new Promise((function(e,t){var n=new Image;n.src=c,n.onload=function(){var t=parseInt(n.naturalWidth*o),r=parseInt(n.naturalHeight*o);l.drawImage(n,0,0,n.naturalWidth,n.naturalHeight,0,0,t,r),e(l.getImageData(0,0,t,r))},n.onerror=function(e){t(e)}})));case 10:case"end":return a.stop()}}),a)})))()},imageDataToBase64:function(e){var t=document.createElement("canvas"),n=t.getContext("2d");return t.width=e.width,t.height=e.height,n.putImageData(e,0,0),t.toDataURL()},resizeImageData:function(e,t,n){return Object(E["a"])(regeneratorRuntime.mark((function r(){var a,o,c,i,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t>>0,o=n>>0,r.next=4,window.createImageBitmap(e,0,0,e.width,e.height);case 4:return c=r.sent,i=document.createElement("canvas"),i.width=a,i.height=o,l=i.getContext("2d"),l.scale(a/e.width,o/e.height),l.drawImage(c,0,0),r.abrupt("return",l.getImageData(0,0,a,o));case 12:case"end":return r.stop()}}),r)})))()},getFileSize:function(e){return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){var r=new Image;r.onload=function(){var e={width:r.naturalWidth,height:r.naturalHeight};URL.revokeObjectURL(r.src),t(e)},r.onerror=function(e){n(e)},r.src=URL.createObjectURL(e)})));case 1:case"end":return t.stop()}}),t)})))()}},U=n("e099"),A=n("9224"),F={version:function(){return A.version},language:function(){return window.navigator.languages&&window.navigator.languages[0]||window.navigator.language||window.navigator.userLanguage||window.navigator.browserLanguage},isWeb:function(){return!U["a"].hasKeyInObject(Object({NODE_ENV:"production",BASE_URL:""}),"IS_ELECTRON")},isElectron:function(){return!this.isWeb()}},q=(n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("a9e3"),n("5319"),{check:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e._getVersions();case 2:return n=t.sent,t.abrupt("return",e._compare(F.version(),n[0].name)?n[0].name:"");case 4:case"end":return t.stop()}}),t)})))()},_getVersions:function(){return fetch("https://api.github.com/repos/irokaru/pixel-scaler/tags").then((function(e){return e.ok?e.json():[{name:""}]})).catch((function(){return[{name:""}]}))},_compare:function(e,t){return e=this._parge(e),t=this._parge(t),e<t},_parge:function(e){var t=new RegExp("\\.","g");return Number(e.replace(t,""))}}),H=n("53ca"),M=(n("ace4"),n("fb2c"),n("907a"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("8a59"),n("466d"),n("dbed")),Z={scale:function(e,t,n){var r=this;return Object(E["a"])(regeneratorRuntime.mark((function a(){var o,c,i,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o=r._validateFile(e),""===o){a.next=3;break}return a.abrupt("return",{status:"failed",message:o,org:e});case 3:return a.next=5,$.getFileSize(e);case 5:if(c=a.sent,i=r._validateFileSize(c,n),""===i){a.next=9;break}return a.abrupt("return",{status:"failed",message:i,org:e});case 9:return a.next=11,r._scale(e,c,t,n);case 11:return l=a.sent,a.abrupt("return",{status:"success",image:{base64:$.imageDataToBase64(l),filename:e.name,scale:t,pixelSize:n},org:e});case 13:case"end":return a.stop()}}),a)})))()},adjustParams:function(e,t){return e>>=0,t>>=0,e<1&&(e=1),4<e&&(e=4),t<100&&(t=100),400<t&&(t=400),[e,t]},_scale:function(e,t,n,r){var a=this;return Object(E["a"])(regeneratorRuntime.mark((function o(){var c,i,l,s,u,p,d,b;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,$.fileToImageData(e,t.width,t.height,1/r);case 2:return c=o.sent,i=new Uint32Array(c.data.buffer),1!==r&&(l=a._getScaleInteger(100*r),s=a._getXbr(l),i=s(i,c.width,c.height)),u=a._getScaleInteger(n),p=a._getXbr(u),d=p(i,t.width,t.height),b=new ImageData(new Uint8ClampedArray(d.buffer),t.width*u,t.height*u),o.next=11,$.resizeImageData(b,t.width*n/100,t.height*n/100);case 11:return o.abrupt("return",o.sent);case 12:case"end":return o.stop()}}),o)})))()},_getScaleInteger:function(e){var t=parseInt(e/100);return t<2?2:t},_getXbr:function(e){var t={2:M["a"],3:M["b"],4:M["c"]};return t[e]},_validateFile:function(e){return"object"!==Object(H["a"])(e)||Array.isArray(e)||"[object File]"!==toString.call(e)?"error-invalid-file":e.type.match(/^image\/(png|jpeg|gif)/)?"":"error-invalid-image-type"},_validateFileSize:function(e,t){var n=e.width%t,r=e.height%t;return 0<n+r?"error-invalid-image-size":""}},W={class:"loader"};function J(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",W,"Loading...")}n("a8f7");var X=n("6b0d"),Y=n.n(X);const K={},Q=Y()(K,[["render",J],["__scopeId","data-v-6e86ecfe"]]);var G=Q,ee={key:0,class:"box block margin-tb-2"};function te(e,t,n,a,o,c){var i=Object(r["resolveComponent"])("v-fa");return o.attentions.length?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",ee,[Object(r["createVNode"])(i,{icon:"times-circle",class:"close-btn pointer",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),Object(r["createElementVNode"])("h2",null,Object(r["toDisplayString"])(e.$t("attention")),1),Object(r["createElementVNode"])("ul",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(o.attentions,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:t},Object(r["toDisplayString"])(e.$t(t)),1)})),128))])])):Object(r["createCommentVNode"])("",!0)}var ne={data:function(){return{attentions:[]}},emits:["close"]};const re=Y()(ne,[["render",te]]);var ae=re,oe=["innerHTML"],ce={class:"margin-t-2"},ie=["innerHTML"],le={class:"margin-t-2"};function se(e,t,n,a,o,c){var i=Object(r["resolveComponent"])("v-fa");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createElementVNode"])("h2",null,[Object(r["createVNode"])(i,{icon:["fas","question-circle"]}),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.$t("whatis")),1)]),Object(r["createElementVNode"])("p",{innerHTML:e.$t("whatis-detail")},null,8,oe),Object(r["createElementVNode"])("h2",ce,[Object(r["createVNode"])(i,{icon:["fas","pencil-alt"]}),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.$t("usage")),1)]),Object(r["createElementVNode"])("ol",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(o.usageNum,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:t,innerHTML:e.$t("usage-step-".concat(t))},null,8,ie)})),128))]),Object(r["createElementVNode"])("h2",le,[Object(r["createVNode"])(i,{icon:["fas","bolt"]}),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.$t("tips")),1)]),Object(r["createElementVNode"])("ul",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(o.tipsNum,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:t},Object(r["toDisplayString"])(e.$t("tips-".concat(t))),1)})),128))])],64)}var ue={data:function(){return{usageNum:["01","02","03","04","05","06","07"],tipsNum:["01","02","03","04"]}}};const pe=Y()(ue,[["render",se]]);var de=pe,be={class:"box image-box"},ge={class:"image-name"},me=["src"],ve={class:"image-info"},fe={class:"btn-list image-btns"},he=["href","download"];function je(e,t,n,a,o,c){var i=Object(r["resolveComponent"])("v-fa");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",be,[Object(r["createVNode"])(i,{icon:"times-circle",class:"close-btn pointer",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),Object(r["createElementVNode"])("div",ge,Object(r["toDisplayString"])(n.converted.filename),1),Object(r["createElementVNode"])("div",{class:"box-reverse block pointer image-wrapper",onClick:t[1]||(t[1]=function(t){return e.$emit("preview")})},[Object(r["createElementVNode"])("img",{class:"cover",src:n.converted.base64},null,8,me)]),Object(r["createElementVNode"])("div",ve,[Object(r["createElementVNode"])("span",null,[Object(r["createVNode"])(i,{icon:["fas","th"]}),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(n.converted.pixelSize)+"px",1)]),Object(r["createElementVNode"])("span",null,[Object(r["createVNode"])(i,{icon:["fas","search-plus"]}),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(n.converted.scale)+"%",1)])]),Object(r["createElementVNode"])("div",fe,[Object(r["createElementVNode"])("div",{class:"box circle pointer margin-1 hover active",onClick:t[2]||(t[2]=function(t){return e.$emit("preview")})},[Object(r["createVNode"])(i,{icon:["fas","search-plus"]})]),Object(r["createElementVNode"])("a",{class:"box circle margin-1 hover active",href:n.converted.base64,download:n.converted.filename},[Object(r["createVNode"])(i,{icon:["fas","download"]})],8,he)])])}var Oe={props:{org:{type:Object,required:!0},converted:{type:Object,required:!0}},emits:["close","preview"],methods:{toShowable:function(e){return $.toShowable(e)}}};n("431c");const ke=Y()(Oe,[["render",je],["__scopeId","data-v-23f506f3"]]);var we=ke,xe={class:"languages margin-tb-2"},ye=["onClick"];function Ee(e,t,n,a,o,c){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",xe,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(o.langs,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"box circle margin-1 pointer hover active",key:e,onClick:function(t){return c.click(e)}},Object(r["toDisplayString"])(e),9,ye)})),128))])}var Ve={props:{modelValue:{type:String,required:!0}},data:function(){return{langs:["ja","en","es"]}},methods:{click:function(e){this.$emit("update:modelValue",e)}}};const Ne=Y()(Ve,[["render",Ee]]);var Be=Ne,Ce=["href"];function Se(e,t,n,a,o,c){var i=Object(r["resolveComponent"])("v-fa");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(o.links,(function(t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("a",{href:t.url,target:"_blank",class:"box circle margin-1 hover active",key:t.url},[Object(r["createVNode"])(i,{icon:t.icon},null,8,["icon"]),Object(r["createTextVNode"])(" "+Object(r["toDisplayString"])(e.$t(t.text)),1)],8,Ce)})),128))])}var De={data:function(){return{links:[{url:"https://bit.ly/3rMhwKT",icon:["fas","share-alt-square"],text:"link-share-on-twitter"},{url:"https://twitter.com/irokaru",icon:["fab","twitter"],text:"link-developer"},{url:"https://github.com/irokaru/pixel-scaler",icon:["fab","github"],text:"link-repository"},{url:"https://nononotyaya.booth.pm/items/2517679",icon:["fas","images"],text:"link-booth"},{url:"./oss-licenses.json",icon:["fas","balance-scale"],text:"link-license"}]}}};const Le=Y()(De,[["render",Se]]);var Pe=Le,_e={class:"box block"},Re={key:0},Ie=["innerHTML"],ze={key:2};function Te(e,t,n,a,o,c){var i=Object(r["resolveComponent"])("v-fa");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",_e,[Object(r["createVNode"])(i,{icon:"times-circle",class:"close-btn pointer",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),n.checkUpdate?n.isLatest?(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:1},[Object(r["createElementVNode"])("p",null,Object(r["toDisplayString"])(e.$t("version-new-notice",{version:n.latestVersion})),1),Object(r["createElementVNode"])("p",{innerHTML:e.$t("version-new-download",{booth:"https://nononotyaya.booth.pm/items/2517679",github:"https://github.com/irokaru/pixel-scaler/releases"})},null,8,Ie)],64)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",ze,Object(r["toDisplayString"])(e.$t("version-latest-now")),1)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("p",Re,Object(r["toDisplayString"])(e.$t("version-check")),1))])}var $e={props:{checkUpdate:{type:Boolean,required:!0},isLatest:{type:Boolean,required:!0},latestVersion:{type:String,required:!0}},emits:["close"]};const Ue=Y()($e,[["render",Te]]);var Ae=Ue,Fe={class:"box-reverse block selectable-all"};function qe(e,t,n,a,o,c){var i=Object(r["resolveComponent"])("v-fa");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(i,{icon:"times-circle",class:"close-btn pointer",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})}),Object(r["createElementVNode"])("p",null,Object(r["toDisplayString"])(e.$t("exception")),1),Object(r["createElementVNode"])("pre",Fe,Object(r["toDisplayString"])(n.exception),1)],64)}var He={props:{exception:{required:!0}},emits:["close"]};const Me=Y()(He,[["render",qe]]);var Ze=Me,We=["src"];function Je(e,t,n,a,o,c){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",{class:"preview-wrapper",onClick:t[0]||(t[0]=function(t){return e.$emit("close")})},[Object(r["createElementVNode"])("img",{src:n.image},null,8,We)])}var Xe={props:{image:{type:String,required:!0}},emits:["close"]};n("003a");const Ye=Y()(Xe,[["render",Je],["__scopeId","data-v-9d817d8a"]]);var Ke=Ye,Qe={name:"app",data:function(){return{pixelSize:{list:[1,2,3,4],org:1},scale:200,files:[],converted:[],errors:[],exception:null,latestVersion:"",previewConverted:"",flags:{convert:!1,checkUpdate:!1,showAttention:!0,showVersionContainer:!0,showPreviewConverted:!1}}},methods:{setFiles:function(e){this.files=$.getFileListOnEvent(e),this.exception=""},convert:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.exception="",n=Z.adjustParams(e.pixel,e.scale),r=Object(y["a"])(n,2),e.pixel=r[0],e.scale=r[1],!e.flags.convert&&0!==e.files.length){t.next=7;break}return t.abrupt("return");case 7:e.flags.convert=!0,a=Object(x["a"])(e.files),t.prev=9,a.s();case 11:if((o=a.n()).done){t.next=20;break}return c=o.value,t.next=15,Z.scale(c,e.scale,e.pixelSize.org).then((function(t){"success"===t.status?e.converted.push(t):e.errors.push(t)})).catch((function(t){e.exception=t}));case 15:if(!e.exception){t.next=18;break}return e.flags.convert=!1,t.abrupt("return");case 18:t.next=11;break;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](9),a.e(t.t0);case 25:return t.prev=25,a.f(),t.finish(25);case 28:e.flags.convert=!1;case 29:case"end":return t.stop()}}),t,null,[[9,22,25,28]])})))()},createZip:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.converted.map((function(e){return e.image})),t.prev=1,t.next=4,S.ScaledImagestoZip(n);case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t["catch"](1),e.exception=t.t0,t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))()},downloadZip:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.flags.convert){t.next=2;break}return t.abrupt("return");case 2:return e.flags.convert=!0,t.next=5,e.createZip();case 5:if(n=t.sent,e.flags.convert=!1,n){t.next=9;break}return t.abrupt("return");case 9:S.download(n,"images.zip");case 10:case"end":return t.stop()}}),t)})))()},deleteConverted:function(e){this.converted.splice(e,1)},setPreviewConverted:function(e){var t=this.converted[e];t&&(this.previewConverted=t.image.base64,this.flags.showPreviewConverted=!0)},resetConverted:function(){this.flags.convert||(this.files=[],this.converted=[],this.errors=[])},isLatest:function(){return this.flags.checkUpdate&&""!==this.latestVersion},isWeb:function(){return F.isWeb()},isElectron:function(){return F.isElectron()},checkUpdate:function(){return q.check()},year:function(){return(new Date).getFullYear()}},created:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(document.title=e.$t("title"),!e.isElectron()){t.next=6;break}return t.next=4,e.checkUpdate();case 4:e.latestVersion=t.sent,e.flags.checkUpdate=!0;case 6:case"end":return t.stop()}}),t)})))()},components:{Loading:G,AttentionContainer:ae,HowtoContainer:de,ImageContainer:we,LanguageContainer:Be,LinkContainer:Pe,VersionContainer:Ae,ExceptionContainer:Ze,PreviewConteiner:Ke}};const Ge=Y()(Qe,[["render",w]]);var et=Ge,tt=n("ecee"),nt=n("c074"),rt=n("b702"),at=n("f2d1"),ot=n("ad3d"),ct=n("0251"),it=n("19d0"),lt=n("e088"),st=n("d90a"),ut={ja:it,en:lt,es:st},pt=Object(ct["createI18n"])({locale:F.language(),fallbackLocale:"en",messages:ut}),dt=pt;n("b751");n("4771"),tt["c"].add(nt["a"],rt["a"],at["a"]);var bt=Object(r["createApp"])(et);bt.component("v-fa",ot["a"]),bt.use(dt),bt.mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"pixel-scaler","version":"0.1.4","private":true,"description":"pixel art scale app","author":{"name":"irokaru","url":"https://nononotyaya.net/"},"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","deploy":"yarn build && gh-pages -d dist","electron:build":"vue-cli-service electron:build","electron:serve":"vue-cli-service electron:serve","postinstall":"electron-builder install-app-deps","postuninstall":"electron-builder install-app-deps"},"main":"background.js","dependencies":{"@fortawesome/fontawesome-svg-core":"^1.2.32","@fortawesome/vue-fontawesome":"^3.0.0-2","core-js":"^3.6.5","file-saver":"^2.0.2","jszip":"^3.5.0","vue":"^3.0.0","vue-i18n":"^9.2.0-beta.26","xbr-js":"^2.0.1"},"devDependencies":{"@fortawesome/free-brands-svg-icons":"^5.15.1","@fortawesome/free-regular-svg-icons":"^5.15.1","@fortawesome/free-solid-svg-icons":"^5.15.1","@vue/cli-plugin-babel":"~4.5.8","@vue/cli-plugin-eslint":"~4.5.8","@vue/cli-service":"~4.5.8","@vue/compiler-sfc":"^3.0.0","babel-eslint":"^10.1.0","electron":"^9.0.0","electron-devtools-installer":"^3.1.0","eslint":"^6.7.2","eslint-plugin-vue":"^7.0.0-0","gh-pages":"^3.1.0","husky":"^4.3.0","nonono-validator":"irokaru/nonono-validator","sass":"^1.49.0","sass-loader":"^8.0.0","vue-cli-plugin-electron-builder":"~2.0.0-rc.5","vue-template-compiler":"^2.6.10","webpack-license-plugin":"^4.2.1"},"eslintConfig":{"root":true,"env":{"node":true},"extends":["plugin:vue/vue3-essential","eslint:recommended"],"rules":{"no-console":0},"parserOptions":{"parser":"babel-eslint"}},"browserslist":["> 1%","last 2 versions"],"husky":{"hooks":{"pre-commit":"yarn lint"}}}')},"98ea":function(e,t,n){},a09b:function(e,t,n){},a8f7:function(e,t,n){"use strict";n("a09b")},b751:function(e,t,n){},d90a:function(e){e.exports=JSON.parse('{"title":"PiXel ScaLer","original-pixel-size":"tamaño del píxel","scale":"escala","select":"Seleccionado {count} archivo/s","no-select":"Seleccionar imagen(gif/jpeg/png)","download-zip":"descargar ZIP","convert":"convertir","reset":"resetear","exception":"Se ha producido un error. Póngase en contacto con el desarrollador.","error-invalid-file":"Por favor, seleccione un archivo. ({filename})","error-invalid-image-type":"Elija png, jpeg o gif. ({filename})","error-invalid-image-size":"El tamaño de los píxeles no coincide con el tamaño de la imagen. ({filename})","attention":"Atención","attention-01":"Hay un error que hace que la conversión no funcione con Safari 14 en el iPhone. Por favor, intente utilizar un PC.","whatis":"¿Qué es esto?","whatis-detail":"Esta es una aplicación de escalado que utiliza <a href=\\"https://github.com/joseprio/xBRjs\\" target=\\"_blank\\">xBRjs</a>. Es una forma relativamente fácil de convertir el arte de píxeles en estilo de ilustración.","usage":"Uso","usage-step-01":"Si el pixel art que estás introduciendo ya está ampliado, selecciona <strong>tamaño de píxel (1px a 4px)</strong>.","usage-step-02":"Establezca <strong>el factor de escala (100%-400%)</strong> desde el campo de entrada de escala (%).","usage-step-03":"Haz clic en el botón \\"Seleccionar imagen\\" para <strong>elegir una imagen</strong>.","usage-step-04":"Haz clic en <strong>convertir</strong>.","usage-step-05":"Se mostrara una imagen ampliada de referencia.","usage-step-06":"Haga clic en el botón \\"Descargar\\" o en el botón \\"Descargar ZIP\\" en la parte inferior de la imagen para guardarla.","usage-step-07":"¡FELIZ!","tips":"Consejos","tips-01":"La conversión con pixel art del tamaño real le dará un resultado hermoso.","tips-02":"Las ilustraciones que no son pixel art no se ampliarán bien.","tips-03":"Puede suavizar el pixel art configurando el factor de escala al 100%.","tips-04":"La conversión puede fallar si el tamaño de píxel especificado es diferente del tamaño de píxel del pixel art.","link-share-on-twitter":"compartir(twitter)","link-developer":"desarrollador","link-repository":"repositorio","link-booth":"Booth","link-license":"LICENCIA","version-check":"comprobando actualizaciones...","version-new-notice":"Se ha lanzado la última versión v.{version}","version-new-download":"¡Descárgalo desde <a href=\\"{booth}\\" target=\\"_blank\\">booth</a> o <a href=\\"{github}\\" target=\\"_blank\\">github</a>!","version-latest-now":"Su versión es la última."}')},e088:function(e){e.exports=JSON.parse('{"title":"PiXel ScaLer","original-pixel-size":"pixel size","scale":"scale","select":"{count} files are being selected","no-select":"Select Picture(gif/jpeg/png)","download-zip":"download ZIP","convert":"convert","reset":"reset","exception":"An error has occurred. Please contact the developer.","error-invalid-file":"Please select a file. ({filename})","error-invalid-image-type":"Please choose png, jpeg or gif. ({filename})","error-invalid-image-size":"The pixel size does not match the picture size. ({filename})","attention":"Attention","attention-01":"There is a bug that the conversion does not work with Safari 14 on iPhone. Please try using a PC.","whatis":"What is this","whatis-detail":"This is a scaling application using <a href=\\"https://github.com/joseprio/xBRjs\\" target=\\"_blank\\">xBRjs</a>. It is a relatively easy way to convert pixel art to illustration style.","usage":"Usage","usage-step-01":"If the pixel art you are entering is already enlarged, select <strong>pixel size (1px to 4px)</strong>.","usage-step-02":"Set <strong>the scale factor (100%-400%)</strong> from scale (%) input field.","usage-step-03":"Click the \\"Select Picture\\" button to <strong>choose a picture</strong>.","usage-step-04":"Click <strong>convert</strong>.","usage-step-05":"You will see an enlarged picture in an illustrative style.","usage-step-06":"Click the \\"Download button\\" or \\"ZIP Download button\\" at bottom of the picture to save the picture.","usage-step-07":"HAPPY!","tips":"Tips","tips-01":"Converting with pixel art of the actual size will give you a beautiful result.","tips-02":"Illustrations that are not pixel art will not be enlarged nicely.","tips-03":"You can anti-alias the pixel art by setting the scale factor to 100%.","tips-04":"The conversion may fail if the specified pixel size is different from the pixel size of the pixel art.","link-share-on-twitter":"share(twitter)","link-developer":"developer","link-repository":"repository","link-booth":"Booth","link-license":"LICENSE","version-check":"checking for updates...","version-new-notice":"The latest version v.{version} has been released","version-new-download":"Download it from <a href=\\"{booth}\\" target=\\"_blank\\">booth</a> or <a href=\\"{github}\\" target=\\"_blank\\">github</a>!","version-latest-now":"Your version is the latest."}')}});
//# sourceMappingURL=app.8e94e216.js.map