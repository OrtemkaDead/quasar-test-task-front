import React from "react";
import { Link } from "react-router-dom";

// Images
import logo from "@Assets/images/logo.svg";

// Styles
import "./LoadingPage.scss";

const LoadingPage = () => {
  return (
    <div className="logo">
      <img src={logo} />

      <Link className="test-link" to="/onboarding">
        Начать
      </Link>
    </div>
  );
};

export default LoadingPage;
