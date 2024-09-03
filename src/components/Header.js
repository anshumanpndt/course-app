// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Optional: For styling

const Header = () => {
  return (
    <header className="header">
      <h1>Course App</h1>
      <nav>
        <Link to="/" className="nav-link">Courses</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Header;
