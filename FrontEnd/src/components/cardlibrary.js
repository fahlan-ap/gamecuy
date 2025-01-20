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
              <h2>God Of War Ragnarok</h2>
              <p className="justify-text">
              Petualangan bersama bapak botak dan anaknya
              </p>
              <Button variant="light" style={{ width: "130px", fontWeight: "bold" }}>
                Download
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Cardlibrary;
