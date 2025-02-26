import React, { use, useState } from "react";
import { Routes, Router, Link, Route } from "react-router";
import "./Register.css"

const ResetPassword = () => {
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
                <span>Reset Password</span>
            </div>
            <p className='title_para'>Forgot password? Reset here.</p>
            <form form action="#" onSubmit={handleRegister} method="GET">
            <div className="row">
            <input
                    type = "email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    id="input-item"
                />
            </div>
            <div className="row-button">
                <button className="register-button">Send login info!</button>
                {errorMessage && <p className="message">{errorMessage}</p>}
                <div className="signup-link"><Link to="/">Click here to return to login page</Link></div>
            </div>
            </form>
            </div>
        </div>

        
    );
};

export default ResetPassword;