<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$caregiver = new Caregiver($db);


// get raw posted data 
$data = json_decode(file_get_contents("php://input"));

$caregiver->id = $data->id;
$caregiver->caregiver_firstname = $data->firstname;
$caregiver->caregiver_lastname = $data->lastname;
$caregiver->caregiver_birthday = $data->birthday ;
$caregiver->caregiver_email = $data->email;
$caregiver->caregiver_password = $data->password;
$caregiver->caregiver_phonenumber = $data->phonenumber;
$caregiver->caregiver_address = $data->address;
$caregiver->caregiver_city = $data->city;
$caregiver->caregiver_nrc = $data->nrc;
$caregiver->caregiver_reason = $data->reason;
$caregiver->caregiver_available_date = $data->available_date;

// create post
if($caregiver->update()){
    echo json_encode(
        array('message' => 'Caregiver updated.')
    );
} else {
    echo json_encode(
        array('message' => 'Caregiver not updated.')
    );
}

