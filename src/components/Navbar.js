import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo.svg';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setIsSticky(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={`Navbar${isSticky ? ' sticky' : ''}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={logo} alt="Logo" className='navbar-brand'/>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={handleMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`offcanvas offcanvas-end ${isMenuOpen ? 'show' : ''}`} id="navbarText" tabIndex="-1">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">Menu</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleCloseMenu}></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleCloseMenu}
                    className="nav-link"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="roadmap"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleCloseMenu}
                    className="nav-link"
                  >
                    Roadmap
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="team"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleCloseMenu}
                    className="nav-link"
                  >
                    Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="collection"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleCloseMenu}
                    className="nav-link"
                  >
                    Collection
                  </Link>
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
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
