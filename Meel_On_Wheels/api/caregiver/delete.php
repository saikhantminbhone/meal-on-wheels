<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
// header('Access-Control-Allow-Methods: DELETE');
// header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

//initializing our api 
//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$caregiver = new Caregiver($db);


$caregiver->id = isset($_GET['id']) ? $_GET['id']: die();


// get raw posted data 
// $data = json_decode(file_get_contents("php://input"));

// $caregiver->id = $data->id;


// create post
if($caregiver->delete()){
    echo json_encode(
        array('message' => 'Caregiver deleted.')
    );
} else {
    echo json_encode(
        array('message' => 'Caregiver not deleted.')
    );
}

