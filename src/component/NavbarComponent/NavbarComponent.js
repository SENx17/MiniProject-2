import React from "react";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import "./NavbarComponent.css";
import Logo from "./image/Logo.svg";

const NavbarComponent = (props) => {
  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            <Image
              src={Logo}
              width={80}
              height={35}
              style={{ background: "white" }}
            />
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
