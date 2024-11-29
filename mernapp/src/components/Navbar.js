import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#f5f5f5" }}>
        <Link className="navbar-brand" to="/" style={{ color: "blue" }}>
          GoFood
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ color: "blue" }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/" style={{ color: "blue" }}>
              Home <span className="sr-only">(current)</span>
            </Link>
            <Link className="nav-item nav-link" to="/Login" style={{ color: "blue" }}>
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
