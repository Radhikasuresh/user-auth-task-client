import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function LoginComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://user-auth-task-server-z21n.vercel.app/auth/login",
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        setMessage("Login successful!");
        localStorage.setItem("User", email);
        alert("Logged In successfully");
        navigate("/page");
      }
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>User Login</h2>
      <br />
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="login-username">
          <Form.Label>
            <b>Email:</b>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="login-password">
          <Form.Label>
            <b>Password:</b>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />

        {isLoading ? (
          <ClipLoader color={"#123abc"} loading={isLoading} />
        ) : (
          <Button variant="success" type="submit">
            Login
          </Button>
        )}
        <br></br>
        <br />
        <a href="/register">New User? Click here to Register...</a>
      </Form>
    </Container>
  );
}

export default LoginComponent;
