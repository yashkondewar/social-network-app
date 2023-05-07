import "./App.css";
import Quora from "./components/Quora.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Technology from "./components/category/Technology";
import Politics from "./components/category/Politics";
import Food from "./components/category/Food";
import Sports from "./components/category/Sports";
import Economics from "./components/category/Economics";
import Lifestyle from "./components/category/Lifestyle";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/quora" element={<Quora />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/food" element={<Food />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/economics" element={<Economics />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
