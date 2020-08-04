import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand">Start Bootstrap</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <Link href="/">
              <li className="nav-item active">
                <a className="nav-link">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </Link>
            <Link href="/about">
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
            </Link>
            <Link href="/services">
              <li className="nav-item">
                <a className="nav-link">Services</a>
              </li>
            </Link>
            <Link href="/contact">
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
