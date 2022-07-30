<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$partner = new Partner($db);

$partner->id = isset($_GET['id']) ? $_GET['id']: die();
$partner->read_single();

$post_arr = array(

    'id' => $partner->partner_id,
    'fist_name' => $partner->firstname,
    'last_name'=> $partner->lastname,
    'email' => $partner->email,
    'password' => $partner->password,
    'birthday'=> $partner->birthday, 
    'phno' => $partner->phonenumber,
    'address' => $partner->address,
    'partner_latitude' => $partner->partner_latitude,
    'partner_longitude' => $partner->partner_longitude,
    'city' => $partner->city,
    'nrc' => $partner->nrc,
    'reason' => $partner->reason,
    'created_at' => $partner->created_at

);

// make a json 
print_r(json_encode($post_arr));