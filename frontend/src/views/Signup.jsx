import React, { useState } from 'react';
import axios from 'axios';
//npm install axios

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        let formIsValid = true;

        if (!username) {
            formIsValid = false;
            formErrors['username'] = '*Username is required';
        }

        if (!email) {
            formIsValid = false;
            formErrors['email'] = '*Email is required';
        }

        if (!password) {
            formIsValid = false;
            formErrors['password'] = '*Password is required';
        }

        setErrors(formErrors);
        return formIsValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            axios
                .post(
                    'http://localhost:8888/controllers/user/userSignupController.php',
                    {
                        name: username,
                        email: email,
                        password: password,
                    }
                )
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        } else {
            console.log('Form is invalid');
        }
    };

    return (
        <>
            
            <div className='grid h-screen w-screen justify-center items-center'>
                <div className=' bg-gray-200 w-max h-max p-5 rounded-md' >
                <h2 class="text-3xl font-bold mb-5">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                        className='appearance-none border border-gray-300 rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 focus:ring-gray-500'
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className="error">{errors.username}</div>
                    </label>
                    <label>
                        Email:
                        <input
                            className='appearance-none border border-gray-300 rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 focus:ring-gray-500'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="error">{errors.email}</div>
                    </label>
                    <label>
                        Password:
                        <input
                            className='appearance-none border border-gray-300 rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 focus:ring-gray-500'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="error">{errors.password}</div>
                    </label>
                    <input className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-md' type="submit" value="Submit" />
                </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
