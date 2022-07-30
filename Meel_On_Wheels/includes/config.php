<?php

    $db_user = 'root';
    $db_password = 'admin';
    $db_name = 'mealonwheels';

    $db = new PDO('mysql:host=localhost:3306;dbname='.$db_name.';charset=utf8',$db_user,$db_password);


    //set some db attributes 
    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
    $db->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, true);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    define('APP_NAME','Meel On Weels Application');


?>