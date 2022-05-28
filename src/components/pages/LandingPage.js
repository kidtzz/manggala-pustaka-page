import React from "react";

//Section Pages
import Hcontent from "./Section/Hcontent";
import About from "./Section/About";
import Visi from "./Section/Visi";
import { Kegiatan, Kegiatan2 } from "./Section/Kegiatan";
import Gallery from "./Section/Gallery";

export default function LandingPage() {
    return (
        <div>
            <Hcontent />
            <About />
            <Visi />
            <Kegiatan />
            <Kegiatan2 />
            <Gallery />
        </div>
    );
}
