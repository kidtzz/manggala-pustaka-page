import React from "react";
import "./Kegiatan.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgwarnai from "../../img/galery/12.jpg";
import imgmengaji from "../../img/galery/14.jpg";
import imgkesenian from "../../img/galery/17.jpg";
import imgdarurat from "../../img/galery/4.jpg";
import imgpanahan from "../../img/galery/10.jpg";
import imgkesehatan from "../../img/galery/2.jpg";
import imgpertanian from "../../img/galery/5.jpg";

// satu
export const Kegiatan = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <section className="kegiatan  " id="kegiatan">
            <div className="jumbotron ">
                <div className="container pt-4 pb-3 card">
                    <h4 className="text-dark text-uppercase mb-4 fw-bold text-center">
                        KEGIATAN PENDIDIKAN
                    </h4>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div className="card card-bg mb-3 mx-3">
                            <img
                                src={imgwarnai}
                                className="img-fluid w-100"
                                alt="..."
                            ></img>
                            <div className="card-body">
                                <h5 className="card-title fw-bold ">
                                    Kelas Mewarnai
                                </h5>
                                <p className="card-text">
                                    program kegiatan sederhana yang dapat
                                    membantu anak-anak berkembang secara
                                    kognitif dan psikologis. Apalagi, mewarnai
                                    merupakan salah satu kegiatan yang paling
                                    digemari anak-anak.
                                </p>{" "}
                                <br />
                                <a
                                    href="https://www.instagram.com/manggalapustaka/"
                                    className="btn btn-primary"
                                >
                                    Selanjutnya
                                </a>
                            </div>
                        </div>
                        <div className="card card-bg mb-3 mx-3">
                            <img
                                src={imgmengaji}
                                className="img-fluid w-100"
                                alt="..."
                            ></img>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">
                                    Kelas Mengaji
                                </h5>
                                <p className="card-text">
                                    Kelas mengaji merujuk pada aktivitas membaca
                                    Al Qur'an atau membahas kitab-kitab oleh
                                    yang beragama Islam yang dilaksanakan setiap
                                    hari selasa dan jum'at{" "}
                                </p>{" "}
                                <br />
                                <br />
                                <a
                                    href="https://www.instagram.com/manggalapustaka/"
                                    className="btn btn-primary text-orange"
                                >
                                    Selanjutnya
                                </a>
                            </div>
                        </div>

                        <div className="card card-bg mb-3 mx-3">
                            <img
                                src={imgkesenian}
                                className=" w-100"
                                height="190"
                                alt="..."
                            ></img>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">
                                    Kelas Kesenian
                                </h5>
                                <p className="card-text">
                                    program kelas yang difokuskan untuk bidang
                                    kesenian dengan tujuan untuk menggali bakat
                                    serta mengasah ketrampilan anak sejak dini
                                    mungkin
                                </p>
                                <br />
                                <br />
                                <a
                                    href="https://www.instagram.com/manggalapustaka/"
                                    className="btn btn-primary"
                                >
                                    Selanjutnya
                                </a>
                            </div>
                        </div>

                        <div className="card card-bg mb-3 mx-3">
                            <img
                                src={imgdarurat}
                                className="img-fluid w-100"
                                alt="..."
                            ></img>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">
                                    Kelas Darurat
                                </h5>
                                <p className="card-text">
                                    program yang dirancang layaknya bersekolah
                                    pada umumnya pada saat kedaan darurat
                                    seperti pademi COVID-19 ini, tujuanya agar
                                    anak-anak tidak melupakan budaya sekolah
                                    yang sudah melekat sejak dini
                                </p>
                                <a
                                    href="https://www.instagram.com/manggalapustaka/"
                                    className="btn btn-primary"
                                >
                                    Selanjutnya
                                </a>
                            </div>
                        </div>

                        <div className="card card-bg mb-3 mx-3">
                            <img
                                src={imgpanahan}
                                className="img-fluid w-100"
                                alt="..."
                            ></img>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Panahan</h5>
                                <p className="card-text">
                                    Panahan adalah suatu kegiatan menggunakan
                                    busur panah untuk menembakkan anak panah.
                                    kegiatan ini merupakan salah satu olahraga
                                    yang dianjurkan oleh Rosulullah SAW yang
                                    dilaksanakan setiap sebulan sekali
                                </p>

                                <a
                                    href="https://www.instagram.com/manggalapustaka/"
                                    className="btn btn-primary"
                                >
                                    Selanjutnya
                                </a>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

//
//
//
//

// Kedua
export const Kegiatan2 = () => {
    return (
        <section className="kegiatan" id="kegiatan">
            <div className="jumbotron ">
                <div className="container pt-4 pb-3 card">
                    <h4 className="text-dark text-uppercase mb-4 fw-bold text-center">
                        KEGIATAN MASYARAKAT
                    </h4>
                    <div className="carousel-inner carousel-inner2 justify-content-center">
                        <div className="carousel-item active carousel-item2">
                            <div className="card">
                                <img
                                    src={imgkesehatan}
                                    className="d-block w-100"
                                    alt="..."
                                ></img>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">
                                        Pengecekan Kesehatan Masyarakat
                                    </h5>
                                    <p className="card-text">
                                        Layanan kesehatan ini dilaksanakan
                                        seminggu sekali, dengan tujuan agar
                                        lingkungan masyarakat yang sehat dan
                                        aman dari penyakit
                                    </p>
                                    <br />
                                    <br />
                                    <a
                                        href="https://www.instagram.com/manggalapustaka/"
                                        className="btn btn-primary"
                                    >
                                        Selanjutnya
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item carousel-item2">
                            <div className="card">
                                <img
                                    src={imgpertanian}
                                    className="d-block w-100"
                                    alt="..."
                                ></img>
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">
                                        Diskusi Pertanian
                                    </h5>
                                    <p className="card-text">
                                        program ini bertujuan untuk meningkatkan
                                        perekonomian masyarakat dengan
                                        mempelajari hal baru tentang efisiensi,
                                        efektifitas dan ekonomis seputar
                                        pertanian serta memperdayakan masyarakat
                                        agar lebih maju
                                    </p>
                                    <a
                                        href="https://www.instagram.com/manggalapustaka/"
                                        className="btn btn-primary"
                                    >
                                        Selanjutnya
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
