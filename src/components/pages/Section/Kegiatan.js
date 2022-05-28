import React from "react";
import "../../../assets/scss/Kegiatan.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ListData from "../../Data/DataKegiatan";
import imgkesehatan from "../../../assets/img/galery/2.jpg";
import imgpertanian from "../../../assets/img/galery/5.jpg";

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
                <div
                    className="container pt-4 pb-3 "
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                >
                    <div className="header-kegiatan text-center mb-5">
                        <h4 className="text-dark  mb-4 fw-bold text-center animate__animated animate__fadeInDown">
                            Kegiatan Penddikan
                        </h4>
                        <span className="section-separator"></span>
                    </div>
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
                        {ListData.map((item, index) => {
                            return (
                                <div className="card card-bg mb-3 mx-3 animate__animated animate__fadeInUp">
                                    <img
                                        src={item.img}
                                        className="img-fluid w-100"
                                        alt="..."
                                    ></img>
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold ">
                                            {item.title}
                                        </h5>
                                        <p className="card-text">
                                            {item.bodytext}
                                        </p>
                                        <br />
                                        <a
                                            href="https://www.instagram.com/manggalapustaka/"
                                            className="btn button2"
                                        >
                                            Selanjutnya
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
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
                <div
                    className="container pt-4 pb-3 "
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                >
                    <div className="header-kegiatan text-center mb-5 animate__animated animate__fadeInDown">
                        <h4 className="text-dark  mb-4 fw-bold text-center">
                            Kegiatan Masyarakat
                        </h4>
                        <span className="section-separator"></span>
                    </div>
                    <div className="carousel-inner carousel-inner2 justify-content-center animate__animated animate__fadeInUp">
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
                                        className="btn button2"
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
                                        className="btn button2"
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
