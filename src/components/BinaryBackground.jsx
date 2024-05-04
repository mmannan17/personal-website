// src/components/BinaryBackground.jsx
import React, { useEffect } from 'react';
import './BinaryBackground.css'; // Import the CSS for styling

const BinaryBackground = () => {
  useEffect(() => {
    const container = document.getElementById('binary-background');
    const numberOfDigits = Math.floor(window.innerWidth / 20) * Math.floor(window.innerHeight / 30);

    for (let i = 0; i < numberOfDigits; i++) {
      const span = document.createElement('span');
      span.className = 'binary-digit';
      span.textContent = Math.random() < 0.5 ? '0' : '1';
      span.style.animationDuration = `${5 + Math.random() * 10}s`;
      span.style.animationDelay = `-${Math.random() * 10}s`;
      container.appendChild(span);
    }
  }, []);

  return <div id="binary-background"></div>;
};

export default BinaryBackground;
