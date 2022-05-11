import React from 'react'
import Navbar from './Navbar';
import Fireflies from './Fireflies';
import { Outlet } from 'react-router-dom';


function Main() {
  return (
    <>
    <Fireflies />
    <Navbar />

    {/* Conditoinally rendered element */}
    
    <Outlet />
    </>
  )
}

export default Main