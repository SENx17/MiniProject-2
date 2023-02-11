import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import "./CardHome.css";

function CardHome() {
  return (
    <Row xs={1} sm={1} md={3} lg={6} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col>
          <Card className="">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardHome;
