<?php

//premisons
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require "../../dbConnection.php";
require "../../models/userModel.php";

$db = new dbConnection;
$userModel = new UserModel($db);

//parbaude
//vai vards nav jau izmantots
//vai parole nav par mazu / palielu
//gmail ir valid
//utt ja kautko aizmirsu

//encrypto password

if($_SERVER['REQUEST_METHOD'] === 'POST') {

    //seit bus dati kas atnaks no front end
    $data = json_decode(file_get_contents("php://input"), true);
    
    

}