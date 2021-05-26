import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Footer() {
  return (
    <Navbar sticky="top" className="navBar" bg="light" expand="lg">
      <Container className="w-100 d-flex justify-content-between">
        <Navbar.Brand>
          <Link to="/">Uber Clone</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks w-100 justify-content-end">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/About">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Signup">
                <button className="signUp">Sign-Up</button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Login">
                <button className="login">Login</button>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
