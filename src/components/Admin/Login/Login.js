// import React from "react";
// import { NavLink } from "react-router-dom";
// import { firebaseAuthentication } from "../../Config/Firebase";

// export default class Login extends React.Component {
//     render() {
//         return (
//             <div className="container">
//                 <h2 className="text-center">
//                     Selamat Datang Di Manggala Pustaka
//                 </h2>
//                 <div className=" col-lg-4 card p-5 ">
//                     <form onSubmit={this.handleSubmit}>
//                         <h3>Sign In</h3>
//                         <div className="mb-3">
//                             <label>Email address</label>
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 placeholder="Enter email"
//                                 onChange={(e) => (this.email = e.target.value)}
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <label>Password</label>
//                             <input
//                                 type="password"
//                                 className="form-control"
//                                 placeholder="Enter password"
//                                 onChange={(e) =>
//                                     (this.password = e.target.value)
//                                 }
//                             />
//                         </div>
//                         <div className="mb-3">
//                             <div className="custom-control custom-checkbox">
//                                 <input
//                                     type="checkbox"
//                                     className="custom-control-input"
//                                     id="customCheck1"
//                                 />
//                                 <label
//                                     className="custom-control-label"
//                                     htmlFor="customCheck1"
//                                 >
//                                     Remember me
//                                 </label>
//                             </div>
//                         </div>
//                         <div className="d-grid">
//                             <button className="btn btn-primary">Login</button>
//                         </div>
//                         <p className="forgot-password text-right">
//                             Forgot <a href=" ">password?</a>
//                         </p>

//                         <NavLink to="/Register">registered</NavLink>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

// import React, { useEffect } from "react";
// // import { useHistory } from "react-router-dom";

// export default function Login() {
//     const [email, setEmail] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     // const history = useHistory();
//     useEffect(() => {
//         // if (localStorage.getItem("user-info")) {
//         //     history.push("/LandingPage");
//         // }
//     });
//     async function Login() {
//         console.warn(email, password);
//         let item = { email, password };
//         let result = await fetch(
//             "https://server-api-manggala-pustaka.herokuapp.com/members",
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type ": "application/json",
//                     Accept: "application/json",
//                 },
//                 body: JSON.stringify(item),
//             }
//         );
//         result = await result.json();
//         localStorage.setItem("user-info", JSON.stringify(result));
//     }
//     return (
//         <div className="container">
//             <h1>login</h1>
//             <div className="mb-3">
//                 <label>Email address</label>
//                 <input
//                     type="email"
//                     className="form-control"
//                     placeholder="Enter email"
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label>Password</label>
//                 <input
//                     type="password"
//                     className="form-control"
//                     placeholder="Enter password"
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//             </div>
//             <button className="btn btn-primary" onClick={Login}>
//                 Login
//             </button>
//         </div>
//     );
// }

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
} from "../../Config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

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
        <div className="login">
            <div className="container">
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
                <button
                    className="btn btn-primary"
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <button className="btn btn-danger" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/Register">Register</Link>
                    now.
                </div>
            </div>
        </div>
    );
}

export default Login;
