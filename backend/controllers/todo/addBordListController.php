<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
//header("Content-Type: application/json");

require "../../dbConnection.php";
require "../../models/todoModel.php";
require "../../utils/validator.php";

$db = new dbConnection;
$TodoModel = new ToDoModel($db);




if($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents("php://input"), true);

    
    $todoList = $TodoModel->getTodoBoardMaxColNum($data["bordID"]);
    $colNum = $todoList[0]["MAX(bord_column_order)"] + 1;
    $TodoModel->addTodoBordList($data["bordID"], $data["inputValue"], $colNum);
    var_dump($colNum);




}
