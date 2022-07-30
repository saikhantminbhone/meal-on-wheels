<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$caregiver = new Caregiver($db);

// blog post query 
$result = $caregiver->read();

//get the row count 
$num = $result->rowCount();


if($num > 0 ){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
       
        extract($row);
        $post_item = array(
            'id' => $caregiver_id,
            'fistname' => $caregiver_firstname,
            'lastname'=> $caregiver_lastname,
            'birthday'=> $caregiver_birthday, 
            'email' => $caregiver_email,
            'password' => $caregiver_password,
            'phno' => $caregiver_phonenumber,
            'address' => $caregiver_address,
            'city' => $caregiver_city,
            'nrc' => $caregiver_nrc,
            'reason' => $caregiver_reason,
            'available_date' => $caregiver_available_date,
            'created_at' => $caregiver_created_at
        );
        
        array_push($post_arr['data'], $post_item);
        // echo "<pre>";
        // var_dump($post_arr);
        // die();
        
    }

    // convert to JSON and output
    echo json_encode($post_arr);

} else {
    echo json_encode(array('mesasge' => 'No caregiver found.'));
}