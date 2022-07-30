<?php
// headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

include_once('../core/initialize.php');

$data = json_decode(file_get_contents("php://input"));
$email = $data->email;
$password = $data->password;
// instantiate post
$login = new Login($db,$email,$password);



if($login->validation()) {


    $data = $login->logindata;
    echo json_encode($data);
}




// // create post
// if($login->validation()){
//     echo json_encode(
//         array('message' => 'User login successfull.')
//     );
// } else {
//     echo json_encode(
//         array('message' => 'User login not successfull.')
//     );
// }
