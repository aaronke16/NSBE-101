import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import React from 'react';
import './App.css';
import Login from './Login';
import Register from "./Register";
import Sidenav from "./Sidenav";
import Homepage from "./Homepage";
import ResetPassword from "./Resetpassword";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/sidenav" element={<Sidenav />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
