import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of project 1.' },
  { id: 2, title: 'Project 2', description: 'Description of project 2.' },
  // Add more projects as needed
];

const Project = ({ title, description, index }) => (
  <motion.div
    className="project"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.5 }}
    whileHover={{ scale: 1.05, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
    whileTap={{ scale: 0.95 }}
  >
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const App = () => (
  <div>
    <header>
      <h1>My Animated Portfolio</h1>
    </header>
    <main>
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  </div>
);

export default App;
