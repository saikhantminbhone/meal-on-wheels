<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$member = new Member($db);


// get raw posted data 
$data = json_decode(file_get_contents("php://input"));



$member->id = $data->id;
$member->caregiver_id = $data->caregiver_id;
$member->member_firstname = $data->firstname;
$member->member_lastname = $data->lastname;
$member->member_birthday = $data->birthday ;
$member->member_phonenumber = $data->phonenumber ;
$member->member_email = $data->email;
$member->member_password = $data->password;
$member->member_address = $data->address;
$member->member_city = $data->city;
$member->member_nrc = $data->nrc;
$member->member_request_caregiver = $data->request_caregiver;

// create post
if($member->update()){
    echo json_encode(
        array('message' => 'member updated.')
    );
} else {
    echo json_encode(
        array('message' => 'member not updated.')
    );
}

