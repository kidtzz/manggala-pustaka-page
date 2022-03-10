import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hcontent.scss";
import "../../assets/animate.css/animate.min.css";
import proposal from "../../file/proposal.pdf";

const Hcontent = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div
            id="introCarousel"
            className="carousel slide carousel-fade shadow-2-strong"
            data-bs-ride="carousel"
            data-bs-interval="5000"
            class="carousel slide carousel-fade"
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
                                <h1 className="mb-3 display-4 font-weight-bold animate__animated animate__fadeInUp">
                                    Manggala Pustaka
                                </h1>
                                <h5 className="mb-4 animate__animated animate__fadeInUp scrollto">
                                    Madya, Mangun, Karso
                                </h5>
                                <a
                                    className="btn btn-outline-light btn-lg m-2"
                                    href="mailto:manggalapustaka@gmail.com"
                                    rel="follow"
                                >
                                    Kontak Kami
                                </a>
                                <a
                                    className="btn btn-primary btn-lg m-2"
                                    href={proposal}
                                    target="_blank"
                                    role="button"
                                    rel="noreferrer"
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
                            <div className="text-white text-center">
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
                            <div className="text-white text-center">
                                <h2>
                                    Manggala Pustaka memiliki berbagai kegiatan
                                    menarik
                                </h2>
                                <a
                                    className="btn btn-primary btn-lg m-2"
                                    href="#kegiatan"
                                    role="button"
                                >
                                    let's see
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="mask">
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white text-center">
                                <h2>
                                    Event
                                    <u className="color-text fw-bold">
                                        "Manggala Pustaka"
                                    </u>
                                    dengan
                                    <u className="color-text fw-bold">
                                        "IYOIN LC SOLO"
                                    </u>
                                </h2>
                                <a
                                    className="btn btn-primary btn-lg m-2"
                                    href="#kegiatan"
                                    role="button"
                                >
                                    let's see
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Inner -->

          <!-- Controls --> */}
            <a
                class="carousel-control-prev"
                href="#introCarousel"
                role="button"
                data-bs-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon bi bi-chevron-left"
                    aria-hidden="true"
                ></span>
            </a>

            <a
                class="carousel-control-next"
                href="#introCarousel"
                role="button"
                data-bs-slide="next"
            >
                <span
                    class="carousel-control-next-icon bi bi-chevron-right"
                    aria-hidden="true"
                ></span>
            </a>
        </div>
    );
};

export default Hcontent;
