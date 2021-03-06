import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import MessageHandler from "../../components/MessageHandler/MessageHandler"
function Login() {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { loginUser, dispatch, state } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      dispatch({ type: "RemoveErrpr" });
      setLoading(true);
      await loginUser(emailRef.current.value, passwordRef.current.value);
      history.push("/Home");
    } catch {
      dispatch({ type: "RemoveMessage" });
      dispatch({
        type: "AddError",
        payload: "Error ! Failed to log in",
      });
    }
    setLoading(false);
  }
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
          <Container>
            {state.error || state.message ? (
              <Alert variant={state.error ? `danger` : "success"}>
                {
                  <MessageHandler
                    message={state.error ? state.error : state.message}
                    dispatch={dispatch}
                  ></MessageHandler>
                }
              </Alert>
            ) : null}
          </Container>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label id="email">Email</Form.Label>
              <Form.Control
                required
                ref={emailRef}
                type="email"
                placeholder="Please enter your email address"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label id="password">Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                required
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mt-2" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button
              disabled={loading}
              variant="dark"
              className="mt-3"
              type="submit"
            >
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
