import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos";
import "aos/dist/aos.css";
import Navbar from "../src/component/Navbar";
import Hcontent from "./component/hcontent/Hcontent";
import About from "../src/component/About/About";
import { Footer, BGFooter } from "./component/footer/Footer";
import Visi from "./component/visi/Visi";
import { Kegiatan, Kegiatan2 } from "./component/kegiatan/Kegiatan";
import Gallery from "./component/gallery/Gallery";

function App() {
    return (
        <div className="App ">
            <Navbar />
            <Hcontent />
            <div className="App-bg-content">
                <About />
                <Visi />
                <Kegiatan />
                <Kegiatan2 />
                <Gallery />
            </div>
            <BGFooter />
            <Footer />
        </div>
    );
}

export default App;
