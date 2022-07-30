<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

//initializing our api 
include_once('../../core/initialize.php');

// instantiate post
$admin = new Admin($db);

// blog post query 
$sum_donationresult = $admin->sumDonation();
$sum_cashoutresult = $admin->sumCashOutDonation();

$expense = $sum_donationresult - $sum_cashoutresult;
$expense_amount = array(
    'expense_amount' => $expense
);


if(isset($expense_amount)){


    // convert to JSON and output
    echo json_encode($expense_amount);

} else {
    echo json_encode(array('mesasge' => 'No expense found.'));
}