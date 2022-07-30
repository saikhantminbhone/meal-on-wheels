<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
 
//initializing our api
include_once('../../core/initialize.php');
 
// instantiate post
$rider = new Rider($db);
 
$result = $rider->getAllStatusOrder();
 
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

 
