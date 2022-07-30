<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$admin = new Admin($db);

// blog post query 
$sum_result = $admin->sumDonation();
        // var_dump($sum_result);
        // die();

$sum_donation = array(
    'sum_donation' => $sum_result
);


if(isset($sum_donation)){


    // convert to JSON and output
    echo json_encode($sum_donation);

} else {
    echo json_encode(array('mesasge' => 'No donation found.'));
}