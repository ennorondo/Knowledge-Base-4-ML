import React, { useState } from 'react';
import Modal from './Modal';
import './Modal.css';

//CSS
import './Indexcard.css'

const IndexCard = ({ name, description, context, detection, consequences, cause, solution, example, sources, tags }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="index-card">
      <div className='content'>
        <div className='info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className="btn-container">
          <button onClick={toggleModal} className="show-details-btn">Show Details</button>
          {showModal && (
            <Modal onClose={toggleModal} 
            name={name} 
            description={description} 
            context={context} 
            detection={detection} 
            consequences={consequences} 
            cause={cause} 
            solution={solution} 
            example={example} 
            sources={sources} 
            tags={tags}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default IndexCard;
