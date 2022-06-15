import React from "react";
// import { firebaseAuthentication } from "../Config/Firebase";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

//Section Pages
import Hcontent from "./Section/Hcontent";
import About from "./Section/About";
import Visi from "./Section/Visi";
import { Kegiatan, Kegiatan2 } from "./Section/Kegiatan";
import Gallery from "./Section/Gallery";

//Layouts
import Navbar from "../layouts/Navbar/Navbar";
import Footer from "../layouts/Footer";

export default class LandingPage extends React.Component {
    // componentDidMount() {
    //     firebaseAuthentication.onAuthStateChanged((user) => {
    //         if (!user) {
    //             this.props.history.push("/Login");
    //         }
    //     });
    // }
    render() {
        return (
            <div>
                <Navbar />
                {/* <Routes className="App-bg-content"></Routes> */}
                <Hcontent />
                <About />
                <Visi />
                <Kegiatan />
                <Kegiatan2 />
                <Gallery />
                <Footer />
            </div>
        );
    }
}
