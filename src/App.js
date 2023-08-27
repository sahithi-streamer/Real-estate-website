import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from './components/About/About';
import Property from "./components/Property/Property";
import Agent from "./components/Agent/Agent";
import SignUp from "./components/SignUp/Signup";
import Login from "./components/Login/Login";

import './App.css'



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/property" element={<Property />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/agent" element={<Agent />} />
                </Route>
                <Route path="/signup" element={<SignUp />} />
                <Route path="login" element={<Login />}  />    
            </Routes>
        </Router>
    )
}
export default App;