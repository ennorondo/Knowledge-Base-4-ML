import React, { useState } from 'react';

export default function AntipatternsButton() {
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
        Antipatterns
      </button>
      {isMenuOpen && (
        <div className="menu" onBlur={closeMenu}>
          <ul>
            <li>
              <a href="/">Antipattern 1</a>
            </li>
            <li>
              <a href="/page1">Antipattern 2</a>
            </li>
            <li>
              <a href="/page2">Antipattern 3</a>
            </li>
            <li>
              <a href="/page3">Antipattern 4</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
