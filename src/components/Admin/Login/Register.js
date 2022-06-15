import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "../../Config/Firebase";
import "../../../assets/scss/css/Register.min.css";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
    };

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/Dashboard");
    });

    return (
        <div className="register-content">
            <div className="container">
                <div className="card mx-auto col-lg-4 m-3 px-5 py-5 ">
                    <h2 className="text-center ">Registrasi</h2>
                    <label>Nama</label>
                    <div className=" input-group mb-3">
                        <div className="input-group-addon p-2">
                            <i className="bi bi-person"></i>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full Name"
                        />
                    </div>
                    <label>Email</label>
                    <div className=" input-group mb-3">
                        <div className="input-group-addon p-2">
                            <i className="bi bi-envelope"></i>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        />
                    </div>
                    <label>Password</label>
                    <div className=" input-group mb-3">
                        <div className="input-group-addon p-2">
                            <i className="bi bi-lock"></i>
                        </div>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <button className="btn btn-primary mb-3" onClick={register}>
                        Register
                    </button>
                    <h6 className="text-center">Or Registrasi With</h6>
                    <button
                        className="btn btn-danger mb-5"
                        onClick={signInWithGoogle}
                    >
                        Register with Google
                    </button>

                    <div className="text-center">
                        Already have an account? <br />
                        <Link to="/Login">Login</Link> now.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
