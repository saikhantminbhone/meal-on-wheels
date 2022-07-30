<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post

$rider = new Rider($db);
$rider->id = isset($_GET['id']) ? $_GET['id']: die();
// blog post query 
$result = $rider->orderDetails();

//get the row count 
$num = $result->rowCount();


if($num > 0 ){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_item = array(
            'member_firstname' => $member_firstname,
            'member_lastname' => $member_lastname,
            'member_phonenumber' => $member_phonenumber,
            'member_address' => $member_address,
            'meal_name' => $name,
            'meal_type' => $meal_type,
            'partner_address' => $address,
            'partner_phonenumber' => $phonenumber,

        );
        
        array_push($post_arr['data'], $post_item);

        
    }

    // convert to JSON and output
    echo json_encode($post_arr);

} else {
    echo json_encode(array('mesasge' => 'No order found.'));
}