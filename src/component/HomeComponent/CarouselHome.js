import React from "react";
import { Carousel, Image } from "react-bootstrap";
import Image1 from "../../image/carousel1.jpg";
import Image2 from "../../image/carousel2.jpg";
import Image3 from "../../image/carousel2.jpg";
import "./CarouselHome.css";

const CarouselHome = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <Image className="d-block w-100" src={Image1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image className="d-block w-100" src={Image2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image className="d-block w-100" src={Image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselHome;
