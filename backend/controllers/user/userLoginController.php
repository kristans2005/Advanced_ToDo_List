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
        echo "username is not valid";
        $errors["username"] = "User does not exist!";
    } 

    if(!$userModel->doesPassExist($data["password"])) {
        echo "password is not valid";
        $errors["password"] = "Password is incorrect!";
    } 

    if(!Validator::email($data["gmail"])) {
        echo "email is not valid";
        $errors["gmail"] = "Email is not correct!";
        
    } 

    
    if(empty($errors)) {
        echo "everything is ok!";
    } else {
        echo "something seems off!";
    }

    
    

    //seit bus dati kas atnaks no front end
    $data = json_decode(file_get_contents("php://input"), true);

}