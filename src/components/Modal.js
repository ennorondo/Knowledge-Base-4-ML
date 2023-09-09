import React from 'react';

//CSS
import './Modal.css'

const Modal = ({ onClose, name, description, context }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2><strong>Name: </strong> {name}</h2>
        <p><strong>Description: </strong> {description}</p>
        <p><strong>Context: </strong>{context}</p>
      </div>
    </div>
  );
};

export default Modal;
