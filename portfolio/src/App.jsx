import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          This is an animated portfolio created using React Vite.
        </motion.p>
      </header>
    </div>
  );
};

export default App;
