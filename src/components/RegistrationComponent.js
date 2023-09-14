import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

function RegistrationComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://user-auth-task-server-z21n.vercel.app/auth/register",
        {
          username,
          password,
        }
      );

      if (response.status === 401) {
        setMessage("User already exists..please Login");
      } else if (response.status === 201) {
        setMessage("Registration successful!");
        setUsername("");
        setPassword("");
        navigate("/login");
      }
      localStorage.setItem("user", username);
    } catch (error) {
      setMessage("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2>User Register</h2>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleRegistration}>
        <Form.Group controlId="reg-username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="reg-password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br />
        {isLoading ? (
          <ClipLoader color={"#123abc"} loading={isLoading} />
        ) : (
          <Button variant="primary" type="submit">
            Register
          </Button>
        )}
        <br />
        <br />
        <a href="/login">Already a user? Click here to Login...</a>
      </Form>
    </Container>
  );
}

export default RegistrationComponent;
