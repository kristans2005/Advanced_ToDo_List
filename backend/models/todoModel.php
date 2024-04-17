<?php


class ToDoModel {

    public $dbConnection;

    function __construct($dbConnections)
    {
        $this->dbConnection = $dbConnections;
    }

    
function getTodoTable($userId) {
    $sql = "SELECT * FROM todo_table WHERE user_id = :userId";
    $stmt = $this->dbConnection->connection()->prepare($sql);
    $stmt->bindParam(':userId', $userId);
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


}