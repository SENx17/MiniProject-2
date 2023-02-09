import React, { Component } from "react";
import CarouselHome from "../component/HomeComponent/CarouselHome";
import NavbarComponent from "../component/NavbarComponent/NavbarComponent";

class HomeContainer extends Component {
  render() {
    return (
      <>
        <NavbarComponent home="Home" profile="Profile" logout="logout" />
        <CarouselHome />
      </>
    );
  }
}

export default HomeContainer;
