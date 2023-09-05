import React, { useState } from 'react';

export default function ToolButton() {
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
        Tools
      </button>
      {isMenuOpen && (
        <div className="menu" onBlur={closeMenu}>
          <ul>
            <li>
              <a href="/">Tool 1</a>
            </li>
            <li>
              <a href="/page1">Tool 2</a>
            </li>
            <li>
              <a href="/page2">Tool 3</a>
            </li>
            <li>
              <a href="/page3">Tool 4</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
