import React from "react";
import "../../../assets/scss/Navbar.scss";
import logo from "../../../assets/img/logo1.png";
import { MenuItems, ListMenu } from "./MenuItems";

const Navbar = () => {
    return (
        <div className="header-inner ">
            <nav className="navbar navbar-expand-md  ">
                <div className="container d-flex">
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
                        <span className="navbar-toggler-icon pt-2">
                            <i className="fas fa-bars"></i>
                        </span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end text-center"
                        id="navbarNav"
                    >
                        <ul className="navbar-nav align-items-center ">
                            {ListMenu.map((menu, index) => {
                                const depthLevel = 0;
                                return (
                                    <MenuItems
                                        items={menu}
                                        key={index}
                                        depthLevel={depthLevel}
                                    />
                                );
                            })}
                        </ul>

                        <li className="nav-item header-button my-2 px-4 ">
                            <button className="button2">
                                <a className="text-light" href=" ">
                                    Folow Us
                                </a>
                            </button>
                        </li>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
