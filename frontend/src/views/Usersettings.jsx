import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Usersettings() {
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleDeleteUser = async () => {
        try {
            
            const user = JSON.parse(localStorage.getItem('user'));
            const userID = user[0]["user_id"];
            const response = await axios.post(
                'http://localhost:8888/controllers/user/userDeleteController.php',
                userID
            );

                console.log(response.data);
                // navigate("/login");
        } catch (error) {
            console.error('Error deleting account:', error);
            setError('Error deleting account. Please try again later.');
        }
    };

    function handleLogout(){
        localStorage.setItem('user', null);
        navigate("/signup");
    }

    return (
        <div className="flex flex-col">
            <NavBar />
            <h1>User Settings</h1>
            <a
                className="text-gray-500 hover:text-gray-700 font-semibold mt-3 inline-block ml-2"
                href="/change"
            >
                Change password
            </a>
            <a
                className="text-red-500 hover:text-gray-700 font-semibold mt-3 inline-block ml-2"
                onClick={handleDeleteUser}
            >
                Delete Account
            </a>
            <a
                className="text-gray-500 hover:text-gray-700 font-semibold mt-3 inline-block ml-2"
                href="/home"
            >
                Back
            </a>
            <button
                onClick={handleLogout}
                className='bg-slate-300 w-max text-gray-500 hover:text-gray-700 font-semibold mt-3 inline-block p-2 rounded ml-2'>
                Logout
            </button>
        </div>
    );
}

export default Usersettings;
