import { useEffect, useState } from "react";
import { useGlobalState } from "../../utils/GlobalStateProvider";
import AddNewTodo from "../todo/AddNewTodo";
import TodoBordTitle from "../todo/TodoBordTitle";
import TodoList from "../todo/TodoList";
import AddnewBord from "../todo/AddNewBord";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import axios
import Login from "../../views/login";

export default function BordPage() {
    const { bordData } = useGlobalState();
    const { userID, tableID } = useParams();
    const usersID = parseInt(userID);
    const tablesID = parseInt(tableID);
    const [boardData, setBoardData] = useState([]);
    const [isValid, setIsValid] = useState(false);
    
    let JSX_BordData = null;

    useEffect(() => {
        async function getData() {
            const requestData = { userID: usersID, tableID: tablesID };
            try {
                const response = await axios.post('http://localhost:8888/controllers/todo/todoGetBordInfoController.php', requestData);
                console.log("listResposnse", response.data);
                setBoardData(response.data);
                setIsValid(true);
                if (response.data.hasOwnProperty('error')) { // Check if 'error' is present in response.data
                    console.log("Error occurred:", response.data.error);
                    setIsValid(false);
                }
            } catch (error) {
                console.error("Error fetching book:", error);
            }
        }
        console.log("ids", usersID, tablesID);
        getData();
    }, [userID, tableID]);

    if (isValid) {
        JSX_BordData = boardData.map((item, index) => (
            <div draggable key={index} className="bg-gray-900 h-max rounded-md p-2 w-[250px]">
                <div className="text-center">
                    <TodoBordTitle title={item.todo_bord_name} />
                </div>
                <div className="grid grid-flow-row gap-2 min-w-full">
                    <TodoList todoID={item.todo_bord_id} />
                </div>
                <div>
                    <AddNewTodo />
                </div>
            </div>
        ));
    } else {
        
        JSX_BordData = <div>Error fetching board data. Please try again later.</div>;
    }

    return (
        <div className="w-full grid h-full">
            <div className="overflow-x-auto">
                <div id="scroll" className="whitespace-nowrap grid gap-3 grid-flow-col m-6">
                    {JSX_BordData}
                    <AddnewBord />
                </div>
            </div>
        </div>
    );
}
