import React, { useState, useEffect } from "react";
import { SendData } from "../../utils/FetchingData";
import SelectTodoListBtn from "./SelectTodoListBtn";
import { useGlobalState } from "../../utils/GlobalStateProvider";

export default function SelectTodoList(props) {
    const [data, setData] = useState([]);
    const { userId } = useGlobalState();
    const { todoRefresh } = useGlobalState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                const userID = user[0]["user_id"];
                const responseData = await SendData('http://localhost:8888/controllers/todo/todoGetListController.php', userID);
                if (Array.isArray(responseData) && !responseData.hasOwnProperty('error')) {
                    setData(responseData);
                } else {
                    console.error("API response is invalid or contains errors");
                }       
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [userId, todoRefresh]); // <-- Include userId in the dependency array


    
    const JSX_Data = data.map((item, index) => (
        <div key={index} className=" whitespace-normal truncate">
            <SelectTodoListBtn tableId={item.todo_table_id} TodoName={item.todo_table_name} userID={userId} />
        </div>
    ));

    return (
       <>
         {JSX_Data}
       </> 
    );
}
