<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');
require '../../vendor/autoload.php';
use Cloudinary\Configuration\Configuration;
use Cloudinary\Api\Upload\UploadApi;
include_once('../../core/initialize.php');

// instantiate post
$member = new Member($db);

Configuration::instance([
    'cloud' => [
      'cloud_name' => 'dya61ymya', 
      'api_key' => '856286355428437', 
      'api_secret' => 'XFt63gWQ1xBNeJj7iFRylkOazwA'],
    'url' => [
      'secure' => true]]);

      if(isset($_FILES['document_photo'])) {
        $files = $_FILES['document_photo'];
    
    
        $filename = $files["tmp_name"];
        // $files = json_decode($_FILES['mealphoto']);
        
       $link = (new UploadApi())->upload($filename);
    
    //    echo json_encode(array('link' => $link["url"]));
    
    
      
      
    } else {
        echo json_encode(
                    array('message' => 'No document photo ')
                );
    }




// get raw posted data 
$data = json_decode(file_get_contents("php://input"));



// $member->caregiver_id = $_POST['caregiver_id'];
$member->member_firstname = $_POST['firstname'];
$member->member_lastname = $_POST['lastname'];
$member->member_birthday = $_POST['birthday'];
$member->member_email = $_POST['email'];
$member->member_password = $_POST['password'];
$member->member_phonenumber = $_POST['phonenumber'];
$member->member_address = $_POST['address'];
$member->member_city = $_POST['city'];
$member->member_nrc = $_POST['nrc'];
$member->member_request_caregiver = $_POST['request_caregiver'];
$member->member_document = $link["url"];
$member->member_approve = $_POST['approve'];
$member->member_reason = $_POST['reason'];





// create post
if($member->create()){
    echo json_encode(
        array('message' => 'member created.')
    );
} else {
    echo json_encode(
        array('message' => 'member not created.')
    );
}


