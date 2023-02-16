import React, { useState, useEffect } from "react";
import { Modal, Container, Button, Row, Col, Image } from "react-bootstrap";
import { getListMovies } from "../../api/MoviesAPI";

const ModalHome = (props) => {
  const [modalMovies, setModalMovies] = useState([]);

  useEffect(() => {
    getListMovies().then((result) => {
      setModalMovies(result); //
    });
  }, []);

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col xs={12} md={8}>
                <Image src="" />
              </Col>
              <Col xs={6} md={4}>
                .col-xs-6 .col-md-4
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Button onClick={props.onHide}>Close</Button>
      </Modal>
    </>
  );
};

export default ModalHome;
