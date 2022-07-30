<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

//initializing our api 
//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$donator = new Donator($db);

// get raw posted data 
$data = json_decode(file_get_contents("php://input"));

$donator->id = $data->id;


// create post
if($donator->delete()){
    echo json_encode(
        array('message' => 'donator deleted.')
    );
} else {
    echo json_encode(
        array('message' => 'donator not deleted.')
    );
}

