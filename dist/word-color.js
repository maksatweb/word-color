define("afc163/word-color/1.0.0/word-color-debug",[],function(e,t,n){function o(e){return Math.pow(r,e)}function u(e){return parseInt((e.charCodeAt()<<r)%i)}var r=5,i=242,s=function(e){e=e.trim();var t=[0,0,0];for(var n=0;n<e.length;n++){var r=parseInt(n/t.length);t[n%3]+=parseInt(u(e[n])/o(r))}for(var i=0;i<t.length;i++)t[i]>255&&(t[i]=255);return"rgb("+t.join(",")+")"};console.log(s),n.exports=s});