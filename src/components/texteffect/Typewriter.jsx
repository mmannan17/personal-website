import React, { useState, useEffect } from 'react';
import './Typewriter.css';

function Typewriter({ texts, speed = 100 }) {
  const [index, setIndex] = useState(0);
  const [cycleIndex, setCycleIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (!deleting && index < currentText.length) {
      // Typing out the text
      timeoutId = setTimeout(() => {
        setIndex(index + 1);
      }, speed);
    } else if (deleting && index > 0) {
      // Deleting the text
      timeoutId = setTimeout(() => {
        setIndex(index - 1);
      }, speed / 2); // Increase speed of deletion for smooth transition
    } else if (!deleting && index === currentText.length) {
      // Pause briefly before starting to delete
      timeoutId = setTimeout(() => setDeleting(true), 500); // Short pause at the end
    } else if (deleting && index === 0) {
      // Finished deleting, load next text
      const nextCycleIndex = (cycleIndex + 1) % texts.length;
      setCurrentText(texts[nextCycleIndex]);
      setCycleIndex(nextCycleIndex);
      setDeleting(false);
      // Start typing immediately after deleting
      timeoutId = setTimeout(() => setIndex(1), 0); // Remove delay before starting new text
    }

    return () => clearTimeout(timeoutId);
  }, [index, deleting, currentText, cycleIndex, texts, speed]);

  return (
    <span className="typewriter-text">{currentText.substring(0, index)}</span>
  );
}

export default Typewriter;
