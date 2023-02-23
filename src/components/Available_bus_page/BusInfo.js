import React, { useState } from "react";
import ViewSeats from "./ViewSeats";
import data from "../../Data.json";

function BusInfo() {
  //for displaying and hidding the seats component
  const [Show, setShow] = useState(false);
  return (
    <div className="drop-shadow-lg">
      {/* <div > */}
      {data.map((data) => {
        return (
          <div>
            {data.BusDetails.map((bus) => {
              return (
                <div className="flex  mx-4 -my-1 space-x-96 border-stone-300 border-2 rounded-lg py-2 px-9 ">
                  <div>
                    <ul>
                      <li className="text-lg font-semibold">
                        {bus.name} <span className="mx-2">&#9733;</span>
                        {bus.rating}
                      </li>
                      <li className="font-light">
                        {bus.type} | 2 Seats Left | 1 Window Left
                      </li>
                      <li className="my-1 font-semibold">
                        {bus.arrTime} ,{bus.arrDate} ---- {bus.duration} --- {bus.depTime}, {bus.depDate}
                      </li>
                    </ul>
                    <br />
                    <div className="flex gap-2 my-1 text-blue-400">
                      <p>Live tracking</p>
                      <p>policies</p>
                      <p>photos</p>
                      <p>Amenities</p>
                      <p>Reviews</p>
                    </div>
                  </div>

                  <div className=" w-36">
                    <ul className="text-center">
                      <li className="font-semibold my-1">Trip cost</li>
                      <li className="font-light text-xs">Starting from</li>
                      <li className="my-2 font-semibold">
                        <span>&#8377;</span>{bus.price}
                      </li>
                      <li>
                        <button
                          className="bg-red-400 mx-3 px-4 py-1 rounded-md "
                          onClick={() => setShow(!Show)}
                        >
                          view seats
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
            <div>{Show ? <ViewSeats /> : null}</div>
          </div>
        );
      })}
    </div>
  );
}

export default BusInfo;
