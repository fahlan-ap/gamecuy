<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

function Cardhome() {
  const [games, setGames] = useState([]); // State untuk menyimpan data game
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  // Mengambil data game dari backend
  useEffect(() => {
    fetch("http://localhost:3001/games") // Sesuaikan dengan endpoint backend
      .then((response) => response.json())
      .then((data) => setGames(data)) // Simpan data ke state
      .catch((error) => console.error("Error fetching games:", error));
  }, []);

  return (
    <>
      <div className="text-white mt-4">
        <h2>Trending Game</h2>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {games.map((game) => (
          <Card key={game.id} className="cardhome text-start">
            <Card.Img variant="top" src={`http://localhost:3001/${game.cover}`} />
            <Card.Body>
              <Card.Title style={{ color: "white", fontSize: "1.3rem" }}>
                {game.name}
              </Card.Title>
              <Card.Subtitle
                className="mb-2 mt-1"
                style={{ color: "white", fontSize: "0.85rem" }}
              >
                Price: {game.price}
              </Card.Subtitle>
              <Card.Text style={{ color: "white", fontSize: "0.95rem" }}>
                {game.desc}{" "}
                <Card.Link
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={() => handleShow(game)}
                >
                  Selengkapnya
                </Card.Link>
              </Card.Text>
              {/* Menampilkan genre */}
              <Card.Text style={{ color: "white", fontSize: "0.85rem", marginTop:"-10px" }}>
                Genre: {game.genre} {/* Menambahkan genre */}
              </Card.Text>
              <div className="d-flex justify-content-center gap-2">
                <Button className="btn-card1" variant="dark">
                  <FaShoppingCart className="me-1" style={{ fontSize: "0.8rem" }} /> Cart
                </Button>
                <Button variant="dark" className="btn-card2">
                  <FaHeart className="me-1" style={{ fontSize: "0.8rem" }} /> Wishlist
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Modal untuk detail game */}
      <Modal show={showModal} onHide={handleClose} variant="bg-dark">
        <Modal.Header closeButton className="border-0 bg-dark">
          <Modal.Title className="text-center w-100 text-light">
            {selectedGame?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-light">
          <img
            src={`http://localhost:3001/${selectedGame?.cover}`}
            alt={selectedGame?.name}
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
          <h5 className="mt-3">Price: {selectedGame?.price}</h5>
          <p style={{ marginBottom: "0px" }}>{selectedGame?.desc}</p>
          <p style={{ fontSize: "1rem", marginBottom:"-15px" }}>Genre: {selectedGame?.genre}</p>
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
=======
>>>>>>> 15800dfa2874e35533a1e1689791e5367eb093d4
