import { motion } from 'framer-motion';

const BeyondCoding = () => {
  return (
    <div className="font-[sora]  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <motion.div
          className="text-white w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Beyond Programming
          </h2>
          <p className="text-sm md:text-md mb-6">
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
          <p className="text-sm md:text-md mb-6">
            I believe in continuous learning and staying updated with the latest
            trends in web development. My goal is to create applications that
            not only work flawlessly but also provide exceptional user
            experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div
              className="btn bg-blue-700 hover:bg-blue-600 text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Problem Solver
            </motion.div>
            <motion.div
              className="btn bg-purple-700 hover:bg-purple-600 text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Team Player
            </motion.div>
            <motion.div
              className="btn bg-green-700 hover:bg-green-600 text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Fast Learner
            </motion.div>
            <motion.div
              className="btn bg-brown-700 hover:bg-brown-600 text-red-400"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Detail Oriented
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full lg:w-1/2 bg-gray-800 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-10">
            What I Enjoy
          </h3>
          <ul className="space-y-4">
            <motion.li
              className="flex items-center text-gray-300 hover:text-white transition-colors"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <span className="text-2xl mr-3">💻</span> Building responsive web
              applications
            </motion.li>
            <motion.li
              className="flex items-center text-gray-300 hover:text-white transition-colors"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <span className="text-2xl mr-3">🎨</span> Creating beautiful user
              interfaces
            </motion.li>
            <motion.li
              className="flex items-center text-gray-300 hover:text-white transition-colors"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <span className="text-2xl mr-3">🚀</span> Learning new
              technologies
            </motion.li>
            <motion.li
              className="flex items-center text-gray-300 hover:text-white transition-colors"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <span className="text-2xl mr-3">🤝</span> Collaborating with other
              developers
            </motion.li>
            <motion.li
              className="flex items-center text-gray-300 hover:text-white transition-colors"
              whileHover={{ x: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <span className="text-2xl mr-3">📖</span> Reading tech blogs and
              documentation
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default BeyondCoding;
