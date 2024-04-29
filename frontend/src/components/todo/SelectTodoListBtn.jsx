import { getTodoBordData } from "../../utils/FetchingData";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../utils/GlobalStateProvider";

export default function SelectTodoListBtn(props) {
    const navigate = useNavigate();
    const { setTodoTableId, setBordData } = useGlobalState();

    async function handleChange(e) {
        e.preventDefault();
        navigate(`/home/bord/${props.userID}/${props.tableId}`);
    }
    
    
    return (

        <button 
            className=" bg-slate-100 mt-2 p-1 rounded-md w-full hover:bg-slate-300 border-2"
            // value={props.tableId}
            // name="id"
            onClick={handleChange}
        >
            {props.TodoName}
        </button>  
        
    )
}
