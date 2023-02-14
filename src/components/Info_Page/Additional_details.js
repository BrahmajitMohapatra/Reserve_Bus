import React from "react";
import { Link } from "react-router-dom";


function Additional_details() {
  return (
    <div>
      <div className="flex  mx-4  space-x-24 my-3 drop-shadow-lg">
        <ul className="border-stone-300 border-2 w-2/3 rounded-lg py-2 px-9">
          <li>Intrcity</li>
          <li>A/C Sleeper 2+3 | 2 Seats Left | 1 Window Left</li>
          <li>22:45 ,16 Jan - 07hrs 50min - 06:20, 17 Jan</li>
          <li>22:45 ,16 Jan - 07hrs 50min - 06:20, 17 Jan</li>
        </ul>
        <div className="border-stone-300 border-2 rounded-lg ">
          <h2 className="font-semibold mx-2 my-2">Fare Details</h2>
          <ul className="mx-2">
            <li>
              Base Fare <span className="mx-14 font-semibold">$799</span>
            </li>
            <li>
              Tax <span className="mx-24 font-semibold">$150</span>
            </li>
            <li>
              offer Applied <span className="mx-7 font-semibold">$50</span>
            </li>
            <hr></hr>
            <li>
              Total price<span className="mx-12 font-semibold">$899</span>
            </li>
            <li className="text-center">
              <Link to="/payment"><button className="bg-red-300 px-3 rounded-md my-2 font-semibold py-1">
                Proceed to Payment
              </button></Link>
            </li>
          </ul>
        </div>
      </div>
      <br></br>
      <h1 className="mx-6 font-semibold text-xl">Enter traveller details</h1>
      <br />
      <div>
        <form className="border-gray-200 border-2 w-2/3 rounded-md mx-4 h-44  ">
          <div className="mx-2">
            <h1>
              Passenger1 <span>Seat :01</span>
            </h1><br/>
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              className="border-2 border-gray-300"
            />
            <label for="age" className="mx-4">Age:</label>
            <input
              type="number"
              name="age"
              className="border-2 border-gray-300 "
            />
            <label for="Gender" className="mx-2">Gender:</label>
            <select className="border-2 border-gray-300">
              <option>Male</option>
              <option>Female</option>
              <option>other</option>
            </select>
            <br />
            <br />
            <label for="email">Email:</label>
            <input
              type="email"
              name="email"
              className="border-2 border-gray-300"
            />
            <label for="Mobile" className="mx-4">Mobile No:</label>
            <input
              type="text"
              name="Mobile"
              className="border-2 border-gray-300"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Additional_details;
