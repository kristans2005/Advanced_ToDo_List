import axios from "axios";
import TodoItem from "./todoItem";
import { useState, useEffect } from "react";
import { useGlobalState } from "../../utils/GlobalStateProvider";


export default function TodoList(props) {
    const [data, setData] = useState([]);
    const { todoRefresh } = useGlobalState();

    useEffect(() => {
        const fetchTodoData = async () => {
            try {
                if (props.todoID) {
                    const response = await axios.post('http://localhost:8888/controllers/todo/todoGetBordListController.php', props.todoID);
                    setData(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTodoData();
    }, [props.todoID, props.bordData, todoRefresh]);

    return (
        <>
            {data.map((item, index) => (
                <TodoItem key={index} item={item} />
            ))}
        </>
    );
}