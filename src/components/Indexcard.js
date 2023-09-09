import React, { useState } from 'react';

//CSS
import './Indexcard.css'

const IndexCard = ({ name, description, onClick }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="index-card">
      <div className='content'>
        <div className='info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className='btn-container'>
          <button onClick={toggleDetails} className='show-details-btn'>Show Details</button>
          {showDetails && (
            <div className="details">
              <p>test</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default IndexCard;
