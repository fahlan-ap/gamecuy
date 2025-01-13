import React, { useState } from "react";
import { Card, Form, Button, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleClose = () => {
    navigate("/");
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
            <Form className="w-75">
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-start">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className="bg-dark text-white" />
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
                    to="/Register"
                    style={{ color: "gray", textDecoration: "none" }}
                  >
                    Klik Disini
                  </Link>
                </p>
                <Button
                  className="button-form"
                  type="submit"
                  onClick={() => navigate("/Dashboard")}
                >
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
