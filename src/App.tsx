import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
