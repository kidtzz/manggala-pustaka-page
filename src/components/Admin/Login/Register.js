// import React from "react";
// import { NavLink } from "react-router-dom";
// import { firebaseAuthentication } from "../../Config/Firebase";

// export default class Register extends React.Component {
//     state = {
//         email: "",
//         password: "",
//     };
//     handleChangeField = (e) => {
//         this.setState({ [e.target.name]: e.target.value });
//     };
//     handleSubmit = (e) => {
//         e.preventDefault();
//         const { email, password } = this.state;
//         firebaseAuthentication
//             .createUserWithEmailAndPassword(email, password)
//             .then((res) => {
//                 firebaseAuthentication.currentUser
//                     .sendEmailVerification()
//                     .then(() => {
//                         alert("Mohon verifikasi Email Anda");
//                         this.props.history.push("/login");
//                     })
//                     .catch((error) => {
//                         alert(error.message);
//                     });
//             })
//             .catch((err) => {
//                 alert(err.message);
//             });
//     };

//     render() {
//         const { email, password } = this.state;
//         return (
//             <div className="container">
//                 <h2 className="text-center">Silahkan Registrasi </h2>
//                 <div className=" card p-5 ">
//                     <form onSubmit={this.handleSubmit}>
//                         <h3>Registrasi</h3>
//                         <div className="col-lg-5">
//                             <div className="mb-3">
//                                 <label>email</label>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     placeholder="Enter email"
//                                     value={email}
//                                     name="email"
//                                     onChange={this.handleChangeField}
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <label>password</label>
//                                 <input
//                                     type="password"
//                                     className="form-control"
//                                     placeholder="Enter Password"
//                                     value={password}
//                                     name="password"
//                                     onChange={this.handleChangeField}
//                                     required
//                                 />
//                             </div>
//                             <div className="d-grid">
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary"
//                                 >
//                                     Sign Up
//                                 </button>
//                                 <p className="forgot-password text-right">
//                                     Already Registered
//                                     <NavLink to="/Login">Sign In?</NavLink>
//                                 </p>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "../../Config/Firebase";
// import "./Register.css";

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
        <div className="register">
            <div className="container">
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                />
                <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="btn btn-primary" onClick={register}>
                    Register
                </button>
                <button className="btn btn-danger" onClick={signInWithGoogle}>
                    Register with Google
                </button>

                <div>
                    Already have an account? <Link to="/Login">Login</Link> now.
                </div>
            </div>
        </div>
    );
}

export default Register;
