import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Form, Button } from "react-bootstrap";
function Login() {
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
          <h1>Log In</h1>
        </Card.Title>
        <Card.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label id="email">Email</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Please enter your email address"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label id="password">Password</Form.Label>
              <Form.Control required type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mt-2" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button className="mt-3" type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          <p className="blockquote-footer mt-2">
            Need an account? <Link to="signup">Sign Up</Link>&nbsp; &nbsp;
            <Link to="/Forgot-Password">Forgot passsword? </Link>
          </p>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Login;
