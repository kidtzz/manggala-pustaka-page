// import React, { useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";

// const Login = () => {

//     return (
//         <div className="container">
//             <h2 className="text-center">Selamat Datang Di Manggala Pustaka</h2>
//             <div className=" col-lg-4 card p-5 ">
//                 <form>
//                     <h3>Sign In</h3>
//                     <div className="mb-3">
//                         <label>Email address</label>
//                         <input
//                             type="email"
//                             className="form-control"
//                             placeholder="Enter email"

//                         />
//                     </div>
//                     <div className="mb-3">
//                         <label>Password</label>
//                         <input
//                             type="password"
//                             className="form-control"
//                             placeholder="Enter password"

//                         />
//                     </div>
//                     <div className="mb-3">
//                         <div className="custom-control custom-checkbox">
//                             <input
//                                 type="checkbox"
//                                 className="custom-control-input"
//                                 id="customCheck1"
//                             />
//                             <label
//                                 className="custom-control-label"
//                                 htmlFor="customCheck1"
//                             >
//                                 Remember me
//                             </label>
//                         </div>
//                     </div>
//                     <div className="d-grid">
//                         <button type="submit" className="btn btn-primary">
//                             Submit
//                         </button>
//                     </div>
//                     <p className="forgot-password text-right">
//                         Forgot <a href=" ">password?</a>
//                     </p>

//                     <NavLink to="/SignUp">registered</NavLink>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: data.email,
            password: data.password,
        };
        axios
            .post(
                "https://server-api-manggala-pustaka.herokuapp.com/members",
                userData
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log("server responded");
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            });
    };

    return (
        <div>
            <h1>Login Account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default Login;
