<?php

class Validator {

public static function email($email) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return true;
    } else {
        return false;
    }


}
public static function verifyPassword($password, $hashedpassword) {
    if(password_verify($password, $hashedpassword)) {
        return true;      
    } else {
        return false;
    }
}
}