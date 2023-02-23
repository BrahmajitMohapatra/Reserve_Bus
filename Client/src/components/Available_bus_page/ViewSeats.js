import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../Data.json";
import { BiCheckbox } from "react-icons/bi";
function ViewSeats() {
  //change seat color on selection
  const [seatColor, setSeatColor] = useState("bg-white");
  const handleClick = (event) => {
    const target = event.target;
    const currentColor = seatColor[target.id];
    if (currentColor === "bg-white") {
      setSeatColor({ ...seatColor, [target.id]: "" });
    } else {
      setSeatColor({ ...seatColor, [target.id]: "bg-white" });
    }
  };
  return (
    <div className="mx-6">
      <p>Select Seats</p>
      <form className="my-4">
        <label>Seat price</label>
        <input type="radio" name="price" value="" className="mx-4" />
        <label for="price">All</label>
        <input type="radio" name="price" value="" className="mx-4" />
        <label for="price">899</label>
        <input type="radio" name="price" value="" className="mx-4" />
        <label for="price">1200</label>
        <input type="radio" name="price" value="" className="mx-4" />
        <label for="price">2000</label>
      </form>
      <div className="flex space-x-24">
        <div>
          <div className="border-gray-500 border-2 w-96 h-28 bg-neutral-400 rounded-lg">
            <div className="flex space-x-4 mx-8">
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat1"]} `}
                id="seat1"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat2"]}`}
                id="seat2"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat44"]}`}
                id="seat44"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat3"]}`}
                id="seat3"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat4"]}`}
                id="seat4"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat5"]}`}
                id="seat5"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat6"]}`}
                id="seat6"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat7"]}`}
                id="seat7"
                onClick={handleClick}
              />
            </div>
            <div className="flex space-x-4 mx-8">
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat8"]}`}
                id="seat8"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat9"]}`}
                id="seat9"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat10"]}`}
                id="seat10"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat11"]}`}
                id="seat11"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat12"]}`}
                id="seat12"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat13"]}`}
                id="seat13"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat14"]}`}
                id="seat14"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat15"]}`}
                id="seat15"
                onClick={handleClick}
              />
            </div>
            <div className="flex space-x-4 mx-20 my-9 ">
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat16"]}`}
                id="seat16"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat17"]}`}
                id="seat17"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat18"]}`}
                id="seat18"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat19"]}`}
                id="seat19"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat20"]}`}
                id="seat20"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat21"]}`}
                id="seat21"
                onClick={handleClick}
              />
            </div>
          </div>
          <br />
          <div className="border-gray-500 border-2 w-96 h-28 bg-neutral-400 rounded-lg">
            <div className="flex space-x-4 mx-8">
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat22"]} `}
                id="seat22"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat23"]}`}
                id="seat23"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat24"]}`}
                id="seat24"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat25"]}`}
                id="seat25"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat26"]}`}
                id="seat26"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat27"]}`}
                id="seat27"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat28"]}`}
                id="seat28"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat29"]}`}
                id="seat29"
                onClick={handleClick}
              />
            </div>
            <div className="flex space-x-4 mx-8 ">
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat30"]}`}
                id="seat30"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat31"]}`}
                id="seat31"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat32"]}`}
                id="seat32"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat33"]}`}
                id="seat33"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat34"]}`}
                id="seat34"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat35"]}`}
                id="seat35"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat36"]}`}
                id="seat36"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat37"]}`}
                id="seat37"
                onClick={handleClick}
              />
            </div>
            <div className="flex space-x-4 mx-20 my-9 ">
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat38"]}`}
                id="seat38"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat39"]}`}
                id="seat39"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat40"]}`}
                id="seat40"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat41"]}`}
                id="seat41"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat42"]}`}
                id="seat42"
                onClick={handleClick}
              />
              <BiCheckbox
                className={`w-14 h-6 rounded-sm ${seatColor["seat43"]}`}
                id="seat43"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="border-gray-500 border-2 h-auto w-auto px-2 rounded-lg">
            <p className="font-semibold text-lg">Boarding and dropping</p>
            {data && data.map((data) => {
              return (
                <div>
                  {data.BusDetails && data.BusDetails.map((fares) => {
                    return (
                      <div className="flex space-x-12 ">
                        <div className="font-semibold my-2">
                          <p>{fares.arrLocation}</p>
                          <p className="font-extralight text-sm">
                            {fares.arrPoint}
                          </p>
                          <p>{fares.depLocation}</p>
                          <p className="font-extralight text-sm">
                            {fares.depPoint}
                          </p>
                          <br />
                          <hr />
                          <p>Seat No.</p>
                          <hr />
                          <p>Fare details</p>
                          <p className="font-extralight text-sm">
                            amount with tax
                          </p>
                        </div>
                        <div className="my-2 ">
                          <p>{fares.depTime}</p>
                          <br></br>
                          <p>{fares.arrTime}</p>
                          <br />
                          <br />
                          <p className="-my-2">7</p>
                          <br />
                          <p>INR 750</p>
                        </div>
                      </div>
                    );
                  })}
                        <Link to="/infoPage">
                          <button className="text-center bg-red-400 mx-7 my-2 px-2 py-1 font-medium  rounded-md">
                            Proceed to Book
                          </button>
                        </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSeats;
