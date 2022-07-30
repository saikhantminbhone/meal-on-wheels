<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once('../../core/initialize.php');

// instantiate post
$donator = new Donator($db);

// get raw posted data 
$data = json_decode(file_get_contents("php://input"));

$date = date('Y/m/d H:i:s');

$donator->firstname = $data->firstname;
$donator->lastname = $data->lastname;
$donator->email = $data->email;
$donator->phonenumber = $data->phonenumber;
$donator->amount = $data->amount;
$donator->date = $date;








// create post
if($donator->create()){
    echo json_encode(
        array('message' => 'donator created.')
    );
} else {
    echo json_encode(
        array('message' => 'donator not created.')
    );
}


