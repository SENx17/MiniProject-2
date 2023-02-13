import React from "react";
import { Card } from "react-bootstrap";
// import Axios from "axios";
import "./CardComponent.css";

const CardComponent = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column  gap-3">
          <div className="card-container">
            <div className="cardProfile-wrapper d-flex flex-column justify-content-center ms-4">
              <Card.Title>TEST</Card.Title>
              <Card.Text className="text-muted mb-4">Testing</Card.Text>
              <Card.Title>TEST</Card.Title>
              <Card.Text className="text-muted">Testing</Card.Text>
            </div>
          </div>
          <div className="card-container">
            <div className="cardProfile-wrapper d-flex flex-column justify-content-center ms-4">
              <Card.Title>TEST</Card.Title>
              <Card.Text className="text-muted mb-4">Testing</Card.Text>
              <Card.Title>TEST</Card.Title>
              <Card.Text className="text-muted">Testing</Card.Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
