<?php

//premisons
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
//header("Content-Type: application/json");

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
    $errors = [];
    //seit bus dati kas atnaks no front end
    $data = json_decode(file_get_contents("php://input"), true);

    $username = $data["name"];
    $email = $data["email"];
    $password = $data["password"];

    if($userModel->doseUserExist($data["name"])) {
        echo "username already exists";
        $errors["username"] = "Username already exists!";
    } 

    if($userModel->doesEmailExist($data["email"])) {
        echo "email already exists";
        $errors["email"] = "Email already exists!";
    } 

    if(empty($errors)) {
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $userModel->adduser($username, $email, $hashed_password);
    } else {
    echo json_encode($errors);
    } 

  //  var_dump($data);
    
    

}