import React from 'react';
import { Link } from 'react-router-dom';

export default function BestPracticesButton() {

  return (
    <div className="menu-container">
      <button className="tool-button">
        <Link to="/bestpractices" className="btn-link">Best Practices</Link>
      </button>
    </div>
  );
}
