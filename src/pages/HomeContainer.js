import React, { useState, useEffect } from "react";
import CardHome from "../component/HomeComponent/CardHome";
import CarouselHome from "../component/HomeComponent/CarouselHome";
import NavbarComponent from "../component/NavbarComponent/NavbarComponent";
import { getListMovies } from "../api/MoviesAPI";
import { Row } from "react-bootstrap";

const HomeContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getListMovies().then((result) => {
      setMovies(result);
    });
  }, []);

  return (
    <>
      <NavbarComponent home="Home" profile="Profile" logout="logout" />
      <div
        className="homeContent-container"
        style={{ position: "absolute", top: "70px" }}
      >
        <CarouselHome />
        <Row className="g-4" xs={1} sm={1} md={3} lg={6}>
          {movies.slice(0, 18).map((movie) => (
            <CardHome key={movie.id} {...movie} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default HomeContainer;
