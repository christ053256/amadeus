import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import MainContent from './components/MainContent';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <MainContent />
      <Projects />
    </div>
  );
};

export default App;
