import React from 'react';
import { Link } from 'react-router-dom';

export default function AntipatternsButton() {

  return (
    <div className="menu-container">
      <button className="tool-button" >
        <Link to="/antipatterns" className="btn-link">Antipatterns</Link>
      </button>
    </div>
  );
}
