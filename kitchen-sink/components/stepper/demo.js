webpackJsonp([30,141],{6:function(n,s,a){"use strict";a(13),a(12)},12:function(n,s){},13:function(n,s){},16:function(n,s,a){"use strict";a(20)},17:function(n,s){"use strict";s.__esModule=!0,s["default"]=function(n,s){var a={};for(var t in n)s.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t]);return a}},18:function(n,s,a){"use strict";a(6),a(24)},20:function(n,s){},24:function(n,s){},323:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0}),s["default"]=void 0;var e=a(2),o=t(e),p=a(7),u=t(p),i=a(3),c=t(i),l=a(5),r=t(l),d=a(4),f=t(d),k="/Users/hua/inner/ant-design-mobile/components/stepper/index.web.tsx",h=a(1),m=t(h),v=a(8),g=t(v),b=a(364),w=t(b),y=a(26),x=t(y),N=function(n,s){var a={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&s.indexOf(t)<0&&(a[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,t=Object.getOwnPropertySymbols(n);e<t.length;e++)s.indexOf(t[e])<0&&(a[t[e]]=n[t[e]]);return a},C=function(n){function s(){return(0,c["default"])(this,s),(0,r["default"])(this,n.apply(this,arguments))}return(0,f["default"])(s,n),s.prototype.render=function(){var n,s=this.props,t=s.className,e=s.showNumber,p=N(s,["className","showNumber"]),i=(0,g["default"])((n={},(0,u["default"])(n,t,!!t),(0,u["default"])(n,"showNumber",!!e),n));return m["default"].createElement(w["default"],(0,o["default"])({upHandler:m["default"].createElement(x["default"],{type:a(393),size:"xxs",__source:{fileName:k,lineNumber:21}}),downHandler:m["default"].createElement(x["default"],{type:a(392),size:"xxs",__source:{fileName:k,lineNumber:21}})},p,{ref:"inputNumber",className:i,__source:{fileName:k,lineNumber:21}}))},s}(m["default"].Component);s["default"]=C,C.defaultProps={prefixCls:"am-stepper",step:1,readOnly:!1,showNumber:!1,focusOnUpDown:!1,useTouch:!0},n.exports=s["default"]},324:function(n,s,a){"use strict";a(6),a(16),a(352)},352:function(n,s){},363:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(s,"__esModule",{value:!0});var e=a(17),o=t(e),p=a(3),u=t(p),i=a(15),c=t(i),l=a(5),r=t(l),d=a(4),f=t(d),k=a(1),h=t(k),m=a(11),v=t(m),g=a(72),b=t(g),w=function(n){function s(){return(0,u["default"])(this,s),(0,r["default"])(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return(0,f["default"])(s,n),(0,c["default"])(s,[{key:"render",value:function(){var n=this.props,s=n.prefixCls,a=n.disabled,t=(0,o["default"])(n,["prefixCls","disabled"]);return h["default"].createElement(b["default"],{disabled:a,activeClassName:s+"-handler-active"},h["default"].createElement("span",t))}}]),s}(k.Component);w.propTypes={prefixCls:v["default"].string,disabled:v["default"].bool},s["default"]=w,n.exports=s["default"]},364:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(){}function o(n){n.preventDefault()}Object.defineProperty(s,"__esModule",{value:!0});var p=a(7),u=t(p),i=a(2),c=t(i),l=a(1),r=t(l),d=a(11),f=t(d),k=a(22),h=t(k),m=a(8),v=t(m),g=a(365),b=t(g),w=a(363),y=t(w),x=(0,h["default"])({displayName:"InputNumber",propTypes:{focusOnUpDown:f["default"].bool,onChange:f["default"].func,onKeyDown:f["default"].func,onKeyUp:f["default"].func,prefixCls:f["default"].string,disabled:f["default"].bool,onFocus:f["default"].func,onBlur:f["default"].func,readOnly:f["default"].bool,max:f["default"].number,min:f["default"].number,step:f["default"].oneOfType([f["default"].number,f["default"].string]),upHandler:f["default"].node,downHandler:f["default"].node,useTouch:f["default"].bool,formatter:f["default"].func,parser:f["default"].func,onMouseEnter:f["default"].func,onMouseLeave:f["default"].func,onMouseOver:f["default"].func,onMouseOut:f["default"].func,precision:f["default"].number},mixins:[b["default"]],getDefaultProps:function(){return{focusOnUpDown:!0,useTouch:!1,prefixCls:"rc-input-number"}},componentDidMount:function(){this.componentDidUpdate()},componentWillUpdate:function(){try{this.start=this.refs.input.selectionStart,this.end=this.refs.input.selectionEnd}catch(n){}},componentDidUpdate:function(){if(this.props.focusOnUpDown&&this.state.focused){var n=this.refs.input.setSelectionRange;n&&"function"==typeof n&&void 0!==this.start&&void 0!==this.end&&this.start!==this.end?this.refs.input.setSelectionRange(this.start,this.end):this.focus()}},onKeyDown:function N(n){if(38===n.keyCode){var s=this.getRatio(n);this.up(n,s),this.stop()}else if(40===n.keyCode){var a=this.getRatio(n);this.down(n,a),this.stop()}var N=this.props.onKeyDown;if(N){for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];N.apply(void 0,[n].concat(e))}},onKeyUp:function C(n){this.stop();var C=this.props.onKeyUp;if(C){for(var s=arguments.length,a=Array(s>1?s-1:0),t=1;t<s;t++)a[t-1]=arguments[t];C.apply(void 0,[n].concat(a))}},getRatio:function(n){var s=1;return n.metaKey||n.ctrlKey?s=.1:n.shiftKey&&(s=10),s},getValueFromEvent:function(n){return n.target.value},focus:function(){this.refs.input.focus()},formatWrapper:function(n){return this.props.formatter?this.props.formatter(n):n},render:function(){var n,s=(0,c["default"])({},this.props),a=s.prefixCls,t=s.disabled,p=s.readOnly,i=s.useTouch,l=(0,v["default"])((n={},(0,u["default"])(n,a,!0),(0,u["default"])(n,s.className,!!s.className),(0,u["default"])(n,a+"-disabled",t),(0,u["default"])(n,a+"-focused",this.state.focused),n)),d="",f="",k=this.state.value;if(k)if(isNaN(k))d=a+"-handler-up-disabled",f=a+"-handler-down-disabled";else{var h=Number(k);h>=s.max&&(d=a+"-handler-up-disabled"),h<=s.min&&(f=a+"-handler-down-disabled")}var m=!s.readOnly&&!s.disabled,g=void 0;g=this.state.focused?this.state.inputValue:this.toPrecisionAsStep(this.state.value),void 0!==g&&null!==g||(g="");var b=void 0,w=void 0;i?(b={onTouchStart:m&&!d?this.up:e,onTouchEnd:this.stop},w={onTouchStart:m&&!f?this.down:e,onTouchEnd:this.stop}):(b={onMouseDown:m&&!d?this.up:e,onMouseUp:this.stop,onMouseLeave:this.stop},w={onMouseDown:m&&!f?this.down:e,onMouseUp:this.stop,onMouseLeave:this.stop});var x=this.formatWrapper(g),N=!!d||t||p,C=!!f||t||p;return r["default"].createElement("div",{className:l,style:s.style,onMouseEnter:s.onMouseEnter,onMouseLeave:s.onMouseLeave,onMouseOver:s.onMouseOver,onMouseOut:s.onMouseOut},r["default"].createElement("div",{className:a+"-handler-wrap"},r["default"].createElement(y["default"],(0,c["default"])({ref:"up",disabled:N,prefixCls:a,unselectable:"unselectable"},b,{role:"button","aria-label":"Increase Value","aria-disabled":!!N,className:a+"-handler "+a+"-handler-up "+d}),this.props.upHandler||r["default"].createElement("span",{unselectable:"unselectable",className:a+"-handler-up-inner",onClick:o})),r["default"].createElement(y["default"],(0,c["default"])({ref:"down",disabled:C,prefixCls:a,unselectable:"unselectable"},w,{role:"button","aria-label":"Decrease Value","aria-disabled":!!C,className:a+"-handler "+a+"-handler-down "+f}),this.props.downHandler||r["default"].createElement("span",{unselectable:"unselectable",className:a+"-handler-down-inner",onClick:o}))),r["default"].createElement("div",{className:a+"-input-wrap",role:"spinbutton","aria-valuemin":s.min,"aria-valuemax":s.max,"aria-valuenow":k},r["default"].createElement("input",{type:s.type,placeholder:s.placeholder,onClick:s.onClick,className:a+"-input",autoComplete:"off",onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:m?this.onKeyDown:e,onKeyUp:m?this.onKeyUp:e,autoFocus:s.autoFocus,maxLength:s.maxLength,readOnly:s.readOnly,disabled:s.disabled,max:s.max,min:s.min,name:s.name,id:s.id,onChange:this.onChange,ref:"input",value:x})))}});s["default"]=x,n.exports=s["default"]},365:function(n,s){"use strict";function a(){}function t(n){return n.replace(/[^\w\.-]+/g,"")}Object.defineProperty(s,"__esModule",{value:!0});var e=200,o=600,p=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1;s["default"]={getDefaultProps:function(){return{max:p,min:-p,step:1,style:{},onChange:a,onKeyDown:a,onFocus:a,onBlur:a,parser:t}},getInitialState:function(){var n=void 0,s=this.props;return n="value"in s?s.value:s.defaultValue,n=this.toNumber(n),{inputValue:this.toPrecisionAsStep(n),value:n,focused:s.autoFocus}},componentWillReceiveProps:function(n){"value"in n&&this.setState({inputValue:n.value,value:n.value})},componentWillUnmount:function(){this.stop()},onChange:function(n){var s=this.props.parser(this.getValueFromEvent(n).trim());this.setState({inputValue:s}),this.props.onChange(this.toNumberWhenUserInput(s))},onFocus:function(){var n;this.setState({focused:!0}),(n=this.props).onFocus.apply(n,arguments)},onBlur:function(n){for(var s=this,a=arguments.length,t=Array(a>1?a-1:0),e=1;e<a;e++)t[e-1]=arguments[e];this.setState({focused:!1});var o=this.getCurrentValidValue(this.state.inputValue);n.persist(),this.setValue(o,function(){var a;(a=s.props).onBlur.apply(a,[n].concat(t))})},getCurrentValidValue:function(n){var s=n,a=this.props;return""===s?s="":this.isNotCompleteNumber(s)?s=this.state.value:(s=Number(s),s<a.min&&(s=a.min),s>a.max&&(s=a.max)),this.toNumber(s)},setValue:function(n,s){var a=this.isNotCompleteNumber(parseFloat(n,10))?void 0:parseFloat(n,10),t=a!==this.state.value;"value"in this.props?this.setState({inputValue:this.toPrecisionAsStep(this.state.value)},s):this.setState({value:a,inputValue:this.toPrecisionAsStep(n)},s),t&&this.props.onChange(a)},getPrecision:function(n){if("precision"in this.props)return this.props.precision;var s=n.toString();if(s.indexOf("e-")>=0)return parseInt(s.slice(s.indexOf("e-")+2),10);var a=0;return s.indexOf(".")>=0&&(a=s.length-s.indexOf(".")-1),a},getMaxPrecision:function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if("precision"in this.props)return this.props.precision;var a=this.props.step,t=this.getPrecision(s),e=this.getPrecision(a),o=this.getPrecision(n);return n?Math.max(o,t+e):t+e},getPrecisionFactor:function(n){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this.getMaxPrecision(n,s);return Math.pow(10,a)},toPrecisionAsStep:function(n){if(this.isNotCompleteNumber(n)||""===n)return n;var s=Math.abs(this.getMaxPrecision(n));return s?Number(n).toFixed(s):n.toString()},isNotCompleteNumber:function(n){return isNaN(n)||""===n||null===n||n&&n.toString().indexOf(".")===n.toString().length-1},toNumber:function(n){return this.isNotCompleteNumber(n)?n:"precision"in this.props?Number(Number(n).toFixed(this.props.precision)):Number(n)},toNumberWhenUserInput:function(n){return(/\.\d*0$/.test(n)||n.length>16)&&this.state.focused?n:this.toNumber(n)},upStep:function(n,s){var a=this.props,t=a.step,e=a.min,o=this.getPrecisionFactor(n,s),p=Math.abs(this.getMaxPrecision(n,s)),u=void 0;return u="number"==typeof n?((o*n+o*t*s)/o).toFixed(p):e===-(1/0)?t:e,this.toNumber(u)},downStep:function(n,s){var a=this.props,t=a.step,e=a.min,o=this.getPrecisionFactor(n,s),p=Math.abs(this.getMaxPrecision(n,s)),u=void 0;return u="number"==typeof n?((o*n-o*t*s)/o).toFixed(p):e===-(1/0)?-t:e,this.toNumber(u)},step:function(n,s){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;s&&s.preventDefault();var t=this.props;if(!t.disabled){var e=this.getCurrentValidValue(this.state.inputValue)||0;if(!this.isNotCompleteNumber(e)){var o=this[n+"Step"](e,a);o>t.max?o=t.max:o<t.min&&(o=t.min),this.setValue(o),this.setState({focused:!0})}}},stop:function(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)},down:function(n,s,a){var t=this;n.persist&&n.persist(),this.stop(),this.step("down",n,s),this.autoStepTimer=setTimeout(function(){t.down(n,s,!0)},a?e:o)},up:function(n,s,a){var t=this;n.persist&&n.persist(),this.stop(),this.step("up",n,s),this.autoStepTimer=setTimeout(function(){t.up(n,s,!0)},a?e:o)}},n.exports=s["default"]},392:function(n,s,a){var t=a(19),e='<symbol viewBox="0 0 30 2" id="minus" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch --> <title>Rectangle</title> <desc>Created with Sketch.</desc> <defs/> <g id="minus_Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <rect id="minus_Rectangle" fill="#000000" x="0" y="0" width="30" height="2"/> </g> </symbol>';n.exports=t.add(e,"minus")},393:function(n,s,a){var t=a(19),e='<symbol viewBox="0 0 30 30" id="plus" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch --> <title>Combined Shape</title> <desc>Created with Sketch.</desc> <defs/> <g id="plus_Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <path d="M14,14 L0,14 L0,16 L14,16 L14,30 L16,30 L16,16 L30,16 L30,14 L16,14 L16,-1.77635684e-15 L14,-2.14375088e-15 L14,14 Z" id="plus_Combined-Shape" fill="#000000"/> </g> </symbol>';n.exports=t.add(e,"plus")},603:function(n,s,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/stepper/demo/basic.md",id:"components-stepper-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Stepper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      val<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n      val1<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onChange1 <span class="token operator">=</span> <span class="token punctuation">(</span>val1<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// console.log(val);</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> val1 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'Demos\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n          wrap\n        <span class="token operator">></span>\n        Show number <span class="token function">value</span><span class="token punctuation">(</span>Use TouchEvent <span class="token keyword">for</span> mobile by <span class="token keyword">default</span><span class="token punctuation">)</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>val1<span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange1<span class="token punctuation">}</span></span>\n            <span class="token attr-name">useTouch</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n          wrap\n        <span class="token operator">></span>\n        Show number <span class="token function">value</span><span class="token punctuation">(</span>Use MouseEvent <span class="token keyword">for</span> PC<span class="token punctuation">)</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>\n          <span class="token operator">&lt;</span>Stepper\n            style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'100%\'</span><span class="token punctuation">,</span> minWidth<span class="token punctuation">:</span> <span class="token string">\'2rem\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">showNumber</span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n          <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n        Disabled\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function s(n,s){for(var a=Object.getOwnPropertyNames(s),t=0;t<a.length;t++){var e=a[t],o=Object.getOwnPropertyDescriptor(s,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function t(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}function e(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}function o(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):s(n,a))}var p=a(1),u=(a(9),a(18),a(27)),i=n(u),c=(a(324),a(323)),l=n(c),r=function(n){function s(a){t(this,s);var o=e(this,n.call(this,a));return o.onChange=function(n){o.setState({val:n})},o.onChange1=function(n){o.setState({val1:n})},o.state={val:3,val1:2},o}return o(s,n),s.prototype.render=function(){return p.createElement(i["default"],{renderHeader:function(){return"Demos"}},p.createElement(i["default"].Item,{extra:p.createElement(l["default"],{style:{width:"100%",minWidth:"2rem"},showNumber:!0,max:10,min:1,value:this.state.val,onChange:this.onChange}),wrap:!0},"Show number value(Use TouchEvent for mobile by default)"),p.createElement(i["default"].Item,{extra:p.createElement(l["default"],{style:{width:"100%",minWidth:"2rem"},showNumber:!0,max:10,min:1,value:this.state.val1,onChange:this.onChange1,useTouch:!1}),wrap:!0},"Show number value(Use MouseEvent for PC)"),p.createElement(i["default"].Item,{extra:p.createElement(l["default"],{style:{width:"100%",minWidth:"2rem"},showNumber:!0,max:10,min:1,defaultValue:3,disabled:!0})},"Disabled"))},s}(p.Component);return p.createElement(r,null)}}},735:function(n,s,a){n.exports={basic:a(603)}}});