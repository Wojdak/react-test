import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/posts" className="navbar-brand">Social Media</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/posts" className="nav-link">Posts</Link>
            </li>
            <li className="nav-item">
              <Link to="/albums" className="nav-link">Albums</Link>
            </li>
            {/* Add other links here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
