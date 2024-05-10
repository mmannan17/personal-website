import React from 'react';
import './intro.css';  
import Imageweb from './Imageweb.png';
import Typewriter from './texteffect/Typewriter';

function Introduction() {
  return (
    <div className="intro-container">
        <img src={Imageweb} alt="Mustafa Mannan" className="my-image" />
        <h1>
            <Typewriter texts={['Hello I\'m Mustafa Mannan','I\'m a Senior @ The University Of South Florida','Studying CS in hopes of becoming a Software Engineer']}  speed={80} />

            
        </h1>
    </div>


    
  );
}

export default Introduction;



