import Navbar from "./components/Navbar";   
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import HealingZone from "./pages/HealingZone";
import PersonalStories from "./pages/PersonalStories";
import WannaTalk from "./pages/WannaTalk";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
    
    < Router>
    <Navbar />
      <nav>
        <link to="/" element={<Home />} />
        <link to="/about" element={<About />} />
       <link to="/healing-process" element={<HealingZone />} />
       <link to="/stories" element={<PersonalStories />} />
       <link to="/chatting" element={<WannaTalk />}/>
        <link to="/contact" element={<Contact/> }/>


      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/healing-process" element={<HealingZone />} />
        <Route path="/stories" element={<PersonalStories />} />
        <Route path="/chatting" element={<WannaTalk />}/>
        <Route path="/contact" element={<Contact/> }/>
      </Routes>
    </Router>

    </>
  );
}

export default App;


