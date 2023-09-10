import React from 'react';

//CSS
import './Modal.css'

const Modal = ({ onClose, name, description, context, detection, consequences, cause, solution, example, sources, tags }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2><strong>Name: </strong> {name}</h2>
        <p><strong>Description: </strong>{description}</p>
        <p><strong>Context: </strong>{context}</p>
        <p><strong>Detection: </strong>{detection}</p>
        <p><strong>Consequences: </strong>{consequences}</p>
        <p><strong>Cause: </strong>{cause}</p>
        <p><strong>Solution: </strong>{solution}</p>
        <p><strong>Example: </strong>{example}</p>
        <p><strong>Sources: </strong>{sources}</p>
        <p><strong>Tags: </strong>{tags}</p>
      </div>
    </div>
  );
};

export default Modal;
