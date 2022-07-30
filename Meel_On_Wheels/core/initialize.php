<?php
    defined('DS') ? null : define('DS', DIRECTORY_SEPARATOR);
    defined('SITE_ROOT') ? null : define('SITE_ROOT','C:'.DS.'xampp'.DS.'htdocs'.DS.'Meel_On_Wheels');
    
    //xampp/htdocs/phprest/includes
    defined('INC_PATH') ? null : define('INC_PATH', SITE_ROOT.DS.'includes');
    defined('CORE_PATH') ? null : define('CORE_PATH', SITE_ROOT.DS.'core');

    // print_r(INC_PATH);

    // load the config file first 
    require_once(INC_PATH.DS."config.php");

    //core classes 
    require_once(CORE_PATH.DS."Caregiver.php");
    require_once(CORE_PATH.DS."Admin.php");
    require_once(CORE_PATH.DS."Donator.php");
    require_once(CORE_PATH.DS."Meal.php");
    require_once(CORE_PATH.DS."Member.php");
    require_once(CORE_PATH.DS."Order.php");
    require_once(CORE_PATH.DS."Partner.php");
    require_once(CORE_PATH.DS."Rider.php");
    require_once(CORE_PATH.DS."Login.php");

    // require_once("C:/xampp/htdocs/Meel_On_Wheels/includes/config.php");
    // require_once("Caregiver.php");

?>