import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import About from "./pages/About";
import SupportUs from "./pages/SupportUs";
import Navbar from "./components/Navbar";
import "./css/App.css";

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/about" element={<About />} />
          <Route path="/support-us" element={<SupportUs />} />
        </Routes>
      </main>
    </>
  )
}

export default App
