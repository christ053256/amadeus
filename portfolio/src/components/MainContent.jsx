import React from 'react';
import { motion } from 'framer-motion';

const MainContent = () => {
  return (
    <div className="main-content">
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
      <motion.img
        src="path/to/your/image.jpg"
        alt="Portfolio"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default MainContent;
