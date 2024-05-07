import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
//import Footer from '../components/Footer';

function Usersettings() {
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.setItem('user', null);
        navigate("/signup");
    }

    return (
        <div className="flex flex-col ">
            <NavBar />
            <h1>Users setttings</h1>
            
            <a
                className="text-gray-500 hover:text-gray-700 font-semibold mt-3 inline-block ml-2"
                whref="/change"
                
            >
                Change password
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
                logout
            </button>

        </div>
    );
}

export default Usersettings;
