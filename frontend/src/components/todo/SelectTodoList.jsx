import { useState, useEffect } from "react"
import { SendData } from "../../utils/FetchingData";

export default function SelectTodoList(){

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        SendData('http://localhost:8888/controllers/todo/todoGetListController.php', userId);
    }, []);


    return(
        <>

        </>
    )

}