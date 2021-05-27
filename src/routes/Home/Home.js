import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Card, Container, Row, Button } from "react-bootstrap";
// font awesome <i class="fa-solid " />
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
function Home() {
  const Coffee = <FontAwesomeIcon icon={faCoffee} size="2x" />;
  return (
    <div className=" HomeBg d-flex justify-content-end align-items-center w-100 ">
      <Container className="mb-6 flex-end ">
        <Card className="homeCard" style={{ maxWidth: "500px" }}>
          <Card.Title>
            <Row className="text-center mt-2">
              <div className="col-4">
                Grab Coffee
                <p>{Coffee}</p>
              </div>
              <div className="col-4">
                Grab Coffee
                <p>{Coffee}</p>
              </div>
              <div className="col-4">
                Grab Coffee
                <p>{Coffee}</p>
              </div>
            </Row>
          </Card.Title>
          <Card.Body className="HomecardBody">
            <h1 className="mt-3">Get in the driver’s seat and get paid</h1>
            <p className="mt-3">
              Drive on the platform with the largest network of active riders.
            </p>
            <Button className="mt-3 mb-3 btx" variant="dark">
              <Link to="/Signup">Sign Up To Drive</Link>
            </Button>
            <Card.Footer>
              <small>Learn more about driving and delivering</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Home;
