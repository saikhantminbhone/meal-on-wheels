<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$meal = new Meal($db);
$meal->meal_type = isset($_GET['meal_type']) ? $_GET['meal_type']: die();

$meal->getMealWithDate();
$post_arr = array(
    'meal_id' => $meal->meal_id,


);

// make a json 
print_r(json_encode($post_arr));