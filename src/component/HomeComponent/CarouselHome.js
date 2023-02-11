import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "./carousel.jpg";
import "./CarouselHome.css";

const CarouselHome = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={CarouselImage}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={CarouselImage}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={CarouselImage}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default CarouselHome;
