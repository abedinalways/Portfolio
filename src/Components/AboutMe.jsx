import React from 'react';

const AboutMe = () => {
  return (
    <div className='flex flex-col justify-center gap-4 items-center font-[Suse] font-extrabold mt-6'>
      <h1 className='bg-purple-600 rounded-xl p-2 text-white'>My Programming Journey</h1>
      <h1 className='text-4xl text-white '>About Me</h1>
      <h1 className='text-4xl text-white mt-8'>Passionate Developer from Bangladesh</h1>
      <p className='text-lg text-white max-w-xl text-center mt-3'>
        Hi! I am Sheikh Minhaul Abedin.
        I am a passionate developer from Bangladesh with a strong interest in
        web development. I have experience in various technologies and enjoy
        building innovative solutions. My journey in programming has been
        exciting, and I am always eager to learn and grow in this field. I enjoy building responsive full-stack applications. Outside of coding, I love reading, playing football, and
        exploring Islamic history.
      </p>
    </div>
  );
};

export default AboutMe;