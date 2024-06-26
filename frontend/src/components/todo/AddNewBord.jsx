import React, { useEffect, useState, useRef } from 'react';
import addImg from '../../assets/addImg.png';
import axios from 'axios';
import { useGlobalState } from '../../utils/GlobalStateProvider';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";


export default function AddnewBord() {
    const navigate = useNavigate();
    const { userID, tableID } = useParams();
    const usersID = parseInt(userID);
    const tablesID = parseInt(tableID);
    const { setTodoRefresh } = useGlobalState()

    const [isInputMode, setInputMode] = useState(false);
    const [data, setData] = useState({ bordID: 0, inputValue: '' });
    const { bordData } = useGlobalState();
    const [tableIDs, setTableID] = useState(0);
    const inputRef = useRef(null);
    

    useEffect(() => {
        if (bordData && bordData.length > 0) {
            setTableID(bordData[0].todo_table_id);
        }else{
            setTableID(1);
        }
    }, [bordData])

    function handleButtonClick() {
        setInputMode(true);
    }

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, bordID: tablesID, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        if(data.inputValue != "" ){
            try{
                const response = await axios.post('http://localhost:8888/controllers/todo/addBordListController.php', data);
                setData({ ...data, inputValue: "" });
                setTodoRefresh(prevCount => prevCount + 1);
                //navigate(`/home/bord/${usersID}/${tablesID}`);
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
                <div className=' p-2'>
                    <button onClick={handleButtonClick} className="hover:bg-gray-500 w-[250px] bg-gray-300 h-max p-2 rounded-md flex justify-center">
                        <img className="fill-gray-300" src={addImg} alt="img not found" />
                        Add new List
                    </button>
                </div>
            )}
        </div>
    );
}
