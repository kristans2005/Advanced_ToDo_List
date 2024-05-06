import { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalState } from "../../utils/GlobalStateProvider";

export default function TodoList(props) {
    const [data, setData] = useState([]);
    const { todoRefresh } = useGlobalState();
    const [isHovered, setIsHovered] = useState(false); 

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

    const jsxData = data.map((item, index) => (
        <div draggable key={index} className="text-gray-300 bg-gray-700 rounded-md p-1 text-ellipsis text-wrap truncate"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} 
        >
            <div>
                <h1>{item.title}</h1>
            </div>
            {isHovered && ( 
                    <div className=" text-white">
                        <p>Show this div when hovered</p>
                    </div>
                )}
        </div>
    ));

    return(
        <>

                    {jsxData}
        </>
    );
}
