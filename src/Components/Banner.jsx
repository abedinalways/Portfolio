import React from 'react';
import { Background } from './Background';
import Text from './Text';
import { FaDownload } from 'react-icons/fa';
import img from '../assets/profile-pic.png'
const Banner = () => {
  return (
    <div>
      <div className="hero  rounded-xl md:min-h-[500px]">
        <Background
          speed={0.4}
          squareSize={40}
          direction="diagonal"
          borderColor="#00000"
          hoverFillColor="#222"
        />
        <div className="hero-content flex-col lg:flex-row justify-between md:gap-10 mx-auto">
          <div className="mr-10">
            <h1 className="md:text-5xl text-2xl flex items-center font-bold font-[sora] text-white gap-2">
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
            <h1 className="md:text-5xl text-2xl flex items-center font-bold font-[sora] text-white mt-4">
              into Real Projects <br />
            </h1>
            <h1 className="md:text-5xl text-2xl flex items-center font-bold font-[sora] text-white mt-4">
              that Deliver Results
            </h1>
            <h2 className="md:text-md font-bold text-white mt-6 font-[suse]">
              Hi, I’m{' '}
              <span className=" font-extrabold bg-purple-800 border border-white px-3 py-1 rounded-2xl shadow-2xl">
                Sheikh Minhajul Abedin
              </span>
              , a developer based in Bangladesh with a passion for Creation.
            </h2>
            <a
              href="/Sheikh Minhajul Abedin.pdf"
              download="Sheikh_Minhajul_Abedin_Resume.pdf"
              className="btn bg-purple-800 text-white mt-6 w-44 text-center text-2xl font-bold rounded-xl font-[sora] flex items-center justify-center"
            >
              Resume
              <FaDownload className="ml-2" />
            </a>
            <div className="flex gap-2 mt-3 items-center">
              <a href="https://github.com/abedinalways" target="_">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/github--v1.png"
                  alt="github--v1"
                />
              </a>
              <a href="https://www.linkedin.com/in/sheikh-minhajul-abedin-bb51162a4/">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href="https://www.facebook.com/Abedin.always">
              
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/facebook-new.png"
                alt="facebook-new"
              />
              </a>
            
            </div>
          </div>
          <img src={img} alt="" className="w-sm rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;