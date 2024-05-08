<?php


class ToDoModel {

    public $dbConnection;

    function __construct($dbConnections)
    {
        $this->dbConnection = $dbConnections;
    }

    
// function getTodoTable($userId, $tableID) {
//     $sql = "SELECT * FROM todo_table WHERE (user_id, todo_table_id) = (:userId, :tableId)";
//     $stmt = $this->dbConnection->connection()->prepare($sql);
//     $stmt->bindParam(':userId', $userId);
//     $stmt->bindParam(':tableId', $tableID);
//     $stmt->execute();
//     return $stmt->fetchAll(PDO::FETCH_ASSOC);
// }

function getTodoTableByID($userId) {
    $sql = "SELECT * FROM todo_table WHERE user_id = :userId";
    $stmt = $this->dbConnection->connection()->prepare($sql);
    $stmt->bindParam(':userId', $userId);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function matchTodoTable($tableID, $userId) {
    $sql = "SELECT * FROM todo_table WHERE (user_id, todo_table_id) = (:userId, :todo_table_id)";
    $stmt = $this->dbConnection->connection()->prepare($sql);
    $stmt->bindParam(':userId', $userId);
    $stmt->bindParam(':todo_table_id', $tableID);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


function getTodoBoard($TodoTableId) {
    $sql = "SELECT * FROM todo_bord WHERE todo_table_id = :todo_table_id ORDER BY bord_column_order ASC";
    $stmt = $this->dbConnection->connection()->prepare($sql);
    $stmt->bindParam(':todo_table_id', $TodoTableId);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

function getTodoBoardMaxColNum($tableID){
    $sql = "SELECT MAX(bord_column_order) FROM todo_bord WHERE todo_table_id = :todo_table_id";
    $stmt = $this->dbConnection->connection()->prepare($sql);
    $stmt->bindParam(':todo_table_id', $tableID);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


function getTodoTaskMaxColNum($bordID){
    $sql = "SELECT MAX(todo_row_order) FROM todo_task WHERE todo_bord_id = :todo_bord_id";
    $stmt = $this->dbConnection->connection()->prepare($sql);
    $stmt->bindParam(':todo_bord_id', $bordID);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


function addTodoBordList($tableID, $bordName, $colNum){
    $sql = "INSERT INTO todo_bord (todo_table_id, todo_bord_name, bord_column_order) VALUES (:tableID, :bordName, :colNum)";
    $stmt = $this->dbConnection->connection()->prepare($sql);
    $stmt->bindParam(':tableID', $tableID);
    $stmt->bindParam(':bordName', $bordName);
    $stmt->bindParam(':colNum', $colNum);
    $stmt->execute();
}

function deleteTodo($todoID){
    $sql = "DELETE FROM todo_task WHERE todo_task_id = :todo_task_id";
    $stmt = $this->dbConnection->connection()->prepare($sql);
    $stmt->bindParam(':todo_task_id', $todoID);
    $stmt->execute();
}


function addTodoTable($userID, $title){
    $sql = "INSERT INTO todo_table (user_Id, todo_table_name) VALUES (:userID, :title)";
    $stmt = $this->dbConnection->connection()->prepare($sql);
    $stmt->bindParam(':userID', $userID);
    $stmt->bindParam(':title', $title);
    $stmt->execute();
}


function addTodoTask($boardID, $taskName, $colNum){
    $sql = "INSERT INTO todo_task (todo_bord_id, title, todo_row_order) VALUES (:boardID, :taskName, :colNum)";
    $stmt = $this->dbConnection->connection()->prepare($sql);
    $stmt->bindParam(':boardID', $boardID);
    $stmt->bindParam(':taskName', $taskName);
    $stmt->bindParam(':colNum', $colNum);
    $stmt->execute();
}


function getTodoList($username) {
    $sql = "SELECT * FROM users WHERE name = :username";
    $stmt = $this->dbConnection->connection()->prepare($sql);
    $stmt->bindParam(':username', $username);
    $stmt->execute();
    return $stmt->fetchAll();
}



function getBoardList($id) {
    $sql = "SELECT * FROM todo_task WHERE todo_bord_id = :todo_bord_id ORDER BY todo_row_order ASC";
    $stmt = $this->dbConnection->connection()->prepare($sql);
    $stmt->bindParam(':todo_bord_id', $id);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}


}