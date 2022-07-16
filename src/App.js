import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Assetsnya
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos";
import "aos/dist/aos.css";
import "../src/assets/scss/Button.scss";
import "./assets/scss/css/Utilities.min.css";

//Pages
import LandingPage from "./components/pages/LandingPage";
import Login from "./components/Admin/Login/Login";
import Register from "./components/Admin/Login/Register";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import Reset from "./components/Admin/Login/Reset";

export default class App extends Component {
    state = {
        isOpen: false,
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <Router>
                <div className="App ">
                    {/* Headernya */}
                    {/* Body Contentnya Disini */}

                    <Routes className="App-bg-content">
                        <Route exact path="/" element={<LandingPage />} />
                        <Route exact path="/Login" element={<Login />} />
                        <Route exact path="/Register" element={<Register />} />
                        <Route
                            exact
                            path="/Dashboard"
                            element={<Dashboard />}
                        />
                        <Route exact path="/Reset" element={<Reset />} />
                    </Routes>

                    {/* Footernya */}
                </div>
            </Router>
        );
    }
}
