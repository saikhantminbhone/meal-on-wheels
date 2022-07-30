<?php 

    $lat1 = 16.8551751;
    $lon1 = 96.1818429;
    $lat2 = 17.31393222192293;
    $lon2 = 96.48193359375001;



// function distance($lat1, $lon1, $lat2, $lon2, $unit) {

//     $theta = $lon1 - $lon2;
//     $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
//     $dist = acos($dist);
//     $dist = rad2deg($dist);
//     $miles = $dist * 60 * 1.1515;
//     $unit = strtoupper($unit);
  
//     if ($unit == "K") {
//         return round($miles * 1.609344);
//     } else if ($unit == "N") {
//         return round($miles * 0.8684);
//     } else {
//         return round($miles);
    
//     }

// }


function distance($lat1, $lon1, $lat2, $lon2) {

    $theta = $lon1 - $lon2;
    $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
    $dist = acos($dist);
    $dist = rad2deg($dist);
    $miles = $dist * 60 * 1.1515;

    return round($miles * 1.609344);

}


echo distance($lat1, $lon1, $lat2, $lon2);