import React, { useState, useEffect } from "react";
import axios from "axios";
import { useGlobalState } from "../../utils/GlobalStateProvider";
import EditTodoBtn from "./EditTodoBtn";
import DeleteTodoBtn from "./DeleteTodoBTN";


export default function TodoItem({ item }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            draggable
            className="text-gray-300 bg-gray-700 rounded-md p-1 text-ellipsis text-wrap truncate"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div>
            <h1>{item.title}</h1>
            <h1>{item.todo_task_id}</h1>
            </div>
            {isHovered && (
                <div className="text-white w-max">
                    <div className=" flex justify-end">
                        <EditTodoBtn />
                        <DeleteTodoBtn todoID={item.todo_task_id} />
                    </div>
                </div>
                
            )}
        </div>
    );
}