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
    $isValid = $TodoModel->matchTodoTable($data["tableID"], $data["userID"]);

    if($isValid != null ){
        echo json_encode($TodoModel->getTodoBoard($isValid[0]["todo_table_id"]));
    }else{
        
    }

    
    

}