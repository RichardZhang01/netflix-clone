import React from "react";
import "./SignIn.css";

import { useLocation } from "react-router-dom";

function SignIn() {
  const location = useLocation();
  const email = location.state ? location.state.email : "";

  return <div className="signin">{email || "No email"}</div>;
}

export default SignIn;
