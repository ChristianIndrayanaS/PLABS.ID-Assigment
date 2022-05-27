import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";

import img1 from "./imageCarousel/corsair.jpg"
import img2 from "./imageCarousel/corsairHS.jpg"
import img3 from "./imageCarousel/vortexseries.jpg"

const CarouselContent = () => {
    return (
        <Carousel className="carouselContent" showArrows={true} autoPlay={true} infiniteLoop={true} interval={5000} showThumbs={false} showIndicators={false}>
            <div>
                <img src={img1} height="350px" alt="img"/>
            </div>
            <div>
                <img src={img2} height="350px" alt="img"/>
            </div>
            <div>
                <img src={img3} height="350px" alt="img"/>
            </div>
        </Carousel>
    )
}

export default CarouselContent;