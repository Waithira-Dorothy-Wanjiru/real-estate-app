import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'; // Import the CSS file

function Navbar() {
  return (
    <header className="navbar-header">
      <h1 className="navbar-title">Homly</h1>
      <nav className="navbar">
        <NavLink to="/" className="nav-link" activeClassName="active-link">Home</NavLink>
        <NavLink to="/about-us" className="nav-link" activeClassName="active-link">About Us</NavLink>
        <NavLink to="/contact" className="nav-link" activeClassName="active-link">Contact</NavLink>
        <NavLink to="/login" className="nav-link" activeClassName="active-link">Login</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
