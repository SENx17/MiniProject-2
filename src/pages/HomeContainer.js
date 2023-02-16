import React from "react";
import CardHome from "../component/HomeComponent/CardHome";
import CarouselHome from "../component/HomeComponent/CarouselHome";
import NavbarComponent from "../component/NavbarComponent/NavbarComponent";

const HomeContainer = () => {
  return (
    <>
      <NavbarComponent home="Home" profile="Profile" logout="logout" />
      <div
        className="homeContent-container"
        style={{ position: "absolute", top: "70px" }}
      >
        <CarouselHome />
        <CardHome />
      </div>
    </>
  );
};

export default HomeContainer;
