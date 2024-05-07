import { useState } from "react";
import { useGlobalState } from "../../utils/GlobalStateProvider";

export default function HomePage(){

    const [userId, setUserId] = useState(localStorage.getItem('userId'));
    const { setUserid } = useGlobalState();

    function handleUserID(e){
        e.preventDefault();
        const usersId = e.target.userId.value;
        localStorage.setItem('userId', usersId);
        setUserId(usersId);
        setUserid(localStorage.getItem('userId'));
    }

    return(
        <div className="m-4">
            <h1>home page</h1>
            {/* <div className='m-3 p-2 bg-gray-200 w-max'>
                <h1>user id for testing</h1>
                <form onSubmit={handleUserID}>
                    <input className='inputs' placeholder='user id' name='userId' type="number" />
                    <button className='btns'>submit</button>
                </form>
                <p>user id is: {userId}</p>
            </div> */}
        </div>
    )
}