import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const isLoggedIn = false;

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
