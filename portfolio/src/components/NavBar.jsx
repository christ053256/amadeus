import React from 'react';
import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <nav className="navbar">
      <motion.a
        href="#home"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Home
      </motion.a>
      <motion.a
        href="#about"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        About
      </motion.a>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Projects
      </motion.a>
    </nav>
  );
};

export default NavBar;
