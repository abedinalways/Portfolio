import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import Skill from '../Components/Skill';
import BeyondCoding from '../Components/BeyondCoding';

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Skill />
      <BeyondCoding/>
    </div>
  );
};

export default Home;