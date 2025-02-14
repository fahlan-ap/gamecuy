import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";
import {
  FaShoppingCart,
  FaUserCircle,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/image/GameCuy-logo.png";

function NavBar({ onSearch }) {
  // Tambahkan props onSearch
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value); // Panggil fungsi pencarian di HomePage
  };

  const clearSearch = () => {
    setSearchText("");
    onSearch(""); // Kosongkan hasil pencarian
  };

  return (
    <Navbar expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <img
            src={logo}
            alt="logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <span className="text-white">GameCuy</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Form
            className="d-flex align-items-left position-relative ms-3"
            style={{ width: "100%" }}
          >
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-2"
              style={{ flex: 1, paddingRight: "30px" }}
              value={searchText}
              onChange={handleSearchChange} // Tangani perubahan input
            />
            {searchText && (
              <FaTimes
                className="clear-icon"
                onClick={clearSearch}
                style={{
                  position: "absolute",
                  bottom: "11px",
                  right: "8px",
                  cursor: "pointer",
                  color: "#000000",
                }}
              />
            )}
          </Form>
        </Nav>
        <Nav>
          <Nav.Link
            className="text-white me-2"
            onClick={() => navigate("/home_page")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="text-white me-2"
            onClick={() => navigate("/wishlist_page")}
          >
            Wishlist
          </Nav.Link>
          <Nav.Link
            className="text-white me-2"
            onClick={() => navigate("/library_page")}
          >
            Library
          </Nav.Link>
          <Nav.Link
            className="text-white me-2"
            onClick={() => navigate("/cart_page")}
          >
            <FaShoppingCart size={23} />
          </Nav.Link>
        </Nav>
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" className="text-white">
              <FaUserCircle size={23} />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ right: 0, left: "auto" }}>
              <Dropdown.Item onClick={() => navigate("/")}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
