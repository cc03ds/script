(self.AMP=self.AMP||[]).push({n:"amp-video",v:"2011070101001",f:(function(AMP,_){
'use strict';var f,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var ca={a:!0},da={};try{da.__proto__=ca;m=da.a;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ea=l,n;function p(){return n?n:n=Promise.resolve(void 0)};function fa(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}};var ha=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function ia(a){var b=Object.create(null);if(!a)return b;for(var c;c=ha.exec(a);){var d=fa(c[1],c[1]),e=c[2]?fa(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var q="";
function ja(a){var b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=ia(b.location.originalHash||b.location.hash);var d=ia(b.location.search);q||(q=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012011070101001");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(c.development)||b.AMP_DEV_MODE),examiner:"2"==c.development,esm:!1,geoOverride:c["amp-geo"],minified:!0,lite:void 0!=d.amp_lite,test:!1,log:c.log,version:"2011070101001",rtvVersion:q};c=b.__AMP_MODE=c}return c}
;var ka=Object.prototype.toString;function r(a){return a?Array.prototype.slice.call(a):[]}function t(a){return"number"===typeof a&&isFinite(a)};function u(a){var b=!1,c=null,d=a;return function(a){for(var e=[],h=0;h<arguments.length;++h)e[h-0]=arguments[h];b||(c=d.apply(self,e),b=!0,d=null);return c}};var v=self.AMP_CONFIG||{},la=("string"==typeof v.cdnProxyRegex?new RegExp(v.cdnProxyRegex):v.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ma(a){if(self.document&&self.document.head&&(!self.location||!la.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}v.cdnUrl||ma("runtime-host");v.geoApiUrl||ma("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function x(){if(!w.user)throw Error("failed to call initLogConstructor");return w.user}function na(){if(w.dev)return w.dev;throw Error("failed to call initLogConstructor");}function oa(a,b,c){return x().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function y(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return z(a,b)}function A(a,b){var c=B(a);c=C(c);return z(c,b)}function D(a,b){a=B(a);a=C(a);return pa(a,b)?z(a,b):null}function B(a){return a.nodeType?y((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function C(a){a=B(a);return a.isSingleDoc()?a.win:a}function z(a,b){pa(a,b);a=qa(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function qa(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b}function pa(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
var F;function ra(a){try{var b=a.ownerDocument,c=b.createElement("div"),d=b.createElement("div");c.appendChild(d);return c.querySelector(":scope div")===d}catch(e){return!1}};function G(a){var b=Object.create(null);a&&Object.assign(b,a);return b}function H(a){return a||{}};function I(a){a.parentElement&&a.parentElement.removeChild(a)}function sa(a,b,c){var d=c=void 0===c?null:c;d?a.insertBefore(b,d.nextSibling):a.insertBefore(b,a.firstChild)}function ta(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function ua(a){return a.closest?a.closest("amp-story"):ta(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,"amp-story"):!1})}
function va(a,b){for(a=a.firstElementChild;a;a=a.nextElementSibling)if(b(a))return a;return null}function wa(a){/^[\w-]+$/.test("video");(void 0!==F?F:F=ra(a))?a=a.querySelector("> video".replace(/^|,/g,"$&:scope ")):(a=xa(a,"> video"),a=void 0===a[0]?null:a[0]);return a}function J(a,b){/^[\w-]+$/.test(b);b="> "+b;return(void 0!==F?F:F=ra(a))?a.querySelectorAll(b.replace(/^|,/g,"$&:scope ")):xa(a,b)}
function xa(a,b){a.classList.add("i-amphtml-scoped");var c=b.replace(/^|,/g,"$&.i-amphtml-scoped "),d=a.querySelectorAll(c);a.classList.remove("i-amphtml-scoped");return d};var K={title:"",artist:"",album:"",artwork:[{src:""}]};function ya(a){var b=a.querySelector('script[type="application/ld+json"]');if(b){try{var c=JSON.parse(b.textContent)}catch(e){c=null}var d=c;if(d&&d.image){if("string"===typeof d.image)return d.image;if(d.image["@list"]&&"string"===typeof d.image["@list"][0])return d.image["@list"][0];if("string"===typeof d.image.url)return d.image.url;if("string"===typeof d.image[0])return d.image[0]}}}
function za(a,b){var c=D(a,"url");if(b&&b.artwork){var d=b.artwork;Array.isArray(d);d.forEach(function(a){a&&(a="[object Object]"===ka.call(a)?a.src:a,oa(c.isProtocolValid(a)))})}};function Aa(a){a.signals().signal("user-interacted")};function Ba(a,b){this.win=a;this.oa=b}function Ca(a,b){if(a.WeakRef)return new a.WeakRef(b);if(!b.id){var c=a.__AMP_WEAKREF_ID=(a.__AMP_WEAKREF_ID||0)+1;b.id="weakref-id-"+c}return new Ba(a,b.id)}Ba.prototype.deref=function(){return this.win.document.getElementById(this.oa)||void 0};var L;function M(a,b,c){var d=a,e=c;var g=function(a){try{return e(a)}catch(E){throw self.__AMP_REPORT_ERROR(E),E;}};var h=Da();d.addEventListener(b,g,h?void 0:!1);return function(){d&&d.removeEventListener(b,g,h?void 0:!1);g=d=e=null}}function Da(){if(void 0!==L)return L;L=!1;try{var a={get capture(){L=!0}};self.addEventListener("test-options",null,a);self.removeEventListener("test-options",null,a)}catch(b){}return L};function Ea(a,b,c){var d={detail:c};Object.assign(d,void 0);if("function"==typeof a.CustomEvent)return new a.CustomEvent(b,d);a=a.document.createEvent("CustomEvent");a.initCustomEvent(b,!!d.bubbles,!!d.cancelable,c);return a}function N(a,b,c){return M(a,b,c)}function Fa(a,b,c){var d=c,e=M(a,b,function(a){try{d(a)}finally{d=null,e()}});return e};var Ga={"slow-2g":50,"2g":50,"3g":1E3,"4g":2500,"5g":5E3},Ha;function Ia(a){this.win=a;this.U="";this.S=Ja(this);this.R=[]}Ia.prototype.manage=function(a){var b=this;Ka(a,function(){var c=La(a);b.S=c.H-1;Ma(b,a,c.H);for(var d=b.R.length-1;0<=d;d--){var e=b.R[d].deref();if(!e){b.R.splice(d,1);break}if(!e.paused)break;Na(b,e);e.load()}});a.changedSources=function(){Na(b,a)};this.R.push(Ca(this.win,a))};function Oa(a){var b=a.win.navigator.connection;return b&&b.effectiveType?b.effectiveType:"4g"}
function Ja(a){a.U!=Oa(a)&&(a.U=Oa(a),a.S=Ga[a.U]||Ga["4g"]);return a.S}function Na(a,b){var c=r(J(b,"source"));c.forEach(function(a){if(!a.H){var b=a.getAttribute("data-bitrate");a.H=b?parseInt(b,10):Number.POSITIVE_INFINITY}});c.sort(function(b,c){return Pa(a,c)-Pa(a,b)});c.forEach(function(a){b.appendChild(a)})}function Pa(a,b){b=b.H;b>Ja(a)&&(b*=-1);return b}function Qa(a,b){return!!Ra(a,function(a){return a.H<b})}
function Ma(a,b,c){if(Qa(b,c)){var d=b.currentTime;b.pause();Na(a,b);b.load();Fa(b,"loadedmetadata",function(){b.currentTime=d;b.play();na().fine("amp-video","Playing at lower bitrate %s",b.currentSrc)})}else na().fine("amp-video","No lower bitrate available")}function Ka(a,b){N(a,"waiting",function(){var c=null,d=Fa(a,"playing",function(){clearTimeout(c)});c=setTimeout(function(){d();b()},100)})}function Ra(a,b){return va(a,function(a){return"SOURCE"!=a.tagName?!1:b(a)})}
function La(a){return Ra(a,function(b){return b.src==a.currentSrc})};var O;function Sa(a){a=a.ownerDocument||a;O&&O.ownerDocument===a||(O=a.createElement("div"));return Ta}function Ta(a){var b=O;b.innerHTML=a[0];a=b.firstElementChild;b.removeChild(a);return a};function Ua(){this.w=null}f=Ua.prototype;f.add=function(a){var b=this;this.w||(this.w=[]);this.w.push(a);return function(){b.remove(a)}};f.remove=function(a){this.w&&(a=this.w.indexOf(a),-1<a&&this.w.splice(a,1))};f.removeAll=function(){this.w&&(this.w.length=0)};f.fire=function(a){if(this.w)for(var b=this.w,c=0;c<b.length;c++)(0,b[c])(a)};f.getHandlerCount=function(){return this.w?this.w.length:0};function P(){this.N=!1;this.ca=new Ua}P.prototype.onSessionEnd=function(a){this.ca.add(a)};P.prototype.beginSession=function(){this.N=!0};P.prototype.endSession=function(){this.N&&this.ca.fire();this.N=!1};P.prototype.isSessionActive=function(){return this.N};var Q,Va="Webkit webkit Moz moz ms O o".split(" ");function Wa(a,b,c){if(b.startsWith("--"))return b;Q||(Q=G());var d=Q[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var g=0;g<Va.length;g++){var h=Va[g]+e;if(void 0!==a[h]){e=h;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(Q[b]=d)}return d}function Xa(a,b,c){(b=Wa(a.style,b,void 0))&&(b.startsWith("--")?a.style.setProperty(b,c):a.style[b]=c)}function Ya(a,b){for(var c in b)Xa(a,c,b[c])};function Za(a,b){if(b)return Promise.resolve(!1);var c=a.document.createElement("video");c.setAttribute("muted","");c.setAttribute("playsinline","");c.setAttribute("webkit-playsinline","");c.setAttribute("height","0");c.setAttribute("width","0");c.muted=!0;c.playsinline=!0;c.webkitPlaysinline=!0;Ya(c,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"});(new Promise(function(a){return a(c.play())})).catch(function(){});return Promise.resolve(!c.paused)}var $a=null;function ab(a,b){var c=b.parent&&b.parent!=b?b.document:null;try{return new b.IntersectionObserver(a,{root:c,rootMargin:"25%",threshold:.5})}catch(d){return new b.IntersectionObserver(a,{rootMargin:"150px",threshold:.5})}}new WeakMap;new WeakMap;function bb(a,b,c){return b[c]?b[c]:(a=a.querySelector("style["+c+"]"))?b[c]=a:null};var cb=".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/";var db=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],eb=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function fb(a,b){var c=Sa(a)(db);b&&b.title&&c.setAttribute("aria-label",b.title);return c}
function gb(a){var b=Sa(a)(eb),c=b.firstElementChild;for(a=0;4>a;a++){for(var d=c.cloneNode(!0),e=d.children,g=0;g<e.length;g++)e[g].classList.add("amp-video-eq-"+(a+1)+"-"+(g+1));b.appendChild(d)}I(c);return b};function hb(a){var b=this;this.ampdoc=a;this.installAutoplayStyles=u(function(){var a=cb,d=b.ampdoc.getHeadNode();var e=(e=d.__AMP_CSS_TR)?e(a):a;(a=d.__AMP_CSS_SM)||(a=d.__AMP_CSS_SM=G());var g=bb(d,a,"amp-extension=amp-video-autoplay");g?g.textContent!==e&&(g.textContent=e):(g=(d.ownerDocument||d).createElement("style"),g.textContent=e,g.setAttribute("amp-extension","amp-video-autoplay"),e=bb(d,a,"amp-runtime"),sa(d,g,e),a["amp-extension=amp-video-autoplay"]=g)});this.X=this.J=this.o=null;this.O=
y(a.win,"timer");this.ja=D(a.getHeadNode(),"action");this.ba=function(){for(var a=0;a<b.o.length;a++){var d=b.o[a];if("paused"!==d.getPlayingState()){R(d,"video-seconds-played");var e=d.video.getCurrentTime(),g=d.video.getDuration();t(e)&&t(g)&&0<g&&(e=Ea(b.ampdoc.win,"video-manager.timeUpdate",H({time:e,percent:e/g})),b.ja.trigger(d.video.element,"timeUpdate",e,1))}}b.O.delay(b.ba,1E3)};this.V=u(function(){return new S(b.ampdoc,b)});this.O.delay(this.ba,1E3)}f=hb.prototype;
f.dispose=function(){this.V().dispose();this.J.disconnect();this.J=null;if(this.o)for(var a=0;a<this.o.length;a++)this.o[a].dispose()};
f.register=function(a){var b=this;ib(a);if(a.supportsPlatform()){this.J||(this.J=ab(function(a){return a.forEach(function(a){var c=a.isIntersecting;T(b,a.target).updateVisibility(c)})},this.ampdoc.win));this.J.observe(a.element);N(a.element,"reloaded",function(){return c.videoLoaded()});this.o=this.o||[];var c=new jb(this,a);this.o.push(c);var d=c.video.element;d.dispatchCustomEvent("registered");d.classList.add("i-amphtml-media-component");a.signals().signal("registered");d.classList.add("i-amphtml-video-interface")}};
function ib(a){function b(){return a.fullscreenEnter()}function c(b,c){a.registerAction(b,function(){Aa(a);c()},1)}c("play",function(){return a.play(!1)});c("pause",function(){return a.pause()});c("mute",function(){return a.mute()});c("unmute",function(){return a.unmute()});c("fullscreenenter",b);c("fullscreen",b)}function T(a,b){if(kb(a.X,b))return a.X;for(var c=0;c<a.o.length;c++){var d=a.o[c];if(kb(d,b))return a.X=d}return null}f.registerForAutoFullscreen=function(a){this.V().register(a)};
f.qa=function(){return this.V()};f.getVideoStateProperty=function(a,b){var c=this.ampdoc.getRootNode(),d=x().assertElement(c.getElementById(a),'Could not find an element with id="'+a+'" for VIDEO_STATE');a=T(this,d);return(a?a.getAnalyticsDetails():p()).then(function(a){return a?a[b]:""})};f.getPlayingState=function(a){return T(this,a).getPlayingState()};f.isMuted=function(a){return T(this,a).isMuted()};f.userInteracted=function(a){return T(this,a).userInteracted()};
f.isRollingAd=function(a){return T(this,a).isRollingAd()};f.pauseOtherVideos=function(a){this.o.forEach(function(b){b.isPlaybackManaged()&&b!==a&&"playing_manual"==b.getPlayingState()&&b.video.pause()})};function kb(a,b){return!!a&&(a.video===b||a.video.element===b)}
function jb(a,b){var c=this;this.F=a;this.m=a.ampdoc;this.video=b;this.Y=!0;this.D=this.M=this.B=this.ha=!1;this.T=new P;this.T.onSessionEnd(function(){return R(c,"video-session")});this.G=new P;this.G.onSessionEnd(function(){return R(c,"video-session-visible")});this.aa=function(){var a=c.m.win,b=ja(a).lite;$a||($a=u(Za));return $a(a,b)};this.ea=u(function(){return new U(c.m.win,c)});this.Z=this.ia=!1;this.W=null;this.fa=this.A=!1;(this.hasAutoplay=b.element.hasAttribute("autoplay"))&&this.F.installAutoplayStyles();
this.l=K;this.na=function(){c.video.play(!1)};this.ma=function(){c.video.pause()};N(b.element,"load",function(){return c.videoLoaded()});N(b.element,"pause",function(){R(c,"video-pause");c.B=!1;c.Z?c.Z=!1:c.T.endSession()});N(b.element,"play",function(){c.fa=!0;R(c,"video-play")});N(b.element,"playing",function(){c.B=!0;"playing_manual"==c.getPlayingState()&&(c.da(),c.F.pauseOtherVideos(c));var a=c.video,b=a.element;if(!a.preimplementsMediaSessionAPI()&&!b.classList.contains("i-amphtml-disable-mediasession")){za(b,
c.l);a=c.m.win;b=c.l;var g=c.na,h=c.ma,k=a.navigator;"mediaSession"in k&&a.MediaMetadata&&(k.mediaSession.metadata=new a.MediaMetadata(K),k.mediaSession.metadata=new a.MediaMetadata(b),k.mediaSession.setActionHandler("play",g),k.mediaSession.setActionHandler("pause",h))}c.T.beginSession();c.D&&c.G.beginSession();c.fa||R(c,"video-play")});N(b.element,"muted",function(){return c.A=!0});N(b.element,"unmuted",function(){c.A=!1;c.F.pauseOtherVideos(c)});N(b.element,"amp:video:tick",function(a){a=a.data;
var b=a.eventType;b&&lb(c,b,a.vars)});N(b.element,"ended",function(){c.M=!1;R(c,"video-ended")});N(b.element,"ad_start",function(){c.M=!0;R(c,"video-ad-start")});N(b.element,"ad_end",function(){c.M=!1;R(c,"video-ad-end")});b.signals().whenSignal("registered").then(function(){var a=c.video.element;(c.video.preimplementsAutoFullscreen()||!a.hasAttribute("rotate-to-fullscreen")?0:oa(c.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",
a))&&c.F.registerForAutoFullscreen(c);c.hasAutoplay&&mb(c)});this.da=u(function(){var a=Ea(c.m.win,"firstPlay",H({})),b=c.video.element;D(b,"action").trigger(b,"firstPlay",a,1)});nb(this)}f=jb.prototype;f.dispose=function(){this.ea().stop()};function lb(a,b,c){var d={},e=(d["__amp:eventType"]=b,d);Object.keys(c).forEach(function(a){e["custom_"+a]=c[a]});R(a,"video-hosted-custom",e)}function nb(a){a.video.signals().whenSignal("playback-delegated").then(function(){a.Y=!1;a.B&&a.video.pause()})}
f.isMuted=function(){return this.A};f.isPlaybackManaged=function(){return this.Y};
f.videoLoaded=function(){this.ha=!0;this.W=this.video.element.querySelector("video, iframe");if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.l=G(this.video.getMetadata()));var a=this.m.win.document;if(!this.l.artwork||0==this.l.artwork.length){var b;(b=ya(a))||(b=(b=a.querySelector('meta[property="og:image"]'))?b.getAttribute("content"):void 0);b||(b=(b=a.querySelector('link[rel="shortcut icon"]')||a.querySelector('link[rel="icon"]'))?b.getAttribute("href"):void 0);
b&&(this.l.artwork=[{src:b}])}!this.l.title&&(a=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.W.getAttribute("title")||this.W.getAttribute("aria-label")||a.title)&&(this.l.title=a)}this.ea().start();this.D&&ob(this)};
function ob(a){a.m.isVisible()&&a.aa().then(function(b){a.hasAutoplay&&!a.userInteracted()&&b?a.Y&&(a.D?(a.G.beginSession(),a.video.play(!0),a.ia=!0):(a.B&&a.G.endSession(),a.video.pause(),a.Z=!0)):a.D?a.G.beginSession():a.B&&a.G.endSession()})}function mb(a){a.video.isInteractive()&&a.video.hideControls();a.aa().then(function(b){!b&&a.video.isInteractive()?a.video.showControls():(a.video.mute(),pb(a))})}
function pb(a){var b=a.video,c=a.video.element;if(!c.hasAttribute("noaudio")&&!c.signals().get("user-interacted")){var d=gb(c),e=function(a){b.mutateElementSkipRemeasure(function(){return d.classList.toggle("amp-video-eq-play",a)})};b.mutateElementSkipRemeasure(function(){return c.appendChild(d)});var g=[N(c,"pause",function(){return e(!1)}),N(c,"playing",function(){return e(!0)})];b.signals().whenSignal("user-interacted").then(function(){var b=a.video,c=b.element;a.da();b.isInteractive()&&b.showControls();
b.unmute();g.forEach(function(a){a()});b=c.querySelector(".amp-video-eq");c=c.querySelector(".i-amphtml-video-mask");b&&I(b);c&&I(c)});if(b.isInteractive()){var h=fb(c,a.l),k=function(a){b.mutateElementSkipRemeasure(function(){var b=a;void 0===b&&(b=h.hasAttribute("hidden"));b?h.removeAttribute("hidden"):h.setAttribute("hidden","")})};b.hideControls();b.mutateElementSkipRemeasure(function(){return c.appendChild(h)});[N(h,"click",function(){return Aa(b)}),N(c,"ad_start",function(){k(!1);b.showControls()}),
N(c,"ad_end",function(){k(!0);b.hideControls()}),N(c,"unmuted",function(){return Aa(b)})].forEach(function(a){return g.push(a)})}}}f.updateVisibility=function(a){var b=this.D;this.D=a;a!=b&&this.ha&&ob(this)};f.getPlayingState=function(){return this.B?this.B&&this.ia&&!this.userInteracted()?"playing_auto":"playing_manual":"paused"};f.isRollingAd=function(){return this.M};f.userInteracted=function(){return null!=this.video.signals().get("user-interacted")};
f.getAnalyticsDetails=function(){var a=this,b=this.video;return this.aa().then(function(c){var d=b.element.getLayoutBox(),e=d.width;d=d.height;var g=a.hasAutoplay&&c,h=b.getPlayedRanges(),k=h.reduce(function(a,b){return a+b[1]-b[0]},0);return{autoplay:g,currentTime:b.getCurrentTime(),duration:b.getDuration(),height:d,id:b.element.id,muted:a.A,playedTotal:k,playedRangesJson:JSON.stringify(h),state:a.getPlayingState(),width:e}})};
function S(a,b){var c=this;this.F=b;this.m=a;this.C=this.I=null;this.o=[];this.j=[];this.K=function(){return qb(c)};this.la=function(a){return"playing_manual"==c.F.getPlayingState(a)};this.ka=function(a,b){a=a.element.getIntersectionChangeEntry();var d=a.intersectionRatio;a=a.boundingClientRect;var e=b.element.getIntersectionChangeEntry();b=e.boundingClientRect;d-=e.intersectionRatio;.1<Math.abs(d)?a=d:(e=A(c.m,"viewport"),d=rb(e,a),e=rb(e,b),a=d<e||d>e?d-e:a.top-b.top);return a};sb(this);tb(this)}
S.prototype.dispose=function(){this.j.forEach(function(a){return a()});this.j.length=0};S.prototype.register=function(a){a=a.video;var b=a.element;if("video"==b.querySelector("video, iframe").tagName.toLowerCase())var c=!0;else c=y(this.m.win,"platform"),c=c.isIos()||c.isSafari()?!!{"amp-dailymotion":!0,"amp-ima-video":!0}[b.tagName.toLowerCase()]:!0;c&&(this.o.push(a),M(b,"pause",this.K),M(b,"playing",this.K),M(b,"ended",this.K),a.signals().whenSignal("user-interacted").then(this.K),qb(this))};
function tb(a){function b(){a.I=null}var c=a.m.getRootNode();a.j.push(M(c,"webkitfullscreenchange",b),M(c,"mozfullscreenchange",b),M(c,"fullscreenchange",b),M(c,"MSFullscreenChange",b))}S.prototype.isInLandscape=function(){var a=this.m.win;return a.screen&&"orientation"in a.screen?a.screen.orientation.type.startsWith("landscape"):90==Math.abs(a.orientation)};
function sb(a){var b=a.m.win,c=b.screen;c&&"orientation"in c&&a.j.push(N(c.orientation,"change",function(){return ub(a)}));a.j.push(N(b,"orientationchange",function(){return ub(a)}))}function ub(a){a.isInLandscape()?null!=a.C&&vb(a,a.C):a.I&&wb(a,a.I)}function vb(a,b){var c=y(a.m.win,"platform");a.I=b;c.isAndroid()&&c.isChrome()?b.fullscreenEnter():xb(a,b).then(function(){return b.fullscreenEnter()})}function wb(a,b){a.I=null;xb(a,b,"center").then(function(){return b.fullscreenExit()})}
function xb(a,b,c){var d=c=void 0===c?null:c,e=b.element,g=A(a.m,"viewport");return y(a.m.win,"timer").promise(330).then(function(){var a=e.getIntersectionChangeEntry().boundingClientRect,b=a.top;a=a.bottom;var c=g.getSize().height;return 0<=b&&a<=c?p():g.animateScrollIntoView(e,d?d:a>c?"bottom":"top")})}function qb(a){if(a.isInLandscape())return a.C;a.C=null;var b=a.o.filter(a.la).sort(a.ka)[0];b&&.5<=b.element.getIntersectionChangeEntry().intersectionRatio&&(a.C=b);return a.C}
function rb(a,b){var c=b.top+b.height/2,d=a.getSize().height/2;return Math.abs(c-d)}function U(a,b){this.O=y(a,"timer");this.L=b;this.j=null;this.P=this.ga=0}U.prototype.start=function(){var a=this,b=this.L.video.element;this.stop();this.j=this.j||[];yb(this)?zb(this,this.P):this.j.push(Fa(b,"loadedmetadata",function(){yb(a)&&zb(a,a.P)}));this.j.push(N(b,"ended",function(){yb(a)&&Ab(a,100)}))};U.prototype.stop=function(){if(this.j){for(;0<this.j.length;)this.j.pop()();this.P++}};
function yb(a){var b=a.L.video,c=b.getDuration();if(!(c&&!isNaN(c)&&1<c))return!1;250>50*c&&a.pa("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",5,"seconds long.",b.element);return!0}U.prototype.pa=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];x().warn.apply(x(),["video-manager"].concat(b))};
function zb(a,b){if(b==a.P){var c=a.L,d=a.O,e=c.video,g=function(){return zb(a,b)};if("paused"==c.getPlayingState())d.delay(g,500);else if((c=e.getDuration())&&!isNaN(c)&&1<c){var h=Math.min(Math.max(50*c,250),4E3),k=e.getCurrentTime()/c*100,E=5*Math.floor(k/5);t(E);Ab(a,E);d.delay(g,h)}else d.delay(g,500)}}function Ab(a,b){0>=b||a.ga==b||(a.ga=b,R(a.L,"video-percentage-played",{normalizedPercentage:b.toString()}))}
function R(a,b,c){var d=a.video;a.getAnalyticsDetails().then(function(a){c&&Object.assign(a,c);d.element.dispatchCustomEvent(b,a)})};H({c:!0,v:!0,a:!0,ad:!0});var Bb=["<i-amphtml-poster></i-amphtml-poster>"],Cb="aria-describedby aria-label aria-labelledby controls crossorigin disableremoteplayback controlsList".split(" "),Db=["loop","poster","preload"],Eb=Cb.concat(Db);function V(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.A=!1;a.$=null;a.l=K;a.j=[];a.ra=null;return a}var W=AMP.BaseElement;V.prototype=aa(W.prototype);V.prototype.constructor=V;
if(ea)ea(V,W);else for(var X in W)if("prototype"!=X)if(Object.defineProperties){var Fb=Object.getOwnPropertyDescriptor(W,X);Fb&&Object.defineProperty(V,X,Fb)}else V[X]=W[X];V.sa=W.prototype;f=V.prototype;f.preconnectCallback=function(a){var b=this;Gb(this).forEach(function(c){y(b.win,"preconnect").url(b.getAmpDoc(),c,a)})};
f.prerenderAllowed=function(){if(null==this.$){var a;if(!(a=!!this.element.getAttribute("poster"))){a:{var b=this.element;a=r(J(b,"source"));a.push(b);for(b=0;b<a.length;b++)if(Y(this,a[b])){a=a[b];break a}a=null}a=!!a}this.$=a}return this.$};function Gb(a){var b=a.element.getAttribute("src");if(b)return[b];var c=[];r(J(a.element,"source")).forEach(function(a){var b=a.getAttribute("src");b&&c.push(b);var d=a.getAttribute("amp-orig-src");d&&c.push(d)});return c}
f.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
f.buildCallback=function(){var a=this.element;Hb(this);this.h=a.ownerDocument.createElement("video");this.element.querySelector("source[data-bitrate]")&&(Ha?Ha:Ha=new Ia(this.win)).manage(this.h);var b=a.getAttribute("poster");!b&&ja().development&&console.error('No "poster" attribute has been provided for amp-video.');this.h.setAttribute("playsinline","");this.h.setAttribute("webkit-playsinline","");this.h.setAttribute("preload","none");this.propagateAttributes(Cb,this.h,!0);Ib(this);this.applyFillContent(this.h,
!0);var c=this.element,d=this.h;c.hasAttribute("object-fit")&&Xa(d,"object-fit",c.getAttribute("object-fit"));c.hasAttribute("object-position")&&Xa(d,"object-position",c.getAttribute("object-position"));a.appendChild(this.h);var e=a.getAttribute("artist");c=a.getAttribute("title");var g=a.getAttribute("album");d=a.getAttribute("artwork");this.l={title:c||"",artist:e||"",album:g||"",artwork:[{src:d||b||""}]};c=B(a);d=C(c);var h=qa(d),k=h["video-manager"];k||(k=h["video-manager"]={obj:null,promise:null,
resolve:null,reject:null,context:null,ctor:null});k.ctor||k.obj||(k.ctor=hb,k.context=c,k.resolve&&z(d,"video-manager"));A(a,"video-manager").register(this)};function Hb(a){var b=a.element;ua(b)&&["i-amphtml-disable-mediasession","i-amphtml-poolbound"].forEach(function(a){b.classList.add(a)})}
f.mutatedAttributesCallback=function(a){if(this.h){var b=this.element;a.src&&(D(this.element,"url").assertHttpsUrl(b.getAttribute("src"),b),this.propagateAttributes(["src"],this.h));var c=Eb.filter(function(b){return void 0!==a[b]});this.propagateAttributes(c,this.h,!0);a.src&&b.dispatchCustomEvent("reloaded");if(a.artwork||a.poster){var d=b.getAttribute("artwork"),e=b.getAttribute("poster");this.l.artwork=[{src:d||e||""}]}a.album&&(d=b.getAttribute("album"),this.l.album=d||"");a.title&&(d=b.getAttribute("title"),
this.l.title=d||"");a.artist&&(b=b.getAttribute("artist"),this.l.artist=b||"")}};
f.layoutCallback=function(){var a=this;this.h=this.h;if(!this.h.play)return this.toggleFallback(!0),p();this.propagateAttributes(Db,this.h,!0);Jb(this);Kb(this,function(){return Lb(a)});Mb(this);if("prerender"==this.getAmpDoc().getVisibilityState()){this.element.hasAttribute("preload")||this.h.setAttribute("preload","auto");var b=this.getAmpDoc().whenFirstVisible().then(function(){Nb(a);return y(a.win,"timer").promise(1).then(function(){if(!Z(a))return a.loadPromise(a.h)})})}else Nb(this);var c=this.loadPromise(this.h).then(null,
function(a){if(b)return b;throw a;}).then(function(){a.element.dispatchCustomEvent("load")});if("none"!==this.element.getAttribute("preload"))return Z(this)?b:c};function Ob(a,b){if(a.h.error&&a.h.error.code==MediaError.MEDIA_ERR_DECODE&&(x().error("amp-video","Decode error in "+a.h.currentSrc,a.element),!a.h.src)){var c=0,d=va(a.h,function(b){if("SOURCE"!=b.tagName)return!1;c++;return b.src==a.h.currentSrc});0!=c&&(d,I(d),b.stopImmediatePropagation(),a.h.load(),a.play(!1))}}
function Mb(a){var b=r(J(a.element,"source"));if(a.element.hasAttribute("src")&&Y(a,a.element)){var c=a.element.getAttribute("src"),d=a.element.getAttribute("type"),e=Pb(a,c,d),g=a.element.getAttribute("amp-orig-src");e.setAttribute("amp-orig-src",g);a.element.removeAttribute("src");a.element.removeAttribute("type");b.unshift(e)}b.forEach(function(b){Y(a,b)&&a.h.appendChild(b)});a.h.changedSources&&a.h.changedSources()}
function Nb(a){var b=r(J(a.element,"source")),c=a.element,d=D(a.element,"url");c.hasAttribute("src")&&!Y(a,c)&&(d.assertHttpsUrl(c.getAttribute("src"),c),a.propagateAttributes(["src"],a.h));b.forEach(function(b){Y(a,b);d.assertHttpsUrl(b.getAttribute("src"),b);a.h.appendChild(b)});r(a.h.querySelectorAll("[amp-orig-src]")).forEach(function(b){var c=b.getAttribute("amp-orig-src"),d=b.getAttribute("type"),e=Pb(a,c,d);(c=b.getAttribute("data-bitrate"))&&e.setAttribute("data-bitrate",c);sa(a.h,e,b)});
r(J(c,"track")).forEach(function(b){a.h.appendChild(b)});a.h.changedSources&&a.h.changedSources()}function Y(a,b){var c=b.getAttribute("src");return b.hasAttribute("amp-orig-src")&&D(a.element,"url").isProxyOrigin(c)}function Pb(a,b,c){var d=a.element;D(a.element,"url").assertHttpsUrl(b,d);a=d.ownerDocument.createElement("source");a.setAttribute("src",b);c&&a.setAttribute("type",c);return a}
function Ib(a){var b=a.h;b.addEventListener("error",function(b){return Ob(a,b)});var c=a.forwardEvents("ended loadedmetadata loadeddata pause playing play".split(" "),b),d=N(b,"volumechange",function(){var b=a.h.muted;a.A!=b&&(a.A=b,a.element.dispatchCustomEvent(a.A?"muted":"unmuted"))});a.j.push(c,d)}f.resetOnDomChange=function(){var a=this;for(this.h=wa(this.element);this.j.length;)this.j.pop().call();Ib(this);this.loadPromise(this.h).then(function(){a.element.dispatchCustomEvent("load")})};
f.pauseCallback=function(){this.h&&this.h.pause()};f.supportsPlatform=function(){return!!this.h.play};f.isInteractive=function(){return this.element.hasAttribute("controls")};f.play=function(){var a=this.h.play();a&&a.catch&&a.catch(function(){})};
function Jb(a){if(y(a.win,"platform").isAndroid()){var b=a.element;if(!b.querySelector("i-amphtml-poster")){var c=Sa(b)(Bb),d=b.getAttribute("poster");c.style.display="block";Ya(c,{"background-image":"url("+d+")","background-size":"cover","background-position":"center"});c.classList.add("i-amphtml-android-poster-bug");a.applyFillContent(c);b.appendChild(c)}}}f.pause=function(){this.h.pause()};f.mute=function(){Z(this)||(this.h.muted=!0)};f.unmute=function(){Z(this)||(this.h.muted=!1)};
function Z(a){return a.element.classList.contains("i-amphtml-poolbound")}f.showControls=function(){this.h.controls=!0};f.hideControls=function(){this.h.controls=!1};f.fullscreenEnter=function(){var a=this.h,b=a.requestFullscreen||a.requestFullScreen||a.webkitRequestFullscreen||a.webkitEnterFullscreen||a.msRequestFullscreen||a.mozRequestFullScreen;b&&b.call(a)};
f.fullscreenExit=function(){var a=this.h,b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen;b?b.call(a):(a=a.ownerDocument)&&(b=a.cancelFullScreen||a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.mozCancelFullScreen||a.msExitFullscreen)&&b.call(a)};
f.isFullscreen=function(){var a=this.h;var b=a.webkitDisplayingFullscreen;a=void 0!==b?b:(b=a.ownerDocument)?(b.fullscreenElement||b.webkitFullscreenElement||b.mozFullScreenElement||b.webkitCurrentFullScreenElement)==a:!1;return a};f.getMetadata=function(){return this.l};f.preimplementsMediaSessionAPI=function(){return!1};f.preimplementsAutoFullscreen=function(){return!1};f.getCurrentTime=function(){return this.h.currentTime};f.getDuration=function(){return this.h.duration};
f.getPlayedRanges=function(){for(var a=this.h.played,b=a.length,c=[],d=0;d<b;d++)c.push([a.start(d),a.end(d)]);return c};f.firstLayoutCompleted=function(){Lb(this)||this.togglePlaceholder(!1);var a=this.element.querySelector("i-amphtml-poster");a&&I(a)};function Lb(a){var b=a.getPlaceholder();if(b&&b.classList.contains("i-amphtml-blurry-placeholder")){a={opacity:0};var c=b.style,d;for(d in a)c.setProperty(Wa(c,d),a[d].toString(),"important");return!0}return!1}
function Kb(a,b){if(a=a.h.getAttribute("poster")){var c=new Image;c.onload=b;c.src=a}}f.seekTo=function(a){this.h.currentTime=a};(function(a){a.registerElement("amp-video",V)})(self.AMP);
})});

//# sourceMappingURL=amp-video-0.1.js.map

/*! Google Drive APIs v3 | HDRI Haven | https://hdrihaven.com/p/license.php */
function lot02_hdri(){window.open('https://hdrihaven.com/hdri/?h=lot_02');}
function smallhangar02_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_hangar_02');}
function concretetunnel_hdri(){window.open('https://hdrihaven.com/hdri/?h=concrete_tunnel');}
function redhillstraight_hdri(){window.open('https://hdrihaven.com/hdri/?h=red_hill_straight');}
function whaleskeleton_hdri(){window.open('https://hdrihaven.com/hdri/?h=whale_skeleton');}
function colosseum_hdri(){window.open('https://hdrihaven.com/hdri/?h=colosseum');}
function balcony_hdri(){window.open('https://hdrihaven.com/hdri/?h=balcony');}
function tuckerwreck_hdri(){window.open('https://hdrihaven.com/hdri/?h=tucker_wreck');}
function hikerscave_hdri(){window.open('https://hdrihaven.com/hdri/?h=hikers_cave');}
function teufelsbergground2_hdri(){window.open('https://hdrihaven.com/hdri/?h=teufelsberg_ground_2');}
function debalie_hdri(){window.open('https://hdrihaven.com/hdri/?h=de_balie');}
function lookout_hdri(){window.open('https://hdrihaven.com/hdri/?h=lookout');}
function konzerthaus_hdri(){window.open('https://hdrihaven.com/hdri/?h=konzerthaus');}
function riverrocks_hdri(){window.open('https://hdrihaven.com/hdri/?h=river_rocks');}
function vulturehide_hdri(){window.open('https://hdrihaven.com/hdri/?h=vulture_hide');}
function veldfire_hdri(){window.open('https://hdrihaven.com/hdri/?h=veld_fire');}
function blenderinstitute_hdri(){window.open('https://hdrihaven.com/hdri/?h=blender_institute');}
function redwall_hdri(){window.open('https://hdrihaven.com/hdri/?h=red_wall');}
function emmarentia_hdri(){window.open('https://hdrihaven.com/hdri/?h=emmarentia');}
function stream_hdri(){window.open('https://hdrihaven.com/hdri/?h=stream');}
function ahornsteig_hdri(){window.open('https://hdrihaven.com/hdri/?h=ahornsteig');}
function storeroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=storeroom');}
function pylons_hdri(){window.open('https://hdrihaven.com/hdri/?h=pylons');}
function binnenalster_hdri(){window.open('https://hdrihaven.com/hdri/?h=binnenalster');}
function derelictunderpass_hdri(){window.open('https://hdrihaven.com/hdri/?h=derelict_underpass');}
function residentialgarden_hdri(){window.open('https://hdrihaven.com/hdri/?h=residential_garden');}
function abandonedgamesroom02_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_games_room_02');}
function eilenriedelabyrinth_hdri(){window.open('https://hdrihaven.com/hdri/?h=eilenriede_labyrinth');}
function summerstage02_hdri(){window.open('https://hdrihaven.com/hdri/?h=summer_stage_02');}
function tiber1_hdri(){window.open('https://hdrihaven.com/hdri/?h=tiber_1');}
function hamburgcanal_hdri(){window.open('https://hdrihaven.com/hdri/?h=hamburg_canal');}
function autumncrossing_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_crossing');}
function woods_hdri(){window.open('https://hdrihaven.com/hdri/?h=woods');}
function teufelsbergroof_hdri(){window.open('https://hdrihaven.com/hdri/?h=teufelsberg_roof');}
function fisheaglehill_hdri(){window.open('https://hdrihaven.com/hdri/?h=fish_eagle_hill');}
function skatepark_hdri(){window.open('https://hdrihaven.com/hdri/?h=skate_park');}
function moultonstationtraintunnelwest_hdri(){window.open('https://hdrihaven.com/hdri/?h=moulton_station_train_tunnel_west');}
function northcliff_hdri(){window.open('https://hdrihaven.com/hdri/?h=northcliff');}
function damroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=dam_road');}
function wobblybridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=wobbly_bridge');}
function partialeclipse_hdri(){window.open('https://hdrihaven.com/hdri/?h=partial_eclipse');}
function teufelsbergground1_hdri(){window.open('https://hdrihaven.com/hdri/?h=teufelsberg_ground_1');}
function riverwalk2_hdri(){window.open('https://hdrihaven.com/hdri/?h=river_walk_2');}
function nkuhlu_hdri(){window.open('https://hdrihaven.com/hdri/?h=nkuhlu');}
function skukuzagolf_hdri(){window.open('https://hdrihaven.com/hdri/?h=skukuza_golf');}
function underbridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=under_bridge');}
function courtyard_hdri(){window.open('https://hdrihaven.com/hdri/?h=courtyard');}
function betweenbridges_hdri(){window.open('https://hdrihaven.com/hdri/?h=between_bridges');}
function summerstage01_hdri(){window.open('https://hdrihaven.com/hdri/?h=summer_stage_01');}
function rooflessruins_hdri(){window.open('https://hdrihaven.com/hdri/?h=roofless_ruins');}
function sterkspruitfalls_hdri(){window.open('https://hdrihaven.com/hdri/?h=sterkspruit_falls');}
function sabietent_hdri(){window.open('https://hdrihaven.com/hdri/?h=sabie_tent');}
function abandonedhopperterminal04_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_hopper_terminal_04');}
function immenstadterhorn_hdri(){window.open('https://hdrihaven.com/hdri/?h=immenstadter_horn');}
function widestreet02_hdri(){window.open('https://hdrihaven.com/hdri/?h=wide_street_02');}
function abandonedworkshop_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_workshop');}
function dikhololonight_hdri(){window.open('https://hdrihaven.com/hdri/?h=dikhololo_night');}
function killesbergpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=killesberg_park');}
function herkulessaulen_hdri(){window.open('https://hdrihaven.com/hdri/?h=herkulessaulen');}
function widestreet01_hdri(){window.open('https://hdrihaven.com/hdri/?h=wide_street_01');}
function forestslope_hdri(){window.open('https://hdrihaven.com/hdri/?h=forest_slope');}
function cannon_hdri(){window.open('https://hdrihaven.com/hdri/?h=cannon');}
function kloppenheim05_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloppenheim_05');}
function suburbanfield02_hdri(){window.open('https://hdrihaven.com/hdri/?h=suburban_field_02');}
function kloppenheim06_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloppenheim_06');}
function ulmermuenster_hdri(){window.open('https://hdrihaven.com/hdri/?h=ulmer_muenster');}
function gamrig_hdri(){window.open('https://hdrihaven.com/hdri/?h=gamrig');}
function urbancourtyard02_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_courtyard_02');}
function abandonedtankfarm04_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_tank_farm_04');}
function peppermintpowerplant_hdri(){window.open('https://hdrihaven.com/hdri/?h=peppermint_powerplant');}
function suburbanparkingarea_hdri(){window.open('https://hdrihaven.com/hdri/?h=suburban_parking_area');}
function abandonedhopperterminal03_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_hopper_terminal_03');}
function chinesegarden_hdri(){window.open('https://hdrihaven.com/hdri/?h=chinese_garden');}
function bismarckturm_hdri(){window.open('https://hdrihaven.com/hdri/?h=bismarckturm');}
function suburbanfield01_hdri(){window.open('https://hdrihaven.com/hdri/?h=suburban_field_01');}
function emptywarehouse01_hdri(){window.open('https://hdrihaven.com/hdri/?h=empty_warehouse_01');}
function abandonedfactorycanteen02_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_factory_canteen_02');}
function kloppenheim02_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloppenheim_02');}
function lauterwaterfall_hdri(){window.open('https://hdrihaven.com/hdri/?h=lauter_waterfall');}
function abandonedtankfarm03_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_tank_farm_03');}
function futureparking_hdri(){window.open('https://hdrihaven.com/hdri/?h=future_parking');}
function kloppenheim07_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloppenheim_07');}
function stfagansinterior_hdri(){window.open('https://hdrihaven.com/hdri/?h=st_fagans_interior');}
function sunsetforest_hdri(){window.open('https://hdrihaven.com/hdri/?h=sunset_forest');}
function blaubeurennight_hdri(){window.open('https://hdrihaven.com/hdri/?h=blaubeuren_night');}
function photostudio01_hdri(){window.open('https://hdrihaven.com/hdri/?h=photo_studio_01');}
function sunflowers_hdri(){window.open('https://hdrihaven.com/hdri/?h=sunflowers');}
function ballroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=ballroom');}
function smallruralroad02_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_rural_road_02');}
function spiaggiadimondello_hdri(){window.open('https://hdrihaven.com/hdri/?h=spiaggia_di_mondello');}
function thelostcity_hdri(){window.open('https://hdrihaven.com/hdri/?h=the_lost_city');}
function constructionyard_hdri(){window.open('https://hdrihaven.com/hdri/?h=construction_yard');}
function forestcave_hdri(){window.open('https://hdrihaven.com/hdri/?h=forest_cave');}
function autumnpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_park');}
function abandonedwaterworks_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_waterworks');}
function smallruralroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_rural_road');}
function abandonedfactorycanteen01_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_factory_canteen_01');}
function montescherbelino_hdri(){window.open('https://hdrihaven.com/hdri/?h=monte_scherbelino');}
function quattrocanti_hdri(){window.open('https://hdrihaven.com/hdri/?h=quattro_canti');}
function rurallandscape_hdri(){window.open('https://hdrihaven.com/hdri/?h=rural_landscape');}
function greensanctuary_hdri(){window.open('https://hdrihaven.com/hdri/?h=green_sanctuary');}
function rooitoupark_hdri(){window.open('https://hdrihaven.com/hdri/?h=rooitou_park');}
function urbanalley01_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_alley_01');}
function palermopark_hdri(){window.open('https://hdrihaven.com/hdri/?h=palermo_park');}
function abandonedtankfarm01_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_tank_farm_01');}
function autoservice_hdri(){window.open('https://hdrihaven.com/hdri/?h=auto_service');}
function pumpstation_hdri(){window.open('https://hdrihaven.com/hdri/?h=pump_station');}
function kloppenheim03_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloppenheim_03');}
function railwaybridge02_hdri(){window.open('https://hdrihaven.com/hdri/?h=railway_bridge_02');}
function drivingschool_hdri(){window.open('https://hdrihaven.com/hdri/?h=driving_school');}
function kloppenheim01_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloppenheim_01');}
function lakeside_hdri(){window.open('https://hdrihaven.com/hdri/?h=lakeside');}
function urbanstreet04_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_street_04');}
function canarywharf_hdri(){window.open('https://hdrihaven.com/hdri/?h=canary_wharf');}
function woodenmotel_hdri(){window.open('https://hdrihaven.com/hdri/?h=wooden_motel');}
function smallcathedral02_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_cathedral_02');}
function abandonedparking_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_parking');}
function greenwichpark03_hdri(){window.open('https://hdrihaven.com/hdri/?h=greenwich_park_03');}
function blauriver_hdri(){window.open('https://hdrihaven.com/hdri/?h=blau_river');}
function concretetunnel02_hdri(){window.open('https://hdrihaven.com/hdri/?h=concrete_tunnel_02');}
function lebombo_hdri(){window.open('https://hdrihaven.com/hdri/?h=lebombo');}
function spruitsunrise_hdri(){window.open('https://hdrihaven.com/hdri/?h=spruit_sunrise');}
function stonealley03_hdri(){window.open('https://hdrihaven.com/hdri/?h=stone_alley_03');}
function colorfulstudio_hdri(){window.open('https://hdrihaven.com/hdri/?h=colorful_studio');}
function abandonedtankfarm02_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_tank_farm_02');}
function quarry03_hdri(){window.open('https://hdrihaven.com/hdri/?h=quarry_03');}
function palermosidewalk_hdri(){window.open('https://hdrihaven.com/hdri/?h=palermo_sidewalk');}
function smallcathedral_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_cathedral');}
function greenwichpark02_hdri(){window.open('https://hdrihaven.com/hdri/?h=greenwich_park_02');}
function kloofendal48dpartlycloudy_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloofendal_48d_partly_cloudy');}
function studiosmall03_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_03');}
function derelictoverpass_hdri(){window.open('https://hdrihaven.com/hdri/?h=derelict_overpass');}
function freightstation_hdri(){window.open('https://hdrihaven.com/hdri/?h=freight_station');}
function noongrass_hdri(){window.open('https://hdrihaven.com/hdri/?h=noon_grass');}
function autumnmeadow_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_meadow');}
function adamsplacebridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=adams_place_bridge');}
function kloetzleblei_hdri(){window.open('https://hdrihaven.com/hdri/?h=kloetzle_blei');}
function shanghaibund_hdri(){window.open('https://hdrihaven.com/hdri/?h=shanghai_bund');}
function autumnforest03_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_forest_03');}
function sataranight_hdri(){window.open('https://hdrihaven.com/hdri/?h=satara_night');}
function teatromassimo_hdri(){window.open('https://hdrihaven.com/hdri/?h=teatro_massimo');}
function urbanstreet01_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_street_01');}
function quarry02_hdri(){window.open('https://hdrihaven.com/hdri/?h=quarry_02');}
function kiara1dawn_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_1_dawn');}
function factoryyard_hdri(){window.open('https://hdrihaven.com/hdri/?h=factory_yard');}
function birchwood_hdri(){window.open('https://hdrihaven.com/hdri/?h=birchwood');}
function moonlessgolf_hdri(){window.open('https://hdrihaven.com/hdri/?h=moonless_golf');}
function quarry01_hdri(){window.open('https://hdrihaven.com/hdri/?h=quarry_01');}
function eveningroad01_hdri(){window.open('https://hdrihaven.com/hdri/?h=evening_road_01');}
function dirtbiketrack01_hdri(){window.open('https://hdrihaven.com/hdri/?h=dirt_bike_track_01');}
function qwantani_hdri(){window.open('https://hdrihaven.com/hdri/?h=qwantani');}
function eppingforest02_hdri(){window.open('https://hdrihaven.com/hdri/?h=epping_forest_02');}
function snowypark01_hdri(){window.open('https://hdrihaven.com/hdri/?h=snowy_park_01');}
function venicesunset_hdri(){window.open('https://hdrihaven.com/hdri/?h=venice_sunset');}
function urbanstreet03_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_street_03');}
function autumnforest01_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_forest_01');}
function oldbusdepot_hdri(){window.open('https://hdrihaven.com/hdri/?h=old_bus_depot');}
function ruckenkreuz_hdri(){window.open('https://hdrihaven.com/hdri/?h=ruckenkreuz');}
function sataranightnolamps_hdri(){window.open('https://hdrihaven.com/hdri/?h=satara_night_no_lamps');}
function greenpointpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=green_point_park');}
function flowerhillside_hdri(){window.open('https://hdrihaven.com/hdri/?h=flower_hillside');}
function theskyisonfire_hdri(){window.open('https://hdrihaven.com/hdri/?h=the_sky_is_on_fire');}
function approachingstorm_hdri(){window.open('https://hdrihaven.com/hdri/?h=approaching_storm');}
function umhlangasunrise_hdri(){window.open('https://hdrihaven.com/hdri/?h=umhlanga_sunrise');}
function abandonedhopperterminal02_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_hopper_terminal_02');}
function cambridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=cambridge');}
function capehill_hdri(){window.open('https://hdrihaven.com/hdri/?h=cape_hill');}
function leadenhallmarket_hdri(){window.open('https://hdrihaven.com/hdri/?h=leadenhall_market');}
function piazzabologni_hdri(){window.open('https://hdrihaven.com/hdri/?h=piazza_bologni');}
function wastelandclouds_hdri(){window.open('https://hdrihaven.com/hdri/?h=wasteland_clouds');}
function artistworkshop_hdri(){window.open('https://hdrihaven.com/hdri/?h=artist_workshop');}
function strawrollsfield01_hdri(){window.open('https://hdrihaven.com/hdri/?h=straw_rolls_field_01');}
function abandonedhopperterminal01_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_hopper_terminal_01');}
function eppingforest01_hdri(){window.open('https://hdrihaven.com/hdri/?h=epping_forest_01');}
function autoshop01_hdri(){window.open('https://hdrihaven.com/hdri/?h=autoshop_01');}
function moonlitgolf_hdri(){window.open('https://hdrihaven.com/hdri/?h=moonlit_golf');}
function tearsofsteelbridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=tears_of_steel_bridge');}
function smallcave_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_cave');}
function cayleyinterior_hdri(){window.open('https://hdrihaven.com/hdri/?h=cayley_interior');}
function syferfontein1dclear_hdri(){window.open('https://hdrihaven.com/hdri/?h=syferfontein_1d_clear');}
function cloudlayers_hdri(){window.open('https://hdrihaven.com/hdri/?h=cloud_layers');}
function carpentryshop02_hdri(){window.open('https://hdrihaven.com/hdri/?h=carpentry_shop_02');}
function palermosquare_hdri(){window.open('https://hdrihaven.com/hdri/?h=palermo_square');}
function blaubeurenoutskirts_hdri(){window.open('https://hdrihaven.com/hdri/?h=blaubeuren_outskirts');}
function oldoutdoortheater_hdri(){window.open('https://hdrihaven.com/hdri/?h=old_outdoor_theater');}
function greenwichpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=greenwich_park');}
function delta2_hdri(){window.open('https://hdrihaven.com/hdri/?h=delta_2');}
function urbanstreet02_hdri(){window.open('https://hdrihaven.com/hdri/?h=urban_street_02');}
function industrialpipeandvalve01_hdri(){window.open('https://hdrihaven.com/hdri/?h=industrial_pipe_and_valve_01');}
function autumnforest02_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_forest_02');}
function winterlake01_hdri(){window.open('https://hdrihaven.com/hdri/?h=winter_lake_01');}
function altanka_hdri(){window.open('https://hdrihaven.com/hdri/?h=altanka');}
function studiosmall05_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_05');}
function tiergarten_hdri(){window.open('https://hdrihaven.com/hdri/?h=tiergarten');}
function circusarena_hdri(){window.open('https://hdrihaven.com/hdri/?h=circus_arena');}
function autumnroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_road');}
function stonealley02_hdri(){window.open('https://hdrihaven.com/hdri/?h=stone_alley_02');}
function portlandlandingpad_hdri(){window.open('https://hdrihaven.com/hdri/?h=portland_landing_pad');}
function smallharbor01_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_harbor_01');}
function bethnalgreenentrance_hdri(){window.open('https://hdrihaven.com/hdri/?h=bethnal_green_entrance');}
function mallparkinglot_hdri(){window.open('https://hdrihaven.com/hdri/?h=mall_parking_lot');}
function railwaybridges_hdri(){window.open('https://hdrihaven.com/hdri/?h=railway_bridges');}
function lakes_hdri(){window.open('https://hdrihaven.com/hdri/?h=lakes');}
function prellerdrive_hdri(){window.open('https://hdrihaven.com/hdri/?h=preller_drive');}
function lythwoodfield_hdri(){window.open('https://hdrihaven.com/hdri/?h=lythwood_field');}
function studiosmall02_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_02');}
function fireplace_hdri(){window.open('https://hdrihaven.com/hdri/?h=fireplace');}
function whipplecreekregionalpark04_hdri(){window.open('https://hdrihaven.com/hdri/?h=whipple_creek_regional_park_04');}
function studiosmall01_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_01');}
function sunnyvondelpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=sunny_vondelpark');}
function studiosmall04_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_04');}
function schadowplatz_hdri(){window.open('https://hdrihaven.com/hdri/?h=schadowplatz');}
function smallharbor02_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_harbor_02');}
function flowerroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=flower_road');}
function sunsetfairway_hdri(){window.open('https://hdrihaven.com/hdri/?h=sunset_fairway');}
function simonstownrocks_hdri(){window.open('https://hdrihaven.com/hdri/?h=simons_town_rocks');}
function neuerzollhof_hdri(){window.open('https://hdrihaven.com/hdri/?h=neuer_zollhof');}
function syferfontein18dclear_hdri(){window.open('https://hdrihaven.com/hdri/?h=syferfontein_18d_clear');}
function studiosmall07_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_07');}
function royalesplanade_hdri(){window.open('https://hdrihaven.com/hdri/?h=royal_esplanade');}
function potsdamerplatz_hdri(){window.open('https://hdrihaven.com/hdri/?h=potsdamer_platz');}
function syferfontein0dclear_hdri(){window.open('https://hdrihaven.com/hdri/?h=syferfontein_0d_clear');}
function entrancehall_hdri(){window.open('https://hdrihaven.com/hdri/?h=entrance_hall');}
function industrialsunset_hdri(){window.open('https://hdrihaven.com/hdri/?h=industrial_sunset');}
function roofgarden_hdri(){window.open('https://hdrihaven.com/hdri/?h=roof_garden');}
function hansaplatz_hdri(){window.open('https://hdrihaven.com/hdri/?h=hansaplatz');}
function smallhangar01_hdri(){window.open('https://hdrihaven.com/hdri/?h=small_hangar_01');}
function venicedawn1_hdri(){window.open('https://hdrihaven.com/hdri/?h=venice_dawn_1');}
function woodenlounge_hdri(){window.open('https://hdrihaven.com/hdri/?h=wooden_lounge');}
function sculptureexhibition_hdri(){window.open('https://hdrihaven.com/hdri/?h=sculpture_exhibition');}
function studiosmall06_hdri(){window.open('https://hdrihaven.com/hdri/?h=studio_small_06');}
function aerodynamicsworkshop_hdri(){window.open('https://hdrihaven.com/hdri/?h=aerodynamics_workshop');}
function pool_hdri(){window.open('https://hdrihaven.com/hdri/?h=pool');}
function abandonedhall01_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_hall_01');}
function vignaiolinight_hdri(){window.open('https://hdrihaven.com/hdri/?h=vignaioli_night');}
function lythwoodroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=lythwood_room');}
function snowyforestpath02_hdri(){window.open('https://hdrihaven.com/hdri/?h=snowy_forest_path_02');}
function tablemountain1_hdri(){window.open('https://hdrihaven.com/hdri/?h=table_mountain_1');}
function paullobehaus_hdri(){window.open('https://hdrihaven.com/hdri/?h=paul_lobe_haus');}
function arboretum_hdri(){window.open('https://hdrihaven.com/hdri/?h=arboretum');}
function museumplein_hdri(){window.open('https://hdrihaven.com/hdri/?h=museumplein');}
function sangiuseppebridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=san_giuseppe_bridge');}
function outdoorumbrellas_hdri(){window.open('https://hdrihaven.com/hdri/?h=outdoor_umbrellas');}
function veranda_hdri(){window.open('https://hdrihaven.com/hdri/?h=veranda');}
function mistypines_hdri(){window.open('https://hdrihaven.com/hdri/?h=misty_pines');}
function ruralwinterroadside_hdri(){window.open('https://hdrihaven.com/hdri/?h=rural_winter_roadside');}
function winterriver_hdri(){window.open('https://hdrihaven.com/hdri/?h=winter_river');}
function symmetricalgarden_hdri(){window.open('https://hdrihaven.com/hdri/?h=symmetrical_garden');}
function pinksunrise_hdri(){window.open('https://hdrihaven.com/hdri/?h=pink_sunrise');}
function syferfontein6dclear_hdri(){window.open('https://hdrihaven.com/hdri/?h=syferfontein_6d_clear');}
function winterevening_hdri(){window.open('https://hdrihaven.com/hdri/?h=winter_evening');}
function pondbridgenight_hdri(){window.open('https://hdrihaven.com/hdri/?h=pond_bridge_night');}
function goegap_hdri(){window.open('https://hdrihaven.com/hdri/?h=goegap');}
function furryclouds_hdri(){window.open('https://hdrihaven.com/hdri/?h=furry_clouds');}
function hotelroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=hotel_room');}
function yellowfield_hdri(){window.open('https://hdrihaven.com/hdri/?h=yellow_field');}
function kiara6afternoon_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_6_afternoon');}
function industrialpipeandvalve02_hdri(){window.open('https://hdrihaven.com/hdri/?h=industrial_pipe_and_valve_02');}
function snowyforestpath01_hdri(){window.open('https://hdrihaven.com/hdri/?h=snowy_forest_path_01');}
function skylitgarage_hdri(){window.open('https://hdrihaven.com/hdri/?h=skylit_garage');}
function bluegrotto_hdri(){window.open('https://hdrihaven.com/hdri/?h=blue_grotto');}
function mealieroad_hdri(){window.open('https://hdrihaven.com/hdri/?h=mealie_road');}
function kiara8sunset_hdri(){window.open('https://hdrihaven.com/hdri/?h=kiara_8_sunset');}
function champagnecastle1_hdri(){window.open('https://hdrihaven.com/hdri/?h=champagne_castle_1');}
function readingroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=reading_room');}
function rustigkoppie_hdri(){window.open('https://hdrihaven.com/hdri/?h=rustig_koppie');}
function machineshop02_hdri(){window.open('https://hdrihaven.com/hdri/?h=machine_shop_02');}
function bushrestaurant_hdri(){window.open('https://hdrihaven.com/hdri/?h=bush_restaurant');}
function rooftopnight_hdri(){window.open('https://hdrihaven.com/hdri/?h=rooftop_night');}
function nightbridge_hdri(){window.open('https://hdrihaven.com/hdri/?h=night_bridge');}
function cinemalobby_hdri(){window.open('https://hdrihaven.com/hdri/?h=cinema_lobby');}
function shadypatch_hdri(){window.open('https://hdrihaven.com/hdri/?h=shady_patch');}
function eilenriedepark_hdri(){window.open('https://hdrihaven.com/hdri/?h=eilenriede_park');}
function abandonedslipway_hdri(){window.open('https://hdrihaven.com/hdri/?h=abandoned_slipway');}
function tvstudio_hdri(){window.open('https://hdrihaven.com/hdri/?h=tv_studio');}
function bloubergsunrise2_hdri(){window.open('https://hdrihaven.com/hdri/?h=blouberg_sunrise_2');}
function birbeckstreetunderpass_hdri(){window.open('https://hdrihaven.com/hdri/?h=birbeck_street_underpass');}
function learnerpark_hdri(){window.open('https://hdrihaven.com/hdri/?h=learner_park');}
function aristeawreck_hdri(){window.open('https://hdrihaven.com/hdri/?h=aristea_wreck');}
function ninomaruteien_hdri(){window.open('https://hdrihaven.com/hdri/?h=ninomaru_teien');}
function artstudio_hdri(){window.open('https://hdrihaven.com/hdri/?h=art_studio');}
function gymentrance_hdri(){window.open('https://hdrihaven.com/hdri/?h=gym_entrance');}
function autumnhockey_hdri(){window.open('https://hdrihaven.com/hdri/?h=autumn_hockey');}
function limehouse_hdri(){window.open('https://hdrihaven.com/hdri/?h=limehouse');}
function hospitalroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=hospital_room');}
function phoneshop_hdri(){window.open('https://hdrihaven.com/hdri/?h=phone_shop');}
function bluelagoonnight_hdri(){window.open('https://hdrihaven.com/hdri/?h=blue_lagoon_night');}
function combinationroom_hdri(){window.open('https://hdrihaven.com/hdri/?h=combination_room');}
function tablemountain2_hdri(){window.open('https://hdrihaven.com/hdri/?h=table_mountain_2');}
function fishhoekbeach_hdri(){window.open('https://hdrihaven.com/hdri/?h=fish_hoek_beach');}
function whipplecreekgazebo_hdri(){window.open('https://hdrihaven.com/hdri/?h=whipple_creek_gazebo');}
function dikhololosunset_hdri(){window.open('https://hdrihaven.com/hdri/?h=dikhololo_sunset');}
function venetiancrossroads_hdri(){window.open('https://hdrihaven.com/hdri/?h=venetian_crossroads');}
function machineshop03_hdri(){window.open('https://hdrihaven.com/hdri/?h=machine_shop_03');}
function oldtreeincitypark_hdri(){window.open('https://hdrihaven.com/hdri/?h=old_tree_in_city_park');}
function piazzamartinlutero_hdri(){window.open('https://hdrihaven.com/hdri/?h=piazza_martin_lutero');}
function mossyforest_hdri(){window.open('https://hdrihaven.com/hdri/?h=mossy_forest');}
function aftlounge_hdri(){window.open('https://hdrihaven.com/hdri/?h=aft_lounge');}
function georgentor_hdri(){window.open('https://hdrihaven.com/hdri/?h=georgentor');}
function bellparkpier_hdri(){window.open('https://hdrihaven.com/hdri/?h=bell_park_pier');}
function whiteclifftop_hdri(){window.open('https://hdrihaven.com/hdri/?h=white_cliff_top');}
function circusmaximus2_hdri(){window.open('https://hdrihaven.com/hdri/?h=circus_maximus_2');}
function vialegiuseppegaribaldi_hdri(){window.open('https://hdrihaven.com/hdri/?h=viale_giuseppe_garibaldi');}
function lenong2_hdri(){window.open('https://hdrihaven.com/hdri/?h=lenong_2');}
/*! Google Drive APIs v3 | CC0 Textures - Free Public Domain PBR Materials | https://help.cc0textures.com/doku.php?id=website:license */
function wood032_texture(){window.open('https://cc0textures.com/view?id=Wood032');}
function fabric004_texture(){window.open('https://cc0textures.com/view?id=Fabric004');}
function candy003_texture(){window.open('https://cc0textures.com/view?id=Candy003');}
function apple001_texture(){window.open('https://cc0textures.com/view?id=3DApple001');}
function apple002_texture(){window.open('https://cc0textures.com/view?id=3DApple002');}
function wood024_texture(){window.open('https://cc0textures.com/view?id=Wood024');}
function wood027_texture(){window.open('https://cc0textures.com/view?id=Wood027');}
function rock018_texture(){window.open('https://cc0textures.com/view?id=Rock018');}
function plaster001_texture(){window.open('https://cc0textures.com/view?id=Plaster001');}
function terrazzo004_texture(){window.open('https://cc0textures.com/view?id=Terrazzo004');}
function terrazzo007_texture(){window.open('https://cc0textures.com/view?id=Terrazzo007');}
function plastic004_texture(){window.open('https://cc0textures.com/view?id=Plastic004');}
function metal011_texture(){window.open('https://cc0textures.com/view?id=Metal011');}
function rock018_texture(){window.open('https://cc0textures.com/view?id=Rock018');}
function plastic005_texture(){window.open('https://cc0textures.com/view?id=Plastic005');}
function fabric030_texture(){window.open('https://cc0textures.com/view?id=Fabric030');}
function wood025_texture(){window.open('https://cc0textures.com/view?id=Wood025');}
function bark007_texture(){window.open('https://cc0textures.com/view?id=Bark007');}
function bricks008_texture(){window.open('https://cc0textures.com/view?id=Bricks008');}
function metal003_texture(){window.open('https://cc0textures.com/view?id=Metal003');}
function metal007_texture(){window.open('https://cc0textures.com/view?id=Metal007');}
function roofingtiles001_texture(){window.open('https://cc0textures.com/view?id=RoofingTiles001');}
function rock023_texture(){window.open('https://cc0textures.com/view?id=Rock023');}
function _texture(){window.open('https://cc0textures.com/view?id=');}
