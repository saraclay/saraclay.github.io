(function(v,n)
{"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?module.exports=n():n()})
(this,function(){function v(a){return a.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,f){return f})
	.replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}
	function n(a){a=a.getElementsByTagName("a");for(var c=a.length-1;0<=c;c--)a[c].setAttribute("target","_blank")}
	function m(a,c){for(var f=[],g=new RegExp("(^| )"+c+"( |$)"),h=a.getElementsByTagName("*"),b=0,k=h.length;b<
k;b++)g.test(h[b].className)&&f.push(h[b]);return f}var A="",k=20,B=!0,t=[],w=!1,u=!0,q=!0,x=null,y=!0,C=!0,z=null,D=!0,E=!1,r=!0,F={fetch:
		function(a){void 0===a.maxTweets&&(a.maxTweets=20);void 0===a.enableLinks&&(a.showTime=!0);void 0===a.dateFunction&&(a.dateFunction="default");void 0===a.showRetweet&&(a.showRetweet=!0);void 0===a.customCallback&&(a.customCallback=null);void 0===a.showInteraction&&(a.showInteraction=!0);
void 0===a.showImages&&(a.showImages=!1);void 0===a.linksInNewWindow&&(a.linksInNewWindow=!0);if(w)t.push(a);else{w=!0;A=a.domId;k=a.maxTweets;B=a.enableLinks;q=a.showUser;u=a.showTime;C=a.showRetweet;x=a.dateFunction;z=a.customCallback;D=a.showInteraction;E=a.showImages;r=a.linksInNewWindow;
	var c=document.createElement("script");c.type="text/javascript";c.src="//cdn.syndication.twimg.com/widgets/timelines/"
	+a.id+"?&lang="+(a.lang||"en")
	+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="
	+Math.random();document.getElementsByTagName("head")[0].appendChild(c)}},callback:function(a){var c=document.createElement("div");
	c.innerHTML=a.body;"undefined"===typeof c.getElementsByClassName&&(y=!1);
	a=[];var f=[],g=[],h=[],b=[],p=[],e=0;if(y)for(c=c.getElementsByClassName("tweet");
		e<c.length;){0<c[e].getElementsByClassName("retweet-credit").length?b.push(!0):b.push(!1);
	if(!b[e]||b[e]&&C)a.push(c[e].getElementsByClassName("e-entry-title")[0]),
		p.push(c[e].getAttribute("data-tweet-id")),
		f.push(c[e].getElementsByClassName("p-author")[0]),
		g.push(c[e].getElementsByClassName("dt-updated")[0]),
		void 0!==c[e].getElementsByClassName("inline-media")[0]?
		h.push(c[e].getElementsByClassName("inline-media")[0]):h.push(void 0);e++}
		else for(c=m(c,"tweet");e<c.length;)
		a.push(m(c[e],"e-entry-title")[0]),
		p.push(c[e].getAttribute("data-tweet-id")),
		//f.push(m(c[e],"p-author")[0]),
		g.push(m(c[e],"dt-updated")[0]),void 0!==m(c[e],"inline-media")[0]?
		h.push(m(c[e],"inline-media")[0]):
		h.push(void 0),0<m(c[e],"retweet-credit").length?
		b.push(!0):b.push(!1),e++;
a.length>k&&(a.splice(k,a.length-k),
f.splice(k,f.length-k),g.splice(k,g.length-k),
b.splice(k,b.length-k),h.splice(k,h.length-k));

c=[];e=a.length;for(b=0;b<e;){if("string"!==typeof x)
{var d=g[b].getAttribute("datetime"),
l=new Date(g[b].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),d=x(l,d);
g[b].setAttribute("",d);if(a[b].innerText)if(y)g[b].innerText=d;else
{var l=document.createElement("p"),G=document.createTextNode(d);l.appendChild(G);
l.setAttribute("",d);g[b]=l}else g[b].textContent=d}
d="";B?(r&&(n(a[b]),q&&n(f[b])),q&&(d+=''+v(f[b].innerHTML)+
	"</div>"),d+='<p class="tweet">'+v(a[b].innerHTML)+"</p>",
u&&(d+=''+g[b].getAttribute("")+"</p>")):a[b].innerText?(q&&(d+=''+f[b].innerText+"</p>"),
d+=''+a[b].innerText+"</p>",
u&&(d+=''+g[b].innerText+"</p>")):(q&&(d+=''+f[b].textContent+"</p>"),
d+='<p class="tweet">'+a[b].textContent+
"</p>",u&&(d+=''+g[b].textContent+"</p>"));
D&&(d+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+p[b]+'" class="twitter_reply_icon"'+
	(r?' target="_blank">':">")+'</a><a href="https://twitter.com/intent/retweet?tweet_id='
	+p[b]+'" class="twitter_retweet_icon"'+(r?' target="_blank">':">")+
	'</a><a href="https://twitter.com/intent/favorite?tweet_id='
	+p[b]+'" class="twitter_fav_icon"'+(r?' target="_blank">':">")+"</a></p>");E&&void 0!==
h[b]&&(l=h[b],void 0!==l?(l=l.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],
	l=decodeURIComponent(l).split('"')[1]):l=void 0,
d+='<div class="media"><img src="'+l+'" alt="Image from tweet" /></div>');
c.push(d);b++}if(null===z)
{a=c.length;f=0;g=document.getElementById(A);for(h="<ul>";f<a;)h+="<li>"+c[f]+"</li>",f++;
g.innerHTML=h+"</ul>"}else z(c);w=!1;0<t.length&&(F.fetch(t[0]),t.splice(0,1))}};return window.twitterFetcher=F});


var config1 = {
  "id": '583177619081797632',
  "domId": 'example1',
  "maxTweets": 7,
  "enableLinks": true
};
twitterFetcher.fetch(config1);
