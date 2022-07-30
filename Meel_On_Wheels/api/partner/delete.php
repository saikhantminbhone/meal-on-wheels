<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


//initializing our api 
//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$partner = new Partner($db);

// get raw posted data 
$partner->id = isset($_GET['id']) ? $_GET['id']: die();


// create post
if($partner->delete()){
    echo json_encode(
        array('message' => 'partner deleted.')
    );
} else {
    echo json_encode(
        array('message' => 'partner not deleted.')
    );
}

