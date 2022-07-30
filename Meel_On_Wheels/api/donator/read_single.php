<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$donator = new Donator($db);

$donator->id = isset($_GET['id']) ? $_GET['id']: die();
$donator->read_single();



$post_arr = array(

    'id' => $donator->donator_id,
    'fist_name' => $donator->firstname,
    'last_name'=> $donator->lastname,
    'email' => $donator->email,
    'phno' => $donator->phonenumber,
    'amount' => $donator->amount,
    'date' => $donator->date,     
    'created_at' => $donator->created_at


);

// make a json 
print_r(json_encode($post_arr));