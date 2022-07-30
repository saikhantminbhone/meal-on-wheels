<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$meal = new Meal($db);

$meal->id = isset($_GET['id']) ? $_GET['id']: die();
$meal->read_single();

$post_arr = array(

    'id' => $meal->meal_id,
    'name' => $meal->name,
    'ingredients' => $meal->ingredients,
    'description' => $meal->description,
    'meal_type' => $meal->meal_type,
    'date' => $meal->date,
    'meal_image' => $meal->meal_image,
    'status' => $meal->status,
    'created_at' => $meal->created_at

);

// make a json 
print_r(json_encode($post_arr));