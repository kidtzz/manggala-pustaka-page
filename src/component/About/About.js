import React, { useEffect } from "react";
import "./About.css";
import profil from "../../img/profil.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import proposal from "../../file/proposal.pdf";

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
                <div className="container pb-5 card">
                    <div className="row d-flex justify-content-center align-items-center text-dark">
                        <div className="col-md-5 col-lg-5 col-xl-5 mx-auto mt-5 ">
                            <div
                                className="img-fluid"
                                data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine"
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
                            data-aos="fade-up-left"
                        >
                            <h4 className="text-dark text-uppercase mb-4 fw-bold text-left">
                                Tentang Kami
                            </h4>
                            <p>
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
                            <a
                                className="btn btn-primary"
                                href={proposal}
                                type="submit"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Proposal
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
