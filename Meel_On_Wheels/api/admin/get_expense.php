<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once('../../core/initialize.php');

// instantiate post
$admin = new Admin($db);




// get raw posted data 
$data = json_decode(file_get_contents("php://input"));


$admin->name = $data->name;
$admin->cashout_amount = $data->cashout_amount;
$admin->cashout_description = $data->cashout_description;
$admin->cashout_date =$date = date('Y-m-d H:i:s');
$admin->admin_id = 1;







// create post
if($admin->getExpense()){
    echo json_encode(
        array('message' => 'Expense created.')
    );
} else {
    echo json_encode(
        array('message' => 'Expense not created.')
    );
}

