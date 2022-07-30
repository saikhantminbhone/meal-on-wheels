<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$admin = new Admin($db);

// blog post query 
$result = $admin->read();

//get the row count 
$num = $result->rowCount();


if($num > 0 ){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_item = array(
            'id' => $admin_id,
            'fist_name' => $firstname,
            'last_name'=> $lastname,
            'birthday'=> $birthday,
            'email' => $email,
            'password' => $password,
            'phno' => $phonenumber,
            'available_date' => $available_date,   
            'nrc' => $nrc,          
            'created_at' => $created_at
        );
        
        array_push($post_arr['data'], $post_item);

    }

    // convert to JSON and output
    echo json_encode($post_arr);

} else {
    echo json_encode(array('mesasge' => 'No admin found.'));
}