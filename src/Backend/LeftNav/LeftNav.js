import React from "react";
import { Container, Card, Button } from "react-bootstrap";
function LeftNav() {
  return (
    <Container className="w-100 mt-5 position-absolute top-0 start-0">
      <Card
        style={{ maxWidth: "400px", maxHeight: "60vh" }}
        className="sideNav "
      >
        <Card.Title className="text-center mt-2">Welcome userName</Card.Title>
        <hr />
        <Container>
          <Card.Body>
            <Card.Text>Request Ride</Card.Text>
            <Card.Text>Request Ride</Card.Text>
            <Card.Text>Lorem200 </Card.Text>
          </Card.Body>
        </Container>
        <Card.Footer className="text-muted">
          <p>@Uber Clone 2021</p>
          <Button variant="dark">Request ChapChap</Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default LeftNav;
