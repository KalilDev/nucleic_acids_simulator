{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.bc(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ar"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ar"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ar(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={ap:function ap(){},
aQ:function(a,b,c){if(H.b4(b,"$ii",[c],"$ai"))return new H.N(a,b,[c])
return new H.D(a,b,[c])},
i:function i(){},
Z:function Z(){},
a_:function a_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
a0:function a0(a,b,c){this.a=a
this.b=b
this.$ti=c},
a1:function a1(a,b){this.a=null
this.b=a
this.c=b},
ab:function ab(a,b,c){this.a=a
this.b=b
this.$ti=c},
ac:function ac(a,b){this.a=a
this.b=b},
C:function C(a){this.$ti=a},
O:function O(){},
D:function D(a,b,c){this.a=a
this.b=b
this.$ti=c},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
Q:function Q(a,b){this.a=a
this.b=b},
ai:function(a){var u=v.mangledGlobalNames[a]
if(typeof u==="string")return u
u="minified:"+a
return u},
b9:function(a){return v.types[a]},
a:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ak(a)
if(typeof u!=="string")throw H.d(H.b3(a))
return u},
G:function(a){return H.aX(a)+H.aB(H.v(a),0,null)},
aX:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.J(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.F||!1){r=C.D(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.t.B(t,0)===36){if(1>n)H.at(P.aq(1,m))
if(n>n)H.at(P.aq(n,m))
t=t.substring(1,n)}return H.ai(t)},
b5:function(a,b){var u,t="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.m(!0,b,t,null)
u=J.aJ(a)
if(b<0||b>=u)return P.an(b,a,t,null,u)
return P.aq(b,t)},
b3:function(a){return new P.m(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.a3()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.aH})
u.name=""}else u.toString=H.aH
return u},
aH:function(){return J.ak(this.dartException)},
at:function(a){throw H.d(a)},
bb:function(a){throw H.d(P.am(a))},
aO:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.a9().constructor.prototype):Object.create(new H.z(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.f
$.f=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.aw(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.b9,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.av:H.al
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.d("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.aw(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
aL:function(a,b,c,d){var u=H.al
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
aw:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.aN(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.aL(t,!r,u,b)
if(t===0){r=$.f
$.f=r+1
p="self"+H.a(r)
r="return function(){var "+p+" = this."
q=$.r
return new Function(r+H.a(q==null?$.r=H.K("self"):q)+";return "+p+"."+H.a(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.f
$.f=r+1
o+=H.a(r)
r="return function("+o+"){return this."
q=$.r
return new Function(r+H.a(q==null?$.r=H.K("self"):q)+"."+H.a(u)+"("+o+");}")()},
aM:function(a,b,c,d){var u=H.al,t=H.av
switch(b?-1:a){case 0:throw H.d(H.b_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
aN:function(a,b){var u,t,s,r,q,p,o,n=$.r
if(n==null)n=$.r=H.K("self")
u=$.au
if(u==null)u=$.au=H.K("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.aM(s,!q,t,b)
if(s===1){n="return function(){return this."+H.a(n)+"."+H.a(t)+"(this."+H.a(u)+");"
u=$.f
$.f=u+1
return new Function(n+H.a(u)+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.a(n)+"."+H.a(t)+"(this."+H.a(u)+", "+o+");"
u=$.f
$.f=u+1
return new Function(n+H.a(u)+"}")()},
ar:function(a,b,c,d,e,f,g){return H.aO(a,b,c,d,!!e,!!f,g)},
al:function(a){return a.a},
av:function(a){return a.c},
K:function(a){var u,t,s,r=new H.z("self","target","receiver","name"),q=J.ay(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
bc:function(a){throw H.d(new P.M(a))},
b_:function(a){return new H.a8(a)},
x:function(a,b){a.$ti=b
return a},
v:function(a){if(a==null)return
return a.$ti},
bf:function(a,b,c){return H.y(a["$a"+H.a(c)],H.v(b))},
aD:function(a,b,c){var u=H.y(a["$a"+H.a(b)],H.v(a))
return u==null?null:u[c]},
aE:function(a,b){var u=H.v(a)
return u==null?null:u[b]},
o:function(a,b){if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ai(a[0].name)+H.aB(a,1,b)
if(typeof a=="function")return H.ai(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.a(a)
return H.a(b[b.length-a-1])}if('func' in a)return H.b0(a,b)
if('futureOr' in a)return"FutureOr<"+H.o("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
b0:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.x([],[P.n])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p=C.t.w(p+o,a0[a0.length-q-1])
n=u[q]
if(n!=null&&n!==P.j)p+=" extends "+H.o(n,a0)}p+=">"}else{p=""
t=null}m=!!a.v?"void":H.o(a.ret,a0)
if("args" in a){l=a.args
for(k=l.length,j="",i="",h=0;h<k;++h,i=b){g=l[h]
j=j+i+H.o(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(k=f.length,i="",h=0;h<k;++h,i=b){g=f[h]
j=j+i+H.o(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(k=H.b6(e),d=k.length,i="",h=0;h<d;++h,i=b){c=k[h]
j=j+i+H.o(e[c],a0)+(" "+H.a(c))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+m},
aB:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.I("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.o(p,c)}return"<"+u.h(0)+">"},
y:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
b4:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.v(a)
t=J.J(a)
if(t[b]==null)return!1
return H.aC(H.y(t[d],u),null,c,null)},
aC:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.e(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.e(a[t],b,c[t],d))return!1
return!0},
be:function(a,b,c){return a.apply(b,H.y(J.J(b)["$a"+H.a(c)],H.v(b)))},
e:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="j"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="j"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.e(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="F")return!0
if('func' in c)return H.b1(a,b,c,d)
if('func' in a)return c.name==="bd"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.e("type" in a?a.type:l,b,s,d)
else if(H.e(a,b,s,d))return!0
else{if(!('$i'+"aR" in t.prototype))return!1
r=t.prototype["$a"+"aR"]
q=H.y(r,u?a.slice(1):l)
return H.e(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.aC(H.y(m,u),b,p,d)},
b1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.e(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.e(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.e(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.e(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ba(h,b,g,d)},
ba:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.e(c[s],d,a[s],b))return!1}return!0},
A:function A(){},
aa:function aa(){},
a9:function a9(){},
z:function z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a8:function a8(a){this.a=a},
b6:function(a){return J.aV(a?Object.keys(a):[],null)},
as:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
aV:function(a,b){return J.ay(H.x(a,[b]))},
ay:function(a){a.fixed$length=Array
return a},
J:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.V.prototype
return J.U.prototype}if(typeof a=="string")return J.t.prototype
if(a==null)return J.W.prototype
if(typeof a=="boolean")return J.T.prototype
if(a.constructor==Array)return J.l.prototype
return a},
b7:function(a){if(a==null)return a
if(a.constructor==Array)return J.l.prototype
return a},
b8:function(a){if(typeof a=="string")return J.t.prototype
if(a==null)return a
if(a.constructor==Array)return J.l.prototype
return a},
aj:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.J(a).m(a,b)},
aI:function(a){return J.b7(a).gl(a)},
aJ:function(a){return J.b8(a).gk(a)},
ak:function(a){return J.J(a).h(a)},
E:function E(){},
T:function T(){},
W:function W(){},
l:function l(a){this.$ti=a},
ao:function ao(a){this.$ti=a},
q:function q(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
X:function X(){},
V:function V(){},
U:function U(){},
t:function t(){}},P={
aP:function(a){if(a instanceof H.A)return a.h(0)
return"Instance of '"+H.G(a)+"'"},
aW:function(a,b,c){var u,t=H.x([],[c])
for(u=a.gl(a);u.i();)t.push(u.gj())
return t},
az:function(a,b,c){var u=new J.q(b,b.length)
if(!u.i())return a
if(c.length===0){do a+=H.a(u.d)
while(u.i())}else{a+=H.a(u.d)
for(;u.i();)a=a+c+H.a(u.d)}return a},
ax:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ak(a)
if(typeof a==="string")return JSON.stringify(a)
return P.aP(a)},
aK:function(a,b,c){return new P.m(!0,a,b,c)},
aZ:function(a){var u=null
return new P.H(u,u,!1,u,u,a)},
aq:function(a,b){return new P.H(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.R(e,!0,a,c,"Index out of range")},
am:function(a){return new P.L(a)},
aU:function(a,b,c){if(a<=0)return new H.C([c])
return new P.ad(a,b,[c])},
aG:function(a){H.as(H.a(a))},
p:function p(){},
af:function af(){},
P:function P(){},
a3:function a3(){},
m:function m(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H:function H(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
R:function R(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
L:function L(a){this.a=a},
M:function M(a){this.a=a},
c:function c(){},
k:function k(){},
ad:function ad(a,b,c){this.a=a
this.b=b
this.$ti=c},
S:function S(){},
Y:function Y(){},
F:function F(){},
w:function w(){},
j:function j(){},
n:function n(){},
I:function I(a){this.a=a},
ae:function ae(){},
aT:function(a,b,c){var u,t
if(P.aA(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.x([],[P.n])
$.u.push(a)
try{P.b2(a,u)}finally{$.u.pop()}t=P.az(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
aS:function(a,b,c){var u,t
if(P.aA(a))return b+"..."+c
u=new P.I(b)
$.u.push(a)
try{t=u
t.a=P.az(t.a,a,", ")}finally{$.u.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
aA:function(a){var u,t
for(u=$.u.length,t=0;t<u;++t)if(a===$.u[t])return!0
return!1},
b2:function(a,b){var u,t,s,r,q,p,o,n=a.gl(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.i())return
u=H.a(n.gj())
b.push(u)
m+=u.length+2;++l}if(!n.i()){if(l<=5)return
t=b.pop()
s=b.pop()}else{r=n.gj();++l
if(!n.i()){if(l<=4){b.push(H.a(r))
return}t=H.a(r)
s=b.pop()
m+=t.length+2}else{q=n.gj();++l
for(;n.i();r=q,q=p){p=n.gj();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.a(r)
t=H.a(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)}},U={b:function b(a){this.b=a}},B={B:function B(a,b,c){this.a=a
this.b=b
this.c=c}},Z={
aY:function(a){var u=T.h,t=a.n(0,new Z.a6()).v(0,new Z.a7(),u)
u=H.x([C.d,C.a,C.b],[u])
u=H.aQ(u,t,H.aE(u,0))
return new Z.a5(P.aW(u,!0,H.aD(u,"k",0)))},
a2:function a2(){},
a4:function a4(){},
a5:function a5(a){this.a=a},
a6:function a6(){},
a7:function a7(){}},T={h:function h(a){this.b=a}},F={
aF:function(a){P.aG("hello world")
C.r.D(Z.aY(P.aU(2000,new F.ag(),P.c)).C(),new F.ah())},
ag:function ag(){},
ah:function ah(){}}
var w=[C,H,J,P,U,B,Z,T,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ap.prototype={}
J.E.prototype={
m:function(a,b){return a===b},
h:function(a){return"Instance of '"+H.G(a)+"'"}}
J.T.prototype={
h:function(a){return String(a)},
$ip:1}
J.W.prototype={
m:function(a,b){return!1},
h:function(a){return"null"}}
J.l.prototype={
D:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.am(a))}},
E:function(a,b,c){var u
if(c>=a.length)return-1
if(c<0)c=0
for(u=c;u<a.length;++u)if(J.aj(a[u],b))return u
return-1},
h:function(a){return P.aS(a,"[","]")},
gl:function(a){return new J.q(a,a.length)},
gk:function(a){return a.length},
$ii:1}
J.ao.prototype={}
J.q.prototype={
gj:function(){return this.d},
i:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.bb(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.X.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
$iw:1}
J.V.prototype={$ic:1}
J.U.prototype={}
J.t.prototype={
B:function(a,b){if(b>=a.length)throw H.d(H.b5(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.d(P.aK(b,null,null))
return a+b},
h:function(a){return a},
gk:function(a){return a.length},
$in:1}
H.i.prototype={}
H.Z.prototype={
gl:function(a){return new H.a_(this,this.gk(this))},
n:function(a,b){return this.A(0,b)}}
H.a_.prototype={
gj:function(){return this.d},
i:function(){var u,t=this,s=t.a,r=s.gk(s)
if(t.b!==r)throw H.d(P.am(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s.u(0,u);++t.c
return!0}}
H.a0.prototype={
gl:function(a){var u=this.a
return new H.a1(u.gl(u),this.b)},
gk:function(a){var u=this.a
return u.gk(u)},
$ak:function(a,b){return[b]}}
H.a1.prototype={
i:function(){var u=this,t=u.b
if(t.i()){u.a=u.c.$1(t.gj())
return!0}u.a=null
return!1},
gj:function(){return this.a}}
H.ab.prototype={
gl:function(a){return new H.ac(J.aI(this.a),this.b)},
v:function(a,b,c){return new H.a0(this,b,[H.aE(this,0),c])}}
H.ac.prototype={
i:function(){var u,t
for(u=this.a,t=this.b;u.i();)if(t.$1(u.gj()))return!0
return!1},
gj:function(){return this.a.gj()}}
H.C.prototype={
gl:function(a){return C.C},
gk:function(a){return 0},
n:function(a,b){return this},
v:function(a,b,c){return new H.C([c])}}
H.O.prototype={
i:function(){return!1},
gj:function(){return}}
H.D.prototype={
gl:function(a){var u=this.a
return new H.Q(new J.q(u,u.length),this.b)},
gk:function(a){var u=this.b
return this.a.length+u.gk(u)}}
H.N.prototype={$ii:1}
H.Q.prototype={
i:function(){var u,t=this
if(t.a.i())return!0
u=t.b
if(u!=null){u=u.gl(u)
t.a=u
t.b=null
return u.i()}return!1},
gj:function(){return this.a.gj()}}
H.A.prototype={
h:function(a){return"Closure '"+H.G(this).trim()+"'"},
gG:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aa.prototype={}
H.a9.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ai(u)+"'"}}
H.z.prototype={
m:function(a,b){return!1},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.G(u)+"'")}}
H.a8.prototype={
h:function(a){return"RuntimeError: "+H.a(this.a)}}
P.p.prototype={}
P.af.prototype={}
P.P.prototype={}
P.a3.prototype={
h:function(a){return"Throw of null."}}
P.m.prototype={
gq:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gp:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gq()+o+u
if(!q.a)return t
s=q.gp()
r=P.ax(q.b)
return t+s+": "+r}}
P.H.prototype={
gq:function(){return"RangeError"},
gp:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.a(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.a(s)
else if(t>s)u=": Not in range "+H.a(s)+".."+H.a(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.a(s)}return u}}
P.R.prototype={
gq:function(){return"RangeError"},
gp:function(){if(this.b<0)return": index must not be negative"
var u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+u},
gk:function(a){return this.f}}
P.L.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ax(u)+"."}}
P.M.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.c.prototype={}
P.k.prototype={
n:function(a,b){return new H.ab(this,b,[H.aD(this,"k",0)])},
gk:function(a){var u,t=this.gl(this)
for(u=0;t.i();)++u
return u},
u:function(a,b){var u,t,s
for(u=this.gl(this),t=0;u.i();){s=u.gj()
if(b===t)return s;++t}throw H.d(P.an(b,this,"index",null,t))},
h:function(a){return P.aT(this,"(",")")}}
P.ad.prototype={
u:function(a,b){var u=this.a
if(b>=u)H.at(P.an(b,this,"index",null,u))
return this.b.$1(b)},
gk:function(a){return this.a}}
P.S.prototype={}
P.Y.prototype={$ii:1}
P.F.prototype={
h:function(a){return"null"}}
P.w.prototype={}
P.j.prototype={constructor:P.j,$ij:1,
m:function(a,b){return this===b},
h:function(a){return"Instance of '"+H.G(this)+"'"},
toString:function(){return this.h(this)}}
P.n.prototype={}
P.I.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.ae.prototype={
F:function(a){if(a<=0||a>4294967296)throw H.d(P.aZ("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
U.b.prototype={
h:function(a){return this.b}}
B.B.prototype={
gt:function(){var u=this
switch(u.a){case C.a:switch(u.b){case C.a:switch(u.c){case C.a:return C.i
case C.c:return C.i
case C.d:return C.e
case C.b:return C.e
default:return}case C.c:return C.h
case C.d:switch(u.c){case C.a:return C.q
case C.c:return C.q
default:return}case C.b:switch(u.c){case C.a:return C.p
case C.c:return C.p
case C.b:return C.u
default:return}default:return}case C.c:switch(u.b){case C.a:return C.e
case C.c:return C.z
case C.d:switch(u.c){case C.a:return C.j
case C.c:return C.j
case C.d:return C.k
case C.b:return C.k
default:return}case C.b:return C.f
default:return}case C.d:switch(u.b){case C.a:if(u.c===C.b)return C.x
else return C.w
case C.c:return C.A
case C.d:switch(u.c){case C.a:return C.l
case C.c:return C.l
case C.d:return C.m
case C.b:return C.m
default:return}case C.b:switch(u.c){case C.a:return C.h
case C.c:return C.h
case C.d:return C.f
case C.b:return C.f
default:return}default:return}case C.b:switch(u.b){case C.a:return C.y
case C.c:return C.B
case C.d:switch(u.c){case C.a:return C.n
case C.c:return C.n
case C.d:return C.o
case C.b:return C.o
default:return}case C.b:return C.v
default:return}default:return}},
h:function(a){return"Codon: "+H.a(this.a)+" + "+H.a(this.b)+" + "+H.a(this.c)}}
Z.a2.prototype={}
Z.a4.prototype={}
Z.a5.prototype={
C:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i
for(u=this.a,t=null,s=0;t==null;){r=C.r.E(u,C.d,s)
q=r+1
if(J.aj(u[q],C.a))if(J.aj(u[r+2],C.b))t=r
else s=q
else s=r}p=H.x([],[B.B])
for(o=0;n=t+o*3+3,n<u.length;){m=t+3*o
l=u[m]
k=u[m+1]
j=u[m+2]
i=new B.B(l,k,j)
if(i.gt()==null){H.as("found either a stop or a bad codon. "+(u.length-n)+" nucleotides werent parsed")
H.as("faulty codon:"+("Codon: "+H.a(l)+" + "+H.a(k)+" + "+H.a(j)))
return p}p.push(i);++o}return p}}
Z.a6.prototype={
$1:function(a){return a<=3&&a>=0},
$S:0}
Z.a7.prototype={
$1:function(a){if(a===0)return C.d
if(a===1)return C.a
if(a===2)return C.c
if(a===3)return C.b},
$S:1}
T.h.prototype={
h:function(a){return this.b}}
F.ag.prototype={
$1:function(a){return C.E.F(4)},
$S:2}
F.ah.prototype={
$1:function(a){return P.aG(a.gt())}};(function aliases(){var u=P.k.prototype
u.A=u.n})();(function inheritance(){var u=hunkHelpers.inherit,t=hunkHelpers.inheritMany
u(P.j,null)
t(P.j,[H.ap,J.E,J.q,P.k,H.a_,P.S,H.O,H.Q,H.A,P.P,P.p,P.w,P.Y,P.F,P.n,P.I,P.ae,U.b,B.B,Z.a2,T.h])
t(J.E,[J.T,J.W,J.l,J.X,J.t])
u(J.ao,J.l)
t(J.X,[J.V,J.U])
t(P.k,[H.i,H.a0,H.ab,H.D])
t(H.i,[H.Z,H.C])
t(P.S,[H.a1,H.ac])
u(H.N,H.D)
t(H.A,[H.aa,Z.a6,Z.a7,F.ag,F.ah])
t(H.aa,[H.a9,H.z])
t(P.P,[H.a8,P.a3,P.m,P.L,P.M])
t(P.w,[P.af,P.c])
t(P.m,[P.H,P.R])
u(P.ad,H.Z)
u(Z.a4,Z.a2)
u(Z.a5,Z.a4)})();(function constants(){C.F=J.E.prototype
C.r=J.l.prototype
C.t=J.t.prototype
C.i=new U.b("AminoAcid.Phenylalanine")
C.e=new U.b("AminoAcid.Leucine")
C.j=new U.b("AminoAcid.Histidine")
C.k=new U.b("AminoAcid.Glutamine")
C.l=new U.b("AminoAcid.Aspargine")
C.m=new U.b("AminoAcid.Lysine")
C.n=new U.b("AminoAcid.AsparticAcid")
C.o=new U.b("AminoAcid.GlutamicAcid")
C.p=new U.b("AminoAcid.Cysteine")
C.u=new U.b("AminoAcid.Trytonphan")
C.f=new U.b("AminoAcid.Arginine")
C.v=new U.b("AminoAcid.Glycine")
C.w=new U.b("AminoAcid.Isoleucine")
C.x=new U.b("AminoAcid.Methionine")
C.y=new U.b("AminoAcid.Valine")
C.h=new U.b("AminoAcid.Serine")
C.z=new U.b("AminoAcid.Proline")
C.A=new U.b("AminoAcid.Threonine")
C.B=new U.b("AminoAcid.Alanine")
C.q=new U.b("AminoAcid.Tyrosine")
C.C=new H.O()
C.D=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.E=new P.ae()
C.a=new T.h("Nucleotide.Uracil")
C.c=new T.h("Nucleotide.Cytosine")
C.d=new T.h("Nucleotide.Adenine")
C.b=new T.h("Nucleotide.Guanine")})()
var v={mangledGlobalNames:{c:"int",af:"double",w:"num",n:"String",p:"bool",F:"Null",Y:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.p,args:[P.c]},{func:1,ret:T.h,args:[P.c]},{func:1,ret:P.c,args:[P.c]}]};(function staticFields(){$.f=0
$.r=null
$.au=null
$.u=[]})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.aF,[])
else F.aF([])})})()
//# sourceMappingURL=main.js.map
