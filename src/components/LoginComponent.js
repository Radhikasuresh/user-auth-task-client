import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://user-auth-task-server-z21n.vercel.app/auth/login", {
        username,
        password,
      });
      if (response.status === 200) {
        setMessage("Login successful!");
        alert("Logged In successfully");
        navigate("/page");
      }
    } catch (error) {
      setMessage("Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2>User Login</h2>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="login-username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="login-password">
          <Form.Label>Password</Form.Label>
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
          <Button variant="primary" type="submit">
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
