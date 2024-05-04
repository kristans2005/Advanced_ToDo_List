import SelectTodoList from "./todo/SelectTodoList";
import AddNewTable from "./todo/addNewTable";


function SideBar(){


    return(
    <aside className=" bg-gray-300 w-[200px] h-full z-40 ">
        <div>
            <h1>sidebar</h1>
        </div>
        <div className=" p-2">
        <SelectTodoList /> 
        <AddNewTable />
        </div>
    </aside>
    )
}

export default SideBar;