import edit from "../../assets/edit.png";


export default function EditTodoBtn() {


    return(
        <div>
            <button className=" rounded-md p-1 hover:bg-slate-600 ">
                <img width="25px" src={edit} alt="editBTN" />
            </button>
        </div>
    )

}