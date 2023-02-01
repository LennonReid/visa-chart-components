/**
 * Copyright (c) 2022 Visa, Inc.
 *
 * This source code is licensed under the MIT license
 * https://github.com/visa/visa-chart-components/blob/master/LICENSE
 *
 **/
System.register([],(function(t){"use strict";return{execute:function(){t({c:e,p:r});var i=Math.PI,s=2*i,h=1e-6,_=s-h;function n(){this._x0=this._y0=this._x1=this._y1=null;this._=""}function r(){return new n}n.prototype=r.prototype={constructor:n,moveTo:function(t,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)},closePath:function(){if(this._x1!==null){this._x1=this._x0,this._y1=this._y0;this._+="Z"}},lineTo:function(t,i){this._+="L"+(this._x1=+t)+","+(this._y1=+i)},quadraticCurveTo:function(t,i,s,h){this._+="Q"+ +t+","+ +i+","+(this._x1=+s)+","+(this._y1=+h)},bezierCurveTo:function(t,i,s,h,_,n){this._+="C"+ +t+","+ +i+","+ +s+","+ +h+","+(this._x1=+_)+","+(this._y1=+n)},arcTo:function(t,s,_,n,r){t=+t,s=+s,_=+_,n=+n,r=+r;var e=this._x1,o=this._y1,u=_-t,a=n-s,c=e-t,f=o-s,x=c*c+f*f;if(r<0)throw new Error("negative radius: "+r);if(this._x1===null){this._+="M"+(this._x1=t)+","+(this._y1=s)}else if(!(x>h));else if(!(Math.abs(f*u-a*c)>h)||!r){this._+="L"+(this._x1=t)+","+(this._y1=s)}else{var y=_-e,M=n-o,l=u*u+a*a,v=y*y+M*M,b=Math.sqrt(l),p=Math.sqrt(x),w=r*Math.tan((i-Math.acos((l+x-v)/(2*b*p)))/2),T=w/p,g=w/b;if(Math.abs(T-1)>h){this._+="L"+(t+T*c)+","+(s+T*f)}this._+="A"+r+","+r+",0,0,"+ +(f*y>c*M)+","+(this._x1=t+g*u)+","+(this._y1=s+g*a)}},arc:function(t,n,r,e,o,u){t=+t,n=+n,r=+r,u=!!u;var a=r*Math.cos(e),c=r*Math.sin(e),f=t+a,x=n+c,y=1^u,M=u?e-o:o-e;if(r<0)throw new Error("negative radius: "+r);if(this._x1===null){this._+="M"+f+","+x}else if(Math.abs(this._x1-f)>h||Math.abs(this._y1-x)>h){this._+="L"+f+","+x}if(!r)return;if(M<0)M=M%s+s;if(M>_){this._+="A"+r+","+r+",0,1,"+y+","+(t-a)+","+(n-c)+"A"+r+","+r+",0,1,"+y+","+(this._x1=f)+","+(this._y1=x)}else if(M>h){this._+="A"+r+","+r+",0,"+ +(M>=i)+","+y+","+(this._x1=t+r*Math.cos(o))+","+(this._y1=n+r*Math.sin(o))}},rect:function(t,i,s,h){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+i)+"h"+ +s+"v"+ +h+"h"+-s+"Z"},toString:function(){return this._}};function e(t){return function i(){return t}}}}}));