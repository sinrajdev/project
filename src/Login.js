import React, { useState } from "react";
import './Login.css';


import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const [input, setInput] = React.useState({ email: '', password: '' });

    const handleChange = e => {
        // e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    };


    React.useEffect(() => {
        if (localStorage.getItem('done')) navigate('/')
    }, [])


    const formSubmitter = e => {
        e.preventDefault();

        console.log(input);
        if (input.email == 'sinraj@gmail.com' && input.password == '123') {
            // alert('sss');

            navigate('/');

            localStorage.setItem('done', true)

        }

    };

    return (
        // <div className="form">
        //     <form onSubmit={formSubmitter}>
        //         <div className="input-container">
        //             <label>Username </label>
        //             <input type="text" name="email" onChange={handleChange} />
        //         </div>

        //         <div className="input-container">
        //             <label>Password </label>
        //             <input type="password" name="password" onChange={handleChange} />

        //         </div>
        //         <div className="button-container">
        //             <input type="submit" />
        //         </div>

        //     </form>

        // </div>


        <div className="container" id="container">
            <div className="form-container log-in-container">
                <form action="#" onSubmit={formSubmitter}>
                    <h1>Login</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fa fa-facebook fa-2x"></i></a>
                        <a href="#" className="social"><i className="fab fa fa-twitter fa-2x"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="text" name="email" onChange={handleChange} />
                    <input type="password" name="password" onChange={handleChange} />
                    <a href="#">Forgot your password?</a>
                    <button type="submit">Log In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>React Login Page</h1>
                        <p>this is my first login page</p>
                    </div>
                </div>
            </div>
        </div>





    );
}

export default Login;
