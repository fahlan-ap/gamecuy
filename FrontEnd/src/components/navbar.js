import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Dropdown,
    Modal,
    Image,
    Row,
    Col,
  } from "react-bootstrap";
  import {
    FaBell,
    FaShoppingCart,
    FaUserCircle,
    FaSearch,
    FaTimes,
    FaCog,
  } from "react-icons/fa";
import logo from '../assets/image/GameCuy-logo.png';

function NavBar() {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState("");
    const [showCartModal, setShowCartModal] = useState(false);
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const clearSearch = () => {
        setSearchText("");
    };

    const handleOpenCartModal = () => {
        setShowCartModal(true);
    };

    const handleCloseCartModal = () => {
        setShowCartModal(false);
    };

    const handleCheckout = () => {
        setShowCartModal(false); // Tutup modal keranjang
        setShowCheckoutModal(true); // Buka modal checkout
    };

    const handleCloseCheckoutModal = () => {
        setShowCheckoutModal(false);
    };

    return (
        <>
            <Navbar expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-top" />{" "}
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
                            onChange={handleSearchChange}
                            />
                            {searchText && (
                            <FaTimes
                                className="clear-icon"
                                onClick={clearSearch}
                                style={{
                                position: "absolute",
                                right: "58px",
                                cursor: "pointer",
                                color: "#000000",
                                }}
                            />
                            )}
                            <Button variant="outline-light" style={{ marginLeft: "8px" }}>
                            <FaSearch />
                            </Button>
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            className="text-white me-2"
                            onClick={() => navigate("/library_page")}
                        >
                            Library
                        </Nav.Link>
                        <Nav.Link
                            className="text-white me-2"
                            onClick={() => navigate("/wishlist_page")}
                        >
                            Wishlist
                        </Nav.Link>
                        <Nav.Link
                            onClick={handleOpenModal}
                            className="text-white me-2"
                            >
                            {<span className="ml-4">Redeem</span>}
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="link" className="text-white">
                            <FaBell size={16} />
                        </Button>
                        <Button
                            variant="link"
                            className="text-white"
                            onClick={handleOpenCartModal}
                        >
                            <FaShoppingCart size={16} />
                        </Button>
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="link" className="text-white">
                            <FaUserCircle size={24} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ right: 0, left: "auto" }}>
                                <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                                <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => navigate("/")}>
                                    Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <div className="p-3">
                    <h4 className="text-center">Redeem Game</h4>
                    </div>

                    <Modal.Body>
                    <Form>
                        <Form.Group>
                        <Form.Label className="text-black">
                            Masukkan Kode Redeem:
                        </Form.Label>
                        <Form.Control type="text" placeholder="Kode Redeem" />
                        </Form.Group>
                    </Form>
                    </Modal.Body>

                    <div className="p-4 border-0 d-flex justify-content-center gap-4">
                    <Button
                        variant="secondary"
                        style={{ width: "100px" }}
                        onClick={handleCloseModal}
                    >
                        Close
                    </Button>
                    <Button
                        variant="dark"
                        style={{ width: "100px" }}
                        onClick={handleCloseModal}
                    >
                        Redeem
                    </Button>
                    </div>
                </Modal>
            </Navbar>
        </>
    );
}

export default NavBar;