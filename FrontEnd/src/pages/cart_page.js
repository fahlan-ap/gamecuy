import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

const CartPage = () => {
  // Data dummy untuk keranjang
  const cartItems = [
    {
      id: 1,
      title: "The Witcher 3: Wild Hunt",
      description: "An open-world RPG set in a fantasy universe.",
      price: "$29.99",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    },
    {
      id: 2,
      title: "Cyberpunk 2077",
      description: "A futuristic RPG set in Night City.",
      price: "$39.99",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    },
  ];

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Keranjang Belanja</h2>
      {cartItems.map((item) => (
        <Card key={item.id} className="mb-3">
          <Row className="g-0">
            <Col md={3}>
              <Card.Img
                src={item.image}
                alt={item.title}
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
            <Col md={9}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text className="text-muted">{item.price}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
      <div className="d-flex justify-content-between mt-4">
        <Button variant="secondary">Kembali</Button>
        <Button variant="success">Checkout</Button>
      </div>
    </Container>
  );
};

export default CartPage;
