import React from "react";
import { Link } from "react-router-dom";
import { FaBus } from "react-icons/fa";

function Navbar() {

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
          <div>
            <div className="ml-[580px] flex space-x-2">
              <p className="font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono h-[32px] w-[32px] text-xl bg-[orange] ">E</p>
              <p className="font-semibold text-lg ">My profile</p>
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
