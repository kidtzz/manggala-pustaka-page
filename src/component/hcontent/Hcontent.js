import React from "react";
import "./Hcontent.css";
import proposal from "../../file/proposal.pdf";

const Hcontent = () => {
    return (
        <div
            id="introCarousel"
            className="carousel slide carousel-fade shadow-2-strong"
            data-bs-ride="carousel"
        >
            {/* <!-- Indicators --> */}
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
                                <h3 className="mb-3 ">
                                    Hallo, <span className="auto-input"> </span>
                                </h3>
                                <h1 className="mb-3 display-4 font-weight-bold">
                                    Manggala Pustaka
                                </h1>
                                <h5 className="mb-4">Madya, Mangun, Karso</h5>
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
                className="carousel-control-prev"
                href="#introCarousel"
                role="button"
                data-bs-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#introCarousel"
                role="button"
                data-bs-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Hcontent;
