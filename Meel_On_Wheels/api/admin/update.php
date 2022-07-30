<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$admin = new Admin($db);


// get raw posted data 
$data = json_decode(file_get_contents("php://input"));

$admin->id = $data->id;
$admin->firstname = $data->firstname;
$admin->lastname = $data->lastname;
$admin->birthday = $data->birthday ;
$admin->email = $data->email;
$admin->password = $data->password;
$admin->phonenumber = $data->phonenumber;
$admin->available_date = $data->available_date;
$admin->nrc = $data->nrc;


// create post
if($admin->update()){
    echo json_encode(
        array('message' => 'Caregiver updated.')
    );
} else {
    echo json_encode(
        array('message' => 'Caregiver not updated.')
    );
}

