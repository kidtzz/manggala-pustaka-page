import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos";
import "aos/dist/aos.css";
import "../src/assets/scss/Button.scss";
// import "../src/assets/js/main.js";

//Layouts
import Navbar from "./components/layouts/Navbar/Navbar";
import { Footer, BGFooter } from "./components/layouts/Footer";

//Pages
import Hcontent from "./components/pages/Hcontent";
import About from "./components/pages/About";
import Visi from "./components/pages/Visi";
import { Kegiatan, Kegiatan2 } from "./components/pages/Kegiatan";
import Gallery from "./components/pages/Gallery";

class App extends Component {
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
                    <Navbar />
                    <Hcontent />
                    <Routes className="App-bg-content">
                        <Route path="/" element={<About />} />
                    </Routes>
                    <Visi />
                    <Kegiatan />
                    <Kegiatan2 />
                    <Gallery />
                    <BGFooter />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
