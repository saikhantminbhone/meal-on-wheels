<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once('../../core/initialize.php');

// instantiate post
$partner = new Partner($db);

// get raw posted data 
$data = json_decode(file_get_contents("php://input"));


$partner->firstname = $_POST['firstname'];
$partner->lastname = $_POST['lastname'];
$partner->email = $_POST['email'];
$partner->password = $_POST['password'];
$partner->birthday = $_POST['birthday'];
$partner->phonenumber = $_POST['phonenumber'];
$partner->address = $_POST['address'];
$partner->partner_latitude = $_POST['partner_latitude'];
$partner->partner_longitude = $_POST['partner_longitude'];
$partner->city = $_POST['city'];
$partner->nrc = $_POST['nrc'];
$partner->reason = $_POST['reason'];






// create post
if($partner->create()){
    echo json_encode(
        array('message' => 'partner created.')
    );
} else {
    echo json_encode(
        array('message' => 'partner not created.')
    );
}


