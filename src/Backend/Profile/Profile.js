import React, { useState } from "react";
import MessageHandler from "../../components/MessageHandler/MessageHandler";
import {
  Container,
  Card,
  Form,
  Col,
  Row,
  Button,
  Alert,
} from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
function Profile() {
  const { state, dispatch, currentUser, db, updateEmail } = useAuth();
  const [userData, setUserData] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "lincoln.kantet@gmail.com",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData) {
      db.collection("Users")
        .doc(currentUser.uid)
        .update({
          FirstName: userData.FirstName,
          SecondName: userData.LastName,
          Phone: userData.Phone,
          emailId: userData.Email,
        })
        .then(function () {
          if (userData.Email !== currentUser.email) {
            updateEmail(userData.Email);
          }
          console.log("Value successfully written!");
          dispatch({ type: "RemoveErrpr" });
          dispatch({
            type: "AddMessage",
            payload: "Profile Update Successfully",
          });
        })
        .catch(function (error) {
          console.error("Error writing Value: ", error);
          dispatch({ type: "RemoveMessage" });
          dispatch({
            type: "AddError",
            payload: "Error ! Unable to update your Profile",
          });
        })
        .finally(() => {
          if (state.currentUserInfo.emailId !== currentUser.email) {
            dispatch({ type: "RemoveMessage" });
            dispatch({
              type: "AddError",
              payload: "Error ! Your email has a problem contact Administrator",
            });
          }
        });
    }
  };

  return (
    <Container
      style={{ minHeight: "80vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card
        border="danger"
        style={{ maxWidth: "450px" }}
        className="w-100 mt-3"
      >
        <Card.Title className="text-center">
          <h1>Profile</h1>
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
            <Row className="mb-2">
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={state.currentUserInfo.FirstName}
                  placeholder="First Name"
                  onChange={(e) =>
                    setUserData({ ...userData, FirstName: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  defaultValue={state.currentUserInfo.SecondName}
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) =>
                    setUserData({ ...userData, LastName: e.target.value })
                  }
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-2">
              <Form.Label id="password">Phone</Form.Label>
              <Form.Control
                defaultValue={state.currentUserInfo.PhoneNumber}
                type="number"
                onChange={(e) =>
                  setUserData({ ...userData, Phone: e.target.value })
                }
                placeholder="0700000012"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label id="password">Email</Form.Label>
              <Form.Control
                defaultValue={currentUser.email}
                type="email"
                placeholder="example@gmail.com"
              />
            </Form.Group>
            <Button
              // disabled={loading}
              variant="dark"
              className="mt-3"
              type="submit"
            >
              Update Profile
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;
