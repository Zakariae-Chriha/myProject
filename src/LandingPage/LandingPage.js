import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/LandingPage.css";
function LandingPage() {
  return (
    <div className="LandingPage-image d-flex justify-content-center align-items-center flex-column">
      {/* Overlay */}
      <div className="filter"></div>
      <h1
        className="display-2 text-center text-white mb-3"
        style={{ zIndex: 2 }}
      >
        Signe UP
      </h1>
      <div style={{ width: "60%", zIndex: 2 }}>
        <div className="buttonContainer">
          <Link to="/login">
            <Button size="lg" className="landingbutton">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              variant="outline-primary"
              size="lg"
              className="landingbutton"
            >
              Signup
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
