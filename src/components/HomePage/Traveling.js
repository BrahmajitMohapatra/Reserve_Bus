import React from "react";
import  "../../Styles/Homepage/traveling.css";
import { Link } from "react-router-dom";

export const Traveling = () => {
  return(
    <div>
      <div className="main-container">
        <div className="mx-80  ">
          <form className="">
        <select className="px-10 py-4 my-44">
          <option disabled selected>From</option>
          <option>Hyderabad</option>
          <option>delhi</option>
          <option>Kolkata</option>
          <option>Kerala</option>
        </select>
        <select className="px-10 py-4 ">
          <option disabled selected>To</option>
          <option>Hyderabad</option>
          <option>delhi</option>
          <option>Kolkata</option>
          <option>Kerala</option>
        </select>
      <input type="date" className="px-10 py-3"></input>
      <div className="button">
      <Link to="/available_bus"><button className="btn ">Search</button></Link>
      </div>
      </form>
      </div>
    </div>
    </div>
  )
};

export default Traveling



