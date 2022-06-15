import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class Register extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            nama: this.nama,
            alamat: this.alamat,
            tempat_lahir: this.tempat_lahir,
            jenis_kelamin: this.jenis_kelamin,
            jabatan: this.jabatan,
            umur: this.umur,
            telp: this.telp,
            email: this.email,
            password: this.password,
            password_confirm: this.confirm,
        };
        axios
            .post(
                "https://server-api-manggala-pustaka.herokuapp.com/members",
                userData
            )
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err.response);
                    console.log("Server.e Responded");
                } else if (err.request) {
                    console.log("Networkmu Rusak (Error) ");
                } else {
                    console.log(err);
                }
            });
    };

    render() {
        return (
            <div className="container">
                <h2 className="text-center">
                    Silahkan Isi Data Ke-angotaan Perpustakaan Manggala Pustaka
                </h2>
                <div className=" card p-5 ">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Registrasi</h3>
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="mb-3">
                                    <label>Nama</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="First name"
                                        onChange={(event) =>
                                            (this.nama = event.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Alamat</label>
                                    <input
                                        type="alamat"
                                        className="form-control"
                                        placeholder="Enter email"
                                        onChange={(event) =>
                                            (this.alamat = event.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label> Tanggal lahir</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Enter..."
                                        onChange={(event) =>
                                            (this.tempat_lahir =
                                                event.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Jenis Kelamin</label>
                                    <input
                                        type="jenis_kelamin"
                                        className="form-control"
                                        placeholder="Enter kelamin"
                                        onChange={(event) =>
                                            (this.jenis_kelamin =
                                                event.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Umur</label>
                                    <input
                                        type="umur"
                                        className="form-control"
                                        placeholder="Enter Umur"
                                        onChange={(event) =>
                                            (this.umur = event.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            {/* right Row */}
                            <div className="col-lg-5">
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <label>Jabatan</label>
                                        <input
                                            type="jabatan"
                                            className="form-control"
                                            placeholder="Enter Jabatan"
                                            onChange={(event) =>
                                                (this.jabatan =
                                                    event.target.value)
                                            }
                                        />
                                    </div>
                                    <label>No.Telp</label>
                                    <input
                                        type="telp"
                                        className="form-control"
                                        placeholder="First Nomor Telepon"
                                        onChange={(event) =>
                                            (this.telp = event.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter email"
                                        onChange={(event) =>
                                            (this.email = event.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        onChange={(event) =>
                                            (this.password = event.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Enter confirm Password"
                                        onChange={(event) =>
                                            (this.password_confirm =
                                                event.target.value)
                                        }
                                    />
                                </div>
                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Sign Up
                                    </button>
                                    <p className="forgot-password text-right">
                                        Already Registered{" "}
                                        <NavLink to="/Login">Sign In?</NavLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

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
