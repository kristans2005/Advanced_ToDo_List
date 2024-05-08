import { useState, useRef } from "react";
import edit from "../../assets/edit.png";



export default function EditTodoBtn() {
    const [isInputMode, setInputMode] = useState(false);
    const inputRef = useRef(null);

    
    function handleButtonClick() {
        setInputMode(true);
    }


    
    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        
    }


    function handleSubmit(e){
        e.preventDefault();


        setInputMode(false);
    }
    
    function handleBlur(e) {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setInputMode(false);
        }
    }

    return(
                <div>
                {isInputMode ? (
                    <div id='maindiv' className=' bg-gray-300 p-2 h-max rounded-md'>
                        <form onBlur={handleBlur} onSubmit={handleSubmit} className='flex flex-col' autoComplete='off'>
                            <input
                                type="text"
                                placeholder='List title...'
                                autoFocus
                                onChange={handleInputChange}
                                name='inputValue'
                                ref={inputRef}
                                className="w-[250px] bg-gray-600 p-2 rounded-md text-white"
                            />
                            <button type="submit"  className=" w-full rounded-md mt-2 p-2 bg-gray-400 hover:bg-gray-200">
                                Submit
                            </button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <button onClick={handleButtonClick} className=" rounded-md p-1 hover:bg-slate-600 ">
                            <img width="25px" src={edit} alt="editBTN" />
                        </button>
                    </div>
                )}
            </div>
    )

}