import React from 'react';
import { Link } from 'react-router-dom';

export default function ToolButton() {

  return (
    <div className="menu-container">
      <button className="tool-button">
      <Link to="/tools" className="btn-link">Tools</Link>
      </button>
    </div>
  );
}
