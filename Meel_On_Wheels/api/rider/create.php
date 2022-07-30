<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once('../../core/initialize.php');

// instantiate post
$rider = new Rider($db);

// get raw posted data 
$data = json_decode(file_get_contents("php://input"));


$rider->rider_firstname =$_POST['firstname'];
$rider->rider_lastname =$_POST['lastname'];
$rider->rider_birthday =$_POST['birthday'];
$rider->rider_email =$_POST['email'];
$rider->rider_password =$_POST['password'];
$rider->rider_phonenumber =$_POST['phonenumber'];
$rider->rider_address =$_POST['address'];
$rider->rider_city =$_POST['city'];
$rider->rider_nrc =$_POST['nrc'];
$rider->rider_available_date =$_POST['available_date'];
$rider->rider_reason =$_POST['reason'];






// create post
if($rider->create()){
    echo json_encode(
        array('message' => 'rider created.')
    );
} else {
    echo json_encode(
        array('message' => 'rider not created.')
    );
}


