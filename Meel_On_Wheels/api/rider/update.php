<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$rider = new Rider($db);


// get raw posted data 
$data = json_decode(file_get_contents("php://input"));

$rider->id = $data->id;
$rider->rider_firstname = $data->firstname;
$rider->rider_lastname = $data->lastname;
$rider->rider_birthday = $data->birthday ;
$rider->rider_email = $data->email;
$rider->rider_password = $data->password;
$rider->rider_phonenumber = $data->phonenumber;
$rider->rider_address = $data->address;
$rider->rider_city = $data->city;
$rider->rider_nrc = $data->nrc;
$rider->rider_available_date = $data->available_date;
$rider->rider_reason = $data->reason;


// create post
if($rider->update()){
    echo json_encode(
        array('message' => 'rider updated.')
    );
} else {
    echo json_encode(
        array('message' => 'rider not updated.')
    );
}

