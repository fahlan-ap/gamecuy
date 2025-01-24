import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import gameimg from "../assets/image/GOW-logo.jpg";

const Cardcart = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-white ms-3 mb-4 mt-3">
        <h2> Keranjang Game </h2>
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
              <p style={{ fontSize: "0.85rem" }}> Price: 825000 </p>
              <p>Petualangan bersama bapak botak dan anaknya</p>
              <p> Genre: action, adventure </p>
              <Button
                className="button-cart"
                variant="light"
                onClick={() => navigate("/payment_page")}
              >
                Checkout
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Cardcart;
