<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$caregiver = new Caregiver($db);

$caregiver->id = isset($_GET['id']) ? $_GET['id']: die();

// blog post query 
$result = $caregiver->getAcceptedMember();

//get the row count 
$num = $result->rowCount();


if($num > 0 ){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        
        extract($row);
        $post_item = array(
            'member_id' => $member_id,
            'fist_name' => $member_firstname,
            'last_name'=> $member_lastname,
            'phonenumber'=> $member_phonenumber,
            'email'=>$member_email,
        );
        
        array_push($post_arr['data'], $post_item);
        // echo "<pre>";
        // var_dump($post_arr);
        // die();
        
    }

    // convert to JSON and output
    echo json_encode($post_arr);

} else {
    echo json_encode(array('mesasge' => 'No member found.'));
}