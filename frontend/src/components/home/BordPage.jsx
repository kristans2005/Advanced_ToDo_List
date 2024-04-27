import { useEffect, useState } from "react"
import { useGlobalState } from "../../utils/GlobalStateProvider"
import AddNewTodo from "../todo/AddNewTodo";
import TodoBordTitle from "../todo/TodoBordTitle";
import TodoList from "../todo/TodoList";
import AddnewBord from "../todo/AddNewBord";


export default function BordPage() {
    const { bordData } = useGlobalState();
    

    const JSX_BordData = bordData.map((item, index) => (
        <div draggable   key={index} className=" bg-gray-900 h-max rounded-md p-2 w-[250px]">
            <div className=" text-center">
                <TodoBordTitle title={item.todo_bord_name} />
            </div>
            <div className=" grid grid-flow-row gap-2 min-w-full  ">
                <TodoList todoID={item.todo_bord_id} /> 
            </div>
            <div>
                <AddNewTodo />
            </div>
        </div>
    ));

    return (
        <div className=" w-full grid h-full">
            <div className="overflow-x-auto ">
                <div id="scroll" className="whitespace-nowrap grid gap-3 grid-flow-col m-6 ">
                    {JSX_BordData}
                    <AddnewBord />
                </div>
            </div>
        </div>
        
        
    )
}
