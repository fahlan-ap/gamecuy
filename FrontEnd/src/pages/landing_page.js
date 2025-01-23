import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../assets/image/GameCuy-logo.png";
import CarouselComponent from "../components/carousel";

function LandingPage() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar expand="lg" fixed="top"
                style={{
                    background: "black",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(3.3px)",
                    WebkitBackdropFilter: "blur(3.3px)",
                    fontFamily: '"Poppins", serif',
                    fontWeight: 700,
                    borderBottom: "1px solid white",
                }}>
                <Container>
                    <Navbar.Brand>
                        <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-top" />{" "}
                        <span className="text-white">GameCuy</span>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link
                            className="text-white me-2"
                            onClick={() => navigate("/login_page")}
                        >
                            Login
                        </Nav.Link>
                        <Button
                            className="button-daftar ms-3 bg-white text-black"
                            onClick={() => navigate("/register_page")}
                        >
                            Register
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
            <CarouselComponent />
        </>
    );
}

export default LandingPage;
