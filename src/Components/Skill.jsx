import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';

const Skill = () => {
  return (
    <div className="w-full py-10 font-[sora] px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Title (optional) */}
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          My Skills Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Skill 1 */}
          <motion.div
            className="bg-black text-white p-6 rounded-xl shadow-lg border border-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-col items-center mb-4">
              <span className="text-2xl mb-2">🎨</span>
              <h3 className="font-bold text-lg">HTML & CSS</h3>
              <p className="text-sm text-gray-400 mt-1">April 24</p>
            </div>
            <p className="text-sm text-gray-300 text-center">
              Started my journey with HTML and CSS. Built many design projects
              and learned the basics of web development.
            </p>
          </motion.div>

          {/* Skill 2 */}
          <motion.div
            className="bg-black text-white p-6 rounded-xl shadow-lg border border-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-col items-center mb-4">
              <span className="text-2xl mb-2">🚀</span>
              <h3 className="font-bold text-lg">JavaScript</h3>
              <p className="text-sm text-gray-400 mt-1">July 2024</p>
            </div>
            <p className="text-sm text-gray-300 text-center">
              Discovered my passion for web, started learning JS. My strong
              fundamentals made it easy and fun!
            </p>
          </motion.div>

          {/* Skill 3 */}
          <motion.div
            className="bg-black text-white p-6 rounded-xl shadow-lg border border-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-col items-center mb-4">
              <span className="text-2xl mb-2 text-blue-400">
                <FaReact />
              </span>
              <h3 className="font-bold text-lg">React & MERN</h3>
              <p className="text-sm text-gray-400 mt-1">December 2024</p>
            </div>
            <p className="text-sm text-gray-300 text-center">
              Learned React, joined Programming Hero, and built projects like
              Book Recipes, Tutor Booking Platform, Dragon News, Bistro Boss
              Restaurant.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
