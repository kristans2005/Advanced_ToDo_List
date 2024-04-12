<?php

// seit notiek viss sql lietas datu dabusana un iesutisana ieksa db

class UserModel {

    public $dbConnection;

    function __construct($dbConnections)
    {
        $this->dbConnection = $dbConnections;
    }


    function adduser(){

    }
    

    function getUser(){

    }


    function doseUserExist($username){ 
        $sql = "SELECT * FROM users WHERE name = :username";
        $stmt = $this->dbConnection->connection()->prepare($sql);
        $stmt->bindParam(':username', $username);
        $stmt->execute();
        if($stmt->fetchAll() != []) {
            return true;
        } else {
            return false;
        }
    }

    function doesPassExist($password) {
        $sql = "SELECT * FROM users WHERE password = :password";
        $stmt = $this->dbConnection->connection()->prepare($sql);
        $stmt->bindParam(':password', $password);
        $stmt->execute();
        if($stmt->fetchAll() != []) {
            return true;
        } else {
            return false;
        }
    }


    function deleteUser(){

    }




    //utt




}