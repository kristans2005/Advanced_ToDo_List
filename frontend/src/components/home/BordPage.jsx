import { useEffect, useState } from "react"
import { useGlobalState } from "../../utils/GlobalStateProvider"
import AddNewTodo from "../todo/AddNewTodo";
import TodoBordTitle from "../todo/TodoBordTitle";

export default function BordPage() {
    const { bordData } = useGlobalState();

    const JSX_BordData = bordData.map((item, index) => (
        <div draggable   key={index} className=" bg-gray-900 rounded-md p-2 w-[250px]">
            <div className=" text-center">
                <TodoBordTitle title={item.todo_bord_name} />
            </div>
            <div draggable className=" grid grid-flow-row gap-2 text-gray-300 bg-gray-700 rounded-md m-2 p-1">
                <h1>hello</h1>
            </div>
            <div>
                <AddNewTodo />
            </div>
        </div>
    ));

    return (
        <div className=" w-full grid h-full">
            <div className="overflow-x-auto ">
                <div id="scroll" className="whitespace-nowrap grid gap-10 grid-flow-col m-6 ">
                    {JSX_BordData}
                </div>
            </div>
        </div>
        
        
    )
}
