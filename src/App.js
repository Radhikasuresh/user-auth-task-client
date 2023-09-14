import React from "react";
import RegistrationComponent from "./components/RegistrationComponent";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import DashBoard from "./components/DashBoard";
import Page from "./components/Page";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/register" element={<RegistrationComponent />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </div>
  );
}
