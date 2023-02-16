import React, { useState } from "react";
import { Card, Col, Button, Modal, Image } from "react-bootstrap";
import "./CardHome.css";

function CardHome({ id, title, poster_path, popularity, overview }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <Col>
      <Card>
        <Card.Img src={`${process.env.REACT_APP_IMAGEURL}/${poster_path}`} />
        <Card.Body>
          <Card.Title className="text-center text-light mt-2">
            {title}
          </Card.Title>
          <div className="d-flex justify-content-center mt-5">
            <Button variant="light" onClick={handleShow}>
              Movie details
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body className="text-center">
                <Image
                  src={`${process.env.REACT_APP_IMAGEURL}/${poster_path}`}
                  width={200}
                />
                <Modal.Title>Movie ID - {id}</Modal.Title>
                <Modal.Title>Movie Popularity - {popularity}</Modal.Title>
                <p>{overview}</p>
                <Button variant="dark" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Body>
            </Modal>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardHome;
