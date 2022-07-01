import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../Config/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "../../../assets/scss/Admin/Dashboard.scss";

function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const [first_name, setFirst_Name] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(
                collection(db, "users"),
                where("uid", "==", user?.uid)
            );
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setFirst_Name(data.first_name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");

        fetchUserName();
    });

    return (
        <div className="dashboard-content">
            <div className="wrapper d-flex align-items-stretch">
                <nav id="sidebar">
                    <div className="custom-menu">
                        <button
                            type="button"
                            id="sidebarCollapse"
                            className="btn btn-primary"
                        >
                            <i className="fa fa-bars"></i>
                            <span className="sr-only">Toggle Menuss</span>
                        </button>
                    </div>
                    <div className="container">
                        <div>{first_name}</div>
                        <div>{user?.email}</div>
                        <button className="btn btn-primary" onClick={logout}>
                            Logout
                        </button>
                    </div>
                    <div className="p-4">
                        <h1>
                            <a href="index.html" className="logo">
                                Portfolic <span>Portfolio Agency</span>
                            </a>
                        </h1>
                        <ul className="list-unstyled components mb-5">
                            <li className="active">
                                <a href=" ">
                                    <span className="fa fa-home mr-3"></span>{" "}
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <span className="fa fa-user mr-3"></span>{" "}
                                    About
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <span className="fa fa-sticky-note mr-3"></span>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <span className="fa fa-suitcase mr-3"></span>
                                    Gallery
                                </a>
                            </li>

                            <li>
                                <a href=" ">
                                    <span className="fa fa-paper-plane mr-3"></span>
                                    Contacts
                                </a>
                            </li>
                        </ul>

                        <div className="mb-5">
                            <h3 className="h6 mb-3">Subscribe newsletter</h3>
                            <form action=" " className="subscribe-form">
                                <div className="form-group d-flex">
                                    <div className="icon">
                                        <span className="icon-paper-plane"></span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter Email Address"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>

                <div id="content" className="p-4 p-md-5 pt-5">
                    <h2 className="mb-4">Sidebar #05</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
