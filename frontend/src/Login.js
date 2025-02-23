import React, { useState } from "react";
import { Routes, Router, Link, Route } from "react-router";
import Login from "./Login";
import "./Register.css"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <div className="wrapper">
            <div className="title">
                <span>Register</span>
            </div>
            <p className='title_para'>Create your account.</p>
            <form form action="#" onSubmit={handleRegister}>
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
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    id="input-item"
                />
            </div>
            <div className="row-button">
                <button className="register-button">Click Here to Register</button>
                <div className="signup-link"><Link to="/">Click here to go to the login page</Link></div>
            </div>
            </form>
            </div>
        </div>
    );
};

export default Register;