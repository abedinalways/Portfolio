import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Frontend Developer',
    date: 'present',
    icon: 'react-native',
    rating: 5,
    feedback:
      'Excels in building modern, responsive interfaces. Continuously learning and applying the latest frontend technologies to deliver high-performing and visually appealing user experiences.',
    responsibilities: [
      'Developed responsive and modern user interfaces using React.js, JavaScript, and Tailwind CSS with a focus on user experience and performance optimization.',
      'Implemented advanced frontend features including state management, authentication systems, and smooth animations to enhance user engagement.',
      'Collaborated with design communities and continuously learned new technologies to stay updated with the latest frontend development trends and best practices.',
      'Built multiple portfolio projects showcasing expertise in modern web development, responsive design, and interactive user interfaces.',
    ],
  },
  {
    role: 'MERN Stack Developer',
    date: 'present',
    icon: 'mongodb',
    rating: 5,
    feedback:
      'Demonstrates strong full-stack capabilities with expertise in MERN technologies, authentication, state management, and best coding practices.',
    responsibilities: [
      'Built complete full-stack web applications using MongoDB, Express.js, React.js, and Node.js with RESTful API integration and database management.',
      'Implemented secure authentication and authorization systems using JWT tokens and Firebase Auth for user management and data protection.',
      'Designed and developed responsive user interfaces with modern UI/UX principles, ensuring cross-browser compatibility and mobile-first design.',
      'Managed application state efficiently using React Context API and Redux, implementing complex data flows between frontend and backend components.',
      'Continuously improved code quality and project structure by following industry best practices, code reviews, and performance optimization techniques.',
    ],
  },
  {
    role: 'C++ Learner',
    date: 'Aug 2023 - April 2024',
    icon: 'c-plus-plus-logo',
    rating: 5,
    feedback:
      "Abedin's C++ programming skills are outstanding. He solved numerous complex algorithmic problems and demonstrated strong logical thinking and problem-solving abilities. His foundation in C++ has greatly enhanced his overall programming expertise.",
    responsibilities: [
      'Solved 200+ algorithmic problems and coding challenges using C++, developing strong problem-solving and logical thinking skills.',
      'Implemented complex data structures (arrays, linked lists, trees, graphs) and algorithms (sorting, searching, dynamic programming) efficiently.',
      'Developed system-level applications focusing on memory management, performance optimization, and efficient code execution.',
      'Enhanced understanding of fundamental programming concepts including pointers, memory allocation, and object-oriented programming principles.',
      'Built a solid foundation in programming logic and computational thinking that has been invaluable for web development and software engineering.',
    ],
  },
];

const Experience = () => {
  return (
    <>
      <div className="text-center mb-8 mt-10 font-[sora]">
        <motion.span
          className="text-xs font-semibold bg-gray-800 text-white  px-3 py-1 rounded-full mb-2 inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          💼My Career Overview
        </motion.span>
        <motion.h2
          className="text-5xl text-white md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Professional Work Experience
        </motion.h2>
      </div>
      <section className=" text-white py-16 px-4 md:px-10 space-y-20">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Left Card */}
            <motion.div
              className="bg-[#111] p-8 rounded-xl shadow-md border border-gray-800"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-xl mb-4">{'⭐'.repeat(exp.rating)}</div>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                {exp.feedback}
              </p>
              <img
                src={`https://img.icons8.com/color/96/${exp.icon}.png`}
                alt={exp.role}
                className="w-12 h-12"
              />
            </motion.div>

            {/* Right Timeline */}
            <motion.div
              className="relative pl-10 border-l-4 border-purple-600"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-6 top-0 bg-purple-900 w-12 h-12 flex items-center justify-center rounded-full">
                <img
                  src={`https://img.icons8.com/color/48/${exp.icon}.png`}
                  alt={exp.role}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-sm text-gray-400 mb-4">📅 {exp.date}</p>
              <h4 className="italic text-gray-400 mb-2">Responsibilities</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Experience;
