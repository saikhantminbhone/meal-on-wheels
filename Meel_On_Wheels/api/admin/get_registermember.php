<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$admin = new Admin($db);

// blog post query 
$result = $admin->getRegisterMember();

//get the row count 
$num = $result->rowCount();


if($num > 0 ){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_item = array(
            'id' => $member_id,
            'caregiver_id' => $caregiver_id,
            'fist_name' => $firstname,
            'last_name'=> $lastname,
            'birthday'=> $birthday, 
            'email' => $email,
            'password' => $password,
            'phonenumber' => $phonenumber,
            'address' => $address,
            'city' => $city,
            'nrc' => $nrc,
            'request_caregiver' => $request_caregiver,
            'document' => $document,
            'approve' => $approve,
            'created_at' => $created_at
        );
        
        array_push($post_arr['data'], $post_item);

    }

    // convert to JSON and output
    echo json_encode($post_arr);

} else {
    echo json_encode(array('mesasge' => 'No member found.'));
}