import React from "react";

import { Container, Card, Button } from "react-bootstrap";

function Profile() {
  return (
    <div className="container-fluid d-flex leftsideNav ">
      <Container className="w-100 mt-5">
        <Card style={{ maxWidth: "400px" }} className="sideNav ">
          <Card.Title className="text-center mt-2">Welcome userName</Card.Title>
          <hr />
          <Card.Body>
            <Card.Text>Request Ride</Card.Text>
            <Card.Text>Request Ride</Card.Text>
            <Card.Text>Request Ride</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            <p>@Uber Clone 2021</p>
            <Button variant="dark">Request ChapChap</Button>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}

export default Profile;
