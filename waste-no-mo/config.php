<?php 

$config = array("base_url" => "http://www-scf.usc.edu/~saraclay/", 
        "providers" => array ( 

            "Facebook" => array ( 
                "enabled" => true,
                "keys"    => array ( "id" => "383976198426118", "secret" => "2049c27bff675f04a6fcd204bfe3869c" ),
                "scope" => "email, user_about_me, user_birthday, user_hometown"  //optional.              
            ),
 
        ),
        // if you want to enable logging, set 'debug_mode' to true  then provide a writable file by the web server on "debug_file"
        "debug_mode" => false,
        "debug_file" => "debug.log",
    );

?>