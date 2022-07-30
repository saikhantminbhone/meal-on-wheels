<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$order = new Order($db);

$order->id = isset($_GET['id']) ? $_GET['id']: die();
$order->read_single();

$post_arr = array(

    'id' => $order->order_id,
    'qty' => $order->qty,
    'address' => $order->address,
    'meal_type' => $order->meal_type,
    'order_latitude' => $order->order_latitude,
    'order_longitude' => $order->order_longitude,
    'status' => $order->status,
    'member_id' => $order->member_id,
    'created_at' => $order->created_at

);

// make a json 
print_r(json_encode($post_arr));