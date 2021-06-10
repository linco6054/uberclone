import React from "react";
import { Form, Container, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/AuthContext";
import { faCar } from "@fortawesome/free-solid-svg-icons";
function LeftNav() {
  const { currentUser } = useAuth();
  const Car = <FontAwesomeIcon icon={faCar} size="2x" />;
  return (
    <Container className="w-100 mt-5 position-absolute top-0 start-0">
      <Form>
        <Card
          className="containerRed"
          style={{ maxWidth: "400px", maxHeight: "100vh" }}
        >
          <Card.Title className="text-center mt-2 ">
            {currentUser.email}
          </Card.Title>

          <div className="d-flex flex-column align-items-center justify-content-center w-100 p-1">
            <Form.Control
              className="input w-75  "
              type="text"
              placeholder=" From"
            />

            <Form.Control
              className="input w-75 mt-2"
              type="text"
              placeholder="To"
            />
          </div>

          <Container>
            <hr />
            <Card.Body style={{ maxHeight: "30vh" }} className="overflow-auto">
              <div className="d-flex justify-content-around align-items-center ">
                <div className="d-flex justify-content-around align-items-center">
                  <p>{Car}</p>
                  <div className="p-3 align-text-center">
                    <h6 className="h6 cartype mb-1">Uber Chap Chap</h6>
                    <p className="Cartimer text-muted">in 24 min</p>
                  </div>
                </div>
                <h6 className="amounter text-muted">Ksh: 400</h6>
              </div>
              <div className="d-flex justify-content-around align-items-center ">
                <div className="d-flex justify-content-around align-items-center">
                  <p>{Car}</p>
                  <div className="p-3 align-text-center">
                    <h6 className="h6 cartype mb-1">Uber Chap Chap</h6>
                    <p className="Cartimer text-muted">24 min</p>
                  </div>
                </div>
                <h6 className="amounter text-muted">Ksh: 400</h6>
              </div>
            </Card.Body>
          </Container>
          <Card.Footer className="text-muted">
            <div className="mt-1 mb-1 d-flex justify-content-center">
              <Button variant="dark">Request </Button>
            </div>
            <p>@Flash {new Date().getFullYear()}</p>
          </Card.Footer>
        </Card>
      </Form>
    </Container>
  );
}

export default LeftNav;
