import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'  
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Insight from './components/Insight';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/insight" element={<Insight />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
     </div>
    </Router>
   
  );
}

export default App;
