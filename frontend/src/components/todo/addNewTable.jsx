import React, { useEffect, useState, useRef } from 'react';
import addImg from '../../assets/addImg.png';
import axios from 'axios';
import { useGlobalState } from '../../utils/GlobalStateProvider';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";



export default function AddNewTable(props){
    const { setTodoRefresh } = useGlobalState()

    const [isInputMode, setInputMode] = useState(false);
    const [data, setData] = useState({ userID: 0, inputValue: '' });
    const { userId } = useGlobalState();
    const [user_ID, setUserID] = useState(0);
    const inputRef = useRef(null);

    
    useEffect(() => {
        setUserID(userId);
    }, [userId])

    function handleButtonClick() {
        setInputMode(true);
        
    }

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, userID: user_ID, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        if(data.inputValue != "" ){
            try{
                const response = await axios.post('http://localhost:8888/controllers/todo/addTableController.php', data);
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
                <div id='maindiv' className=' mt-2 bg-slate-300 border-2 p-2 h-max rounded-md'>
                    <form onBlur={handleBlur} onSubmit={handleSubmit} className='flex flex-col' autoComplete='off'>
                        <input
                            type="text"
                            placeholder='Table name...'
                            autoFocus
                            onChange={handleInputChange}
                            name='inputValue'
                            ref={inputRef}
                            className="w-full bg-slate-200 p-2 rounded-md"
                        />
                        <button type="submit"  className=" w-full rounded-md mt-2 p-2 bg-slate-200 hover:bg-slate-100">
                            Submit
                        </button>
                    </form>
                </div>
                ) : (
                    <div className=' p-2'>
                        <button onClick={handleButtonClick} className=" hover:bg-slate-300 bg-slate-200 border-2 w-full rounded-md p-1 flex justify-center" >
                            <img className=" fill-gray-300" src={addImg} alt="img not found" />
                            <h1 className="">Make new</h1>
                        </button>
                    </div>
                )}
        </>
    )

}