<!DOCTYPE HTML>
<html lang="en">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=11">
<title>oauth_client.php - PHP OAuth API - PHP Classes</title>
<link rel="stylesheet" type="text/css" href="http://files.phpclasses.org/styles.css">
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1">
<link rel="shortcut icon" href="http://files.phpclasses.org/graphics/phpclasses/favicon.ico">
<link rel="alternate" href="http://feeds.feedburner.com/phpclasses-xml" type="application/rss+xml" title="Latest published classes">
<link rel="alternate" href="http://feeds.feedburner.com/phpclassesreviews-xml" type="application/rss+xml" title="Latest published book reviews">
<link rel="canonical" href="http://www.phpclasses.org/browse/file/42008.html">
<meta name="description" lang="en" content="OAuth client class. oauth_client.php This class can authorize the access of users to an API using the OAuth protocol. It abstracts OAuth 1.0, 1.0a and 2.0 in the same class, so you can use the same obtain a token to authorize the access on behalf of the current user any API that supports any version of the OAuth protocol. It works on Linux, Windows and any other platform without the PECL PHP...">
<meta name="robots" content="NOINDEX">
<script type="text/javascript" src="http://files.phpclasses.org/js/contentLoader.js"></script>
<script type="text/javascript"><!--
var cl = new ML.content.contentLoader();

var cookies = document.cookie.split(";"), expires = new Date();
for(var c = 0; c < cookies.length; ++c)
{
 var m = cookies[c].match(/^ +([^=]+)/);
 if(m && m[1] === "visit")
	break;
}
if(c === cookies.length)
{
	expires.setTime(expires.getTime()+(24*60*60*1000));
	document.cookie = "visit=" + (new Date()).getTime() + "; expires=" + expires.toGMTString() + "; path=/;";
}

// --></script>
<script type="text/javascript"><!--
  (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,"script","//www.google-analytics.com/analytics.js","ga");

  ga("create", "UA-93559-1", "phpclasses.org");
  ga("send", "pageview");

// --></script>
</head>
<body>
<div id="MainContainer">
  <div id="TopLine"></div>
  <div id="Container"> 
  <div id="UserContent"><div id="user"><table width="100%" cellpadding="4" cellspacing="0" align="center">
<tr>
<td width="49.5%"  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><a href="/login.html?page=browse%2Ffile%2F42008.html">Login</a></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><a href="/register.html?page=browse%2Ffile%2F42008.html">Register</a></td>
<td width="49.5%"  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
</tr>
<tr>
<td colspan="5"  style=" border-style: none" height="6"></td>
</tr>
</table>

</div></div>
    <div id="PageContent">
      <div id="Top">
        <div id="logoPHP"><a href="/"><img src="http://files.phpclasses.org/graphics/phpclasses/logo-phpclasses.png" width="180" height="60" alt="PHP Classes" border="0"></a></div>
        <img id="elephpant" alt="elePHPant" src="http://files.phpclasses.org/graphics/phpclasses/elephpant.png" width="133" height="117">
        <div id="logoCompany"><a href="http://www.icontem.com/" target="_blank" rel="nofollow"><img src="http://files.phpclasses.org/graphics/icontem.png" width="180" height="60" alt="Icontem" border="0"></a></div>
        <h1>File: oauth_client.php</h1>
      </div>
      <div id="PageInfo"> <div id="navigation"><form style="margin: 0px" action="/search.html" method="get">
<table width="100%" cellpadding="4" cellspacing="0" align="center">
<tr>
<td width="49.5%"  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><a href="/search.html">Search</a> <input type="text" name="words" size="24"> <input type="image" src="http://files.phpclasses.org/graphics/phpclasses/search.png" align="middle" style="width: 24px; height: 24px"></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/browse.png" width="24" height="24" alt="All class groups" align="middle" border="0"> <a href="/browse/">All class groups</a></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/latest.png" width="24" height="24" alt="Latest entries" align="middle" border="0"> <a href="/browse/latest/latest.html">Latest entries</a></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/top.png" width="24" height="24" alt="Top 10 charts" align="middle" border="0"> <a href="/browse/top/top.html">Top 10 charts</a></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/blog.png" width="24" height="24" alt="Blog" align="middle" border="0"> <a href="/blog/">Blog</a></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/forum.png" width="24" height="24" alt="Forums" align="middle" border="0"> <a href="/discuss/">Forums</a></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/help.png" width="24" height="24" alt="Help FAQ" align="middle" border="0"> <a href="/faq/">Help FAQ</a></td>
<td width="49.5%"  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
</tr>
<tr>
<td colspan="15"  style=" border-style: none" height="6"></td>
</tr>
</table>


<input type="hidden" name="go_search" value="1">
</form></div>
        <div id="recommendpage"><div id="recommendpagecontainer"><table cellspacing="2" cellpadding="0" align="center">
<tr>
<td class="tabcontent box light"><a href="http://www.phpclasses.org/recommend_page.html?title=oauth_client.php&amp;page=%2Fbrowse%2Ffile%2F42008.html">Recommend</a> this page to a friend!</td>
<td class="box light"><div class="g-plusone" data-size="medium" data-href="http://www.phpclasses.org/browse/file/42008.html"></div><script type="text/javascript"><!--
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
// --></script></td>
<td class="box light"><div id="fb-root"></div><script type="text/javascript"><!--
(function(d, s, id)
{
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
// --></script><div class="fb-like" data-href="http://www.phpclasses.org/browse/file/42008.html" data-send="true" data-layout="button_count" data-width="80" data-show-faces="false"></div></td>
<td class="box light"><script type="text/javascript"><!--
cl.addContent({
	content: '\x3ca href="http:\x2f\x2ftwitter.com\x2fshare" class="twitter-share-button" data-url="http:\x2f\x2fwww.phpclasses.org\x2fbrowse\x2ffile\x2f42008.html" data-count="horizontal" data-via="phpclasses" data-related="phpclassesearly:News and insights about the PHPClasses site features and the PHP world in general" data-related="jsclasses:Ready to use JavaScript components" data-related="jsclassesearly:News and insights about the JSClasses site features and the JavaScript world in general"\x3e\x3cimg src="http:\x2f\x2ffiles.phpclasses.org\x2fgraphics\x2fphpclasses\x2ftwitter.png" width="24" height="24" alt="ReTweet" align="middle" border="0"\x3e ReTweet\x3c\x2fa\x3e\x3cscript type="text\x2fjavascript" src="http:\x2f\x2fplatform.twitter.com\x2fwidgets.js"\x3e\x3c\x2fscript\x3e',
	inline: true,
	priority: -1
});
// --></script>
</td>
<td class="box light"><img src="http://files.phpclasses.org/graphics/phpclasses/stumbleupon.png" width="24" height="24" alt="Stumble It!" align="middle" border="0"> <a rel="nofollow" target="_blank" href="http://www.stumbleupon.com/submit?title=oauth_client.php&amp;url=http%3A%2F%2Fwww.phpclasses.org%2Fbrowse%2Ffile%2F42008.html">Stumble It!</a></td>
<td class="box light"><img src="http://files.phpclasses.org/graphics/phpclasses/delicious.png" width="24" height="24" alt="Bookmark in del.icio.us" align="middle" border="0"> <a rel="nofollow" target="_blank" href="http://del.icio.us/post?title=oauth_client.php&amp;url=http%3A%2F%2Fwww.phpclasses.org%2Fbrowse%2Ffile%2F42008.html">Bookmark in del.icio.us</a></td>
</tr>
</table></div></div>

        <div class="InfoContent"><table width="100%" cellpadding="4" cellspacing="0">
<tr>
<td width="49.5%" class="nbgu">&nbsp;</td>
<td class="nbtu light"><a href="/browse/author/1.html">Classes of Manuel Lemos</a></td>
<td class="nbgu">&nbsp;<b>&gt;</b>&nbsp;</td>
<td class="nbtu light"><a href="/package/7700-PHP-Authorize-and-access-APIs-using-OAuth.html">PHP OAuth API</a></td>
<td class="nbgu">&nbsp;<b>&gt;</b>&nbsp;</td>
<td class="nblu"><b>oauth_client.php</b></td>
<td width="49.5%" class="nbgu">&nbsp;</td>
</tr>
<tr>
<td colspan="7" class="nbpu" height="6"></td>
</tr>
</table>
<!-- google_ad_section_start --><table width="100%">
<tr>
<td valign="top"><table cellspacing="0" cellpadding="2" style="width: 100%; height: 280px">
<TR class="even">
<TH VALIGN="top" ALIGN=right WIDTH="1%" NOWRAP><!--htdig_noindex-->File<!--/htdig_noindex-->:</TH>
<TD><TT>oauth_client.php</TT></TD>
</TR>
<TR class="odd">
<TH VALIGN="top" ALIGN=right WIDTH="1%" NOWRAP><!--htdig_noindex-->Role<!--/htdig_noindex-->:</TH>
<TD>Class source</TD>
</TR>
<TR class="even">
<TH VALIGN="top" ALIGN=right WIDTH="1%" NOWRAP><!--htdig_noindex-->Content type<!--/htdig_noindex-->:</TH>
<TD><TT>text/plain</TT></TD>
</TR>
<TR class="odd">
<TH VALIGN="top" ALIGN=right WIDTH="1%" NOWRAP><!--htdig_noindex-->Description<!--/htdig_noindex-->:</TH>
<TD>OAuth client class</TD>
</TR>
<TR class="even">
<TH VALIGN="top" ALIGN=right WIDTH="1%" NOWRAP><!--htdig_noindex-->Class<!--/htdig_noindex-->:</TH>
<TD><a href="/package/7700-PHP-Authorize-and-access-APIs-using-OAuth.html">PHP OAuth API</a><br>
<B>Authorize and access APIs using OAuth</B></TD>
</TR>
<TR class="odd">
<TH ALIGN=right WIDTH="1%" NOWRAP><!--htdig_noindex-->Author<!--/htdig_noindex-->:</TH>
<TD>By <a rel="author" href="/browse/author/1.html">Manuel Lemos</a></TD>
</TR>
<TR class="even">
<TH VALIGN="top" ALIGN=right WIDTH="1%" NOWRAP><!--htdig_noindex-->Last change<!--/htdig_noindex-->:</TH>
<TD>Added support to Paypal and TeamViewer OAuth servers.</TD>
</TR>
<TR class="odd">
<TH VALIGN="top" ALIGN=right WIDTH="1%" NOWRAP><!--htdig_noindex-->Date<!--/htdig_noindex-->:</TH>
<TD><span title="2014-11-07 00:27:45">Yesterday</span></TD>
</TR>
<TR class="even">
<TH VALIGN="top" ALIGN=right WIDTH="1%" NOWRAP><!--htdig_noindex-->Size<!--/htdig_noindex-->:</TH>
<TD><TT>89,624 bytes</TT></TD>
</TR>
<tr style="height: 99%">
<td colspan="2"></TD>
</TR>
</table>
</td>
<td style="width: 300px; height: 250px" valign="top"><script type="text/javascript"><!--
cl.addContent({
	content: '\x3c!-- PHPClasses-Below-The-Fold --\x3e\n\x3cscript type="text\x2fjavascript"\x3e\x3c!--\nif(!googletag)\n{\nvar googletag = googletag || {};\ngoogletag.cmd = googletag.cmd || [];\n(function() {\nvar gads = document.createElement("script");\ngads.async = true;\ngads.type = "text\x2fjavascript";\nvar useSSL = "https:" == document.location.protocol;\ngads.src = (useSSL ? "https:" : "http:") + \n"\x2f\x2fwww.googletagservices.com\x2ftag\x2fjs\x2fgpt.js";\nvar node = document.getElementsByTagName("script")[0];\nnode.parentNode.insertBefore(gads, node);\n})();\n}\n\ngoogletag.cmd.push(function() {\nvar slot = googletag.defineSlot("\x2f1003428\x2fPHPClasses-Below-The-Fold", [300, 250], "div-gpt-ad-1393793380546-1");\nslot.set("adsense_link_color", "0578C2");\nslot.set("adsense_url_color", "000000");\nslot.set("adsense_text_color", "000066");\nslot.set("adsense_channel_ids", "9690621395");\nslot.set("adsense_ad_types", "text_image");\nslot.addService(googletag.pubads());\ngoogletag.enableServices();\n});\n\x2f\x2f --\x3e\x3c\x2fscript\x3e\n\x3cdiv align="center"\x3e\x3cdiv id="div-gpt-ad-1393793380546-1" style="width:300px; height:250px;"\x3e\n\x3cscript type="text\x2fjavascript"\x3e\x3c!--\ngoogletag.cmd.push(function() { googletag.display("div-gpt-ad-1393793380546-1"); });\n\x2f\x2f --\x3e\x3c\x2fscript\x3e\n\x3c\x2fdiv\x3e\x3c\x2fdiv\x3e\n',
	inline: false,
	width: 336,
	height: 280,
	priority: 1
});
// --></script>
</td>
</tr>
</table>
<!-- google_ad_section_end --></div>
        <div id="ads"></div>
        <div class="InfoContent"><!-- body_start --><h2 align="center">You need to be a <a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'register', '', '/register.html?page=', 'browse\x2ffile\x2f42008.html');" href="/register.html?page=browse%2Ffile%2F42008.html">registered</a> user and <a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', '', '/login.html?page=', 'browse\x2ffile\x2f42008.html');" href="/login.html?page=browse%2Ffile%2F42008.html">login</a> to get this file.</h2>

<h2 align="center" class="box">1,292,911 PHP developers registered to the PHP Classes site.<br> Be One of Us!</h2>
<script type="text/javascript"><!--
 var trackOutboundLink = function(category, action, detail, base, url)
 {
  ga("send", "event", category, action, url + ' ' + detail, {
    "hitCallback": function () {
     document.location = base + encodeURIComponent(url);
    }
   }
  );
 };
 ga('send', 'event', 'Login-Prompt-View-File-Be-one-of-us', 'prompt', 'browse\x2ffile\x2f42008.html');
// --></script>
<h2 align="center">Login Immediately with your account on:</h2><table align="center"><tr><td align="right"><a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', 'Facebook', '/login.html?page=', 'browse\x2ffile\x2f42008.html'); return false;" href="/login.html?page=browse%2Ffile%2F42008.html"><img src="http://files.phpclasses.org/graphics/identity/Facebook.png" width="24" height="24" alt="Facebook Connect" align="middle" border="0"></a></td><td><div style="background-color: #3b5b99; border-radius: 8px; padding: 6px; text-align: center"><a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', 'Facebook', '/login.html?page=', 'browse\x2ffile\x2f42008.html'); return false;" href="/login.html?page=browse%2Ffile%2F42008.html" style="color: #ffffff; font-weight: bold; text-decoration: none">Facebook Connect</a></div></td><td align="right"><a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', 'Google', '/login.html?page=', 'browse\x2ffile\x2f42008.html'); return false;" href="/login.html?page=browse%2Ffile%2F42008.html"><img src="http://files.phpclasses.org/graphics/identity/Google.png" width="24" height="24" alt="Gmail or other Google Account" align="middle" border="0"></a></td><td><div style="background-color: #ffd200; border-radius: 8px; padding: 6px; text-align: center"><a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', 'Google', '/login.html?page=', 'browse\x2ffile\x2f42008.html'); return false;" href="/login.html?page=browse%2Ffile%2F42008.html" style="color: #000000; font-weight: bold; text-decoration: none">Gmail or other Google Account</a></div></td><td align="right"><a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', 'Microsoft', '/login.html?page=', 'browse\x2ffile\x2f42008.html'); return false;" href="/login.html?page=browse%2Ffile%2F42008.html"><img src="http://files.phpclasses.org/graphics/identity/Microsoft.png" width="24" height="24" alt="Hotmail or Microsoft Windows Live" align="middle" border="0"></a></td><td><div style="background-color: #b6cf72; border-radius: 8px; padding: 6px; text-align: center"><a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', 'Microsoft', '/login.html?page=', 'browse\x2ffile\x2f42008.html'); return false;" href="/login.html?page=browse%2Ffile%2F42008.html" style="color: #000000; font-weight: bold; text-decoration: none">Hotmail or Microsoft Windows Live</a></div></td><td align="right"><a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', 'StackExchange', '/login.html?page=', 'browse\x2ffile\x2f42008.html'); return false;" href="/login.html?page=browse%2Ffile%2F42008.html"><img src="http://files.phpclasses.org/graphics/identity/StackExchange.png" width="24" height="24" alt="StackOverflow" align="middle" border="0"></a></td><td><div style="background-color: #eeeeee; border-radius: 8px; padding: 6px; text-align: center"><a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', 'StackExchange', '/login.html?page=', 'browse\x2ffile\x2f42008.html'); return false;" href="/login.html?page=browse%2Ffile%2F42008.html" style="color: #000000; font-weight: bold; text-decoration: none">StackOverflow</a></div></td><td align="right"><a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', 'github', '/login.html?page=', 'browse\x2ffile\x2f42008.html'); return false;" href="/login.html?page=browse%2Ffile%2F42008.html"><img src="http://files.phpclasses.org/graphics/identity/github.png" width="24" height="24" alt="GitHub" align="middle" border="0"></a></td><td><div style="background-color: #a6f5ff; border-radius: 8px; padding: 6px; text-align: center"><a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', 'github', '/login.html?page=', 'browse\x2ffile\x2f42008.html'); return false;" href="/login.html?page=browse%2Ffile%2F42008.html" style="color: #000000; font-weight: bold; text-decoration: none">GitHub</a></div></td><td align="right"><a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', 'Yahoo', '/login.html?page=', 'browse\x2ffile\x2f42008.html'); return false;" href="/login.html?page=browse%2Ffile%2F42008.html"><img src="http://files.phpclasses.org/graphics/identity/Yahoo.png" width="24" height="24" alt="Yahoo" align="middle" border="0"></a></td><td><div style="background-color: #dce2e7; border-radius: 8px; padding: 6px; text-align: center"><a onclick="trackOutboundLink('Login-Prompt-View-File-Be-one-of-us', 'login', 'Yahoo', '/login.html?page=', 'browse\x2ffile\x2f42008.html'); return false;" href="/login.html?page=browse%2Ffile%2F42008.html" style="color: #660066; font-weight: bold; text-decoration: none">Yahoo</a></div></td></tr></table><iframe style="width: 100%; height: 900px; border-width: 0px" src="/requirement.html"></iframe><!-- body_end --><script type="text/javascript"><!--
cl.addContent({
	content: '\x3cbr\x3e\x3cdiv align="center"\x3e\x3c!-- PHPClasses-Bottom --\x3e\n\x3cscript type="text\x2fjavascript"\x3e\x3c!--\nif(!googletag)\n{\nvar googletag = googletag || {};\ngoogletag.cmd = googletag.cmd || [];\n(function() {\nvar gads = document.createElement("script");\ngads.async = true;\ngads.type = "text\x2fjavascript";\nvar useSSL = "https:" == document.location.protocol;\ngads.src = (useSSL ? "https:" : "http:") + \n"\x2f\x2fwww.googletagservices.com\x2ftag\x2fjs\x2fgpt.js";\nvar node = document.getElementsByTagName("script")[0];\nnode.parentNode.insertBefore(gads, node);\n})();\n}\n\ngoogletag.cmd.push(function() {\nvar slot = googletag.defineSlot("\x2f1003428\x2fPHPClasses-Bottom", [728, 90], "div-gpt-ad-1393793380546-2");\nslot.set("adsense_link_color", "0578C2");\nslot.set("adsense_url_color", "000000");\nslot.set("adsense_text_color", "000066");\nslot.set("adsense_channel_ids", "0566202681");\nslot.set("adsense_ad_types", "text_image");\nslot.addService(googletag.pubads());\ngoogletag.enableServices();\n});\n\x2f\x2f --\x3e\x3c\x2fscript\x3e\n\x3cdiv align="center"\x3e\x3cdiv id="div-gpt-ad-1393793380546-2" style="width:728px; height:90px;"\x3e\n\x3cscript type="text\x2fjavascript"\x3e\x3c!--\ngoogletag.cmd.push(function() { googletag.display("div-gpt-ad-1393793380546-2"); });\n\x2f\x2f --\x3e\x3c\x2fscript\x3e\n\x3c\x2fdiv\x3e\x3c\x2fdiv\x3e\n\x3c\x2fdiv\x3e\n',
	inline: false,
	height: 90,
	priority: 1
});
// --></script>
<script type="text/javascript"><!--
cl.loadContent();
// --></script>

</div>
      </div>
    </div>
    <div id="FooterInfo"><div id="endnavigation"><table width="100%" cellpadding="4" cellspacing="0">
<tr>
<td colspan="15"  style=" border-style: none" height="6"></td>
</tr>
<tr>
<td width="49.5%"  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/buy.png" width="24" height="24" alt="Advertise on this site" align="middle" border="0"> <a href="/sponsor.html" target="_blank">Advertise on this site</a></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/map.png" width="24" height="24" alt="Site map" align="middle" border="0"> <a href="/sitemap/">Site map</a></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/new.png" width="24" height="24" alt="Newsletter" align="middle" border="0"> <a href="/newsletter/">Newsletter</a></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/statistics.png" width="24" height="24" alt="Statistics" align="middle" border="0"> <a href="/browse/statistics/statistics.html">Statistics</a></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/tip.png" width="24" height="24" alt="Site tips" align="middle" border="0"> <a href="/tips.html">Site tips</a></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/privacy.png" width="24" height="24" alt="Privacy policy" align="middle" border="0"> <a href="/faq/#privacy-policy">Privacy policy</a></td>
<td  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
<td  style=" white-space: nowrap ;"><img src="http://files.phpclasses.org/graphics/phpclasses/mail.png" width="24" height="24" alt="Contact" align="middle" border="0"> <a href="/faq/#contact">Contact</a></td>
<td width="49.5%"  style=" white-space: nowrap ; padding: 1px">&nbsp;</td>
</tr>
</table>
</div>
      <div id="Copyright"><div>
<div style="float: left"><address>For more information send a message to <tt><a target="_blank" href="/faq/#contact">info at phpclasses dot org</a></tt>.</address></div>
<div style="float: right">Copyright (c) <a href="http://www.icontem.com/" rel="nofollow" target="_blank">Icontem</a> 1999-2014</div>
</div>
</div>
    </div>
  </div>

</div>

<div style="display: none">
<div id="sitemeter"></div>
<!-- Site Meter -->
<script type="text/javascript">
(function()
{
	var st = document.createElement('script'); st.type = 'text/javascript'; st.async = true;
	st.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://') + 'sm5.sitemeter.com/js/counter.asp?site=sm5phpclasses'; 
	(document.getElementById('sitemeter')).appendChild(st);
})();
</script>
<noscript>
<a href="http://sm5.sitemeter.com/stats.asp?site=sm5phpclasses" rel="nofollow" target="_top">
<img src="http://sm5.sitemeter.com/meter.asp?site=sm5phpclasses" alt="Site Meter" border="0"/></a>
</noscript>
<!-- Copyright (c)2009 Site Meter -->
</div>
</body>
</html>
