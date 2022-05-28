import React, { useEffect, useState } from "react";
import "../../../assets/css/Gallery.min.css";
import DataGallery from "../../Data/DataGallery.js";
import { SRLWrapper } from "simple-react-lightbox";

function Gallery() {
    const [tag, setTag] = useState("semua");
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        tag === "semua"
            ? setFilteredImages(DataGallery)
            : setFilteredImages(
                  DataGallery.filter((image) => image.tag === tag)
              );
    }, [tag]);

    return (
        <div className=" portfolio pt-5">
            <div className="container">
                <div className="tags  justify-content-center">
                    <TagButton
                        name="semua"
                        tagActive={tag === "semua" ? true : false}
                        handleSetTag={setTag}
                    />{" "}
                    <TagButton
                        name="baru"
                        tagActive={tag === "baru" ? true : false}
                        handleSetTag={setTag}
                    />{" "}
                    <TagButton
                        name="event"
                        tagActive={tag === "event" ? true : false}
                        handleSetTag={setTag}
                    />{" "}
                    <TagButton
                        name="kegiatan"
                        tagActive={tag === "kegiatan" ? true : false}
                        handleSetTag={setTag}
                    />{" "}
                    <TagButton
                        name="lainnya"
                        tagActive={tag === "lainnya" ? true : false}
                        handleSetTag={setTag}
                    />
                </div>
                <div className="row portfolio-container ">
                    {filteredImages.map((image) => {
                        return (
                            <div
                                className="col-lg-4 col-md-6 portfolio-item filter-app "
                                data-aos="flip-down"
                            >
                                <div className="portfolio-wrap ">
                                    <SRLWrapper>
                                        <img
                                            src={image.imageName}
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </SRLWrapper>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
    return (
        <button
            className={`tag ${tagActive ? "active" : null}`}
            onClick={() => handleSetTag(name)}
        >
            {name.toUpperCase()}
        </button>
    );
};

export default Gallery;
