import React, { useEffect } from "react";
import "../../assets/scss/About.scss";
import profil from "../../assets/img/profil.jpeg";

import AOS from "aos";
import "aos/dist/aos.css";
import proposal from "../../assets/file/proposal.pdf";

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 500,
        });
        AOS.refresh();
    }, []);
    return (
        <section className="about  " id="about">
            <div className="jumbotron ">
                <div className="container pb-5  ">
                    <div className="row d-flex justify-content-center align-items-center text-dark">
                        <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mt-5 ">
                            <div
                                className="img-fluid"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                            >
                                <img
                                    src={profil}
                                    alt=""
                                    className=" w-100"
                                ></img>
                            </div>
                        </div>
                        <div
                            className="col-md-5 col-lg-5 col-xl-5 mx-auto mt-6 pt-5 "
                            data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom"
                        >
                            <div className="header-kegiatan  mb-5">
                                <h4 className="mb-3 fw-bold text-left animate__animated animate__fadeInDown">
                                    Tentang Kami
                                </h4>
                                <span className="section-separator m-4 px-1"></span>
                            </div>
                            <p className="mb-4 animate__animated animate__fadeInUp">
                                Taman Baca Masyarakat (TBM) Manggala pustaka
                                merupakan satu² nya Taman baca yang ada di desa
                                Simo, Tepatnya di dukuh Manggal Rt 17/rw 06.
                                Kecamatan Simo, Kabupaten Boyolali. Perpustakaan
                                “Manggala Pustaka” merupakan gagasan dari
                                masyarakat di dukuh Manggal terutama para
                                pemuda-pemudi desa. TBM sendiri bergerak
                                dibidang khusunya Anak². Adapun kegiatan dri TBM
                                antara lain seperti kelas mewarnai, kelas
                                mengaji, kelas memanah kelas kesenian, serta
                                kelas darurat yang di adakan pda saat anak²
                                sekolah online, tak hanya dibagian anak2 saja
                                kegiatan yang mengarah ke masyarakat seperti
                                pengecekan kesehatan, diskusi tentang pertanian
                                modern serta kegiatan positif lainnya guna untuk
                                meningkatkan perekonomian dan pemberdayaan
                                masyarakat
                            </p>
                            <button className=" mx-1 button2 ">
                                <a
                                    className="text-light "
                                    href={proposal}
                                    type="submit"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Proposal
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
