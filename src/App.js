import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './components/Pages/Home';
import About from './components/Pages/aboutsec';
import Projects from './components/Pages/project';
import Experience from './components/Pages/experience';
import Skills from './components/Pages/skills';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './components/Projectsec/project.css';
import './components/Skillssec/skills.css';




function App() {
  return (
      <div className="App">
           <Router>
              <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/experience" element={<Experience />}/>
                    <Route path="/skills" element={<Skills />}/>

                </Routes>
              </Layout>
           </Router>
      </div>
  );
}

export default App;
