import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import gameimg from "../assets/image/GOW-logo.jpg";

const Cardlibrary = () => {
  return (
    <>
      <div className="text-white ms-3 mb-4 mt-3">
        <h2>Library Game</h2>
      </div>

      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <Image src={gameimg} alt="game cover" fluid rounded />
          </Col>

          <Col md={8} className="text-section text-white">
            <h2>Read Dead Redemption 2</h2>
            <p className="justify-text">
              Game AAA dengan anggaran besar dan kualitas grafis yang luar biasa
              dan mengesankan.
            </p>
            <Button variant="" className="button-library" href="#">
              Download
            </Button>
          </Col>
        </Row>
      </Container>

      <Container className="mt-4">
        <Row className="align-items-center">
          <Col md={4}>
            <Image src={gameimg} alt="game cover" fluid rounded />
          </Col>

          <Col md={8} className="text-section text-white">
            <h2>God Of War Ragnarok</h2>
            <p className="justify-text">
              Berpetualang bersama bapak botak kratos dan anaknya atreus di
              mitologi nordik.
            </p>
            <Button variant="" className="button-library" href="#">
              Download
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cardlibrary;
