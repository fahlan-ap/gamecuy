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
        {/* Card Game 1 */}
        <div className="game-card-wrapper mb-4 p-3">
          <Row className="align-items-center">
            <Col md={4}>
              <Image src={gameimg} alt="game cover" fluid rounded />
            </Col>
            <Col md={8} className="text-section text-white">
              <h2>Read Dead Redemption 2</h2>
              <p className="justify-text">
                Game AAA dengan anggaran besar dan kualitas grafis yang luar
                biasa dan mengesankan.
              </p>
              <Button variant="" className="button-library" href="#">
                <h6>Download</h6>
              </Button>
            </Col>
          </Row>
        </div>

        {/* Card Game 2 */}
        <div className="game-card-wrapper mb-4 p-3">
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
                <h6>Download</h6>
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Cardlibrary;
