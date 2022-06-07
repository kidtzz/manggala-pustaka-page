import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Login extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            email: this.email,
            password: this.password,
        };

        axios
            .post(
                "https://server-api-manggala-pustaka.herokuapp.com/members",
                userData
            )
            .then((ress) => {
                console.log(ress);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    render() {
        return (
            <div className="container">
                <h2 className="text-center">
                    Selamat Datang Di Manggala Pustaka
                </h2>
                <div className=" col-lg-4 card p-5 ">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Sign In</h3>
                        <div className="mb-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                onChange={(e) => (this.email = e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(e) =>
                                    (this.password = e.target.value)
                                }
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
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="forgot-password text-right">
                            Forgot <a href=" ">password?</a>
                        </p>

                        <NavLink to="/Register">registered</NavLink>
                    </form>
                </div>
            </div>
        );
    }
}
