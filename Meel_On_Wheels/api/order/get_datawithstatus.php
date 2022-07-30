<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$order = new Order($db);

// blog post query 
$order->status = isset($_GET['status']) ? $_GET['status']: die();
$result = $order->deliverList();

//get the row count 
$num = $result->rowCount();


if($num > 0 ){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_item = array(
            'id' => $order_id,
            'qty' => $qty,
            'address' => $address,
            'meal_type' => $meal_type,
            'order_latitude' => $order_latitude,
            'order_longitude' => $order_longitude,
            'status' => $status,
            'member_id' => $member_id,
            'created_at' => $created_at
        );
        
        array_push($post_arr['data'], $post_item);
        // echo "<pre>";
        // var_dump($post_arr);
        // die();
        
    }

    // convert to JSON and output
    echo json_encode($post_arr);

} else {
    echo json_encode(array('mesasge' => 'No order found.'));
}