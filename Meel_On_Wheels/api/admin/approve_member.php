<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$admin = new Admin($db);

$admin->id = isset($_GET['member_id']) ? $_GET['member_id']: die();

// create post
if($admin->approveMember()){
    echo json_encode(
        array('message' => 'Member updated.')
    );
} else {
    echo json_encode(
        array('message' => 'Member not updated.')
    );
}