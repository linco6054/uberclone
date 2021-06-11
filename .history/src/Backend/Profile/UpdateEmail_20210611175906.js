import React, { useRef, useState } from "react";
import MessageHandler from "../../components/MessageHandler/MessageHandler";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

function UpdateEmail() {
  const [loading, setLoading] = useState(false);
const [email,setEmail]=useSate("")
  const emailRef = useRef();

  const { currentUser, updateEmail, state, dispatch } = useAuth();
  const errorHanler = () => {
    dispatch({ type: "RemoveMessage" });
    dispatch({
      type: "AddError",
      payload: "Error ! this Email exists in your account ",
    });
    return;
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (
      emailRef.current.value !== currentUser.email &&
      emailRef.current.value !== state.currentUserInfo.emailId
    ) {
      const email = emailRef.current.value;
      dispatch({ type: "RemoveMessage" });
      dispatch({ type: "RemoveErrpr" });

      setLoading(true);

      db.collection("Users")
        .doc(currentUser.uid)
        .update({
          emailId: emailRef.current.value,
        })
        .then(function () {
          updateEmail(email);

          console.log("Email successfully updated!");
          dispatch({ type: "RemoveErrpr" });
          dispatch({
            type: "AddMessage",
            payload: "Email successfully updated",
          });
        })
        .catch(function (error) {
          console.error("Error updating document: ", error);
          dispatch({ type: "RemoveMessage" });
          dispatch({
            type: "AddError",
            payload: "Error ! Your email Not been Updated",
          });
        });
    }

    return errorHanler();
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
          <h3 className="mt-3">Update Email Address</h3>
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
                onChange=
                defaultValue={currentUser.email}
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
            <Link to="/Home">Cancel?</Link>
          </p>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default UpdateEmail;
