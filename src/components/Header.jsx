import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
  return (
    <header className="bg-info text-white w-100">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom">
        <h1 className="fs-4 navbar-brand">
          <Link to='/'>Chris Babb</Link></h1>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-link">Resume</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="b-example-divider"></div>
    </header>
  );
};
