document.addEventListener('DOMContentLoaded', () => {
    const { motion } = window.framerMotion;

    const projects = document.querySelectorAll('.project');

    projects.forEach((project, index) => {
        motion(project, {
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: index * 0.2, duration: 0.5 }
        });
    });

    projects.forEach((project) => {
        project.addEventListener('mouseenter', () => {
            motion(project, {
                scale: 1.05,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: { duration: 0.3 }
            });
        });

        project.addEventListener('mouseleave', () => {
            motion(project, {
                scale: 1,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 }
            });
        });
    });
});
