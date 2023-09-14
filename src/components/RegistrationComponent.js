import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

function RegistrationComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setMessage("Invalid email format. Please enter a valid email.");
      setIsLoading(false);
      return;
    }
    if (password.length < 6) {
      setMessage("Password should be at least 6 characters long.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://user-auth-task-server-z21n.vercel.app/auth/register",
        {
          username,
          email,
          contact,
          password,
        }
      );

      if (response.status === 401) {
        setMessage("Email already exists..please Login");
      } else if (response.status === 201) {
        setMessage("Registration successful!");
        setUsername("");
        setPassword("");
        setContact("");
        setEmail("");
        localStorage.setItem("user", email);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setMessage("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>User Register</h2>
      <br />
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleRegistration}>
        <Form.Group controlId="reg-username">
          <Form.Label>
            <b>Username:</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="reg-username">
          <Form.Label>
            <b>Email:</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Email-Id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="reg-username">
          <Form.Label>
            <b>Contact:</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="reg-password">
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
