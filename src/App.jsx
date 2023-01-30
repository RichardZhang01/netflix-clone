import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const isLoggedIn = false;

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={isLoggedIn ? <Home /> : <Navigate to="/landing" />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
