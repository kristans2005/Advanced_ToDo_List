import gear from "../assets/gear.png";
import { useNavigate } from "react-router-dom";


export default function NavBar() {
    const navigate = useNavigate();

    return (
        <nav className="bg-violet-700 flex w-full h-16 gap-4 items-center justify-center ">
                <button onClick={() => {navigate("/home")}}>Home</button>
            <button onClick={() => {navigate("/usersettings")}} >
                <img src={gear}></img>
            </button>
                
            
        </nav>
    );
}
