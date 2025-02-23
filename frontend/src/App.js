import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import React from 'react';
import './App.css';
import Login from './Login';
import Register from "./Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
