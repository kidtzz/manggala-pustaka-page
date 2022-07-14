import React from "react";

//Section Pages
import Hcontent from "./Section/Hcontent";
import About from "./Section/About";
import Visi from "./Section/Visi";
import Kegiatan from "./Section/Kegiatan";
import Gallery from "./Section/Gallery/Gallery";

//Layouts
import Navbar from "../layouts/Navbar/Navbar";
import Footer from "../layouts/Footer/Footer";

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            {/* <Routes className="App-bg-content"></Routes> */}
            <Hcontent />
            <About />
            <Visi />
            <Kegiatan />
            <Gallery />
            <Footer />
        </div>
    );
}
