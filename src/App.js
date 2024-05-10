import './App.css';
import BinaryBackground from './components/binaryback/BinaryBackground';
import Introduction from './components//Introduction';
import Imageweb from './components/Imageweb';
import Logos from './components/logos';
import Section from './components/sec/sections';
import About from './components/about/aboutsec';

function App() {
  return (
    
    <div className="App">
      <BinaryBackground />
      <Logos/>

      <Imageweb/>

        <div className="text">

          <Introduction/>

        </div>
        <Section/>
        <About/>


        
    </div>
  );
}

export default App; // Only one default export per module
