import React from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const AddGames = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/admin_dash");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 background-sum">
      <Card
        className="text-black"
        style={{
          width: "32rem", 
          position: "relative",
          backgroundColor: "rgb(158, 158, 163)",
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "none",
            background: "transparent",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "dark",
          }}
        >
          <FaTimes />
        </button>

        <Row>
          <Col className="px-3 py-4 d-flex flex-column align-items-center">
            <h3 className="mb-4 text-center">Games Form</h3>
            <Form className="w-75 text-start">
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan judul game"
                  className="bg-light text-black mb-2"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Cover</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Masukkan gambar cover"
                  className="bg-light text-black mb-2"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Desc</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan deskripsi"
                  className="bg-light text-black mb-2"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan harga"
                  className="bg-light text-black mb-2"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan genre"
                  className="bg-light text-black mb-2"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>License</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan lisensi"
                  className="bg-light text-black mb-2"
                />
              </Form.Group>

              <div className="text-center mt-2 mb-2">
                <Button className="button-sum" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default AddGames;
