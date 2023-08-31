import React, { useState } from 'react';

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
              <a href="/">Glossary</a>
            </li>
            <li>
              <a href="/page1">Tools</a>
            </li>
            <li>
              <a href="/page2">Best Practices</a>
            </li>
            <li>
              <a href="/page3">Antipatterns</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
