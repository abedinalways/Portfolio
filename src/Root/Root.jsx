import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const Root = () => {
  return (
    <div className='relative px-10 bg-gray-600'>
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default Root;