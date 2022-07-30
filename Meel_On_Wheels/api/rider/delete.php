<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


//initializing our api 
//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$rider = new Rider($db);

// get raw posted data 
$rider->id = isset($_GET['id']) ? $_GET['id']: die();


// create post
if($rider->delete()){
    echo json_encode(
        array('message' => 'rider deleted.')
    );
} else {
    echo json_encode(
        array('message' => 'rider not deleted.')
    );
}

