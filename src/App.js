import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos";
import "aos/dist/aos.css";
import "./assets/css/Button.scss";
// import "../src/assets/js/main.js";

import Navbar from "../src/component/Navbar/Navbar";
import Hcontent from "./component/hcontent/Hcontent";
import About from "../src/component/About/About";
import { Footer, BGFooter } from "./component/footer/Footer";
import Visi from "./component/visi/Visi";
import { Kegiatan, Kegiatan2 } from "./component/kegiatan/Kegiatan";
import Gallery from "./component/gallery/Gallery";

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
                        {/* <Route path="/About" element={<About />} />
                        <Route path="/Contact" element={<SignUp />} /> */}
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
