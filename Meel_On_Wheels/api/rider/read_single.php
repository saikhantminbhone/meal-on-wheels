<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$rider = new Rider($db);

$rider->id = isset($_GET['id']) ? $_GET['id']: die();
$rider->read_single();

$post_arr = array(

    'id' => $rider->rider_id,
    'fist_name' => $rider->rider_firstname,
    'last_name'=> $rider->rider_lastname,
    'birthday'=> $rider->rider_birthday, 
    'email' => $rider->rider_email,
    'password' => $rider->rider_password,
    'phno' => $rider->rider_phonenumber,
    'address' => $rider->rider_address,
    'city' => $rider->rider_city,
    'nrc' => $rider->rider_nrc,
    'available_date' => $rider->rider_available_date,
    'reason' => $rider->rider_reason,            
    'created_at' => $rider->rider_created_at
);

// make a json 
print_r(json_encode($post_arr));