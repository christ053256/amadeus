import React from 'react';
import { motion } from 'framer-motion';
import './styles/portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <motion.div
        className="portfolio-item"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>My Portfolio</h2>
        <p>Check out my projects below!</p>
      </motion.div>
      {/* Add more portfolio items here */}
    </div>
  );
};

export default Portfolio;
