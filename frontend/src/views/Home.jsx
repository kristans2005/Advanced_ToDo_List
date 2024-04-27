import React from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

function Home() {
    return (
        <div className='flex flex-col min-h-screen'>
            <div>
                <NavBar />
            </div>
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
