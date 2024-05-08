import { useState, useEffect } from "react";
import deleteIMG from "../../assets/delete.png";
import { useAsyncError } from "react-router-dom";
import axios from "axios";
import { useGlobalState } from "../../utils/GlobalStateProvider";

export default function DeleteTodoBtn(props) {
    const { setTodoRefresh } = useGlobalState()

    async function handleDelete() {
        
        try{
            console.log("work", props.todoID);
            const response = await axios.post('http://localhost:8888/controllers/todo/deleteTodoController.php', props.todoID);
            console.log(response.data);
            setTodoRefresh(prevCount => prevCount + 1);
        }catch(error){
            console.error('Error fetching data:', error);
        }
    }


    return(
        <div>
            <button onClick={handleDelete} className=" rounded-md p-1 hover:bg-slate-600 ">
                <img width="25px" src={deleteIMG} alt="deleteBTN" />
            </button>
        </div>
    )

}