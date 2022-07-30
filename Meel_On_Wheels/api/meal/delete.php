<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
// header('Access-Control-Allow-Methods: DELETE');
// header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

//initializing our api 
//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$meal = new Meal($db);

// get raw posted data 
$meal->id = isset($_GET['id']) ? $_GET['id']: die();


// create post
if($meal->delete()){
    echo json_encode(
        array('message' => 'meal deleted.')
    );
} else {
    echo json_encode(
        array('message' => 'meal not deleted.')
    );
}

