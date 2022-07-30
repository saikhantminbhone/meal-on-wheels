<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once('../../core/initialize.php');

// instantiate post
$order = new Order($db);

// $meal->meal_id = isset($_GET['meal_id']) ? $_GET['meal_id']: die();

// get raw posted data 
$data = json_decode(file_get_contents("php://input"));




$order->meal_id = $_POST['meal_id'];
$order->qty = $_POST['qty'];
$order->address = $_POST['address'];
$order->meal_type = $_POST['meal_type'];
$order->order_latitude = $_POST['order_latitude'];
$order->order_longitude = $_POST['order_longitude'];
$order->status = $_POST['status'];
$order->member_id = $_POST['member_id'];

// create post
if($order->create()){
    echo json_encode(
        array('message' => 'order created.')
    );
} else {
    echo json_encode(
        array('message' => 'order not created.')
    );
}


