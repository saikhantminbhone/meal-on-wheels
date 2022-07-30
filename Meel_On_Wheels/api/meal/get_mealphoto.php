<?php
// headers
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
require '../../vendor/autoload.php';
use Cloudinary\Configuration\Configuration;
use Cloudinary\Api\Upload\UploadApi;



// {$_SERVER['HTTP_ORIGIN']}
include_once('../../core/initialize.php');

// instantiate post
$meal = new Meal($db);

Configuration::instance([
    'cloud' => [
      'cloud_name' => 'dya61ymya', 
      'api_key' => '856286355428437', 
      'api_secret' => 'XFt63gWQ1xBNeJj7iFRylkOazwA'],
    'url' => [
      'secure' => true]]);

      if(isset($_FILES['mealphoto'])) {
        $files = $_FILES['mealphoto'];
    
    
        $filename = $files["tmp_name"];
        // $files = json_decode($_FILES['mealphoto']);
        
       $link = (new UploadApi())->upload($filename);
    
       echo json_encode(array('link' => $link["url"]));
    
    
      
      
    } else {
        echo "say something";
    }
    
    ?>