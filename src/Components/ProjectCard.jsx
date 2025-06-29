import { motion } from 'framer-motion';

const ProjectCard = () => {
  const projects = [
    {
      title: 'Recipe Book Hub',
      description:
        'A comprehensive recipe management platform with cooking instructions, ingredient tracking, and meal planning features.',
      image: 'https://via.placeholder.com/400x200?text=Recipe+Book+Hub',
      detailsLink: '#',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Task Management App',
      description:
        'An efficient task management tool with real-time updates, categorization, and user-friendly interface.',
      image: 'https://via.placeholder.com/400x200?text=Task+Management+App',
      detailsLink: '#',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Freelance Portfolio',
      description:
        'A sleek portfolio site showcasing freelance projects, skills, and contact information.',
      image: 'https://via.placeholder.com/400x200?text=Freelance+Portfolio',
      detailsLink: '#',
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <div className="font-[sora] py-6 px-4 sm:px-6 lg:px-8">
      <h2 className='text-center text-5xl text-white font-[sora] font-extrabold mb-4'>My Project</h2>
      <div className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.detailsLink}
                className="btn bg-blue-600 text-white hover:bg-blue-700"
              >
                View Details
              </a>
              <a
                href={project.demoLink}
                className="btn bg-green-600 text-white hover:bg-green-700"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                className="btn bg-gray-600 text-white hover:bg-gray-700"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
