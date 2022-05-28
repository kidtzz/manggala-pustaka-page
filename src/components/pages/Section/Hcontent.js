import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../assets/css/Hcontent.min.css";
import "../../../assets/css/animate.css/animate.min.css";
import proposal from "../../../assets/file/proposal.pdf";

const Hcontent = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div
            id="introCarousel"
            className=" carousel slide carousel-fade carousel slide carousel-fade shadow-2-strong"
            data-bs-ride="carousel"
            data-bs-interval="5000"
        >
            <ol className="carousel-indicators">
                <li
                    data-bs-target="#introCarousel"
                    data-bs-slide-to="0"
                    className="active"
                ></li>
                <li data-bs-target="#introCarousel" data-bs-slide-to="1"></li>
                <li data-bs-target="#introCarousel" data-bs-slide-to="2"></li>
                <li data-bs-target="#introCarousel" data-bs-slide-to="3"></li>
            </ol>

            {/* <!-- Inner --> */}
            <div className="carousel-inner">
                {/* <!-- Single item --> */}
                <div className="carousel-item active">
                    <div className="mask">
                        <div className="d-flex justify-content-center h-100 align-items-center">
                            <div className="text-white text-center">
                                <h3 className="mb-3 animate__animated animate__fadeInDown">
                                    Hallo, <span className="auto-input"> </span>
                                </h3>
                                <h2 className="mb-3 display-4 font-weight-bold animate__animated animate__fadeInUp">
                                    Manggala Pustaka
                                </h2>
                                <h5 className="mb-4 animate__animated animate__fadeInUp scrollto">
                                    Madya, Mangun, Karso
                                </h5>
                                <a
                                    className="btn px-3 btn-outline-light btn-sm py-2   animate__animated animate__fadeInDown"
                                    href="mailto:manggalapustaka@gmail.com"
                                    rel="follow"
                                >
                                    Kontak Kami
                                </a>
                                <a
                                    className="p-2 px-4 mx-3 button2 animate__animated animate__fadeInDown"
                                    href={proposal}
                                    target="_blank"
                                    role="button"
                                    rel="noreferrer"
                                    data-aos="flip-down"
                                >
                                    Proposal
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="mask">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white text-center animate__animated animate__fadeInDown">
                                <h2>
                                    Manggala Pustaka berdiri sejak 17 agustus
                                    2021
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="mask">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white text-center ">
                                <h2 className="animate__animated animate__fadeInDown">
                                    Manggala Pustaka memiliki berbagai kegiatan
                                    menarik
                                </h2>
                                <button className="  button2 animate__animated animate__fadeInUp ">
                                    <a
                                        href="#kegiatan"
                                        role="button"
                                        className="text-light  "
                                    >
                                        Read More
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="mask">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white text-center">
                                <h2 className="animate__animated animate__fadeInDown">
                                    Event
                                    <u className="color-text ">
                                        "Manggala Pustaka"
                                    </u>
                                    dengan
                                    <u className="color-text">
                                        "IYOIN LC SOLO"
                                    </u>
                                </h2>
                                <button className=" button2 animate__animated animate__fadeInUp ">
                                    <a
                                        href="#kegiatan"
                                        role="button"
                                        className="text-light"
                                    >
                                        Read More
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Inner -->

          <!-- Controls --> */}
            <a
                className="carousel-control-prev"
                href="#introCarousel"
                role="button"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon bi bi-chevron-left"
                    aria-hidden="true"
                ></span>
            </a>

            <a
                className="carousel-control-next"
                href="#introCarousel"
                role="button"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon bi bi-chevron-right"
                    aria-hidden="true"
                ></span>
            </a>
        </div>
    );
};

export default Hcontent;
