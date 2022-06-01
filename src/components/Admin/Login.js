import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Login = () => {
    // const [username, setUsername] = useState[""];
    // const [password, setPassword] = useState[""];

    // const onchangeUsername = (e) => {
    //     const value = e.target.value;
    //     setUsername(value);
    // };
    // const onchangePassword = (e) => {
    //     const value = e.target.value;
    //     setPassword(value);
    // };
    // const submitLogin = () => {
    //     const data = {
    //         username: username,
    //         password: password,
    //     };
    //     // console.log(data);
    //     axios
    //         .post(
    //             "https://server-api-manggala-pustaka.herokuapp.com/members",
    //             data
    //         )
    //         .then((result) => {
    //             console.log(result.data);
    //         });
    // };
    return (
        <div className="container">
            <h2 className="text-center">Selamat Datang Di Manggala Pustaka</h2>
            <div className=" col-lg-4 card p-5 ">
                <form>
                    <h3>Sign In</h3>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            
                        />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                           
                        />
                    </div>
                    <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                            />
                            <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                            >
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right">
                        Forgot <a href=" ">password?</a>
                    </p>

                    <NavLink to="/SignUp">registered</NavLink>
                </form>
            </div>
        </div>
    );
};

export default Login;
