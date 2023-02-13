import React from "react";
import CardHome from "../component/HomeComponent/CardHome";
import CarouselHome from "../component/HomeComponent/CarouselHome";
import NavbarComponent from "../component/NavbarComponent/NavbarComponent";

const HomeContainer = () => {
  return (
    <>
      <NavbarComponent home="Home" profile="Profile" logout="logout" />
      <CarouselHome />
      <div className="homeContent-container">
        <CardHome />
      </div>
    </>
  );
};

export default HomeContainer;
