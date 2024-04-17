import { useEffect, useState } from "react"
import { useGlobalState } from "../../utils/GlobalStateProvider"

export default function BordPage() {
    const { bordData } = useGlobalState();

    const JSX_BordData = bordData.map((item, index) => (
        <div key={index} className=" bg-gray-900 rounded-md p-2">
            <h1 className="font-bold text-2xl w-[250px] text-white ">{item.todo_bord_name}</h1>
        </div>
    ));

    return (
        <div className=" w-full grid h-full">
            <div className="overflow-x-auto ">
                <div id="scroll" className="whitespace-nowrap grid gap-10 grid-flow-col m-6 text-center ">
                    {JSX_BordData}
                </div>
            </div>
        </div>
        
        
    )
}
