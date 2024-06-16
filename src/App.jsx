// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import ProjectSummary from './pages/ProjectSummary';
import JoinUs from './pages/JoinUs';
import Team from './pages/Team';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <HowItWorks />
      <ProjectSummary />
      <JoinUs />
      <Team />
    </div>
  );
};

export default App;
