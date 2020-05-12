import React from "react";
import LoginBtn from "../../components/LoginBtn/LoginBtn";
import { Container, Row, Col, Jumbotron } from "reactstrap";
import "./landing.css";

export default function LandingPage() {
  return (
    <div className="wrapper">
      <div className="subWrapper">
        <Container>
          <Row className="mt-5">
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h4 className="text-center">Be a part of...</h4>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Jumbotron className="logo">
                <h1 className="display-3 text-center">Societé</h1>
              </Jumbotron>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <h4 className="text-center">
                Your go to spot for all your media wants
              </h4>
              <LoginBtn />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
