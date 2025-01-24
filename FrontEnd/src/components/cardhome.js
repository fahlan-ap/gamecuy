import React, { useState } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

function Cardhome({ games }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  // Fungsi untuk menambahkan game ke wishlist
  const addToWishlist = async (gameId) => {
    // Ambil userId dari localStorage
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Silakan login terlebih dahulu!");
      return;
    }

    try {
      console.log("Mengirim request ke server...");

      const response = await fetch("http://localhost:3001/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, gameId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Gagal menambahkan ke wishlist");
      }

      alert(data.message); // Tampilkan pesan sukses
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <div className="text-white mt-4">
        <h2>Trending Game</h2>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {games.length > 0 ? (
          games.map((game) => (
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
                <Card.Text style={{ color: "white", fontSize: "0.85rem", marginTop:"-10px" }}>
                  Genre: {game.genre}
                </Card.Text>
                <div className="d-flex justify-content-center gap-2">
                  <Button className="btn-card1" variant="dark">
                    <FaShoppingCart className="me-1" style={{ fontSize: "0.8rem" }} /> Cart
                  </Button>
                  <Button variant="dark" className="btn-card2" onClick={() => addToWishlist(game.id)}>
                    <FaHeart className="me-1" style={{ fontSize: "0.8rem" }} /> Wishlist
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p className="text-center text-white">Game tidak ditemukan.</p>
        )}
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
          <Button variant="light" style={{ width: "130px" }} onClick={() => addToWishlist(selectedGame.id)}>
            <FaHeart className="me-1" /> Wishlist
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cardhome;
