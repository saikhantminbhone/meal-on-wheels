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
$rider->status = $data->status;
$rider->rider_id = $data->rider_id;



// create post
if($rider->acceptOrder()){
    echo json_encode(
        array('message' => 'order updated.')
    );
} else {
    echo json_encode(
        array('message' => 'order not updated.')
    );
}
