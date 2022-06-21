import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../Config/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "../../../assets/scss/Admin/Dashboard.scss";

function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(
                collection(db, "users"),
                where("uid", "==", user?.uid)
            );
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setName(data.name);
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
            <div className="container">
                Logged in as
                <div>{name}</div>
                <div>{user?.email}</div>
                <button className="btn btn-primary" onClick={logout}>
                    Logout
                </button>
            </div>
            <div class="wrapper d-flex align-items-stretch">
                <nav id="sidebar">
                    <div class="custom-menu">
                        <button
                            type="button"
                            id="sidebarCollapse"
                            class="btn btn-primary"
                        >
                            <i class="fa fa-bars"></i>
                            <span class="sr-only">Toggle Menu</span>
                        </button>
                    </div>
                    <div class="p-4">
                        <h1>
                            <a href="index.html" class="logo">
                                Portfolic <span>Portfolio Agency</span>
                            </a>
                        </h1>
                        <ul class="list-unstyled components mb-5">
                            <li class="active">
                                <a href=" ">
                                    <span class="fa fa-home mr-3"></span> Home
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <span class="fa fa-user mr-3"></span> About
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <span class="fa fa-briefcase mr-3"></span>
                                    Works
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <span class="fa fa-sticky-note mr-3"></span>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <span class="fa fa-suitcase mr-3"></span>
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <span class="fa fa-cogs mr-3"></span>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href=" ">
                                    <span class="fa fa-paper-plane mr-3"></span>
                                    Contacts
                                </a>
                            </li>
                        </ul>

                        <div class="mb-5">
                            <h3 class="h6 mb-3">Subscribe for newsletter</h3>
                            <form action=" " class="subscribe-form">
                                <div class="form-group d-flex">
                                    <div class="icon">
                                        <span class="icon-paper-plane"></span>
                                    </div>
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Enter Email Address"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>

                <div id="content" class="p-4 p-md-5 pt-5">
                    <h2 class="mb-4">Sidebar #05</h2>
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
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
