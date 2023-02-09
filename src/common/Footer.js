import React from "react";
import { FaBus } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
function Footer() {
  return (
    <div className="bg-gray-300  ">
      <div className="flex space-x-36 my-5">
        <ul className="mx-20">
          <div className="flex ">
            <FaBus className="text-orange-500 my-1 " />
            <li className="text-orange-500 font-bold">RESERVE</li>
          </div>
          <li>When you have a choice ,choose reserve</li>
          <br/>
          <li>reserve offers bus tickets through its website,<br></br>ios and android mobile apps for all mojnaor cities</li>
          <br></br>
          <li>reserve.bus@reserve.com</li>
        </ul>
        <ul>
          <li className="font-semibold">About</li>
          <li>About us</li>
          <li>contact us</li>
        </ul>
        <ul>
          <li className="font-semibold">Useful Links</li>
          <li>Careers</li>
          <li>Faqs</li>
          <li>T&C</li>
          <li>Privacy policy</li>
        </ul>
        <ul>
          <li className="font-semibold">Follow us</li>
          <div className="flex space-x-5 ">
                <FiFacebook/>
                <FiInstagram/>
          </div>
          
        </ul>
      </div>
      <hr/>
      <div className="text-center ">All Rights Are Reserved-2023</div>
    </div>
  );
}

export default Footer;
