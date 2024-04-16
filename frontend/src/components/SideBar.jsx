import SelectTodoList from "./todo/SelectTodoList";


function SideBar(){


    return(
    <aside className=" bg-gray-300 w-[200px] h-screen z-40 ">
        <div>
            <h1>sidebar</h1>
        </div>
        <div>
        <SelectTodoList /> 
        </div>
    </aside>
    )
}

export default SideBar;