import React from 'react';

export default function Navbar() {
  return <div>
<nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#f5f5f5" }}>
  <a className="navbar-brand" href="#" style={{ color: "blue" }}>Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" style={{ color: "blue" }}></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#" style={{ color: "blue" }}>Home <span className="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#" style={{ color: "blue" }}>Features</a>
      <a className="nav-item nav-link" href="#" style={{ color: "blue" }}>Pricing</a>
      <a className="nav-item nav-link disabled" href="#" style={{ color: "blue" }}>Disabled</a>
    </div>
  </div>
</nav>




  </div>;
}
