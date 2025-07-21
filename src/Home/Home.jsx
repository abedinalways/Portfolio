import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import Skill from '../Components/Skill';
import BeyondCoding from '../Components/BeyondCoding';
import ProjectCard from '../Components/ProjectCard';
import MySkills from '../Components/MySkills';
import Experience from '../Components/Experience';
import Education from '../Components/Education';
import Contact from '../Components/Contact';

const Home = () => {
  
  return (
    <div>
      <Banner />
      <AboutMe />
      <Skill/>
      <BeyondCoding />
      <ProjectCard />
      <MySkills />
      
      <Education />
      <Contact/>
    </div>
  );
};

export default Home;