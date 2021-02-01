var __reflect=this&&this.__reflect||function(t,e,r){t.__class__=e,r?r.push(e):r=[e],t.__types__=t.__types__?r.concat(t.__types__):r},__extends=this&&this.__extends||function(t,e){function r(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);r.prototype=e.prototype,t.prototype=new r},__awaiter=this&&this.__awaiter||function(t,e,r,o){return new(r||(r=Promise))(function(i,n){function a(t){try{f(o.next(t))}catch(e){n(e)}}function c(t){try{f(o["throw"](t))}catch(e){n(e)}}function f(t){t.done?i(t.value):new r(function(e){e(t.value)}).then(a,c)}f((o=o.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function r(t){return function(e){return o([t,e])}}function o(r){if(i)throw new TypeError("Generator is already executing.");for(;f;)try{if(i=1,n&&(a=n[2&r[0]?"return":r[0]?"throw":"next"])&&!(a=a.call(n,r[1])).done)return a;switch(n=0,a&&(r=[0,a.value]),r[0]){case 0:case 1:a=r;break;case 4:return f.label++,{value:r[1],done:!1};case 5:f.label++,n=r[1],r=[0];continue;case 7:r=f.ops.pop(),f.trys.pop();continue;default:if(a=f.trys,!(a=a.length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){f=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){f.label=r[1];break}if(6===r[0]&&f.label<a[1]){f.label=a[1],a=r;break}if(a&&f.label<a[2]){f.label=a[2],f.ops.push(r);break}a[2]&&f.ops.pop(),f.trys.pop();continue}r=e.call(t,f)}catch(o){r=[6,o],n=0}finally{i=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var i,n,a,c,f={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,r){function o(o){e.call(r,o,t)}if(RES.hasRes(t)){var i=RES.getRes(t);i?o(i):RES.getResAsync(t,o,this)}else RES.getResByUrl(t,o,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this);var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return[4,this.loadResource()];case 1:return r.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=r.sent(),[4,platform.login()];case 3:return r.sent(),[4,platform.getUserInfo()];case 4:return e=r.sent(),console.log(e),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return r.sent(),[4,this.loadTheme()];case 2:return r.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return r.sent(),this.stage.removeChild(t),[3,5];case 4:return e=r.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,r){var o=new eui.Theme("resource/default.thm.json",t.stage);o.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){this.addChild(new EffectExamp)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,r,o){function i(t){e.call(o,t)}function n(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,n,null),r.call(o))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){e.call(o,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(t,r){window.JSONParseClass.setData(t),egret.callLater(function(){e.call(o,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(t.indexOf(".exml")>-1){var c=t.split("/");c.pop();var f=c.join("/")+"_EUI.json";generateJSON.paths[t]?egret.callLater(function(){e.call(o,generateJSON.paths[t])},this):RES.getResByUrl(f,function(r){window.JSONParseClass.setData(r),egret.callLater(function(){e.call(o,generateJSON.paths[t])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){e.call(o,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,n,null),RES.getResByUrl(t,i,this,RES.ResourceItem.TYPE_TEXT)},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var SpecialEffects;!function(t){var e="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nuniform vec2 projectionVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = aColor;\n}",r="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float brightness;uniform float contrast;varying vec2 vTextureCoord;void main(){   vec4 color=texture2D(uSampler,vTextureCoord)*vColor;   color.rgb+=brightness;   if(contrast>0.0){       color.rgb=(color.rgb-0.5)/(1.0-contrast)+0.5;   }else{       color.rgb=(color.rgb-0.5)*(1.0+contrast)+0.5;   }   gl_FragColor=color;}",o="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float hue;uniform float saturation;varying vec2 vTextureCoord;void main(){   vec4 color=texture2D(uSampler,vTextureCoord)*vColor;   float angle=hue*3.14159265;   float s=sin(angle),c=cos(angle);   vec3 weights=(vec3(2.0*c,-sqrt(3.0)*s-c,sqrt(3.0)*s-c)+1.0)/3.0;   float len=length(color.rgb);   color.rgb=vec3(dot(color.rgb,weights.xyz),dot(color.rgb,weights.zxy),dot(color.rgb,weights.yzx));   float average=(color.r+color.g+color.b)/3.0;   if(saturation>0.0){       color.rgb+=(average-color.rgb)*(1.0-1.0/(1.001-saturation));   }else{       color.rgb+=(average-color.rgb)*(-saturation);   }   gl_FragColor=color;}",i="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float amount;varying vec2 vTextureCoord;void main(){   vec4 color=texture2D(uSampler,vTextureCoord)*vColor;   float average=(color.r+color.g+color.b)/3.0;   float mx=max(color.r,max(color.g,color.b));   float amt=(mx-average)*(-amount*3.0);   color.rgb=mix(color.rgb,vec3(mx),amt);   gl_FragColor=color;}",n="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float exponent;uniform float strength;uniform float texSizeW;uniform float texSizeH;varying vec2 vTextureCoord;void main(){vec2 texSize = vec2(texSizeW,texSizeH);vec4 center=texture2D(uSampler,vTextureCoord)*vColor;vec4 color=vec4(0.0);float total=0.0;for(float x=-4.0;x<=4.0;x+=1.0){for(float y=-4.0;y<=4.0;y+=1.0){vec4 sample=texture2D(uSampler,vTextureCoord+vec2(x,y)/texSize)*vColor;float weight=1.0-abs(dot(sample.rgb-center.rgb,vec3(0.25)));weight=pow(weight,exponent);color+=sample*weight;total+=weight;}}gl_FragColor=color/total;}",a="precision lowp float;varying vec2 vTextureCoord;varying vec4 vColor;uniform sampler2D uSampler;uniform float amount;float rand(vec2 co){   return fract(sin(dot(co.xy,vec2(12.9898,78.233)))*43758.5453);}void main(void) {vec4 color=texture2D(uSampler, vTextureCoord) * vColor;float diff=(rand(vTextureCoord)-0.5)*amount;color.r+=diff;color.g+=diff;color.b+=diff;gl_FragColor=color;}",c="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float amount;varying vec2 vTextureCoord;void main(){vec4 color=texture2D(uSampler,vTextureCoord)*vColor;float r=color.r;float g=color.g;float b=color.b;color.r=min(1.0,(r*(1.0-(0.607*amount)))+(g*(0.769*amount))+(b*(0.189*amount)));color.g=min(1.0,(r*0.349*amount)+(g*(1.0-(0.314*amount)))+(b*0.168*amount));color.b=min(1.0,(r*0.272*amount)+(g*0.534*amount)+(b*(1.0-(0.869*amount))));gl_FragColor=color;}",f="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float size;uniform float amount;varying vec2 vTextureCoord;void main(){vec4 color=texture2D(uSampler,vTextureCoord)*vColor;float dist=distance(vTextureCoord,vec2(0.5,0.5));color.rgb*=smoothstep(0.8,size*0.799,dist*(amount+size));gl_FragColor=color;}",s="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float strength;varying vec2 vTextureCoord;uniform float centerX;uniform float centerY;uniform float texSizeW;uniform float texSizeH;float random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}void main(){vec2 texSize = vec2(texSizeW,texSizeH);vec2 center = vec2(centerX,centerY);vec4 color=vec4(0.0);float total=0.0;vec2 toCenter=center-vTextureCoord*texSize;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=0.0;t<=40.0;t++){float percent=(t+offset)/40.0;float weight=4.0*(percent-percent*percent);vec4 sample=texture2D(uSampler,vTextureCoord+toCenter*percent*strength/texSize);sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}",l="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform vec2 delta;uniform float deltaX;uniform float deltaY;varying vec2 vTextureCoord;float random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}void main(){vec2 delta = vec2(deltaX,deltaY);vec4 color=vec4(0.0);float total=0.0;float offset=random(vec3(12.9898,78.233,151.7182),0.0);for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec4 sample=texture2D(uSampler,vTextureCoord+delta*percent)*vColor;sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}",u="precision lowp float;varying vec4 vColor;uniform sampler2D uSampler;uniform float blurRadius;uniform float gradientRadius;uniform float startX;uniform float startY;uniform float endX;uniform float endY;uniform float deltaX;uniform float deltaY;uniform float texSizeW;uniform float texSizeH;varying vec2 vTextureCoord;float random(vec3 scale,float seed){return fract(sin(dot(gl_FragCoord.xyz+seed,scale))*43758.5453+seed);}void main(){vec2 start = vec2(startX,startY);vec2 end = vec2(endX,endY);vec2 delta = vec2(deltaX,deltaY);vec2 texSize = vec2(texSizeW,texSizeH);vec4 color=vec4(0.0);float total=0.0;float offset=random(vec3(12.9898,78.233,151.7182),0.0);vec2 normal=normalize(vec2(start.y-end.y,end.x-start.x));float radius=smoothstep(0.0,1.0,abs(dot(vTextureCoord*texSize-start,normal))/gradientRadius)*blurRadius;for(float t=-30.0;t<=30.0;t++){float percent=(t+offset-0.5)/30.0;float weight=1.0-abs(percent);vec4 sample=texture2D(uSampler,vTextureCoord+delta/texSize*percent*radius)*vColor;sample.rgb*=sample.a;color+=sample*weight;total+=weight;}gl_FragColor=color/total;gl_FragColor.rgb/=gl_FragColor.a+0.00001;}",h="precision lowp float;varying vec2 vTextureCoord;varying vec4 vColor;uniform sampler2D uSampler;uniform float radius;uniform float angle;uniform float centerX;uniform float centerY;uniform float texSizeW;uniform float texSizeH;void main(){vec2 texSize = vec2(texSizeW,texSizeH);vec2 center = vec2(centerX,centerY);vec2 coord=vTextureCoord*texSize;coord-=center;float distance=length(coord);if(distance<radius){float percent=(radius-distance)/radius;float theta=percent*percent*angle;float s=sin(theta);float c=cos(theta);coord=vec2(coord.x*c-coord.y*s,coord.x*s+coord.y*c);}coord+=center;vec2 result = coord/texSize;if(result.x < 0.0 || result.y < 0.0 || result.x > 1.0 || result.y>1.0){gl_FragColor=vec4(0.0,0.0,0.0,0.0);return;}gl_FragColor=texture2D(uSampler,result)*vColor;vec2 clampedCoord=clamp(coord,vec2(0.0),texSize);if(coord!=clampedCoord){gl_FragColor.a*=max(0.0,1.0-length(coord-clampedCoord));}}",m="precision lowp float;uniform float radius;varying vec4 vColor;uniform float strength;uniform sampler2D uSampler;uniform float centerX;uniform float centerY;uniform float texSizeW;uniform float texSizeH;varying vec2 vTextureCoord;void main(){vec2 center = vec2(centerX,centerY);vec2 texSize = vec2(texSizeW,texSizeH);vec2 coord=vTextureCoord*texSize;coord-=center;float distance=length(coord);if(distance<radius){float percent=distance/radius;if(strength>0.0){coord*=mix(1.0,smoothstep(0.0,radius/distance,percent),strength*0.75);}else{coord*=mix(1.0,pow(percent,1.0+strength*0.75)*radius/distance,1.0-percent);}}coord+=center;vec2 result = coord/texSize;if(result.x < 0.0 || result.y < 0.0 || result.x > 1.0 || result.y>1.0){gl_FragColor=vec4(0.0,0.0,0.0,0.0);return;}gl_FragColor=texture2D(uSampler,result)*vColor;vec2 clampedCoord=clamp(coord,vec2(0.0),texSize);if(coord!=clampedCoord){gl_FragColor.a*=max(0.0,1.0-length(coord-clampedCoord));}}",p="precision lowp float;uniform bool useTextureSpace;uniform sampler2D uSampler;uniform float texSizeW;uniform float texSizeH;varying vec2 vTextureCoord;varying vec4 vColor;uniform float m0;uniform float m1;uniform float m2;uniform float m3;uniform float m4;uniform float m5;uniform float m6;uniform float m7;uniform float m8;void main(){mat3 matrix = mat3(m0,m1,m2,m3,m4,m5,m6,m7,m8);vec2 texSize = vec2(texSizeW,texSizeH);vec2 coord=vTextureCoord*texSize;if(useTextureSpace)coord=coord/texSize*2.0-1.0;vec3 warp=matrix*vec3(coord,1.0);coord=warp.xy/warp.z;if(useTextureSpace)coord=(coord*0.5+0.5)*texSize;vec2 result = coord/texSize;if(result.x < 0.0 || result.y < 0.0 || result.x > 1.0 || result.y>1.0){gl_FragColor=vec4(0.0,0.0,0.0,0.0);return;}gl_FragColor=texture2D(uSampler,result)*vColor;vec2 clampedCoord=clamp(coord,vec2(0.0),texSize);if(coord!=clampedCoord){gl_FragColor.a*=max(0.0,1.0-length(coord-clampedCoord));}}",d=function(t,e,r){return Math.max(t,Math.min(e,r))},v=function(t,r){return new egret.CustomFilter(e,t,r)},g=function(){function t(t){this.target=t}return t.prototype.dispose=function(){this.uniform=null,this.target.filters=[],this.target=null},t}();__reflect(g.prototype,"IEffect"),t.createEffects=function(t,e){return new e(t)};var x=function(t){function e(e){var o=t.call(this,e)||this;return o.uniform={brightness:0,contrast:0},o.refreshData(),e.filters=[v(r,o.uniform)],o}return __extends(e,t),e.prototype.refreshData=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.uniform.brightness=d(-1,t,1),this.uniform.contrast=d(-1,e,1)},e}(g);t.EffectBrightnessContrast=x,__reflect(x.prototype,"SpecialEffects.EffectBrightnessContrast");var S=function(t){function e(e){var r=t.call(this,e)||this;return r.uniform={hue:0,saturation:0},r.refreshData(),e.filters=[v(o,r.uniform)],r}return __extends(e,t),e.prototype.refreshData=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.uniform.hue=d(-1,t,1),this.uniform.saturation=d(-1,e,1)},e}(g);t.EffectHueSaturation=S,__reflect(S.prototype,"SpecialEffects.EffectHueSaturation");var _=function(t){function e(e){var r=t.call(this,e)||this;return r.uniform={amount:0},r.refreshData(),e.filters=[v(i,r.uniform)],r}return __extends(e,t),e.prototype.refreshData=function(t){void 0===t&&(t=0),this.uniform.amount=d(-1,t,1)},e}(g);t.EffectVibrance=_,__reflect(_.prototype,"SpecialEffects.EffectVibrance");var E=function(t){function e(e){var r=t.call(this,e)||this;return r.uniform={exponent:0,texSizeW:0,texSizeH:0},r.refreshData(0,e.width||100,e.height||100),e.filters=[v(n,r.uniform)],r}return __extends(e,t),e.prototype.refreshData=function(t,e,r){void 0===t&&(t=0),this.uniform.exponent=Math.max(0,t),isNaN(e)||(this.uniform.texSizeW=e),isNaN(r)||(this.uniform.texSizeH=r)},e}(g);t.EffectDenoise=E,__reflect(E.prototype,"SpecialEffects.EffectDenoise");var y=function(){function t(){}return t}();__reflect(y.prototype,"EffectUnsharpMask");var C=function(t){function e(e){var r=t.call(this,e)||this;return r.uniform={amount:0},r.refreshData(0),e.filters=[v(a,r.uniform)],r}return __extends(e,t),e.prototype.refreshData=function(t){this.uniform.amount=d(0,t,1)},e}(g);t.EffectNoise=C,__reflect(C.prototype,"SpecialEffects.EffectNoise");var w=function(t){function e(e){var r=t.call(this,e)||this;return r.uniform={amount:0},r.refreshData(0),e.filters=[v(c,r.uniform)],r}return __extends(e,t),e.prototype.refreshData=function(t){this.uniform.amount=d(0,t,1)},e}(g);t.EffectSepia=w,__reflect(w.prototype,"SpecialEffects.EffectSepia");var N=function(t){function e(e){var r=t.call(this,e)||this;return r.uniform={size:0,amount:0},r.refreshData(0,0),e.filters=[v(f,r.uniform)],r}return __extends(e,t),e.prototype.refreshData=function(t,e){this.uniform.size=d(0,t,1),this.uniform.amount=d(0,e,1)},e}(g);t.EffectVignette=N,__reflect(N.prototype,"SpecialEffects.EffectVignette");var b=function(t){function e(e){var r=t.call(this,e)||this;return r.uniform={strength:0,centerX:0,centerY:0,texSizeW:0,texSizeH:0},r.refreshData(0,e.width/2,e.height/2,e.width,e.height),e.filters=[v(s,r.uniform)],r}return __extends(e,t),e.prototype.refreshData=function(t,e,r,o,i){this.uniform.strength=t,isNaN(e)||(this.uniform.centerX=e),isNaN(r)||(this.uniform.centerY=r),isNaN(o)||(this.uniform.texSizeW=o),isNaN(i)||(this.uniform.texSizeH=i)},e}(g);t.EffectZoomblur=b,__reflect(b.prototype,"SpecialEffects.EffectZoomblur");var z=function(t){function e(e){var r=t.call(this,e)||this;return r.uniform={deltaX:0,deltaY:0},r.uniform2={deltaX:0,deltaY:0},r.refreshData(0),e.filters=[v(l,r.uniform),v(l,r.uniform2)],r}return __extends(e,t),e.prototype.refreshData=function(t){this.uniform.deltaX=t/this.target.width,this.uniform.deltaY=0,this.uniform2.deltaX=0,this.uniform.deltaY=t/this.target.height},e}(g);t.EffectTriangleblur=z,__reflect(z.prototype,"SpecialEffects.EffectTriangleblur");var D=function(t){function e(e){var r=t.call(this,e)||this;return r.uniform={blurRadius:0,gradientRadius:0,startX:0,startY:0,endX:0,endY:0,deltaX:0,deltaY:0,texSizeW:0,texSizeH:0},r.uniform2={blurRadius:0,gradientRadius:0,startX:0,startY:0,endX:0,endY:0,deltaX:0,deltaY:0,texSizeW:0,texSizeH:0},r.refreshData(0,0,0,0,r.target.width,r.target.height,r.target.width,r.target.height),e.filters=[v(u,r.uniform),v(u,r.uniform2)],r}return __extends(e,t),e.prototype.refreshData=function(t,e,r,o,i,n,a,c){var f=i-r,s=n-o,l=Math.sqrt(f*f+s*s);this.uniform.blurRadius=t,this.uniform.gradientRadius=e,isNaN(r)||(this.uniform.startX=r),isNaN(o)||(this.uniform.startY=this.target.height-o),isNaN(i)||(this.uniform.endX=i),isNaN(n)||(this.uniform.endY=this.target.height-n),isNaN(f)||(this.uniform.deltaX=f/l),isNaN(s)||(this.uniform.deltaY=s/l),isNaN(a)||(this.uniform.texSizeW=a),isNaN(c)||(this.uniform.texSizeH=c),this.uniform2.blurRadius=t,this.uniform2.gradientRadius=e,isNaN(r)||(this.uniform2.startX=r),isNaN(o)||(this.uniform2.startY=this.target.height-o),isNaN(i)||(this.uniform2.endX=i),isNaN(n)||(this.uniform2.endY=this.target.height-n),isNaN(s)||(this.uniform2.deltaX=-s/l),isNaN(f)||(this.uniform2.deltaY=f/l),isNaN(a)||(this.uniform2.texSizeW=a),isNaN(c)||(this.uniform2.texSizeH=c)},e}(g);t.EffectTiltShift=D,__reflect(D.prototype,"SpecialEffects.EffectTiltShift");var T=function(t){function e(e){var r=t.call(this,e)||this;return r.uniform={radius:0,centerX:0,centerY:0,angle:0,texSizeW:0,texSizeH:0},r.refreshData(0,0,r.target.width/2,r.target.height/2,r.target.width,r.target.height),e.filters=[v(h,r.uniform)],r}return __extends(e,t),e.prototype.refreshData=function(t,e,r,o,i,n){this.uniform.radius=e,isNaN(t)||(this.uniform.angle=t),isNaN(r)||(this.uniform.centerX=r),isNaN(o)||(this.uniform.centerY=o),isNaN(i)||(this.uniform.texSizeW=i),isNaN(n)||(this.uniform.texSizeH=n)},e}(g);t.EffectSwirl=T,__reflect(T.prototype,"SpecialEffects.EffectSwirl");var R=function(t){function e(e){var r=t.call(this,e)||this;return r.uniform={radius:0,centerX:0,centerY:0,strength:0,texSizeW:0,texSizeH:0},r.refreshData(0,0,r.target.width/2,r.target.height/2,r.target.width,r.target.height),e.filters=[v(m,r.uniform)],r}return __extends(e,t),e.prototype.refreshData=function(t,e,r,o,i,n){this.uniform.radius=e,isNaN(r)||(this.uniform.centerX=r),isNaN(t)||(this.uniform.strength=d(-1,t,1)),isNaN(o)||(this.uniform.centerY=o),isNaN(i)||(this.uniform.texSizeW=i),isNaN(n)||(this.uniform.texSizeH=n)},e}(g);t.EffectBulgePinch=R,__reflect(R.prototype,"SpecialEffects.EffectBulgePinch");var I=function(t){function e(e){var r=t.call(this,e)||this;return r.uniform={m1:0,m2:0,m3:0,m4:0,m5:0,m6:0,m7:0,m8:0,m0:0,texSizeW:0,texSizeH:0,useTextureSpace:0},r.refreshData([0,0,r.target.width,0,0,r.target.height,r.target.width,r.target.height],[0,0,r.target.width,0,0,r.target.height,r.target.width,r.target.height],0,r.target.width,r.target.height),e.filters=[v(p,r.uniform)],r}return __extends(e,t),e.prototype.x=function(t,e,r,o,i,n,a,c){var f=r-i,s=o-n,l=a-i,u=c-n;i=t-r+i-a,n=e-o+n-c;var h=f*u-l*s,l=(i*u-l*n)/h,f=(f*n-i*s)/h;return[r-t+l*r,o-e+l*o,l,a-t+f*a,c-e+f*c,f,t,e,1]},e.prototype.y=function(t){var e=t[0],r=t[1],o=t[2],i=t[3],n=t[4],a=t[5],c=t[6],f=t[7];t=t[8];var s=e*n*t-e*a*f-r*i*t+r*a*c+o*i*f-o*n*c;return[(n*t-a*f)/s,(o*f-r*t)/s,(r*a-o*n)/s,(a*c-i*t)/s,(e*t-o*c)/s,(o*i-e*a)/s,(i*f-n*c)/s,(r*c-e*f)/s,(e*n-r*i)/s]},e.prototype.refreshData=function(t,e,r,o,i){var n=this.x.apply(null,t),a=this.x.apply(null,e);return n=this.y(n),this.matrixWarp([n[0]*a[0]+n[1]*a[3]+n[2]*a[6],n[0]*a[1]+n[1]*a[4]+n[2]*a[7],n[0]*a[2]+n[1]*a[5]+n[2]*a[8],n[3]*a[0]+n[4]*a[3]+n[5]*a[6],n[3]*a[1]+n[4]*a[4]+n[5]*a[7],n[3]*a[2]+n[4]*a[5]+n[5]*a[8],n[6]*a[0]+n[7]*a[3]+n[8]*a[6],n[6]*a[1]+n[7]*a[4]+n[8]*a[7],n[6]*a[2]+n[7]*a[5]+n[8]*a[8]],0,o,i)},e.prototype.matrixWarp=function(t,e,r,o){this.uniform.m0=t[0],this.uniform.m1=t[1],this.uniform.m2=t[2],this.uniform.m3=t[3],this.uniform.m4=t[4],this.uniform.m5=t[5],this.uniform.m6=t[6],this.uniform.m7=t[7],this.uniform.m8=t[8],this.uniform.texSizeW=this.target.width,this.uniform.texSizeH=this.target.height,this.uniform.useTextureSpace=0},e}(g);t.EffectPerspective=I,__reflect(I.prototype,"SpecialEffects.EffectPerspective")}(SpecialEffects||(SpecialEffects={}));var EffectExamp=function(t){function e(){var e=t.call(this)||this;return e.curEffect=null,e.curData=null,e.skinName="EffectExampSkin",e.mataData=RES.getRes("effect_json").effect,e.radioGroup=new eui.RadioButtonGroup,e}return __extends(e,t),e.prototype.childrenCreated=function(){var t=this;this.initEffectGroup(),this.radioGroup.addEventListener(egret.Event.CHANGE,function(e){var r=t.radioGroup.selection.$indexNumber;t.createEffect(r)},this),this.createEffect(0)},e.prototype.initEffectGroup=function(){var t=this,e=0;this.mataData.forEach(function(r,o){var i=new eui.RadioButton;0==o&&(i.selected=!0),i.label=r.name,t.effTypeGroup.addChild(i),i.group=t.radioGroup,i.y=e,e+=i.height+50})},e.prototype.createEffect=function(t){var e=this;this.curEffect&&(this.curEffect.dispose(),this.attrGroup.removeChildren(),this.curEffect=null,this.touchPointComp&&(this.removeChild(this.touchPointComp),this.touchPointComp=null));var r=this.getEffectArr(),o=r[t],i=SpecialEffects.createEffects(this.img,o);if(this.curEffect=i,this.curData=JSON.parse(JSON.stringify(this.mataData[t])),o==SpecialEffects.EffectPerspective){this.touchPointComp=new EffectPointsUI(this),this.addChild(this.touchPointComp),this.touchPointComp.x=this.img.x,this.touchPointComp.y=this.img.y,this.touchPointComp.width=this.img.width,this.touchPointComp.height=this.img.height;var n=(this.curData.initPoint,this.curData.usePoint);this.refreshSpecialEffects(n);for(var a=0;a<n.length;a+=2)this.touchPointComp.createPoint(n[a],n[a+1])}else{var c=0;this.curData.attr.forEach(function(t){var r=new EffectItemUI(e);e.attrGroup.addChild(r),r.y=c,r.initData(t),c+=r.height})}},e.prototype.refresh=function(){var t=this.curData.attr.map(function(t){return t.curNum});(e=this.curEffect).refreshData.apply(e,t);var e},e.prototype.refreshSpecialEffects=function(t){this.curEffect.refreshData(t,this.curData.initPoint)},e.prototype.getEffectArr=function(){return[SpecialEffects.EffectBrightnessContrast,SpecialEffects.EffectHueSaturation,SpecialEffects.EffectVibrance,SpecialEffects.EffectDenoise,SpecialEffects.EffectNoise,SpecialEffects.EffectSepia,SpecialEffects.EffectVignette,SpecialEffects.EffectZoomblur,SpecialEffects.EffectTriangleblur,SpecialEffects.EffectTiltShift,SpecialEffects.EffectSwirl,SpecialEffects.EffectBulgePinch,SpecialEffects.EffectPerspective]},e}(eui.Component);__reflect(EffectExamp.prototype,"EffectExamp");var EffectItemUI=function(t){function e(e){var r=t.call(this)||this;return r._m=e,r.skinName="EffectItemSkin",r}return __extends(e,t),e.prototype.childrenCreated=function(){t.prototype.childrenCreated.call(this),this.slider.addEventListener(egret.Event.CHANGE,this.onChangeData,this)},e.prototype.onChangeData=function(){this._data.curNum=this.slider.value,this._m.refresh(),this.refreshValue()},e.prototype.refreshValue=function(){this.valueLabel.text=this.slider.value.toFixed(2)},e.prototype.getAttrName=function(){return this._data.name},e.prototype.initData=function(t){this._data=t,this.attrName.text=t.name,this.slider.maximum=t.max,this.slider.minimum=t.min,this.slider.value=t.curNum,this.slider.snapInterval=0,this.refreshValue()},e.prototype.partRemoved=function(){this.slider.removeEventListener(egret.Event.CHANGE,this.onChangeData,this),this._m=null,this._data=null},e}(eui.Component);__reflect(EffectItemUI.prototype,"EffectItemUI");var EffectPointsUI=function(t){function e(e){var r=t.call(this)||this;return r.pointImgArr=[],r.isActive=!1,r._m=e,r}return __extends(e,t),e.prototype.childrenCreated=function(){this.touchEnabled=!0,this.touchChildren=!0;var t=new eui.Rect(this.width,this.height);t.alpha=0,this.addChild(t),this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.handleTouchBegin,this),this.addEventListener(egret.TouchEvent.TOUCH_END,this.handleTouchEnd,this),this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.handleTouchMove,this)},e.prototype.handleTouchBegin=function(t){this.pointImgArr.indexOf(t.target)>-1&&(this.curPointImg=t.target)},e.prototype.handleTouchMove=function(t){this.curPointImg&&(this.curPointImg.x=t.stageX-this.x,this.curPointImg.y=t.stageY-this.y,this._m.refreshSpecialEffects(this.getData()))},e.prototype.getData=function(){var t=[];return this.pointImgArr.forEach(function(e){t.push(e.x),t.push(e.y)}),t},e.prototype.handleTouchEnd=function(){this.curPointImg=null},e.prototype.createPoint=function(t,e){var r=new eui.Image(RES.getRes("radiobutton_select_up_png"));r.width=r.height=20,r.anchorOffsetX=10,r.anchorOffsetY=10,r.x=t,r.y=e,this.pointImgArr.push(r),this.addChild(r)},e.prototype.partRemoved=function(){this.removeChildren(),this.pointImgArr=null},e}(eui.Group);__reflect(EffectPointsUI.prototype,"EffectPointsUI");