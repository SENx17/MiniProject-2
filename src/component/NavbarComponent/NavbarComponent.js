import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./NavbarComponent.css";

const NavbarComponent = (props) => {
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            <h2
              style={{
                fontFamily: "monospace",
                fontWeight: "bolder",
              }}
            >
              Unamed
            </h2>
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="home" href="#">
              {props.home}
            </Nav.Link>
            <Nav.Link className="profile" href="#">
              {props.profile}
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="logout" href="#">
              {props.logout}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
