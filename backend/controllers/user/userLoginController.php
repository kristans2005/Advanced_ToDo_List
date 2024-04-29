<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require "../../dbConnection.php";
require "../../models/userModel.php";
require "../../utils/validator.php";
require "../../utils/sessions.php";

$db = new dbConnection;
$userModel = new UserModel($db);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $errors = [];

    if (!$userModel->doesUserExist($data["username"])) {
        $errors["username"] = "User does not exist!";
    } else {
        $userData = $userModel->getUserInfo($data['username']);

        if (!Validator::verifyPassword($data["password"], $userData[0]["password"])) {
            $errors["password"] = "Password is not correct!";
        }
    }

    if (empty($errors)) {
        // If there are no errors, return the user data
        echo json_encode($userData);
    } else {
        // If there are errors, return them
        echo json_encode($errors);
    }
}
?>
