import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Images/bus_logo.jpg"
function Navbar() {
  return (
    <>
    <div className=''>
        <ul className='flex space-x-8 my-3'>
           <Link to="/"> <li className='flex mx-14 text-orange-400 text-xl font-bold '><img src={logo} className="h-12 w-12 -my-2" alt="bus-logo"/>RESERVE</li></Link>
            <li className='font-semibold text-lg'>Ticket</li>
            <li className='font-semibold text-lg'>Contact Us</li>
        </ul>
        <hr />
        <hr/>     
        <hr/>     
        <hr/>     
    </div>
    </>
  )
}

export default Navbar