import { useState, useEffect } from "react";
import axios from "axios";
import { getTodoBordData } from "../../utils/FetchingData";


export default function TodoList(props) {
    const [ID, setID] = useState(props.todoID);
    
    

    useEffect(() => {
        console.log("jup ID:", ID);


        const GetTodoTasks = async () => {
            try {
                const response = await axios.post('http://localhost:8888/controllers/todo/todoGetBordListController.php', ID);
                console.log(response.data);
            }catch{
                console.error('Error fetching data:', error);
            }
        }


        if(ID != null){
            GetTodoTasks();
        }
    }, [props.todoID])





    return (
        <div>
            <h1>hello asdas</h1>
        </div>
    );

}