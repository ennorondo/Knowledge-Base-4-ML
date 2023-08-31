import React from 'react';

export default function ScrollToTopButton() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={handleScroll} className="scroll-to-top-button">
      Top
    </button>
  );
}
