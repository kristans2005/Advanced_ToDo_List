import React, { useEffect, useState, useRef } from 'react';
import addImg from '../../assets/addImg.png';
import axios from 'axios';
import { useGlobalState } from '../../utils/GlobalStateProvider';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";



export default function AddNewTodo(props){
    const { setTodoRefresh } = useGlobalState()

    const [isInputMode, setInputMode] = useState(false);
    const [data, setData] = useState({ bordID: 0, inputValue: '' });
    const { bordData } = useGlobalState();
    const [boardID, setBoardID] = useState(0);
    const inputRef = useRef(null);

    
    useEffect(() => {
        setBoardID(props.boardID)
    }, [bordData, props.boardID ])

    function handleButtonClick() {
        setInputMode(true);
        
    }

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, bordID: boardID, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        if(data.inputValue != "" ){
            try{
                const response = await axios.post('http://localhost:8888/controllers/todo/addTaskController.php', data);
                setData({ ...data, inputValue: "" });
                setTodoRefresh(prevCount => prevCount + 1);
            }catch (error) {
                console.error('Error getting todo bord data:', error);
            }
            setInputMode(false);

        }
    }



    function handleBlur(e) {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            setInputMode(false);
        }
    }


    return (
        <>
                {isInputMode ? (
                <div id='maindiv' className=' mt-2 bg-gray-600 p-2 h-max rounded-md'>
                    <form onBlur={handleBlur} onSubmit={handleSubmit} className='flex flex-col' autoComplete='off'>
                        <input
                            type="text"
                            placeholder='Todo title...'
                            autoFocus
                            onChange={handleInputChange}
                            name='inputValue'
                            ref={inputRef}
                            className="w-full bg-gray-800 p-2 rounded-md text-white"
                        />
                        <button type="submit"  className=" w-full rounded-md mt-2 p-2 bg-slate-400 hover:bg-slate-300">
                            Submit
                        </button>
                    </form>
                </div>
                ) : (
                    <div className=' p-2'>
                        <button onClick={handleButtonClick} className=" hover:bg-gray-600 w-full rounded-md p-1 flex justify-center" >
                            <img className=" invert-[.80] fill-gray-300" src={addImg} alt="img not found" />
                            <h1 className=" text-gray-300">Add new</h1>
                        </button>
                    </div>
                )}
        </>
    )

}