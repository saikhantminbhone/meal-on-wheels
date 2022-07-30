<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$caregiver = new Caregiver($db);

$caregiver->id = isset($_GET['id']) ? $_GET['id']: die();
$caregiver->read_single();

$post_arr = array(

    'id' => $caregiver->caregiver_id,
    'fist_name' => $caregiver->caregiver_firstname,
    'last_name'=> $caregiver->caregiver_lastname,
    'birthday'=> $caregiver->caregiver_birthday, 
    'email' => $caregiver->caregiver_email,
    'password' => $caregiver->caregiver_password,
    'phno' => $caregiver->caregiver_phonenumber,
    'address' => $caregiver->caregiver_address,
    'city' => $caregiver->caregiver_city,
    'nrc' => $caregiver->caregiver_nrc,
    'reason' => $caregiver->caregiver_reason,
    'available_date' => $caregiver->caregiver_available_date,
    'created_at' => $caregiver->caregiver_created_at

);

// make a json 
print_r(json_encode($post_arr));