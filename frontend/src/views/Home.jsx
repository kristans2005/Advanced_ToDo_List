import { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';


export function Home() {
    const [userId, setUserId] = useState(localStorage.getItem('userId'));

    function handleUserID(e){
        const usersId = e.target.userId.value;
        localStorage.setItem('userId', usersId);
    }

    return (
        <div className=''>
            <div>
                <NavBar />
            </div>
            <div className='flex'>
                <div>
                    <SideBar />
                </div>
                <main>
                    <h1>home page</h1>
                    <div className=' m-3 p-2 bg-gray-200'>
                        <h1>user id for testing</h1>
                        <form onSubmit={handleUserID}>
                            <input className='inputs' placeholder='user id' name='userId' type="number" />
                            <button className='btns'>submit</button>
                        </form>
                        <p>user id is: {userId}</p>
                    </div>
                </main>
            </div>
            <div>
                <Footer />
            </div>
            
        </div>
    );
}
