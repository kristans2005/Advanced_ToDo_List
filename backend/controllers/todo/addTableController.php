<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
//header("Content-Type: application/json");

require "../../utils/sessions.php";

require "../../dbConnection.php";
require "../../models/todoModel.php";
require "../../utils/validator.php";

$db = new dbConnection;
$TodoModel = new ToDoModel($db);




if($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents("php://input"), true);
    
    var_dump($data);
    $TodoModel->addTodoTable($data["userID"], $data["inputValue"]);
    




}
