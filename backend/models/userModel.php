<?php

// seit notiek viss sql lietas datu dabusana un iesutisana ieksa db

class UserModel {

    public $dbConnection;

    function __construct($dbConnections)
    {
        $this->dbConnection = $dbConnections;
    }


    function adduser($username, $email, $password){
        $sql = "INSERT INTO users (name, email, password) VALUES (:name, :email, :password)";
        $stmt = $this->dbConnection->connection()->prepare($sql);
        $stmt->bindParam(':name', $username);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->execute();
    }
    

    function getUser(){
        
    }

    function getUserInfo($username) {
        $sql = "SELECT * FROM users WHERE name = :username";
        $stmt = $this->dbConnection->connection()->prepare($sql);
        $stmt->bindParam(':username', $username);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    function getUserInfoByID($userID) {
        $sql = "SELECT * FROM users WHERE user_id = :userID";
        $stmt = $this->dbConnection->connection()->prepare($sql);
        $stmt->bindParam(':userID', $userID);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    function doesUserExist($username){ 
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

    function doesEmailExist($email){ 
        $sql = "SELECT * FROM users WHERE email = :email";
        $stmt = $this->dbConnection->connection()->prepare($sql);
        $stmt->bindParam(':email', $email);
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



    function deleteUser($userID){ 
            $sql = "DELETE FROM users WHERE user_id = :userID";
            $stmt = $this->dbConnection->connection()->prepare($sql);
            $stmt->bindParam(':userID', $userID);
            $stmt->execute();

        }
        
}




    //utt