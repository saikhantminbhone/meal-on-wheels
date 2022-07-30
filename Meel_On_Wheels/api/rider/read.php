<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$rider = new Rider($db);

// blog post query 
$result = $rider->read();

//get the row count 
$num = $result->rowCount();


if($num > 0 ){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_item = array(
            'id' => $rider_id,
            'fist_name' => $rider_firstname,
            'last_name'=> $rider_lastname,
            'birthday'=> $rider_birthday, 
            'email' => $rider_email,
            'password' => $rider_password,
            'phno' => $rider_phonenumber,
            'address' => $rider_address,
            'city' => $rider_city,
            'nrc' => $rider_nrc,
            'available_date' => $rider_available_date,
            'reason' => $rider_reason,            
            'created_at' => $rider_created_at
        );
        
        array_push($post_arr['data'], $post_item);

        
    }

    // convert to JSON and output
    echo json_encode($post_arr);

} else {
    echo json_encode(array('mesasge' => 'No rider found.'));
}