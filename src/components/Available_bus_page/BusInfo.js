import React, { useState } from "react";
import ViewSeats from "./ViewSeats";

function BusInfo() {
  //for displaying and hidding the seats component
  const [Show, setShow] = useState(false);
  return (
    <div className="drop-shadow-lg">
      <div className="flex  mx-4 -my-1 space-x-96 border-stone-300 border-2 rounded-lg py-2 px-9 ">
        <div>
          <ul>
            <li className="text-lg font-semibold">Intrcity <span className="mx-2">&#9733;</span>4.5 Rating</li>
            <li className="font-light">A/C Sleeper 2+3 | 2 Seats Left | 1 Window Left</li>
            <li className="my-1">22:45 ,16 Jan - 07hrs 50min - 06:20, 17 Jan</li>
          </ul><br/>
          <div className="flex gap-3 my-1 text-blue-400">
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
            <li className="my-2 font-semibold"><span>&#8377;</span>899</li>
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
      <div>{Show ? <ViewSeats /> : null}</div>
    </div>
  );
}

export default BusInfo;
