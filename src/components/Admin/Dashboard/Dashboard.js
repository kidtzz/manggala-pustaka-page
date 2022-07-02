import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../Config/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "../../../assets/scss/Admin/Dashboard.scss";
import axios from "axios";
// import Select from "react-select";

function Dashboard() {
    const [user, loading] = useAuthState(auth);
    const [first_name, setFirst_Name] = useState("");
    const navigate = useNavigate();
    const [menu, setMenu] = useState([]);

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

    // const [datas, setDatas] = useState([]);
    // const getPoke = async () => {
    //     const user = await fetch("https://pokeapi.co/api/v2/berry/");
    //     const value = await user.json();
    //     const result = value.results.map((data) => {
    //         return {
    //             label: data.name,
    //             value: data.name,
    //         };
    //     });
    //     setDatas(result);
    // };
    // useEffect(() => {
    //     getPoke();
    // }, []);

    // const menu = [
    //     { sideMenu: "Home" },
    //     { sideMenu: "About" },
    //     { sideMenu: "Blog" },
    //     { sideMenu: "Gallery" },
    // ];

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const { data: response } = await axios.get(
                    "https://server-api-manggala-pustaka.herokuapp.com/sideMenu"
                );
                setMenu(response);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchMenu();
    }, []);

    return (
        <div className="dashboard-content">
            <div className="container"></div>
            <div className="wrapper d-flex align-items-stretch">
                <nav id="sidebar">
                    <div className="p-4">
                        <h1>
                            <a href="index.html" className="logo">
                                {first_name} <span>{user?.email}</span>
                            </a>
                        </h1>
                        <ul className="list-unstyled components mb-5">
                            {menu.map((dataMenu, index) => {
                                return (
                                    <div key={index}>
                                        <li className="active d-block">
                                            <a href=" ">
                                                <span
                                                    className={dataMenu.icon}
                                                ></span>
                                                {dataMenu.menus}
                                            </a>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                        <button className="btn btn-danger" onClick={logout}>
                            Logout
                        </button>
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
                    <div className="container">
                        {/* <Select options={datas}></Select> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
