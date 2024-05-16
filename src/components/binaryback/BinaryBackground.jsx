import React, { useEffect, useRef } from 'react';
import './BinaryBackground.css'; // Import your existing CSS styles

const BinaryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // Adjust the canvas dimensions to fill its container
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Binary characters
    const binary = ['0', '1','a','&','t','z','$'];

    const fontSize = 12; // Smaller font size for better detail
    const columns = canvas.width / fontSize; // Calculate number of columns based on font size
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Lighten the background slightly to see the "fade"
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(76, 74, 90, 0.904)'; // Using the color defined in .binary-digit
      ctx.font = `${fontSize}px 'Google Sans', monospace`; // Use the same font as in your CSS

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    }

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} id="binary-background" style={{ position: 'absolute', top: 0, left: 0 }}></canvas>;
};

export default BinaryBackground;
