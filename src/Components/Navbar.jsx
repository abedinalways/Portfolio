import React from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
const Navbar = () => {
  
  
  const dropdownItems = (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        <IoIosArrowDropdownCircle />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <Link
          to="project"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer mx-4 font-semibold text-black hover:text-purple-600 transition"
        >
          Project
        </Link>
        <Link
          to="skill"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer mx-4 font-semibold text-black hover:text-purple-600 transition"
        >
          Skill
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer mx-4 font-semibold text-black hover:text-purple-600 transition"
        >
          About Me
        </Link>
        <Link
          to="education"
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer mx-4 font-semibold text-black hover:text-purple-600 transition"
        >
          Education
        </Link>
      </ul>
    </div>
  );
  return (
    <>
      <div className="navbar bg-gray-200 font-[Suse] font-bold mx-auto  sticky top-0 z-100 shadow-xl rounded-xl flex  items-center mb-4">
        <div className="navbar-start">
          <div className='flex items-center gap-4'>
            <div className="md:hidden flex">{dropdownItems}</div>
            <div className="flex items-center">
              <img src={logo} alt="" className="w-8 h-8" />
              <h1 className="font-[sora] font-bold text-2xl text-purple-800">
                Abedin.
              </h1>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <div className=" flex justify-center items-center md:gap-2 lg:gap-6 text-lg">
            <Link
              to="project"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer mx-4 font-semibold text-black hover:text-purple-600 transition"
            >
              Project
            </Link>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer mx-4 font-semibold text-black hover:text-purple-600 transition"
            >
              Skill
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer mx-4 font-semibold text-black hover:text-purple-600 transition"
            >
              About Me
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer mx-4 font-semibold text-black hover:text-purple-600 transition"
            >
              Education
            </Link>
          </div>
        </div>
        <div className="navbar-end hidden md:flex">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="cursor-pointer"
          >
            <button className="btn bg-purple-800 text-white w-35 text-center text-md font-bold rounded-xl font-[sora]">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;