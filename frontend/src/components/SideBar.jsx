import SelectTodoList from "./todo/SelectTodoList";
import AddNewTable from "./todo/addNewTable";


function SideBar(){


    return(
    <aside className=" bg-gray-300 w-[200px] h-full  z-40 ">
        <div className="">
            <h1>sidebar</h1>
        </div>
        <div className="grid w-full ">
            <div className=" min-h-[1px] max-h-[400px] overflow-y-auto overscroll-auto shadow-inner p-2">
                <SelectTodoList /> 
            </div>
            <div className="p-2">
                <AddNewTable />
            </div>
            
        </div>
        
    </aside>
    )
}

export default SideBar;