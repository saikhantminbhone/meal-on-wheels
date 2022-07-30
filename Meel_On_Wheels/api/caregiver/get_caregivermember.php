<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$caregiver = new Caregiver($db);

// blog post query 
$result = $caregiver->getCaregiverMember();

//get the row count 
$num = $result->rowCount();


if($num > 0 ){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){

        extract($row);
        $post_item = array(
            'member_id' => $member_id,
            'caregiver_id' => $caregiver_id,
            'member_fistname' => $member_firstname,
            'member_lastname'=> $member_lastname,
            'member_birthday'=> $member_birthday, 
            'member_email' => $member_email,
            'member_password' => $member_password,
            'member_phonenumber' => $member_phonenumber,
            'member_address' => $member_address,
            'member_city' => $member_city,
            'member_nrc' => $member_nrc,
            'member_request_caregiver' => $member_request_caregiver,
            'member_document' => $member_document,
            'member_approve' => $member_approve,
            'member_created_at' => $member_created_at,
            'caregiver_id' => $caregiver_id,
            'caregiver_first_name' => $caregiver_firstname,
            'caregiver_last_name'=> $caregiver_lastname,
            'caregiver_birthday'=> $caregiver_birthday, 
            'caregiver_email' => $caregiver_email,
            'caregiver_password' => $caregiver_password,
            'caregiver_phno' => $caregiver_phonenumber,
            'caregiver_address' => $caregiver_address,
            'caregiver_city' => $caregiver_city,
            'caregiver_nrc' => $caregiver_nrc,
            'caregiver_reason' => $caregiver_reason,
            'caregiver_available_date' => $caregiver_available_date,
            'caregiver_created_at' => $caregiver_created_at
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