import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="container">
      <div className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <h1 className="fs-4">Chris Babb</h1>
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
    </header>
  );
};
