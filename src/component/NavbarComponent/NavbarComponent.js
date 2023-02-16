import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NavbarComponent.css";

const NavbarComponent = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" fixed="top">
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
            <Nav.Link className="home" href="/">
              {props.home}
            </Nav.Link>
            <Nav.Link className="profile" href="/profile">
              {props.profile}
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              className="logout"
              onClick={() => {
                localStorage.removeItem("SID");
                navigate("/login");
              }}
            >
              {props.logout}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
