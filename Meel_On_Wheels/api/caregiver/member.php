<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');


// instantiate post
$caregiver = new Caregiver($db);

// blog post query 
$result = $caregiver->getMember();

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
            'fist_name' => $member_firstname,
            'last_name'=> $member_lastname,
            'birthday'=> $member_birthday, 
            'email' => $member_email,
            'password' => $member_password,
            'phonenumber' => $member_phonenumber,
            'address' => $member_address,
            'city' => $member_city,
            'nrc' => $member_nrc,
            'request_caregiver' => $member_request_caregiver,
            'document' => $member_document,
            'approve' => $member_approve,
            'created_at' => $member_created_at
        );
        
        array_push($post_arr['data'], $post_item);

        
    }

    // convert to JSON and output
    echo json_encode($post_arr);

} else {
    echo json_encode(array('mesasge' => 'No members found.'));
}
