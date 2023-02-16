import React from "react";
import { Link } from "react-router-dom";
import { FaBus } from "react-icons/fa";
import logo from "../Images/bus_logo.jpg";
import customerImage from "../Images/customerImage1.jpg";
function Navbar() {

 //
 //
  return (
    <>
      <div className=" -my-1">
        <ul className="flex space-x-8 my-3 mx-6">
          <Link to="/">
            <li className="flex mx-14 text-orange-400 text-xl font-bold ">
              <FaBus className="h-6 w-6" />
              RESERVE
            </li>
          </Link>
          <li className="font-semibold text-lg">Ticket</li>
          <li className="font-semibold text-lg">Contact Us</li>
          {(window.location.href === "http://localhost:3000/")?
          <div className="login flex">
            <button className="bg-orange-300 px-3 rounded-md mx-96">
              <li className="font-semibold text-lg ">Login</li>
            </button>
            <li className="font-semibold text-lg -mx-72">Register</li>
          </div>:
          <div className="flex ">
            <div className="ml-10">
              <p className="font-semibold text-lg mx-80">My profile</p>
              </div>
            </div>
           }
        </ul>
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
    </>
  );
}

export default Navbar;
