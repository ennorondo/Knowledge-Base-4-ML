import React from 'react';

export default function ScrollButton({ targetId, name }) {
  const handleScroll = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <button onClick={handleScroll} className="process-btn" targetId={targetId}>
      {name}
    </button>
  );
}
