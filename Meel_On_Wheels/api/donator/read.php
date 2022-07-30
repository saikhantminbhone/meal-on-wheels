<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$donator = new Donator($db);

// blog post query 
$result = $donator->read();

//get the row count 
$num = $result->rowCount();


if($num > 0 ){
    $post_arr = array();
    $post_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        extract($row);
        $post_item = array(
            'id' => $donator_id,
            'fist_name' => $firstname,
            'last_name'=> $lastname,
            'email' => $email,
            'phno' => $phonenumber,
            'amount' => $amount,
            'date' => $date,     
            'created_at' => $created_at,
            'name'=>$name,
            'cashout_amount'=>$cashout_amount,
            'cashout_description'=>$cashout_description,
            'cashout_date'=>$cashout_date,

        );
        
        array_push($post_arr['data'], $post_item);
        // echo "<pre>";
        // var_dump($post_arr);
        // die();
        
    }

    // convert to JSON and output
    echo json_encode($post_arr);

} else {
    echo json_encode(array('mesasge' => 'No posts found.'));
}