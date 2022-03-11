import React, { useEffect, useState } from "react";
import "./Gallery.scss";
import DataGallery from "./DataGallery.js";
import { SRLWrapper } from "simple-react-lightbox";

function Gallery() {
    const [tag, setTag] = useState("all");
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(() => {
        tag === "all"
            ? setFilteredImages(DataGallery)
            : setFilteredImages(
                  DataGallery.filter((image) => image.tag === tag)
              );
    }, [tag]);

    return (
        <div className=" portfolio pt-5">
            <div className="container">
                <div className="tags">
                    <TagButton
                        name="all"
                        tagActive={tag === "all" ? true : false}
                        handleSetTag={setTag}
                    />{" "}
                    /
                    <TagButton
                        name="new"
                        tagActive={tag === "new" ? true : false}
                        handleSetTag={setTag}
                    />{" "}
                    /
                    <TagButton
                        name="free"
                        tagActive={tag === "free" ? true : false}
                        handleSetTag={setTag}
                    />{" "}
                    /
                    <TagButton
                        name="pro"
                        tagActive={tag === "pro" ? true : false}
                        handleSetTag={setTag}
                    />
                </div>
                {/* <FsLightbox> */}
                <div class="row portfolio-container border">
                    <SRLWrapper>
                        <div>
                            {filteredImages.map((image) => (
                                // <div key={image.id} className="image-card">
                                //     <a href={image.imageName}>
                                //         <img
                                //             className="image"
                                //             src={image.imageName}
                                //             alt=""
                                //         />
                                //     </a>
                                // </div>

                                <div
                                    class="col-lg-4 col-md-6 portfolio-item filter-app  "
                                    key={image.id}
                                >
                                    <div class="portfolio-wrap ">
                                        <img
                                            src={image.imageName}
                                            class="img-fluid"
                                            alt=""
                                        />
                                        <div class="portfolio-info">
                                            <h4>App 1</h4>
                                            <p>App</p>
                                            <div class="portfolio-links">
                                                <a
                                                    href={image.imageName}
                                                    data-gallery="portfolioGallery"
                                                    class="portfolio-lightbox"
                                                    title="App 1"
                                                >
                                                    <i class="bx bx-plus"></i>
                                                </a>
                                                <a
                                                    href="portfolio-details.html"
                                                    class="portfolio-details-lightbox"
                                                    data-glightbox="type: external"
                                                    title="Portfolio Details"
                                                >
                                                    <i class="bx bx-link"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SRLWrapper>
                </div>
                {/* </FsLightbox> */}
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
