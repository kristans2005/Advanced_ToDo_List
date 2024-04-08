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

//te dabus login datus no frontend un tev ir jarparbauda vai 
//users pastav un vai ari parole ir pareiza ja viss ok, tad login user

if($_SERVER['REQUEST_METHOD'] === 'POST') {

    //seit bus dati kas atnaks no front end
    $data = json_decode(file_get_contents("php://input"), true);

}