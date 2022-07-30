<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$admin = new Admin($db);

$admin->id = isset($_GET['id']) ? $_GET['id']: die();
$admin->read_single();

$post_arr = array(

    'id' => $admin->admin_id,
    'fist_name' => $admin->firstname,
    'last_name'=> $admin->lastname,
    'birthday'=> $admin->birthday, 
    'email' => $admin->email,
    'password' => $admin->password,
    'phno' => $admin->phonenumber,
    'available_date' => $admin->available_date,
    'nrc' => $admin->nrc,
    'created_at' => $admin->created_at

);

// make a json 
print_r(json_encode($post_arr));