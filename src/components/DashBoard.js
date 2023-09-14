import React from "react";
import { Button, Navbar } from "react-bootstrap";
import "./style.css";
import { useNavigate } from "react-router-dom";
function DashBoard() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const register = () => {
    navigate("/register");
  };
  return (
    <div>
      <Navbar className="nav">
        <h1>User Authentication</h1>

        <div className="nav-button">
          <Button variant="info" onClick={login}>
            Login
          </Button>{" "}
          <Button variant="success">Sign Up</Button>
        </div>
      </Navbar>
      <h2 style={{ color: "blue", marginTop: "100px" }} className="h2">
        Please Login to Continue...
      </h2>
    </div>
  );
}

export default DashBoard;
