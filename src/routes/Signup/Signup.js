import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
function Signup() {
  document.title = "Sign-Up";
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card
        border="danger"
        variant="danger"
        className="w-100"
        style={{ maxWidth: "400px" }}
      >
        <Card.Title className="text-center">
          <h1>Sign Up</h1>
        </Card.Title>
        <Card.Body>
          <Form>
            <Row className="mb-2">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </Row>
            <Form.Group className="mb-2">
              <Form.Label id="email">Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Please enter your email address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label id="password">Password</Form.Label>
              <Form.Control required type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="dark" className="mt-4" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          <p className="blockquote-footer mt-2">
            Already Have an Account? <Link to="/Login">Log-In</Link>{" "}
          </p>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Signup;
