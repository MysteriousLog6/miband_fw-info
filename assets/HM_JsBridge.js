var HM_JSBRIDGE_MD5="623a394ec9a116248c674d8037d764c2";!function(){function e(){return!!(navigator.userAgent.toLowerCase().indexOf("android")>-1)}function n(){return!!(navigator.userAgent.toLowerCase().indexOf("iphone")>-1)}function r(e){if(h._messageHandler)throw new Error("HM_JsBridge.init called twice");h._messageHandler=e;var n=u;u=null;for(var r=0;r<n.length;r++)s(n[r])}function t(e,n){f[e]=n}function a(e,n,r){i({handlerName:e,data:n},r)}function i(e,n){if(n){var r="cb_"+v+++"_"+(new Date).getTime();g[r]=n,e.callbackId=r}c.push(e),window.location.href=l+"://"+_}function o(){var r=JSON.stringify(c);if(c=[],n())return r;e()&&(window.location.href=l+"://return/_fetchQueue/"+encodeURIComponent(r))}function s(e){setTimeout(function(){var n,r=JSON.parse(e);if(r.responseId){if(!(n=g[r.responseId]))return;n(r.responseData),delete g[r.responseId]}else{if(r.callbackId){var t=r.callbackId;n=function(e){i({responseId:t,responseData:e})}}var a=h._messageHandler;r.handlerName&&(a=f[r.handlerName]);try{a(r.data,n)}catch(e){}}})}function d(e){u?u.push(e):s(e)}if(!window.HM_JsBridge){var c=[],u=[],f={},l="HM",_="__QUEUE_MESSAGE__/",g={},v=1,h=window.HM_JsBridge={init:r,on:t,invoke:a,_fetchQueue:o,_handleMessageFromNative:d},w=document,p=w.createEvent("Events");p.initEvent("HM_JsBridgeReady"),p.bridge=h,w.dispatchEvent(p)}}();