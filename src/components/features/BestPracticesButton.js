import React, { useState } from 'react';

export default function BestPracticesButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="menu-container">
      <button className="tool-button" onClick={toggleMenu}>
        Best Practices
      </button>
      {isMenuOpen && (
        <div className="menu" onBlur={closeMenu}>
          <ul>
            <li>
              <a href="/">Best Practice 1</a>
            </li>
            <li>
              <a href="/page1">Best Practice 2</a>
            </li>
            <li>
              <a href="/page2">Best Practice 3</a>
            </li>
            <li>
              <a href="/page3">Best Practice 4</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
