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
                <div className="tags  justify-content-center">
                    <TagButton
                        name="all"
                        tagActive={tag === "all" ? true : false}
                        handleSetTag={setTag}
                    />{" "}
                    <TagButton
                        name="new"
                        tagActive={tag === "new" ? true : false}
                        handleSetTag={setTag}
                    />{" "}
                    <TagButton
                        name="free"
                        tagActive={tag === "free" ? true : false}
                        handleSetTag={setTag}
                    />{" "}
                    <TagButton
                        name="pro"
                        tagActive={tag === "pro" ? true : false}
                        handleSetTag={setTag}
                    />
                </div>

                <div class="row portfolio-container ">
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
                        <div key={image.id}>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app  ">
                                <div class="portfolio-wrap ">
                                    {/* <SRLWrapper> */}
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
                                                <i class="bi bi-plus"></i>
                                            </a>
                                            <a
                                                href=" "
                                                class="portfolio-details-lightbox"
                                                title="Portfolio Details"
                                            >
                                                <i class="bi bi-link"></i>
                                            </a>
                                        </div>
                                    </div>
                                    {/* </SRLWrapper> */}
                                </div>
                            </div>
                        </div>
                    ))}
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
