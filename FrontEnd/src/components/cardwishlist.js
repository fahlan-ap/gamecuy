import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

function CardWishlist() {
  const [showModal, setShowModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [games, setGames] = useState([]);

  const handleClose = () => setShowModal(false);
  const handleShow = (game) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Silakan login terlebih dahulu!");
      return;
    }

    fetch(`http://localhost:3001/wishlist/${userId}`)
      .then((response) => response.json())
      .then((wishlistData) => {
        const gameIds = wishlistData.map((item) => item.gameId);
        
        fetch("http://localhost:3001/games")
          .then((response) => response.json())
          .then((gameData) => {
            const gamesInWishlist = gameData.filter((game) =>
              gameIds.includes(game.id)
            );
            setGames(gamesInWishlist);
          })
          .catch((error) => console.error("Error fetching games:", error));
      })
      .catch((error) => console.error("Error fetching wishlist:", error));
  }, []);

  const removeFromWishlist = async (gameId) => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Silakan login terlebih dahulu!");
      return;
    }

    try {
      console.log("Mengirim request untuk menghapus game dari wishlist...");

      const response = await fetch("http://localhost:3001/wishlist/remove", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gameId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Gagal menghapus game dari wishlist");
      }

      alert(data.message);

      window.location.reload();
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <div className="text-white mt-4">
        <h2>Game Wishlist</h2>
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
                  <Button variant="dark" className="btn-card2" onClick={() => removeFromWishlist(game.id)}>
                    <FaHeart className="me-1" style={{ fontSize: "0.8rem" }} /> Remove
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p className="text-center text-white">Wishlist kosong.</p>
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
          <Button variant="light" style={{ width: "130px" }} onClick={() => removeFromWishlist(selectedGame.id)}>
            <FaHeart className="me-1" /> Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CardWishlist;
