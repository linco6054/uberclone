import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
function Forgotpassword() {
  const [error, setError] = useState("");
  const [success, setSucces] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const emailRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setSucces("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setSucces("Check your email inbox for password reset instruction");
    } catch {
      setError(`An account with ${emailRef.current.value} does not exist`);
    }
    setLoading(false);
  };
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
          <h1>Reset password!</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label id="email">Email</Form.Label>
              <Form.Control
                ref={emailRef}
                required
                type="email"
                placeholder="Please enter your email address"
              />
            </Form.Group>
            <Button
              disabled={loading}
              variant="dark"
              className="mt-3"
              type="submit"
            >
              Reset Password
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          <p className="blockquote-footer mt-2">
            Need an account? <Link to="signup">Sign Up</Link> &nbsp; &nbsp; Go
            to? <Link to="/Login">Log-In</Link>
          </p>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Forgotpassword;
