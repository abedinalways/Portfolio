import { motion } from 'framer-motion';

import { useState } from 'react';

const ProjectCard = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'FitForge- A Fitness Platform',
      description:
        'FitForge – Full-Stack Fitness Platform Empowered by Stripe payments, Firebase authentication, and an admin dashboard for trainer and user management.',
      image: 'https://i.ibb.co/bg0yY1Wv/fitforge.png',
      demoLink: 'https://fitforge-5c5d1.web.app/',
      githubLink: 'https://github.com/abedinalways/QuickLance-Client',
      modalContent: {
        bannerImage:
          'https://i.ibb.co/rG9Y3bgK/Screenshot-2025-07-16-232702.png',
        techStack: [
          'React',
          'Stripe',
          'Dashboard',
          'Firebase',
          'Admin Panel',
          'MongoDB',
        ],
        description:
          'The frontend of FitForge, a fitness platform, provides a responsive and user-friendly interface for members to apply as trainers, booking trainer, payment by Stripe, view their application status, and interact with fitness-related features. ',
        challenges: [
          'One Dashboard for Different users-Admin, Trainer, Member',
          'Payment Gateway By Stripe',
          'Trainer application for general people',
          'Integrating Firebase, pagination in all pages',
        ],
        futureImprovements: [
          'improve backend funtionality',
          'Enhance search functionality',
        ],
      },
    },
    {
      title: 'StackMind-A Web Blog Platform',
      description:
        'StackMind is a Web Blog platform, built with React. It provides a responsive user interface to browse blogs, post content, manage user accounts, and and bookmark content they love. This Project is built with using MERN Stack',
      image: 'https://i.ibb.co/TxM7wyNX/stack-Mind-app.png',

      demoLink: 'https://stackmind-auth.web.app/',
      githubLink: 'https://github.com/abedinalways/StackMind-Client',
      modalContent: {
        bannerImage: 'https://i.ibb.co/TxM7wyNX/stack-Mind-app.png',
        techStack: [
          'React',
          'Firebase',
          'Context API',
          'JWT',
          'Express Js',
          'MongoDB',
        ],
        description:
          'About This is the frontend for the StackMind Web Blog platform, built with React. It provides a responsive user interface to browse blogs, post content, manage user accounts, and interact with the backend APIs.',
        challenges: [
          'Real-time sync issues',
          'State management',
          'UI optimization',
        ],
        futureImprovements: [
          'Add notifications',
          'Implement dark mode',
          'Improve SEO',
        ],
      },
    },
    {
      title: ' Sohay – Mobile Banking Web App',
      description:
        'Sohay is designed to make mobile banking accessible to everyone. It simplifies financial tasks like bill payments, money transfers, and micro-credit access through an intuitive and responsive interface.',
      image: 'https://i.ibb.co/20F8tXpf/sohay-app.png',

      demoLink: 'https://sohay-auth.web.app/',
      githubLink: 'https://github.com/abedinalways/Sohay-App',
      modalContent: {
        bannerImage: 'https://i.ibb.co/20F8tXpf/sohay-app.png',
        techStack: [
          'React',
          'TailwindCSS',
          'React Router',
          'Firebase',
          'DaisyUI',
        ],
        description:
          'About Sohay is a modern, user-friendly mobile banking Single Page Application (SPA) that brings essential and advanced banking services to your fingertips. From seamless bill payments to micro-credit services, Sohay empowers users—especially in rural and semi-urban areas—with easy, fast, and secure digital financial transactions.',
        challenges: ['Payment method', 'SEO optimization'],
        futureImprovements: ['Add blog section', 'Improve loading speed'],
      },
    },
  ];

  return (
    <div className="font-[sora] py-10 px-4 sm:px-6 lg:px-8" id="project">
      <div
        className="flex flex-col justify-center gap-4 items-center font-[Suse] font-extrabold mt-6"
        id="about"
      >
        <div className="text-center mb-8 mt-10 font-[sora]">
          <motion.span
            className="text-xs font-semibold bg-gray-800 text-white  px-3 py-1 rounded-full mb-2 inline-block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            💪what i have build
          </motion.span>
          <motion.h2
            className="text-5xl text-white md:text-5xl font-bold"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            My Projects
          </motion.h2>
        </div>
      </div>
      <div className="lg:flex lg:justify-center gap-4 w-full lg:items-center mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-black text-white p-6 rounded-lg mx-auto shadow-md mb-8 border border-gray-400 md:w-110 h-120 md:h-100"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full  object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-200 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-200 mb-4 text-xs">{project.description}</p>
            <div className="md:flex  space-x-4">
              <button
                onClick={() => setSelectedProject(project)}
                className="btn bg-purple-600 text-white hover:bg-purple-800"
              >
                View Details
              </button>
              <a
                href={project.demoLink}
                className="btn bg-purple-600 text-white hover:bg-purple-800"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                className="btn bg-purple-600 text-white hover:bg-purple-800"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal with Blurred Background */}
      {selectedProject && (
        <div className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-150 overflow-y-scroll text-xs">
          <div className="bg-gray-900 text-white py-2 px-6 rounded-xl w-full max-w-xl shadow-lg overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ×
            </button>
            <div className="bg-white p-3 rounded-md mb-2">
              <img
                src={selectedProject.modalContent.bannerImage}
                alt={selectedProject.title}
                className="w-full h-55 object-cover rounded-md"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Technology Stack</h4>
              <div className="flex space-x-2 mt-2">
                {selectedProject.modalContent.techStack.map((tech, idx) => (
                  <button
                    key={idx}
                    className="btn bg-blue-600 text-white px-2 py-1 rounded"
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Description</h4>
              <p className="text-gray-300">
                {selectedProject.modalContent.description}
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Challenges Faced</h4>
              <ul className="list-disc list-inside text-gray-300">
                {selectedProject.modalContent.challenges.map(
                  (challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  )
                )}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Future Improvements</h4>
              <ul className="list-disc list-inside text-gray-300">
                {selectedProject.modalContent.futureImprovements.map(
                  (improvement, idx) => (
                    <li key={idx}>{improvement}</li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
