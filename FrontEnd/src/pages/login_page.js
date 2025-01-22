import React, { useState } from "react";
import { Card, Form, Button, Row, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClose = () => {
    navigate("/");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Simpan data user dan role di localStorage
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("role", data.user.role);

        // Redirect berdasarkan role
        if (data.user.role_id === 1) {  // Jika role_id adalah 1 untuk admin
          navigate("/home_admin");
        } else if (data.user.role_id === 2) {  // Jika role_id adalah 2 untuk client
          navigate("/home_page");
        } else {
          setErrorMessage("Role tidak dikenali.");
        }
      } else {
        setErrorMessage(data.message || "Failed to login");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bckground">
      <Card className="custom-dark-form text-light" style={{ width: "30rem" }}>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            cursor: "pointer",
          }}
          onClick={handleClose}
        >
          <FaTimes size={20} />
        </div>
        <Row className="gap">
          <div
            md={7}
            className="px-3 py-4 d-flex flex-column align-items-center"
          >
            <h3 className="mb-4 text-center">Login</h3>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form className="w-75 text-start" onSubmit={handleLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-start">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="bg-dark text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicPassword"
                className="mt-3 position-relative"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="bg-dark text-light"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  onClick={togglePasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "15px",
                    top: "38px",
                    cursor: "pointer",
                  }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </Form.Group>

              <div className="text-center mt-2 mb-2">
                <p>
                  Belum punya akun?{" "}
                  <Link
                    to="/register_page"
                    style={{ color: "gray", textDecoration: "none" }}
                  >
                    Klik Disini
                  </Link>
                </p>
                <Button className="button-form" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </Row>
      </Card>
    </div>
  );
};

export default LoginForm;
