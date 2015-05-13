<?php

require('http.php');
require('oauth_client.php');

$client = new oauth_client_class;
$client->server = 'Facebook';
$client->debug = false;
$client->debug_http = true;
$client->redirect_uri = 'http://'.$_SERVER['HTTP_HOST'].dirname(strtok($_SERVER['REQUEST_URI'],'?')).'/login_with_facebook.php';
$client->client_id = '383976198426118';/*Client ID*/
$client->client_secret = '2049c27bff675f04a6fcd204bfe3869c';/*Client Secret*/
$client->scope = 'email,user_about_me,user_birthday';

$application_line = __LINE__;

if(strlen($client->client_id) == 0 || strlen($client->client_secret) == 0){

 die('Please go to Facebook Apps page https://developers.facebook.com/apps , '.
  'create an application, and in the line '.$application_line.
  ' set the client_id to App ID/API Key and client_secret with App Secret');
}

if(($success = $client->Initialize())){
 if(($success = $client->Process())){
  if(strlen($client->authorization_error)){
   $client->error = $client->authorization_error;
   $success = false;
  } elseif(strlen($client->access_token)){
   $success = $client->CallAPI('https://graph.facebook.com/me', 'GET', array(), array('FailOnAccessError'=>true), $user);

   if($success){
    $email=$user->email;
    $name=$user->name;
    $gender=$user->gender;
    $birthday=date('d/m/Y', strtotime($user->birthday));
    $image=get_headers("https://graph.facebook.com/me/picture?width=200&height=200&access_token=".$client->access_token,1);
    $image=$i['Location'];
   }
  }
 }

 $success = $client->Finalize($success);
}

if($client->exit){
 die("<a href='".$client->redirect_uri."'>Try Again</a>");
}

if(!$success){
?>

 <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
 <html>
  <head>
   <title>Error</title>
  </head>
  <body>
   <h1>OAuth client error</h1>
   <pre>Error: <?php echo HtmlSpecialChars($client->error); ?></pre>
  </body>
 </html>
<?}?>