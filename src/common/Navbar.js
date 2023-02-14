import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/bus_logo.jpg";
function Navbar() {
  return (
    <>
      <div className="">
        <ul className="flex space-x-8 my-3 mx-6">
          <Link to="/">
            <li className="flex mx-14 text-orange-400 text-xl font-bold ">
              <img src={logo} className="h-12 w-12 -my-2" alt="bus-logo" />
              RESERVE
            </li>
          </Link>
          <li className="font-semibold text-lg">Ticket</li>
          <li className="font-semibold text-lg">Contact Us</li>
          <div className="login flex">
            <button className="bg-orange-300 px-3 rounded-md mx-96">
              <li className="font-semibold text-lg ">Login</li>
            </button>
            <li className="font-semibold text-lg -mx-72">Register</li>
          </div>
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
