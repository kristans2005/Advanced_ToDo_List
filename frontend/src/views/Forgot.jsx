// import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Forgot() {
    return (
        <div className="flex flex-col min-h-screen">
            <nav className="bg-gray-200 flex w-full h-16 gap-4 items-center justify-center">
                <a href="/Signup" className="text-gray-700 hover:text-gray-900">
                    Signup
                </a>
                <a href="/Login" className="text-gray-700 hover:text-gray-900">
                    Login
                </a>
            </nav>

            <div className="flex-1 flex">
                <div className="grid h-screen w-screen justify-center items-center">
                    <div className="bg-gray-200 w-max h-max p-5 rounded-md">
                        <h1 className="text-3xl font-bold mb-5">Forgot your password?</h1>
                        <form className="w-full max-w-sm">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
                                type="button"
                            >
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Forgot;
