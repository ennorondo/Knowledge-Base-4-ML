import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="menu-container">
      <button className="menu-button" onClick={toggleMenu}>
        Menu
      </button>
      {isMenuOpen && (
        <div className="menu" onBlur={closeMenu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/glossary">Glossary</Link>
            </li>
            <li>
              <Link to="/tools">Tools</Link>
            </li>
            <li>
              <Link to="/bestpractices">Best Practices</Link>
            </li>
            <li>
            <Link to="/antipatterns">Antipatterns</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
