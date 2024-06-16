import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Lists from './pages/Lists'
import EatList from './components/EatFunction/EatList';

function App() {
  return (
    <Router>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lists" element={<Lists />} />
      </Routes>
    </Router>
  );
}

export default App;
