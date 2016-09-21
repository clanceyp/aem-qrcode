CQ.Ext.namespace("qrcode", "qrcode.button");

qrcode.button.CreateQRCode = {
	text: "QR-code",
	context: CQ.wcm.Sidekick.PAGE,
	handler: function(e) {
		var duration = 300,
			selfId = "qr-code",
			containerId = "tmg-qr-code-container",
			makeId = function(){
				var d = new Date().getTime(),
					uuid = 'xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
						var r = (d + Math.random()*16)%16 | 0;
						d = Math.floor(d/16);
						return (c=='x' ? r : (r&0x3|0x8)).toString(16);
					});
				return uuid },
			head = '<div class="x-window-tl"><div class="x-window-tr"><div class="x-window-tc"><div class="x-window-header x-window-header-noborder x-unselectable x-window-draggable" id="'+ makeId() +'"><div class="x-tool x-tool-close" id="'+ makeId() +'">&nbsp;</div></div></div></div></div>',
			foot = '<div class="x-window-bl x-panel-nofooter" id="'+ makeId() +'"><div class="x-window-br"><div class="x-window-bc"></div></div></div>',
			popup = '<div id="'+containerId+'" class="cq-sidekick">' + head + '<div class="x-window-bwrap"><div class="x-window-ml"><div class="x-window-mr"><div class="x-window-mc"><canvas id="'+ selfId +'"></canvas></div></div></div></div>'+foot+'</div>',
			run = function() {
				var style = jQuery('#cq-sk').attr("style"),
					l, w, t, h, z;
				if (jQuery('#tmg-qr-code-container').length > 0) {
					// it's been run, so show popup and update the URL in case it's changed.
					var qr = new QRious({
						element: document.getElementById(selfId),
						value: CQ.WCM.getTopWindow().TMG.config.publishUrl,
						size: 200
					});
					jQuery('#tmg-qr-code-container')
						.css("display", "block")
						.animate({
							opacity: 1
						}, duration);
					return true;
				}
				// first run, create the popup and show it next to the side kick
				/*
				 QRious v2.0.2 | (C) 2016 Alasdair Mercer | GPL v3 License
				 Based on jsqrencode | (C) 2010 tz@execpc.com | GPL v3 License
				 */
				!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("qrious",e):t.QRious=e()}(this,function(){"use strict";var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},e=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),i=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},s=function(t,e){if(!t)throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},r=function(){function i(){t(this,i)}return e(i,null,[{key:"privatize",value:function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t["_"+i]=e[i]);return t}},{key:"setter",value:function(t,e,i,s,r){var n=t[e],a=null!=i?i:s;return"function"==typeof r&&(a=r(a)),t[e]=a,a!==n}},{key:"throwUnimplemented",value:function(t,e){throw new Error("method must be implemented on the class")}},{key:"toUpperCase",value:function(t){return null!=t&&t.toUpperCase()}}]),i}(),n=function(){function i(){t(this,i)}return e(i,[{key:"getName",value:function(){r.throwUnimplemented("Service","getName")}}]),i}(),a=function(n){function a(){return t(this,a),s(this,Object.getPrototypeOf(a).apply(this,arguments))}return i(a,n),e(a,[{key:"createCanvas",value:function(){r.throwUnimplemented("ElementService","createCanvas")}},{key:"createImage",value:function(){r.throwUnimplemented("ElementService","createImage")}},{key:"getName",value:function(){return"element"}},{key:"isCanvas",value:function(t){r.throwUnimplemented("ElementService","isCanvas")}},{key:"isImage",value:function(t){r.throwUnimplemented("ElementService","isImage")}}]),a}(n),h=function(r){function n(){return t(this,n),s(this,Object.getPrototypeOf(n).apply(this,arguments))}return i(n,r),e(n,[{key:"createCanvas",value:function(){return document.createElement("canvas")}},{key:"createImage",value:function(){return document.createElement("img")}},{key:"isCanvas",value:function(t){return t instanceof HTMLCanvasElement}},{key:"isImage",value:function(t){return t instanceof HTMLImageElement}}]),n}(a),o=function(){function i(e){t(this,i),this.qrious=e}return e(i,[{key:"draw",value:function(t){r.throwUnimplemented("Renderer","draw")}},{key:"getModuleSize",value:function(t){var e=Math.floor(this.qrious.size/t.width);return Math.max(1,e)}},{key:"getOffset",value:function(t){var e=this.getModuleSize(t),i=Math.floor((this.qrious.size-e*t.width)/2);return Math.max(0,i)}},{key:"render",value:function(t){this.resize(),this.reset(),this.draw(t)}},{key:"reset",value:function(){r.throwUnimplemented("Renderer","reset")}},{key:"resize",value:function(){r.throwUnimplemented("Renderer","resize")}}]),i}(),f=function(r){function n(){return t(this,n),s(this,Object.getPrototypeOf(n).apply(this,arguments))}return i(n,r),e(n,[{key:"draw",value:function(t){var e=this.qrious,i=this.getModuleSize(t),s=this.getOffset(t),r=e.canvas.getContext("2d");r.fillStyle=e.foreground;for(var n=0;n<t.width;n++)for(var a=0;a<t.width;a++)t.buffer[a*t.width+n]&&r.fillRect(i*n+s,i*a+s,i,i)}},{key:"reset",value:function(){var t=this.qrious,e=t.canvas.getContext("2d");e.lineWidth=1,e.clearRect(0,0,t.size,t.size),e.fillStyle=t.background,e.fillRect(0,0,t.size,t.size)}},{key:"resize",value:function(){var t=this.qrious,e=t.canvas;e.width=t.size,e.height=t.size}}]),n}(o),u=function(){function i(){t(this,i)}return e(i,null,[{key:"BLOCK",get:function(){return[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28]}}]),i}(),c=function(){function i(){t(this,i)}return e(i,null,[{key:"BLOCKS",get:function(){return[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30]}},{key:"FINAL_FORMAT",get:function(){return[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107]}},{key:"LEVELS",get:function(){return{L:1,M:2,Q:3,H:4}}}]),i}(),l=function(){function i(){t(this,i)}return e(i,null,[{key:"EXPONENT",get:function(){return[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0]}},{key:"LOG",get:function(){return[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175]}}]),i}(),_=function(){function i(){t(this,i)}return e(i,null,[{key:"BLOCK",get:function(){return[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177]}}]),i}(),v=function(){function i(e){t(this,i),this._badness=[],this._level=c.LEVELS[e.level],this._polynomial=[],this._value=e.value,this._valueLength=this._value.length,this._version=0,this._stringBuffer=[];for(var s=void 0,r=void 0,n=void 0,a=void 0;this._version<40;){this._version++;var h=4*(this._level-1)+16*(this._version-1);if(n=c.BLOCKS[h++],a=c.BLOCKS[h++],s=c.BLOCKS[h++],r=c.BLOCKS[h],h=s*(n+a)+a-3+(this._version<=9),this._valueLength<=h)break}this._dataBlock=s,this._eccBlock=r,this._neccBlock1=n,this._neccBlock2=a,this.width=17+4*this._version,this.buffer=i._createArray(this.width*this.width),this._ecc=i._createArray(this._dataBlock+(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2),this._mask=i._createArray((this.width*(this.width+1)+1)/2),this._insertFinders(),this._insertAlignments(),this.buffer[8+this.width*(this.width-8)]=1,this._insertTimingGap(),this._reverseMask(),this._insertTimingRowAndColumn(),this._insertVersion(),this._syncMask(),this._convertBitStream(this._value.length),this._calculatePolynomial(),this._appendEccToData(),this._interleaveBlocks(),this._pack(),this._finish()}return e(i,null,[{key:"_createArray",value:function(t){for(var e=[],i=0;i<t;i++)e[i]=0;return e}},{key:"_getMaskBit",value:function(t,e){var i=void 0;return t>e&&(i=t,t=e,e=i),i=e,i+=e*e,i>>=1,i+=t}},{key:"_modN",value:function(t){for(;t>=255;)t-=255,t=(t>>8)+(255&t);return t}},{key:"N1",get:function(){return 3}},{key:"N2",get:function(){return 3}},{key:"N3",get:function(){return 40}},{key:"N4",get:function(){return 10}}]),e(i,[{key:"_addAlignment",value:function(t,e){this.buffer[t+this.width*e]=1;for(var i=-2;i<2;i++)this.buffer[t+i+this.width*(e-2)]=1,this.buffer[t-2+this.width*(e+i+1)]=1,this.buffer[t+2+this.width*(e+i)]=1,this.buffer[t+i+1+this.width*(e+2)]=1;for(var s=0;s<2;s++)this._setMask(t-1,e+s),this._setMask(t+1,e-s),this._setMask(t-s,e-1),this._setMask(t+s,e+1)}},{key:"_appendData",value:function(t,e,s,r){for(var n=0;n<r;n++)this._stringBuffer[s+n]=0;for(var a=0;a<e;a++){var h=l.LOG[this._stringBuffer[t+a]^this._stringBuffer[s]];if(255!==h)for(var o=1;o<r;o++)this._stringBuffer[s+o-1]=this._stringBuffer[s+o]^l.EXPONENT[i._modN(h+this._polynomial[r-o])];else for(var f=s;f<s+r;f++)this._stringBuffer[f]=this._stringBuffer[f+1];this._stringBuffer[s+r-1]=255===h?0:l.EXPONENT[i._modN(h+this._polynomial[0])]}}},{key:"_appendEccToData",value:function(){for(var t=0,e=this._calculateMaxLength(),i=0;i<this._neccBlock1;i++)this._appendData(t,this._dataBlock,e,this._eccBlock),t+=this._dataBlock,e+=this._eccBlock;for(var s=0;s<this._neccBlock2;s++)this._appendData(t,this._dataBlock+1,e,this._eccBlock),t+=this._dataBlock+1,e+=this._eccBlock}},{key:"_applyMask",value:function(t){var e=this.width;switch(t){case 0:for(var i=0;i<e;i++)for(var s=0;s<e;s++)s+i&1||this._isMasked(s,i)||(this.buffer[s+i*e]^=1);break;case 1:for(var r=0;r<e;r++)for(var n=0;n<e;n++)1&r||this._isMasked(n,r)||(this.buffer[n+r*e]^=1);break;case 2:for(var a=0;a<e;a++)for(var h=0,o=0;o<e;o++,h++)3===h&&(h=0),h||this._isMasked(o,a)||(this.buffer[o+a*e]^=1);break;case 3:for(var f=0,u=0;u<e;u++,f++){3===f&&(f=0);for(var c=f,l=0;l<e;l++,c++)3===c&&(c=0),c||this._isMasked(l,u)||(this.buffer[l+u*e]^=1)}break;case 4:for(var _=0;_<e;_++)for(var v=0,k=_>>1&1,d=0;d<e;d++,v++)3===v&&(v=0,k=!k),k||this._isMasked(d,_)||(this.buffer[d+_*e]^=1);break;case 5:for(var g=0,y=0;y<e;y++,g++){3===g&&(g=0);for(var m=0,b=0;b<e;b++,m++)3===m&&(m=0),(b&y&1)+!(!m|!g)||this._isMasked(b,y)||(this.buffer[b+y*e]^=1)}break;case 6:for(var p=0,B=0;B<e;B++,p++){3===p&&(p=0);for(var w=0,M=0;M<e;M++,w++)3===w&&(w=0),(M&B&1)+(w&&w===p)&1||this._isMasked(M,B)||(this.buffer[M+B*e]^=1)}break;case 7:for(var O=0,L=0;L<e;L++,O++){3===O&&(O=0);for(var E=0,S=0;S<e;S++,E++)3===E&&(E=0),(E&&E===O)+(S+L&1)&1||this._isMasked(S,L)||(this.buffer[S+L*e]^=1)}}}},{key:"_calculateMaxLength",value:function(){return this._dataBlock*(this._neccBlock1+this._neccBlock2)+this._neccBlock2}},{key:"_calculatePolynomial",value:function(){this._polynomial[0]=1;for(var t=0;t<this._eccBlock;t++){this._polynomial[t+1]=1;for(var e=t;e>0;e--)this._polynomial[e]=this._polynomial[e]?this._polynomial[e-1]^l.EXPONENT[i._modN(l.LOG[this._polynomial[e]]+t)]:this._polynomial[e-1];this._polynomial[0]=l.EXPONENT[i._modN(l.LOG[this._polynomial[0]]+t)]}for(var s=0;s<=this._eccBlock;s++)this._polynomial[s]=l.LOG[this._polynomial[s]]}},{key:"_checkBadness",value:function(){for(var t=0,e=this.width,s=0;s<e-1;s++)for(var r=0;r<e-1;r++)(this.buffer[r+e*s]&&this.buffer[r+1+e*s]&&this.buffer[r+e*(s+1)]&&this.buffer[r+1+e*(s+1)]||!(this.buffer[r+e*s]||this.buffer[r+1+e*s]||this.buffer[r+e*(s+1)]||this.buffer[r+1+e*(s+1)]))&&(t+=i.N2);for(var n=0,a=0;a<e;a++){var h=0;this._badness[0]=0;for(var o=0,f=0;f<e;f++){var u=this.buffer[f+e*a];o===u?this._badness[h]++:this._badness[++h]=1,o=u,n+=o?1:-1}t+=this._getBadness(h)}n<0&&(n=-n);var c=0,l=n;for(l+=l<<2,l<<=1;l>e*e;)l-=e*e,c++;t+=c*i.N4;for(var _=0;_<e;_++){var v=0;this._badness[0]=0;for(var k=0,d=0;d<e;d++){var g=this.buffer[_+e*d];k===g?this._badness[v]++:this._badness[++v]=1,k=g}t+=this._getBadness(v)}return t}},{key:"_convertBitStream",value:function(t){for(var e=0;e<t;e++)this._ecc[e]=this._value.charCodeAt(e);this._stringBuffer=this._ecc.slice(0);var i=this._calculateMaxLength();t>=i-2&&(t=i-2,this._version>9&&t--);var s=t;if(this._version>9){for(this._stringBuffer[s+2]=0,this._stringBuffer[s+3]=0;s--;){var r=this._stringBuffer[s];this._stringBuffer[s+3]|=255&r<<4,this._stringBuffer[s+2]=r>>4}this._stringBuffer[2]|=255&t<<4,this._stringBuffer[1]=t>>4,this._stringBuffer[0]=64|t>>12}else{for(this._stringBuffer[s+1]=0,this._stringBuffer[s+2]=0;s--;){var n=this._stringBuffer[s];this._stringBuffer[s+2]|=255&n<<4,this._stringBuffer[s+1]=n>>4}this._stringBuffer[1]|=255&t<<4,this._stringBuffer[0]=64|t>>4}for(s=t+3-(this._version<10);s<i;)this._stringBuffer[s++]=236,this._stringBuffer[s++]=17}},{key:"_getBadness",value:function(t){for(var e=0,s=0;s<=t;s++)this._badness[s]>=5&&(e+=i.N1+this._badness[s]-5);for(var r=3;r<t-1;r+=2)this._badness[r-2]===this._badness[r+2]&&this._badness[r+2]===this._badness[r-1]&&this._badness[r-1]===this._badness[r+1]&&3*this._badness[r-1]===this._badness[r]&&(0===this._badness[r-3]||r+3>t||3*this._badness[r-3]>=4*this._badness[r]||3*this._badness[r+3]>=4*this._badness[r])&&(e+=i.N3);return e}},{key:"_finish",value:function(){this._stringBuffer=this.buffer.slice(0);var t=0,e=void 0,i=3e4;for(e=0;e<8;e++){this._applyMask(e);var s=this._checkBadness();if(s<i&&(i=s,t=e),7===t)break;this.buffer=this._stringBuffer.slice(0)}for(t!==e&&this._applyMask(t),i=c.FINAL_FORMAT[t+(this._level-1<<3)],e=0;e<8;e++,i>>=1)1&i&&(this.buffer[this.width-1-e+8*this.width]=1,e<6?this.buffer[8+this.width*e]=1:this.buffer[8+this.width*(e+1)]=1);for(e=0;e<7;e++,i>>=1)1&i&&(this.buffer[8+this.width*(this.width-7+e)]=1,e?this.buffer[6-e+8*this.width]=1:this.buffer[7+8*this.width]=1)}},{key:"_interleaveBlocks",value:function(){var t=this._calculateMaxLength(),e=void 0,i=0;for(e=0;e<this._dataBlock;e++){for(var s=0;s<this._neccBlock1;s++)this._ecc[i++]=this._stringBuffer[e+s*this._dataBlock];for(var r=0;r<this._neccBlock2;r++)this._ecc[i++]=this._stringBuffer[this._neccBlock1*this._dataBlock+e+r*(this._dataBlock+1)]}for(var n=0;n<this._neccBlock2;n++)this._ecc[i++]=this._stringBuffer[this._neccBlock1*this._dataBlock+e+n*(this._dataBlock+1)];for(e=0;e<this._eccBlock;e++)for(var a=0;a<this._neccBlock1+this._neccBlock2;a++)this._ecc[i++]=this._stringBuffer[t+e+a*this._eccBlock];this._stringBuffer=this._ecc}},{key:"_insertAlignments",value:function(){var t=this.width;if(this._version>1)for(var e=u.BLOCK[this._version],i=t-7;;){for(var s=t-7;s>e-3&&(this._addAlignment(s,i),!(s<e));)s-=e;if(i<=e+9)break;i-=e,this._addAlignment(6,i),this._addAlignment(i,6)}}},{key:"_insertFinders",value:function(){for(var t=this.width,e=0;e<3;e++){var i=0,s=0;1===e&&(i=t-7),2===e&&(s=t-7),this.buffer[s+3+t*(i+3)]=1;for(var r=0;r<6;r++)this.buffer[s+r+t*i]=1,this.buffer[s+t*(i+r+1)]=1,this.buffer[s+6+t*(i+r)]=1,this.buffer[s+r+1+t*(i+6)]=1;for(var n=1;n<5;n++)this._setMask(s+n,i+1),this._setMask(s+1,i+n+1),this._setMask(s+5,i+n),this._setMask(s+n+1,i+5);for(var a=2;a<4;a++)this.buffer[s+a+t*(i+2)]=1,this.buffer[s+2+t*(i+a+1)]=1,this.buffer[s+4+t*(i+a)]=1,this.buffer[s+a+1+t*(i+4)]=1}}},{key:"_insertTimingGap",value:function(){for(var t=this.width,e=0;e<7;e++)this._setMask(7,e),this._setMask(t-8,e),this._setMask(7,e+t-7);for(var i=0;i<8;i++)this._setMask(i,7),this._setMask(i+t-8,7),this._setMask(i,t-8)}},{key:"_insertTimingRowAndColumn",value:function(){for(var t=this.width,e=0;e<t-14;e++)1&e?(this._setMask(8+e,6),this._setMask(6,8+e)):(this.buffer[8+e+6*t]=1,this.buffer[6+t*(8+e)]=1)}},{key:"_insertVersion",value:function(){var t=this.width;if(this._version>6)for(var e=_.BLOCK[this._version-7],i=17,s=0;s<6;s++)for(var r=0;r<3;r++,i--)1&(i>11?this._version>>i-12:e>>i)?(this.buffer[5-s+t*(2-r+t-11)]=1,this.buffer[2-r+t-11+t*(5-s)]=1):(this._setMask(5-s,2-r+t-11),this._setMask(2-r+t-11,5-s))}},{key:"_isMasked",value:function(t,e){var s=i._getMaskBit(t,e);return 1===this._mask[s]}},{key:"_pack",value:function(){for(var t=this.width-1,e=this.width-1,i=1,s=1,r=(this._dataBlock+this._eccBlock)*(this._neccBlock1+this._neccBlock2)+this._neccBlock2,n=0;n<r;n++)for(var a=this._stringBuffer[n],h=0;h<8;h++,a<<=1){128&a&&(this.buffer[t+this.width*e]=1);do s?t--:(t++,i?0!==e?e--:(t-=2,i=!i,6===t&&(t--,e=9)):e!==this.width-1?e++:(t-=2,i=!i,6===t&&(t--,e-=8))),s=!s;while(this._isMasked(t,e))}}},{key:"_reverseMask",value:function(){for(var t=this.width,e=0;e<9;e++)this._setMask(e,8);for(var i=0;i<8;i++)this._setMask(i+t-8,8),this._setMask(8,i);for(var s=0;s<7;s++)this._setMask(8,s+t-7)}},{key:"_setMask",value:function(t,e){var s=i._getMaskBit(t,e);this._mask[s]=1}},{key:"_syncMask",value:function(){for(var t=this.width,e=0;e<t;e++)for(var i=0;i<=e;i++)this.buffer[i+t*e]&&this._setMask(i,e)}}]),i}(),k=function(r){function n(){return t(this,n),s(this,Object.getPrototypeOf(n).apply(this,arguments))}return i(n,r),e(n,[{key:"draw",value:function(){var t=this.qrious;t.image.src=t.toDataURL()}},{key:"reset",value:function(){var t=this.qrious;t.image.src=""}},{key:"resize",value:function(){var t=this.qrious,e=t.image;e.width=t.size,e.height=t.size}}]),n}(o),d=function(){function i(){t(this,i),this._services={}}return e(i,[{key:"getService",value:function(t){var e=this._services[t];if(!e)throw new Error("Service is not being managed with name: "+t);return e}},{key:"setService",value:function(t,e){if(this._services[t])throw new Error("Service is already managed with name: "+t);e&&(this._services[t]=e)}}]),i}(),g=function(){function i(e){t(this,i),e=i._parseOptions(e),r.privatize(this,e);var s=this._element,n=i._serviceManager.getService("element");this.canvas=s&&n.isCanvas(s)?s:n.createCanvas(),this.canvas.qrious=this,this.image=s&&n.isImage(s)?s:n.createImage(),this.image.qrious=this,this._renderers=[new f(this),new k(this)],this.update()}return e(i,null,[{key:"use",value:function(t){i._serviceManager.setService(t.getName(),t)}},{key:"_parseOptions",value:function(t){return t=Object.assign({},i.DEFAULTS,t),t.level=r.toUpperCase(t.level),t.size=Math.abs(t.size),t}},{key:"DEFAULTS",get:function(){return{background:"white",foreground:"black",level:"L",mime:"image/png",size:100,value:""}}},{key:"VERSION",get:function(){return"2.0.2"}}]),e(i,[{key:"toDataURL",value:function(t){return this.canvas.toDataURL(t||this.mime)}},{key:"update",value:function(){var t=new v({level:this.level,value:this.value});this._renderers.forEach(function(e){return e.render(t)})}},{key:"background",get:function(){return this._background},set:function(t){var e=r.setter(this,"_background",t,i.DEFAULTS.background);e&&this.update()}},{key:"foreground",get:function(){return this._foreground},set:function(t){var e=r.setter(this,"_foreground",t,i.DEFAULTS.foreground);e&&this.update()}},{key:"level",get:function(){return this._level},set:function(t){var e=r.setter(this,"_level",t,i.DEFAULTS.level,r.toUpperCase);e&&this.update()}},{key:"mime",get:function(){return this._mime},set:function(t){var e=r.setter(this,"_mime",t,i.DEFAULTS.mime);e&&this.update()}},{key:"size",get:function(){return this._size},set:function(t){var e=r.setter(this,"_size",t,i.DEFAULTS.size,Math.abs);e&&this.update()}},{key:"value",get:function(){return this._value},set:function(t){var e=r.setter(this,"_value",t,i.DEFAULTS.value);e&&this.update()}}]),i}();return g._serviceManager=new d,g.use(new h),g});

				jQuery("#cq-sk").parent().append(popup);
				$qrContainer = jQuery('#'+containerId);
				$qrContainer
					.attr("style", style)
					.css({"opacity":0,"width":"214px","height":"auto"});

				l = parseInt($qrContainer.css("left"));
				w = $qrContainer.width();
				t = parseInt($qrContainer.css("top"));
				h = $qrContainer.height();
				z = parseInt(jQuery("#cq-sk").css("z-index")) + 1;
				l = (l - w - 20);
				l = (l<20) ? 20 : l;
				t = t + h;

				$qrContainer
					.css( {"left": l +"px", "top" : t +"px", "z-index": z } )
					.on("click", ".x-tool-close", function() {
						$qrContainer.animate({
							opacity: 0
						}, duration, function() {
							$qrContainer.css("display", "none");
						});
					})
					.draggable({
						opacity: 0.6
					})
					.animate({
						opacity: 1
					}, duration);

				var qr = new QRious({
					element: document.getElementById(selfId),
					value: CQ.WCM.getTopWindow().TMG.config.publishUrl,
					size: 200
				})
			};
		run();
	}
};

CQ.wcm.Sidekick.DEFAULT_ACTIONS.push(qrcode.button.CreateQRCode);
