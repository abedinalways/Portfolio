import React from 'react';
import { Background } from './Background';
import Text from './Text';
import image from '../assets/profile-pic.png'
const Banner = () => {
  return (
    <div>
      <div className="hero  rounded-xl md:min-h-[500px]">
        <Background
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
        <div className="hero-content flex-col lg:flex-row justify-between gap-10">
          <div className="mr-10">
            <h1 className="text-5xl flex items-center font-bold font-[sora] text-white gap-2">
              Shaping
              <Text
                texts={['Ideas', 'Concepts', 'Code', 'Design']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-purple-200 text-purple-800  overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg "
                staggerFrom={'last'}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h1>
            <h1 className="text-5xl flex items-center font-bold font-[sora] text-white mt-4">
              into Real Projects <br />
            </h1>
            <h1 className="text-5xl flex items-center font-bold font-[sora] text-white mt-4">
              that Deliver Results
            </h1>
            <h2 className="text-md font-bold text-white mt-6 font-[suse]">
              Hi, I’m  <span className=' font-extrabold bg-purple-800 border border-white px-3 py-1 rounded-2xl shadow-2xl'>Sheikh Minhajul Abedin</span>, a developer based in
              Bangladesh with a passion for Creation.
            </h2>
           <button className='btn bg-purple-800 text-white mt-6 w-44 text-center text-2xl font-bold rounded-xl font-[sora]'>Resume</button>
          </div>
          <img src={image} className="max-w-sm rounded-full shadow-2xl ml-10" />
        </div>
      </div>
    </div>
  );
};

export default Banner;