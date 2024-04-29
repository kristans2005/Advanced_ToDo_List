<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require "../../dbConnection.php";
require "../../models/todoModel.php";
require "../../utils/validator.php";
require "../../utils/sessions.php";

$db = new dbConnection;
$TodoModel = new ToDoModel($db);

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $user = $data["userID"];
    $table = $data["tableID"];

    

    //var_dump($data);
    if (!empty($TodoModel->matchTodoTable($table, $user))) {
        // If data is found, return it
        echo json_encode($TodoModel->getTodoTable($table));
    } else {
        // If no data is found, respond with an error message
        echo json_encode(["error" => "Invalid link"]);
    }
}
?>
