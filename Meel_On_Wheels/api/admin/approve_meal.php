<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
// header('Access-Control-Allow-Methods: PUT');
// header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$admin = new Admin($db);


// get raw posted data 
$admin->id = isset($_GET['id']) ? $_GET['id']: die();

// $data = json_decode(file_get_contents("php://input"));

// $admin->id = $data->id;



// create post
if($admin->approveMeal()){
    echo json_encode(
        array('message' => 'meal updated.')
    );
} else {
    echo json_encode(
        array('message' => 'meal not updated.')
    );
}
