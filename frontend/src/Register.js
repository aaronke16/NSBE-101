import React, { use, useState } from "react";
import { Routes, Router, Link, Route } from "react-router";
import Login from "./Login";
import "./Register.css"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault();

        if(password != confirmPassword){
            setErrorMessage("Passwords do not match!");
            return;
        }

        const userData = { username, email, password };
        try {
          const response = await fetch("", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });
          console.log(response)
          const result = await response.json();
          setErrorMessage(result.errorMessage || "Registration successful!");
        } catch (error) {
          console.error("Registration failed:", error);
          setErrorMessage("Registration failed. Please try again.");
        }
    };

    return (
        <div className="container">
            <div className="wrapper">
            <div className="title">
                <span>Register</span>
            </div>
            <p className='title_para'>Create your account.</p>
            <form form action="#" onSubmit={handleRegister} method="POST">
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
                    type = "email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    id="input-item"
                />
            </div>
            <div className="row">
                <input 
                    type = "password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    id="input-item"
                />
            </div>
            <div className="row">
                <input 
                    type = "password"
                    placeholder="Confirm password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    id="input-item"
                />
            </div>
            <div className="row-button">
                <button className="register-button">Click Here to Register</button>
                {errorMessage && <p className="message">{errorMessage}</p>}
                <div className="signup-link"><Link to="/">Click here to go to the login page</Link></div>
            </div>
            </form>
            </div>
        </div>
    );
};

export default Register;