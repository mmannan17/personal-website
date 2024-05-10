import React from 'react';  
import imageWebSrc from './Imageweb.png'; // Rename the import to avoid conflict
import './imageweb.css';

function Imageweb() { // Component name remains
  return (
    <div className="image-container">
        <img src={imageWebSrc} alt="Mustafa Mannan" className="my-image" />
    </div>
  );
}

export default Imageweb;
