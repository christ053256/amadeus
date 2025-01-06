import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    image: 'path/to/image1.jpg',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    image: 'path/to/image2.jpg',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3',
    image: 'path/to/image3.jpg',
  },
];

const Projects = () => {
  return (
    <div className="projects">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
