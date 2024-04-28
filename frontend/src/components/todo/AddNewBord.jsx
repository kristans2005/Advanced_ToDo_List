import React, { useEffect, useState, useRef } from 'react';
import addImg from '../../assets/addImg.png';
import axios from 'axios';
import { useGlobalState } from '../../utils/GlobalStateProvider';

export default function AddnewBord() {
    const [isInputMode, setInputMode] = useState(false);
    const [data, setData] = useState({ bordID: 0, inputValue: '' });
    const { bordData } = useGlobalState();
    const [tableID, setTableID] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        setTableID(bordData[0].todo_table_id)
    }, [bordData])

    function handleButtonClick() {
        setInputMode(true);
    }

    function handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setData({ ...data, bordID: tableID, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        if(data.inputValue != "" ){
            try{
                const response = await axios.post('http://localhost:8888/controllers/todo/addBordListController.php', data);
                console.log(response.data);
                setData({ ...data, inputValue: "" });
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
