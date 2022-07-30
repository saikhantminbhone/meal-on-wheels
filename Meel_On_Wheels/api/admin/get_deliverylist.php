<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$admin = new Admin($db);

// blog post query 
$result = $admin->getDeliveryList();

//get the row count 
$num = $result->rowCount();


if($num > 0 ){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_item = array(
            
            'member_firstname' => $member_firstname,
            'member_lastname'=> $member_lastname,
            'member_phonenumber'=> $member_phonenumber,
            'order_address' => $address,
            'rider_firstname'=> $rider_firstname,
            'rider_lastname'=> $rider_lastname,
            'rider_phonenumber'=> $rider_phonenumber,
            'order_created_at'=> $created_at,
            'status'=> $status,
    
        );
        
        array_push($post_arr['data'], $post_item);

    }

    // convert to JSON and output
    echo json_encode($post_arr);

} else {
    echo json_encode(array('mesasge' => 'No admin found.'));
}