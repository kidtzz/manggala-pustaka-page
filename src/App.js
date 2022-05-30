import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Assetsnya
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos";
import "aos/dist/aos.css";
import "../src/assets/scss/Button.scss";
import "../src/assets/js/main.js";

//Pages
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/Admin/Login";
import SignUp from "./components/Admin/SignUp";

export default class App extends Component {
    state = {
        isOpen: false,
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App ">
                    {/* Headernya */}
                    {/* Body Contentnya Disini */}
                    <Routes className="App-bg-content">
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/SignUp" element={<SignUp />} />
                    </Routes>
                    {/* Footernya */}
                </div>
            </BrowserRouter>
        );
    }
}
