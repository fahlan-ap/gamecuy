import React, { useState, useEffect } from "react";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const EditGame = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Ambil ID dari parameter URL

  const [formData, setFormData] = useState({
    name: "",
    cover: null,
    desc: "",
    price: "",
    genre: "",
    license: "",
  });

  // Ambil data game dari backend saat komponen dimuat
  useEffect(() => {
    fetch(`http://localhost:3001/api/games/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          name: data.name,
          cover: null, // Biarkan null agar tidak menghapus cover lama sebelum diubah
          desc: data.desc,
          price: data.price,
          genre: data.genre,
          license: data.license,
        });
      })
      .catch((error) => console.error("Error fetching game data:", error));
  }, [id]);

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Fungsi untuk mengupdate game
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    if (formData.cover) data.append("cover", formData.cover); // Kirim cover hanya jika ada perubahan
    data.append("desc", formData.desc);
    data.append("price", formData.price);
    data.append("genre", formData.genre);
    data.append("license", formData.license);

    try {
      const response = await fetch(`http://localhost:3001/api/games/${id}`, {
        method: "PUT",
        body: data, // FormData otomatis menangani Content-Type
      });

      if (!response.ok) {
        throw new Error("Gagal mengupdate game");
      }

      const result = await response.json();
      console.log(result);

      // Menampilkan notifikasi sebelum pindah halaman
      window.alert("Game berhasil diperbarui!");
      navigate("/admin_dash");
    } catch (error) {
      console.error("Error:", error.message);
      window.alert("Terjadi kesalahan saat memperbarui game.");
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
          onClick={() => navigate("/admin_dash")}
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
            <h3 className="mb-4 text-center">Edit Game</h3>
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
                />
                <Form.Text className="text-muted">
                  Biarkan kosong jika tidak ingin mengubah cover.
                </Form.Text>
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
                  Update Game
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default EditGame;
