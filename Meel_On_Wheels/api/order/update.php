<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$order = new Order($db);


// get raw posted data 
$data = json_decode(file_get_contents("php://input"));

$order->id = $data->id;
$order->qty = $data->qty;
$order->address = $data->address;
$order->meal_type = $data->meal_type;
$order->order_latitude = $data->order_latitude;
$order->order_longitude = $data->order_longitude;
$order->status = $data->status;
$order->member_id = $data->member_id;

// create post
if($order->update()){
    echo json_encode(
        array('message' => 'order updated.')
    );
} else {
    echo json_encode(
        array('message' => 'order not updated.')
    );
}

