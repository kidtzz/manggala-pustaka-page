import React, { useEffect } from "react";
import "../../assets/scss/Visi.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Visi = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            delay: 500,
        });
        AOS.refresh();
    }, []);
    return (
        <section className="visi  " id="visi">
            <div className="jumbotron ">
                <div className="container px-5 pb-5 ">
                    <div className="row d-flex justify-content-center align-items-center text-dark">
                        <div
                            className="col-md-5 col-lg-5 col-xl-5 mx-auto mt-5 "
                            data-aos="zoom-out-up"
                        >
                            <h4 className=" mb-4 fw-bold text-left">Visi</h4>
                            <p>
                                Menjadi perpustakaan yang membudayakan
                                masyarakat gemar membaca serta memperkaya
                                wawasan masyarakat melalui buku.
                            </p>
                        </div>
                        <div
                            className="col-md-5 col-lg-5 col-xl-5 mx-auto mt-5 "
                            data-aos="zoom-out-up"
                        >
                            <h4 className="text-dark mb-4 fw-bold text-left">
                                Misi
                            </h4>
                            <ul type="1">
                                <li>Menyediakan buku-buku bermutu</li>
                                <li>
                                    Mengkondisikan membaca buku menjadi kegiatan
                                    yang menyenangkan dan bermanfaat
                                </li>
                                <li>
                                    Menjadi forum silaturahmi yang menjembatani
                                    terlaksananya kegiatan-kegiatan positif yang
                                    sifatnya mengembangkan diri
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Visi;
