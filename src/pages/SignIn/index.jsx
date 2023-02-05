import React from "react";
import "./SignIn.css";

import { useLocation } from "react-router-dom";
import Hero from "../../components/Hero";
import Header from "../../components/Header";
import SignInForm from "../../components/SignInForm";

function SignIn() {
  const location = useLocation();
  const email = location.state ? location.state.email : "";
  console.log(email);

  return (
    <div className="signin">
      <Hero />
      <Header />
      <SignInForm />
    </div>
  );
}

export default SignIn;
