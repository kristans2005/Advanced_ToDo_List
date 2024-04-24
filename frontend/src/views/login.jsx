import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8888/controllers/user/userLoginController.php',
                {
                    username,
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
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
  <div className="flex flex-col min-h-screen">
  <div>
    <NavBar />
  </div>
  <div className="flex-1 flex">
    <div>
      <SideBar />
    </div>

    <div className="grid h-screen w-screen justify-center items-center">
      <div className="bg-gray-200 w-max h-max p-5 rounded-md">
        <h2 className="text-3xl font-bold mb-5">Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              className="appearance-none border border-gray-300 rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 focus:ring-gray-500"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="error">{/* Error message for username */}</div>
          </label>
          <label>
            Password:
            <input
              className="appearance-none border border-gray-300 rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 focus:ring-gray-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error">{/* Error message for password */}</div>
          </label>
          <input
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
            type="submit"
            value="Submit"
          />
          <a
            className="text-gray-500 hover:text-gray-700 font-semibold mt-3 inline-block ml-2"
            href="/forgot"
          >
            Forgot Password?
          </a>
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

export default Login;
