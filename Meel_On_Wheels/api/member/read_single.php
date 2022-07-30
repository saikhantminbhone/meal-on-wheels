<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$member = new Member($db);

$member->id = isset($_GET['id']) ? $_GET['id']: die();
$member->read_single();

$post_arr = array(
    'id' => $member->member_id,
    'caregiver_id' => $member->caregiver_id,
    'fist_name' => $member->member_firstname,
    'last_name'=> $member->member_lastname,
    'birthday'=> $member->member_birthday, 
    'phonenumber' => $member->member_phonenumber,
    'reason' => $member->member_reason,
    'email' => $member->member_email,
    'password' => $member->member_password,
    'address' => $member->member_address,
    'city' => $member->member_city,
    'nrc' => $member->member_nrc,
    'request_caregiver' => $member->member_request_caregiver,
    'document' => $member->member_document,
    'approve' => $member->member_approve,
    'created_at' => $member->member_created_at

);

// make a json 
print_r(json_encode($post_arr));