import React, { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import gameimg from "../assets/image/GOW-logo.jpg";

function Cardhome() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  // integrasikan dengan database
  const games = [
    {
      id: 1,
      title: "Red Dead Redemption 2",
      price: "$1000",
      description:
        "Game AAA dengan anggaran besar dan kualitas grafis yang luar biasa dan mengesankan...",
      image: gameimg,
    },
  ];

  return (
    <>
      <div className="text-white mt-4">
        <h2>Trending Game</h2>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {games.map((game) => (
          <Card key={game.id} className="cardhome text-start">
            <Card.Img variant="top" src={game.image} />
            <Card.Body>
              <Card.Title style={{ color: "white", fontSize: "1.1rem" }}>
                {game.title}
              </Card.Title>
              <Card.Subtitle
                className="mb-2 mt-1"
                style={{ color: "white", fontSize: "0.7rem" }}
              >
                Price: {game.price}
              </Card.Subtitle>
              <Card.Text style={{ color: "white", fontSize: "0.8rem" }}>
                {game.description}{" "}
                <Card.Link
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={() => handleShow(game)}
                >
                  Selengkapnya
                </Card.Link>
              </Card.Text>
              <div className="d-flex justify-content-center gap-2">
                <Button className="btn-card1" variant="dark">
                  <FaShoppingCart
                    className="me-1"
                    style={{ fontSize: "0.8rem" }}
                  />{" "}
                  Cart
                </Button>
                <Button variant="dark" className="btn-card2">
                  <FaHeart className="me-1" style={{ fontSize: "0.8rem" }} />{" "}
                  Wishlist
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Modal show={showModal} onHide={handleClose} variant="bg-dark">
        <Modal.Header closeButton className="border-0 bg-dark">
          <Modal.Title className="text-center w-100 text-light">
            {selectedGame?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          <img
            src={selectedGame?.image}
            alt={selectedGame?.title}
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
          <h5 className="mt-3">Price: {selectedGame?.price}</h5>
          <p style={{ marginBottom: "-15px" }}>{selectedGame?.description}</p>
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex justify-content-center gap-3 mb-2 bg-dark">
          <Button variant="light" style={{ width: "130px" }}>
            <FaShoppingCart className="me-1" /> Cart
          </Button>
          <Button variant="light" style={{ width: "130px" }}>
            <FaHeart className="me-1" /> Wishlist
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cardhome;
