import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [gmail, setGmail] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8888/controllers/user/userLoginController.php',
                {
                    username,
                    gmail,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = response.data;
            console.log(response.data);
            if (data.error) {
                console.error('Login error:', data.error);
            } else {
                console.log('Login successful');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="">
            <div>
                <NavBar />
            </div>
            <div className="flex">
                <div>
                    <SideBar />
                </div>
                <form onSubmit={handleLogin}>
                    <label>
                        Username:
                        <input
                            className="inputs"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className="error"></div>
                    </label>
                    <label>
                        Email:
                        <input
                            className="inputs"
                            type="gmail"
                            value={gmail}
                            onChange={(e) => setGmail(e.target.value)}
                        />
                        <div className="error"></div>
                    </label>
                    <label>
                        Password:
                        <input
                            className="inputs"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="error"></div>
                    </label>
                    <input className="btns" type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Login;
