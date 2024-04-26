import { useState, useEffect } from "react";
import axios from "axios";
import { getTodoBordData } from "../../utils/FetchingData";


export default function TodoList(props) {
    const [ID, setID] = useState(props.todoID);
    const [data, setData] = useState([]);
    

    useEffect(() => {
        console.log("jup ID:", ID);


        const GetTodoTasks = async () => {
            try {
                const response = await axios.post('http://localhost:8888/controllers/todo/todoGetBordListController.php', ID);
                console.log(response.data);
                setData(response.data);
            }catch{
                console.error('Error fetching data:', error);
            }
        }


        if(ID != null){
            GetTodoTasks();
        }
    }, [props.todoID])

    const jsxData = data.map((items, index) => (
        <div draggable className=" text-gray-300 bg-gray-700 rounded-md  p-1" key={index}>
            <h1>{items.title}</h1>

        </div>
    ));



    return (
        <>
        {jsxData}
        </>
    );

}