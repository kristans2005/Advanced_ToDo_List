import React from 'react';
import gear from "../assets/gear.png";
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function Home() {
    return (
        <div className='flex flex-col min-h-screen'>
             <nav className="bg-gray-200 flex w-full h-16 gap-4 items-right justify-start p-5">
            <a href="/Usersettings">
                <img src={gear}></img>
            </a>
        </nav>
            <div className='flex-1 flex'>
                <div>
                    <SideBar />
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
            <div>
                {/* <Footer /> */}
            </div>
        </div>
    );
}

export default Home;
