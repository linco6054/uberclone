import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import MessageHandler from "../../components/MessageHandler/MessageHandler";
function Forgotpassword() {
  const [loading, setLoading] = useState(false);
  const { resetPassword, state, dispatch } = useAuth();
  const emailRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "RemoveMessage" });
      dispatch({ type: "RemoveErrpr" });
      setLoading(true);
      await resetPassword(emailRef.current.value);

      dispatch({ type: "RemoveErrpr" });
      dispatch({
        type: "AddMessage",
        payload: "Check your email inbox for password reset instruction",
      });
    } catch {
      dispatch({ type: "RemoveMessage" });
      dispatch({
        type: "AddError",
        payload: `Error ! An account with ${emailRef.current.value} does not exist`,
      });
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
          <h2 className="mt-3">Rest Your Password</h2>
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
