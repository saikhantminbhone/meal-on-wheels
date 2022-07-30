<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$meal = new Meal($db);


// get raw posted data 
$data = json_decode(file_get_contents("php://input"));

$meal->id = $data->id;
$meal->name = $data->name;
$meal->ingredients = $data->ingredients;
$meal->description = $data->description;
$meal->meal_type = $data->meal_type;
$meal->date = $data->date;
$meal->status = $data->status;


// create post
if($meal->update()){
    echo json_encode(
        array('message' => 'meal updated.')
    );
} else {
    echo json_encode(
        array('message' => 'meal not updated.')
    );
}

