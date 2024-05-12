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

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    var_dump($data);
    $userModel->deleteUser($data);


}


