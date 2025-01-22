import React, { useState } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const AddGames = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cover: null,
    desc: "",
    price: "",
    genre: "",
    license: "",
  });

  // Fungsi untuk menutup form dan kembali ke dashboard admin
  const handleClose = () => {
    navigate("/admin_dash");
  };

  // Menangani perubahan input
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Menangani pengiriman form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("cover", formData.cover);
    data.append("desc", formData.desc);
    data.append("price", formData.price);
    data.append("genre", formData.genre);
    data.append("license", formData.license);

    try {
      const response = await fetch("http://localhost:3001/api/games", {
        method: "POST",
        body: data, // FormData akan otomatis menangani Content-Type
      });

      if (!response.ok) {
        throw new Error("Gagal menambahkan game");
      }

      const result = await response.json();
      console.log(result);

      // Menampilkan notifikasi sebelum pindah halaman
      window.alert("Game berhasil ditambahkan!");
      navigate("/admin_dash");
    } catch (error) {
      console.error("Error adding game:", error.message);
      window.alert("Terjadi kesalahan saat menambahkan game.");
    }
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
            <Form className="w-75 text-start" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan judul game"
                  className="bg-light text-black mb-2"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Cover</Form.Label>
                <Form.Control
                  type="file"
                  name="cover"
                  onChange={handleChange}
                  className="bg-light text-black mb-2"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Desc</Form.Label>
                <Form.Control
                  type="text"
                  name="desc"
                  value={formData.desc}
                  onChange={handleChange}
                  placeholder="Masukkan deskripsi"
                  className="bg-light text-black mb-2"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Masukkan harga"
                  className="bg-light text-black mb-2"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  placeholder="Masukkan genre"
                  className="bg-light text-black mb-2"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>License</Form.Label>
                <Form.Control
                  type="text"
                  name="license"
                  value={formData.license}
                  onChange={handleChange}
                  placeholder="Masukkan lisensi"
                  className="bg-light text-black mb-2"
                  required
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
