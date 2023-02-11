import React from "react";
import { Card } from "react-bootstrap";
// import Axios from "axios";
import "./CardComponent.css";

const CardComponent = () => {
  return (
    <>
      <div className="card-container">
        <Card style={{ width: "40rem", height: "12rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-5 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-5 text-muted">
              Card Subtitle
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CardComponent;
