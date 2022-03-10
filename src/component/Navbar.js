import React from "react";
import logo from "../img/logo1.png";
import { button2 } from "./button/Button";

const Navbar = () => {
    return (
        <div className="header-inner mx-auto ">
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container">
                    <a className="navbar-brand" href="  ">
                        <img
                            className="img-fluid "
                            width="60"
                            src={logo}
                            alt=""
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end text-center"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav m-auto text-center text-dark">
                            <li className="nav-item active">
                                <a className="nav-link" href="#home">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">
                                    Tentang Kami
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#visi">
                                    Visi & Misi
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#kegiatan">
                                    Kegiatan
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#kontak">
                                    Kontak
                                </a>
                            </li>
                        </ul>
                        <form class=" my-lg-0 mb-3 justify-content-center">
                            <a href="https://www.instagram.com/manggalapustaka/">
                                {button2()}
                            </a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
