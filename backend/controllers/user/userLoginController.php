<?php

//premisons
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
//header("Content-Type: application/json");

require "../../dbConnection.php";
require "../../models/userModel.php";
require "../../utils/validator.php";

$db = new dbConnection;
$userModel = new UserModel($db);

//te dabus login datus no frontend un tev ir jarparbauda vai 
//users pastav un vai ari parole ir pareiza ja viss ok, tad login user


if($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    
    $data = json_decode(file_get_contents("php://input"), true);

    $errors = [];

    if(!$userModel->doesUserExist($data["username"])) {
        echo $errors["username"] = "User does not exist!";    
    }else{
        $UserData = $userModel->getUserInfo($data['username']);


        if(!Validator::verifyPassword($data["password"], $UserData[0]["password"])) {
            $errors["password"] = "Password is not correct!";
        }

        if(empty($errors)) {
            echo "everything is ok!";
        } else {
            echo json_encode($errors);
        }


    }
 

}