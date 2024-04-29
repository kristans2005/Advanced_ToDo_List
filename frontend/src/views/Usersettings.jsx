import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Usersettings() {
    return (
        <div className="flex flex-col ">
            <h1>Users setttings</h1>
            <a
                className="text-gray-500 hover:text-gray-700 font-semibold mt-3 inline-block ml-2"
                href="/change"
            >
                Change password
            </a>
            <a
                className="text-gray-500 hover:text-gray-700 font-semibold mt-3 inline-block ml-2"
                href="/home"
            >
                Back
            </a>
            <a
                className="text-gray-500 hover:text-gray-700 font-semibold mt-3 inline-block ml-2"
                href="/Login"
            >
                Logout
            </a>
        </div>
    );
}

export default Usersettings;
