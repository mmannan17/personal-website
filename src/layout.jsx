import React from 'react';
import BinaryBackground from './components/binaryback/BinaryBackground';  // Corrected path


function Layout({ children }) {
    return (
        <div>
            <BinaryBackground />
            {children}
        </div>
    );
}

export default Layout;
