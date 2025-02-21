import About from "./Components/About";
import Projects from "./Components/Projects";
import Belt from "./Components/Belt";
import Hero from "./Components/Hero";
import Techbelt from "./Components/Techbelt";
import Contact from "./Components/Contact";
import Landing from "./Components/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/hero"
          element={
            <>
              <Hero />
              <Belt />
              <About />
              <Techbelt />
              <Projects />
              <Contact id="contact" /> {/* ✅ Add ID to Contact section */}
            </>
          }
        />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
