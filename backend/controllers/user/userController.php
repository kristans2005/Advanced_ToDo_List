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


// vel kartigi nezinu ko sis daris bet zinu ka vaidzes velak

