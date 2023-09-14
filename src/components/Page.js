// import React from "react";
import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// function Page() {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/");
//   };
//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Welcome...</h1>
//       <br />
//       <Button onClick={handleLogout} variant="danger">
//         Logout
//       </Button>
//     </div>
//   );
// }

// export default Page;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Page() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await axios.post("http://localhost:8000/auth/logout");
        if (response.status === 200) {
          localStorage.removeItem("jwtToken");

          setMessage("Logout successful");
        } else {
          setMessage("Logout failed");
        }
      } catch (error) {
        setMessage("Logout failed");
      }
    };
    logoutUser();
  });

  return (
    <div>
      {message && <p>{message}</p>}
      <Button>Logout</Button>
    </div>
  );
}

export default Page;
