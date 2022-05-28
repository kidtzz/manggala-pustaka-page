import React from "react";
import Contact from "../main/Contact";
import "../../assets/css/Footer.min.css";

export default function Footer() {
    // CONTENT
    return (
        <div>
            <div>
                <div id="BGFooter"></div>
            </div>
            <section className=" pb-0 footer bg-grey" id="kontak">
                <div className="container px-5  ">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-5 col-md-5 col-xl-5  mb-5 mb-lg-0">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-dark">
                                Profile
                            </h5>
                            <div className="footer-link d-block text-secondary ">
                                <div className="d-flex ">
                                    <ul className="footer-social">
                                        <li>
                                            <i className="fas fa-map-marker-alt mr"></i>
                                        </li>
                                        <br />
                                        <li>
                                            <i className="fab fa-whatsapp mr"></i>{" "}
                                        </li>
                                        <li>
                                            <i className="fas fa-envelope mr"></i>
                                        </li>
                                    </ul>
                                    <ul className="footer-social-text">
                                        <li>
                                            Dus. Manggal RT 17/ Rw 06 Des. Simo
                                            Kec. Simo Kab. Boyolali
                                        </li>
                                        <li>08153969986</li>
                                        <li>manggalapustaka@gmail.com</li>
                                    </ul>
                                </div>

                                <div className="col-lg-6 col-md-6 col-xl-6  mb-5 mb-lg-0 footer-icon-social mt-2">
                                    <a
                                        className="m-2"
                                        href="https://web.facebook.com/profile.php?id=100076998842478"
                                        role="button"
                                    >
                                        <i className=" fab fa-facebook-square"></i>
                                    </a>
                                    <a
                                        className="m-2"
                                        href="https://www.instagram.com/manggalapustaka/"
                                        role="button"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a className="m-2" href="#!" role="button">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 offset-lg-1 col-lg-5 col-xl-5 mb-5">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-dark">
                                Hubungi Kami
                            </h5>
                            <form
                                action="https://formsubmit.co/7937f2533162208d79e89227166e58de"
                                method="POST"
                            >
                                <input
                                    type="hidden"
                                    name="_honey"
                                    value="false"
                                />

                                <input
                                    type="hidden"
                                    name="_captcha"
                                    value="false"
                                />
                                <input
                                    type="hidden"
                                    name="_next"
                                    value="https://manggalapustaka.github.io/home/#kontak"
                                />
                                <div className="mb-3">
                                    <label
                                        for="fullname"
                                        className="form-label "
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        name="name"
                                        className="form-control"
                                        id="fullname"
                                        placeholder="your name"
                                        required
                                    ></input>
                                </div>
                                <div className="mb-3">
                                    <label
                                        for="emailinfo"
                                        className="form-label "
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="emailinfo"
                                        placeholder="your email"
                                        required
                                    ></input>
                                </div>
                                <div className="mb-3">
                                    <label for="massage" className="form-label">
                                        Massage
                                    </label>
                                    <textarea
                                        placeholder="Masukan Pesan..."
                                        className="form-control"
                                        id="massage"
                                        name="massage"
                                        rows="3"
                                        required
                                    ></textarea>
                                </div>
                                <Contact />
                            </form>
                        </div>
                    </div>
                </div>
                <div className="text-center px-5 copyright text-secondary ">
                    © 2021 Manggala Pustaka. All rights reserved
                </div>
                <div className="border-footer  "></div>
            </section>
        </div>
    );
}
