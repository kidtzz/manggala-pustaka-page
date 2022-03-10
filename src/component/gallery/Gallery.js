import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import "./Gallery";
import imgKes from "../../img/galery/2.jpg";
import imgPanhan from "../../img/galery/10.jpg";
import imgWarna from "../../img/galery/8.jpg";
import imgMengaji from "../../img/galery/14.jpg";
import imgMalam from "../../img/galery/11.jpg";
import imgDarurat from "../../img/galery/4.jpg";

function Gallery() {
    const [toggler, setToggler] = useState(false);

    return (
        <div className="container">
            <div class="row justify-content-center text-white pt-5 pb-0">
                <h4 className="text-dark text-uppercase mb-4 fw-bold text-center">
                    Gallery
                </h4>
                <div class="col-lg-4 col-md-12 mb-lg-0">
                    <div href=" col-4 mb-4">
                        <img
                            onClick={() => setToggler(!toggler)}
                            src={imgKes}
                            alt=""
                            className="img-fluid shadow-1-strong rounded  mb-3"
                        ></img>
                    </div>
                    <div href=" col-4 mb-4">
                        <img
                            onClick={() => setToggler(!toggler)}
                            src={imgMalam}
                            alt=""
                            className=" img-fluid shadow-1-strong rounded  mb-3  "
                        ></img>
                    </div>
                </div>
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <div href=" col-4 mb-4">
                        <img
                            onClick={() => setToggler(!toggler)}
                            src={imgWarna}
                            alt=""
                            className="w-100 shadow-1-strong rounded mb-3"
                        ></img>
                    </div>
                    <div href=" col-4 mb-4">
                        <img
                            onClick={() => setToggler(!toggler)}
                            src={imgMengaji}
                            alt=""
                            className=" w-100 shadow-1-strong rounded mb-3  "
                        ></img>
                    </div>
                </div>
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <div href=" col-4 mb-4">
                        <img
                            onClick={() => setToggler(!toggler)}
                            src={imgPanhan}
                            alt=""
                            className="w-100 shadow-1-strong rounded mb-3"
                        ></img>
                    </div>
                    <div href=" col-4 mb-4">
                        <img
                            onClick={() => setToggler(!toggler)}
                            src={imgDarurat}
                            alt=""
                            className=" w-100 shadow-1-strong rounded mb-3  "
                        ></img>
                    </div>
                </div>
                <FsLightbox
                    toggler={toggler}
                    sources={[
                        imgKes,
                        imgMalam,
                        imgWarna,
                        imgMengaji,
                        imgPanhan,
                        imgDarurat,
                    ]}
                />
            </div>
        </div>
    );
}

export default Gallery;
