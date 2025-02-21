import About from "./Components/About";
import Projects from "./Components/Projects";
import Belt from "./Components/Belt";
import Hero from "./Components/Hero";
import Techbelt from "./Components/Techbelt";
import Contact from "./Components/Contact";
import Landing from "./Components/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // ✅ Use only BrowserRouter

function App() {
  return (
    <Router> {/* ✅ Correct BrowserRouter */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/hero"
          element={
            <div>
              <Hero />
              <Belt />
              <About />
              <Techbelt />
              <Projects />
              <Contact />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
