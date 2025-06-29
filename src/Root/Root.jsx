import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
  return (
    <>
    <div className='relative px-10 bg-gray-600'>
      <Navbar/>
      <Outlet />
    </div>
      <Footer/>
    </>
  );
};

export default Root;