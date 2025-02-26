import React, { use, useState } from "react";
import { Routes, Router, Link, Route } from "react-router";
import "./Register.css"
import Register from "./Register"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault();

        const userData = { username, password };
        try {
            const response = await fetch("", {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            console.log(response);
            if (!response.ok) {
              setErrorMessage("Username or password do not match");
              return;
            }
        
            const data = await response.json();
            // return data;
          } catch (error) {
            console.error("Login failed:", error);
            // console.log(body);
            setErrorMessage("Login failed. Username or password do not match.");
          }
    };

    return (
        <div className="container">
            <div className="wrapper">
            <div className="title">
                <span>Log In</span>
            </div>
            <p className='title_para'>Log into your account.</p>
            <form form action="#" onSubmit={handleRegister} method="GET">
            <div className="row">
            <input
                    type = "username"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    id="input-item"
                />
            </div>
            <div className="row">
                <input 
                    type = "password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    id="input-item"
                />
            </div>
            <div className="row-button">
                <button className="register-button">Login</button>
                {errorMessage && <p className="message">{errorMessage}</p>}
                <div className="signup-link"><Link to="./Register">Don't have an account? Click here to register!</Link></div>
            </div>
            </form>
            </div>
        </div>
    );
};

export default Login;