import React from "react";

import { Navbar, Container } from "react-bootstrap";
function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <Navbar bg="light" fixed="bottom">
      <Container>
        <Navbar.Brand>Uberx Clone</Navbar.Brand>
        <p>© {thisYear} Uber Technologies Inc.</p>
      </Container>
    </Navbar>
  );
}

export default Footer;
