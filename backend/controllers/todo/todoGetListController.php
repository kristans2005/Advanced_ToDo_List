<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
//header("Content-Type: application/json");

require "../../dbConnection.php";
require "../../models/todoModel.php";
require "../../utils/validator.php";
require "../../utils/sessions.php";

$db = new dbConnection;
$TodoModel = new ToDoModel($db);



if($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents("php://input"), true);
    //var_dump($data);
    if($data != NULL) {
        echo json_encode($TodoModel->getTodoTableByID($data));
    }else{
        echo json_encode($TodoModel->getTodoTableByID(1));
    }

    
    

}