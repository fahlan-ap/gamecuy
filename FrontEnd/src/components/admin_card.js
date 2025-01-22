import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function AdminCard({ games }) {

  return (
    <>
      <div className="text-white mt-4">
        <h2>Game List</h2>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        {games.length > 0 ? (
          games.map((game) => (
            <Card key={game.id} className="admincard text-start">
              <Card.Img variant="top" src={`http://localhost:3001/${game.cover}`} />
              <Card.Body>
                <Card.Title style={{ color: "black", fontSize: "1.3rem" }}>
                  {game.name}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 mt-1"
                  style={{ color: "black", fontSize: "0.85rem" }}
                >
                  Price: {game.price}
                </Card.Subtitle>
                <Card.Text style={{ color: "black", fontSize: "0.95rem" }}>
                  {game.desc}{" "}
                </Card.Text>
                <Card.Text style={{ color: "black", fontSize: "0.85rem", marginTop:"-10px" }}>
                  Genre: {game.genre}
                </Card.Text>
                <div className="d-flex justify-content-center gap-2">
                  <Button className="btn-card1" variant="light">
                    <FaEdit className="me-1" style={{ fontSize: "0.8rem" }} /> Edit
                  </Button>
                  <Button variant="light" className="btn-card2">
                    <MdDelete className="me-1" style={{ fontSize: "0.8rem" }} /> Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p className="text-center text-black">Game tidak ditemukan.</p>
        )}
      </div>
    </>
  );
}

export default AdminCard;
