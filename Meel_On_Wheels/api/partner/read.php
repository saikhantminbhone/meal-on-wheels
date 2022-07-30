<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$partner = new Partner($db);

// blog post query 
$result = $partner->read();

//get the row count 
$num = $result->rowCount();


if($num > 0 ){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_item = array(
            'id' => $partner_id,
            'fist_name' => $firstname,
            'last_name'=> $lastname,
            'email' => $email,
            'password' => $password,
            'birthday'=> $birthday, 
            'phno' => $phonenumber,
            'address' => $address,
            'partner_latitude' => $partner_latitude,
            'partner_longitude' => $partner_longitude,
            'city' => $city,
            'nrc' => $nrc,
            'reason' => $reason,
            'created_at' => $created_at
        );
        
        array_push($post_arr['data'], $post_item);

    }

    // convert to JSON and output
    echo json_encode($post_arr);

} else {
    echo json_encode(array('mesasge' => 'No partner found.'));
}