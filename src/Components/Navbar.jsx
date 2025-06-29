import React from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { Link, useNavigate } from 'react-router';
import logo from '../assets/logo.png';
const Navbar = () => {
  const navigate = useNavigate();
  const handleSkill = () => {
    navigate('/skill')
  }
  const dropdownItems = (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        <IoIosArrowDropdownCircle />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
  return (
    <>
      <div className="navbar bg-gray-200 font-[Suse] font-bold mx-auto  sticky top-0 z-100 shadow-xl rounded-xl flex  items-center mb-4">
        <div className="navbar-start">
          <div>
            <div className="md:hidden flex">{dropdownItems}</div>
            <div className="flex items-center">
              <img src={logo} alt="" className="w-8 h-8" />
              <h1 className="font-[sora] font-bold text-2xl text-purple-800">
                Abedin.
              </h1>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <div className=" flex justify-center items-center gap-6 text-lg">
            <Link>Projects</Link>
            <Link onClick={handleSkill()}>Skills</Link>
            <Link>Education</Link>
            <Link>About Me</Link>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn bg-purple-800 text-white w-44 text-center text-md font-bold rounded-xl font-[sora]">
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;