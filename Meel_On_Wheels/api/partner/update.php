<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$partner = new Partner($db);


// get raw posted data 
$data = json_decode(file_get_contents("php://input"));


$partner->id = $data->id;
$partner->firstname = $data->firstname;
$partner->lastname = $data->lastname;
$partner->email = $data->email;
$partner->password = $data->password;
$partner->birthday = $data->birthday ;
$partner->phonenumber = $data->phonenumber;
$partner->address = $data->address;
$partner->partner_latitude = $data->partner_latitude;
$partner->partner_longitude = $data->partner_longitude;
$partner->city = $data->city;
$partner->nrc = $data->nrc;
$partner->reason = $data->reason;

// create post
if($partner->update()){
    echo json_encode(
        array('message' => 'partner updated.')
    );
} else {
    echo json_encode(
        array('message' => 'partner not updated.')
    );
}

