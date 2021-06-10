import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "../../firebase";
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

function Signup() {
  document.title = "Sign-Up";
  const fNameRef = useRef();
  const lNameRef = useRef();
  const EmailRef = useRef();
  const passwordRef = useRef();
  const conPasswordRef = useRef();

  const [clientType, setClientType] = useState("Customer");

  const [error, setError] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  console.log(clientType);
  function handleSubmit(e) {
    e.preventDefault();
    if (conPasswordRef.current.value !== passwordRef.current.value) {
      return setError("Password do not match");
    }
    try {
      setError("");
      const fname = fNameRef.current.value;
      const email = EmailRef.current.value;
      const sName = lNameRef.current.value;

      setLoading(true);
      auth
        .createUserWithEmailAndPassword(
          EmailRef.current.value,
          passwordRef.current.value
        )
        .then((userCred) => {
          const user = userCred.user;

          db.collection("Users").add({
            FirstName: fname,
            SecondName: sName,
            emailId: email,
            userId: user.uid,
            userType: "user",
            ClientType: clientType,
          });
        });
      // add data to db

      // db.collection("Users").add({
      //   FirstName: fNameRef.current.value,
      //   SecondName: lNameRef.current.value,
      //   email: EmailRef.current.value,
      //   userId: currentUser.uid,
      //   userType: "user",
      // });

      history.push("/Home");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card
        border="danger"
        variant="danger"
        className="w-100"
        style={{ maxWidth: "400px" }}
      >
        <Card.Title className="text-center">
          <h1>Sign Up</h1>
          <Container>
            {error ? <Alert variant="danger">{error}</Alert> : null}
          </Container>
        </Card.Title>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-2">
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  ref={fNameRef}
                  type="text"
                  placeholder="First Name"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  ref={lNameRef}
                  type="text"
                  placeholder="Last Name"
                />
              </Form.Group>
            </Row>
            <Form.Group className="mb-2">
              <Form.Label id="email">Email</Form.Label>
              <Form.Control
                ref={EmailRef}
                required
                type="email"
                placeholder="Please enter your email address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label id="password">Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                required
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label id="Confpassword">Confirm Password</Form.Label>
              <Form.Control
                ref={conPasswordRef}
                required
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center ">
              <Button
                disabled={loading}
                variant="dark"
                className="mt-4"
                type="submit"
              >
                Sign Up
              </Button>
              <div>
                <div className="form-check">
                  <input
                    value="Customer"
                    onClick={(e) => setClientType(e.target.value)}
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Customer
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Driver"
                    onClick={(e) => setClientType(e.target.value)}
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Driver
                  </label>
                </div>
              </div>
            </div>
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
