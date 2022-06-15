import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
} from "../../Config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../../../assets/scss/Admin/Login.scss";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/Dashboard");
    });

    return (
        <div className="login-content">
            <div className=" container">
                <div className="card mx-auto col-lg-4 m-3 px-5 py-5 ">
                    <h2 className="text-center ">Login</h2>
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
                    <div className="input-group mb-3">
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
                    <div className="mb-3">
                        <Link to="/reset">Forgot Password?</Link>
                    </div>
                    <button
                        className="btn btn-primary mb-3"
                        onClick={() =>
                            logInWithEmailAndPassword(email, password)
                        }
                    >
                        Login
                    </button>
                    <h6 className="text-center">Or Login With</h6>
                    <button
                        className="btn btn-danger mb-5 "
                        onClick={signInWithGoogle}
                    >
                        Login with Google
                    </button>

                    <div className="text-center">
                        Don't have an account?
                        <br />
                        <Link className="font-weight-bold" to="/Register">
                            Register{" "}
                        </Link>
                        now.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
