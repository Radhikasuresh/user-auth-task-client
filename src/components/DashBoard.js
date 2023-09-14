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
          <Button onClick={register} variant="success">
            Sign Up
          </Button>
        </div>
      </Navbar>
      {/* <h2 style={{ color: "blue", marginTop: "10px" }} className="h2">
        Please Login to Continue...
      </h2> */}
      <img
        width="100%"
        height="570px"
        src="https://plus.unsplash.com/premium_photo-1687203673190-d39c3719123a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVsbG98ZW58MHx8MHx8fDA%3D&w=1000&q=80"
      />
    </div>
  );
}

export default DashBoard;
