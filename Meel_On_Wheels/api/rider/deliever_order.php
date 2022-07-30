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




// create post
if($rider->deliverOrder()){
    echo json_encode(
        array('message' => 'order delivered')
    );
} else {
    echo json_encode(
        array('message' => 'order not delivered.')
    );
}
