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
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/About">About</Link>
            </Nav.Link>
            <NavDropdown
              className={!currentUser && "d-none"}
              title="Profile"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>messages</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <Link to="/Forgot-Password">Forgot Password</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link to="/home">Side Nav</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={async () => await logout()}>
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={currentUser && "d-none"}>
              <Link to="/Signup">
                <button className="signUp">Sign-Up</button>
              </Link>
            </Nav.Link>
            <Nav.Link className={currentUser && "d-none"}>
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
