import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import About from "./pages/About";
import HealingZone from "./pages/HealingZone";
import PersonalStories from "./pages/PersonalStories";
import WannaTalk from "./pages/WannaTalk";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Auth Page */}
        <Route path="/auth" element={<Auth />} />

        {/* Main Website */}
        <Route
          path="/"
          element={
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
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;