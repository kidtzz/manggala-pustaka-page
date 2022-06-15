import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../Config/Firebase";
// import "./Reset.css";

function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    });

    return (
        <div className="reset">
            <div className="Container">
                <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <button
                    className="btn btn-danger"
                    onClick={() => sendPasswordReset(email)}
                >
                    Send password reset email
                </button>

                <div>
                    Don't have an account? <Link to="/Register">Register</Link>{" "}
                    now.
                </div>
            </div>
        </div>
    );
}

export default Reset;
