import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

function UpdateProfile() {
  const [error, setError] = useState("");
  const [success, setSucces] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();

  const { currentUser, updateEmail } = useAuth();
  function handleSubmit(e) {
    e.preventDefault();
    if (!emailRef.current.value) {
      return setError("Invalid Email Address");
    }

    const promises = [];
    setSucces("");
    setError("");
    setLoading(true);

    if (emailRef.current.value !== currentUser.email) {
      setError("");
      promises.push(updateEmail(emailRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        setError("");
        setSucces("Email Updated Successfully");
        db.collection("Users")
          .doc(currentUser.uid)
          .update({
            emailId: emailRef.current.value,
          })
          .then(function () {
            console.log("Email successfully updated!");
          })
          .catch(function (error) {
            console.error("Error updating document: ", error);
          });
      })
      .catch(() => {
        setError("");
        setError("Failed To Update Account");
      })
      .finally(() => {
        setLoading(false);
      });
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
          <h1 className="mt-3">Update Profile</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label id="email">Email</Form.Label>
              <Form.Control
                required
                ref={emailRef}
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

export default UpdateProfile;
