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
$partner->status = $data->status;




// create post
if($partner->acceptOrder()){
    echo json_encode(
        array('message' => 'order accepted by partner.')
    );
} else {
    echo json_encode(
        array('message' => 'order not accepted by partner.')
    );
}
