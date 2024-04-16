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
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="inputs"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <div className="error">{errors.username}</div>
                    </label>
                    <label>
                        Email:
                        <input
                            className="inputs"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="error">{errors.email}</div>
                    </label>
                    <label>
                        Password:
                        <input
                            className="inputs"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="error">{errors.password}</div>
                    </label>
                    <input className="btns" type="submit" value="Submit" />
                </form>
            </div>
        </>
    );
}

export default Signup;
