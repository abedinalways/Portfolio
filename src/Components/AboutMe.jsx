import React from 'react';
import { motion } from 'framer-motion';
import star from '../assets/star.json';
import Lottie from 'lottie-react';
const AboutMe = () => {
  return (
    <div
      className="flex flex-col justify-center gap-4 items-center font-[Suse] font-extrabold mt-6"
      id="about"
    >
      <div className="relative text-center mb-8 mt-10 font-[sora]">
        <motion.span
          className="text-xs font-semibold bg-gray-800 text-white  px-3 py-1 rounded-full mb-2 inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          💼My Programming Journey
        </motion.span>
        <motion.h2
          className="text-5xl text-white md:text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          About Me
        </motion.h2>
        <Lottie
          className="absolute top-20"
          animationData={star}
          loop={true}
          autoplay={true}
          style={{ width: '200%', height: '300%' }}
        />
      </div>
      <div className="flex ">
        
        <div>
          <h1 className="text-4xl  text-white mt-8 text-center">
            Passionate Developer from Bangladesh
          </h1>
          <p className="text-lg  text-white max-w-xl text-center mt-3">
            Hi! I am Sheikh Minhaul Abedin. I am a passionate developer from
            Bangladesh with a strong interest in web development. I have
            experience in various technologies and enjoy building innovative
            solutions. My journey in programming has been exciting, and I am
            always eager to learn and grow in this field. I enjoy building
            responsive full-stack applications. Outside of coding, I love
            reading, playing football, and exploring Islamic history.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;