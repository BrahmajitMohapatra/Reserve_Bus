import React from "react";
import card1 from "../../Images/card1.webp";
import card2 from "../../Images/card2.png";
import card3 from "../../Images/card3.webp";

function Achievments() {
  return (
    <div className="drop-shadow-xl ">
      <h1 className="text-center text-3xl font-extrabold my-3">
        Travel With World Largest Bus
      </h1>
      <div className="cards flex space-x-32 mx-44">
        <div className="card1   border-solid border-2 border-gray-300 rounded-lg ">
          <img src={card1} alt="buses" className="h-40 w-56 " />
          <p className="text-center font-bold">2000+</p>
          <p className="text-center font-mono">Bus collections</p>
        </div>
        <div className="card2  border-solid border-2 border-gray-300 rounded-lg">
          <img src={card2} alt="customers" className="h-48 w-60" />
          <p className="text-center font-bold">20 Million</p>
          <p className="text-center font-mono">Happy Customers Globally</p>
        </div>
        <div className="card3  border-solid border-2 border-gray-300 rounded-lg">
          <img src={card3} alt="tickets" className="h-48 w-56 " />
          <p className="text-center font-bold">5000+</p>
          <p className="text-center font-mono">Ticket Booking Everyday</p>
        </div>
      </div>
      <div className="my-12">
      <p className="text-center text-2xl font-extrabold ">Here's what a few of our customers</p>
       <p className="text-center text-2xl font-extrabold">have to say About us</p>
       </div>
    </div>
  );
}

export default Achievments;
