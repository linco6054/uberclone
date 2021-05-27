import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

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
            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item>messages</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/Forgot-Password">Forgot Password</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link to="/backend">Side Nav</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">help</NavDropdown.Item>
            </NavDropdown>
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
