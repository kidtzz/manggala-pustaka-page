import React from "react";
import { NavLink } from "react-router-dom";

export default class SignUp extends React.Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center">SignUp Manggala Pustaka</h2>
                <div className=" col-lg-4 card p-5 ">
                    <form>
                        <h3>Sign Up</h3>
                        <div className="mb-3">
                            <label>First name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                            />
                        </div>
                        <div className="mb-3">
                            <label>Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                            />
                        </div>
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
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">
                                Sign Up
                            </button>
                        </div>
                        <p className="forgot-password text-right">
                            Already Registered{" "}
                            <NavLink to="/Login">sign in?</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
