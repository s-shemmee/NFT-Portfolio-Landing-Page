import React, { useState } from 'react';
import logo from '../images/logo.svg';
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className='containerNav sticky-top'>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <img src={logo} alt="Logo" className='navbar-brand'/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleMenuToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarText">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Roadmap
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Collection
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center ms-lg-4">
            <a href="https://twitter.com" className="btn">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://discord.com" className="btn">
              <i className="bi bi-discord"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
    </section>
  );
}

export default Navbar;
