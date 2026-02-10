
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";

import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import HealingZone from "./pages/HealingZone";
import PersonalStories from "./pages/PersonalStories";
import WannaTalk from "./pages/WannaTalk";
import Contact from "./pages/Contact";

function App() {
   const isAuth = localStorage.getItem("isAuth");
  return (
<>
 <BrowserRouter>
      <Routes>
        {/* Login / Signup */}
        <Route
          path="/"
          element={isAuth ? <Navigate to="/home" /> : <Auth />}
        />

        {/* Protected Home */}
        <Route
          path="/home"
          element={isAuth ? <Home /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>

    <Router>
      <Navbar />

      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="healing-process">
          <HealingZone />
        </section>

        <section id="stories">
          <PersonalStories />
        </section>

        <section id="chatting">
          <WannaTalk />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </Router>

</>
  );
}

export default App;

