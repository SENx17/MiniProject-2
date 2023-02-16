import React, { useState, useEffect } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./CardHome.css";
import { getListMovies } from "../../api/MoviesAPI";
import ModalHome from "./ModalHome";

function CardHome() {
  const [movies, setMovies] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getListMovies().then((result) => {
      setMovies(result); //
    });
  }, []);

  return (
    <Row xs={1} sm={1} md={3} lg={6} className="g-4">
      {movies.slice(0, 18).map((movie, index) => {
        return (
          <Col key={index}>
            <Card>
              <Card.Img
                src={`${process.env.REACT_APP_IMAGEURL}/${movie.poster_path}`}
              />
              <Card.Body>
                <Card.Title className="text-center text-light mt-2">
                  {movie.title}
                </Card.Title>
                <div className="d-flex justify-content-center mt-5">
                  <Button variant="light" onClick={() => setModalShow(true)}>
                    Details
                  </Button>
                  {/* Modal */}
                  <ModalHome
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  {/* Modal */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default CardHome;
