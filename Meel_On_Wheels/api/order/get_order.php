<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$order = new Order($db);

$order->meal_id = isset($_GET['meal_id']) ? $_GET['meal_id']: die();
$order->getOrderStatus();


$post_arr = array(

    'distance_result' => $order->distance

);

// make a json 
print_r(json_encode($post_arr));