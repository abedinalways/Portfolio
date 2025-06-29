import React, { useRef } from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import AboutMe from '../Components/AboutMe';
import Skill from '../Components/Skill';
import BeyondCoding from '../Components/BeyondCoding';
import ProjectCard from '../Components/ProjectCard';

const Home = () => {
  const scrollRef = useRef(null);
  const scrollToSkill = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
      <Banner />
      <AboutMe />
      <Skill/>
      <BeyondCoding />
      <ProjectCard/>
    </div>
  );
};

export default Home;