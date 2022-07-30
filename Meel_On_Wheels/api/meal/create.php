<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
require '../../vendor/autoload.php';
use Cloudinary\Configuration\Configuration;
use Cloudinary\Api\Upload\UploadApi;

include_once('../../core/initialize.php');

// instantiate post
$meal = new Meal($db);

// get raw posted data 
// $data = json_decode(file_get_contents("php://input"));

$meal->partner_id = isset($_GET['partner_id']) ? $_GET['partner_id']: die();


Configuration::instance([
    'cloud' => [
      'cloud_name' => 'dya61ymya', 
      'api_key' => '856286355428437', 
      'api_secret' => 'XFt63gWQ1xBNeJj7iFRylkOazwA'],
    'url' => [
      'secure' => true]]);

      if(isset($_FILES['meal_photo'])) {
        $files = $_FILES['meal_photo'];
    
    
        $filename = $files["tmp_name"];
        // $files = json_decode($_FILES['mealphoto']);
        
       $link = (new UploadApi())->upload($filename);
    
    //    echo json_encode(array('link' => $link["url"]));
    //    die();
    
    
      
      
    } else {
        echo json_encode(
                    array('message' => 'No photo in add meal')
                );
    }




$meal->name = $_POST['name'];
$meal->ingredients = $_POST['ingredients'];
$meal->description = $_POST['description'];
$meal->meal_type = $_POST['meal_type'];
$meal->meal_image = $link["url"];
$meal->date = $_POST['date'];
$meal->status = $_POST['status'];






// create post
if($meal->create()){
    echo json_encode(
        array('message' => 'meal created.')
    );
} else {
    echo json_encode(
        array('message' => 'meal not created.')
    );
}


