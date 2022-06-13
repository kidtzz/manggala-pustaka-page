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
