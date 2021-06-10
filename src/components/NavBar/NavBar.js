import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
function Footer() {
  const { logout, currentUser } = useAuth();
  return (
    <Navbar sticky="top" className="navBar" bg="light" expand="lg">
      <Container className="w-100 d-flex justify-content-between">
        <Navbar.Brand>
          <Link to="/">Uber Clone</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks w-100 justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <NavDropdown
              className={!currentUser && "d-none"}
              title="Profile"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/Update-Profile">
                messages
              </NavDropdown.Item>
              <NavDropdown.Item href="/Forgot-Password">
                Forgot Password
              </NavDropdown.Item>
              <NavDropdown.Item href="/home">Side Nav</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={async () => await logout()}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Signup" className={currentUser && "d-none"}>
              <button className="signUp">Sign-Up</button>
            </Nav.Link>
            <Nav.Link href="/Login" className={currentUser && "d-none"}>
              <button className="login">Login</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
