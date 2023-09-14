import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";

function Page() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://user-auth-task-server-z21n.vercel.app/auth/logout"
      );

      if (response.status === 200) {
        localStorage.removeItem("user");
        setMessage("Logout successful");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setMessage("Unable to Logout");
      }
    } catch (error) {
      setMessage("Logout failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src="https://st.depositphotos.com/1032577/4812/i/450/depositphotos_48129893-stock-photo-frame-with-daisies-and-lettering.jpg"
        alt="dog"
        width="100%"
        height="642px"
      />
      <br />

      <Button className="logout" onClick={handleLogout} variant="danger">
        Logout
      </Button>

      <h1 className="message">{message}</h1>
    </div>
  );
}

export default Page;
