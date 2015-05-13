<?php
//
// uses the PHP SDK. Download from https://github.com/facebook/php-sdk
include("facebook-php-sdk/src/facebook.php");
 
//
// from the facebook app page
define('YOUR_APP_ID', '383976198426118');
define('YOUR_APP_SECRET', '2049c27bff675f04a6fcd204bfe3869c');
 
//
// new facebook object to interact with facebook
$facebook = new Facebook(array(
 'appId' => 383976198426118

//,
 'secret' => 2049c27bff675f04a6fcd204bfe3869c,
));
//
// if user is logged in on facebook and already gave permissions
// to your app, get his data:
$userId = $facebook->getUser();
 
?>
<html>
<head>
 <style>body { text-align:center; font-size: 40px }</style>
</head>
<body>
<?php
if ($userId) {
 //
 // already logged? show some data
 $userInfo = $facebook->api('/' + $userId);
 
echo "<p>YOU ARE: <strong>". $userInfo['name'] ."</strong><br/>";
echo "Your birth date is: ".$userInfo['birthday']."</p>";
 
 
 
} else {
 //
 // use javaascript api to open dialogue and perform
 // the facebook connect process by inserting the fb:login-button
 ?>
 <div id="fb-root"></div>
 <fb:login-button scope='email,user_birthday'></fb:login-button>
 <?php
}
?>
 <script>
 window.fbAsyncInit = function() {
 FB.init({
 appId : <?=383976198426118?>,
 status : true,
 cookie : true,
 xfbml : true,
 oauth : true,
 });
 
FB.Event.subscribe('auth.login', function(response) {
 // ------------------------------------------------------
 // This is the callback if everything is ok
 window.location.reload();
 });
 };
 
(function(d){
 var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
 js = d.createElement('script'); js.id = id; js.async = true;
 js.src = "//connect.facebook.net/en_US/all.js";
 d.getElementsByTagName('head')[0].appendChild(js);
 }(document));
</script>
</body>
</html>