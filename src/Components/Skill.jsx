import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';

const Skill = () => {
  
  return (
    <div
      className="relative w-full overflow-x-auto py-10 font-[sora]"
      id="skills"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-center justify-start space-x-6 px-4">
        {/* Timeline Line */}
        <div className="hidden lg:absolute left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 top-1/2 transform -translate-y-1/2 z-0"></div>

        {/* Skill 1 */}
        <motion.div
          className="relative bg-teal-900 h-60 w-70  text-center text-xl font-bold text-white p-4 rounded-xl shadow-lg min-w-[200px] z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <div className="flex flex-col justify-center items-center space-x-2">
            <span className="text-2xl">🎨</span>
            <h3 className="font-bold text-lg">HTML & CSS</h3>
          </div>
          <p className="text-sm text-gray-200 mt-2">April 2023</p>
          <p className="text-sm mt-1">
            Started my journey with HTML and CSS. Built many design projects and
            learned the basics of web development.
          </p>
        </motion.div>

        {/* Skill 2 */}
        <motion.div
          className="relative  h-60 w-70  text-center text-xl font-bold  bg-purple-900 text-white p-4 rounded-xl shadow-lg min-w-[200px] z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <div className="flex flex-col justify-center items-center space-x-2">
            <span className="text-2xl">⚙️</span>
            <h3 className="font-bold text-lg">C/C++</h3>
          </div>
          <p className="text-sm text-gray-200 mt-2">Aug 2023 - Apr 2024</p>
          <p className="text-sm mt-1">
            Spent 8 months learning C/C++ and solving fundamental problems,
            which gave me strong programming logic.
          </p>
        </motion.div>

        {/* Skill 3 */}
        <motion.div
          className="relative bg-brown-900  h-60 w-70   text-center text-xl font-bold text-white bg-yellow-900 p-4 rounded-xl shadow-lg min-w-[200px] z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <div className="flex flex-col justify-center items-center space-x-2">
            <span className="text-2xl">🚀</span>
            <h3 className="font-bold text-lg">JavaScript</h3>
          </div>
          <p className="text-sm text-gray-200 mt-2">April 2024</p>
          <p className="text-sm mt-1">
            Discovered my passion for web, started learning JS. My strong
            fundamentals made it easy and fun!
          </p>
        </motion.div>

        {/* Skill 4 */}
        <motion.div
          className="relative bg-blue-600  h-60 w-70   text-center text-xl font-bold text-white p-4 rounded-xl shadow-lg min-w-[200px] z-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        >
          <div className="flex flex-col justify-center items-center space-x-2">
            <span className="text-2xl text-red-400 font-bold">
              <FaReact />
            </span>
            <h3 className="font-bold text-lg">React & MERN</h3>
          </div>
          <p className="text-sm text-gray-200 mt-2">2024</p>
          <p className="text-sm mt-1">
            Learned React, joined Programming Hero, and built projects like Book
            Recipes and Tutor Booking Platform.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Skill;
