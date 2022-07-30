<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once('../../core/initialize.php');

// instantiate post
$caregiver = new Caregiver($db);




// get raw posted data 
$data = json_decode(file_get_contents("php://input"));

// echo "<pre>";
// print_r($data);
// die();

$caregiver->caregiver_firstname = $_POST['firstname'];
$caregiver->caregiver_lastname = $_POST['lastname'];
$caregiver->caregiver_birthday = $_POST['birthday'];
$caregiver->caregiver_email = $_POST['email'];
$caregiver->caregiver_password = $_POST['password'];
$caregiver->caregiver_phonenumber = $_POST['phonenumber'];
$caregiver->caregiver_address = $_POST['address'];
$caregiver->caregiver_city = $_POST['city'];
$caregiver->caregiver_nrc = $_POST['nrc'];
$caregiver->caregiver_reason = $_POST['reason'];
$caregiver->caregiver_available_date = $_POST['available_date'];





// create post
if($caregiver->create()){
    echo json_encode(
        array('message' => 'Caregiver created.')
    );
} else {
    echo json_encode(
        array('message' => 'Caregiver not created.')
    );
}


