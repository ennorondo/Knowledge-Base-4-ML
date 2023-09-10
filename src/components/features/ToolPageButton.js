import React from 'react'
import { Link } from 'react-router-dom';

export default function ToolPageButton({name, path}) {
  return (
  <div>
    <button className='toolpage-btn'>
      <Link to={path} className="tool-btn-link">{name}</Link>
    </button>
  </div>
)
}