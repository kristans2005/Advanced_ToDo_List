// import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';

function Forgot() {
    
    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <NavBar />
            </div>
            <div className="flex-1 flex">
                <div>
                    <SideBar />
                </div>
                <h1>Forgot your password? </h1>
                <form>
                    <label>Username: </label>
                    <input className="inputs" type="text" />
                    <label>Email:</label>
                    <input className="inputs" type="email" />
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Forgot;
