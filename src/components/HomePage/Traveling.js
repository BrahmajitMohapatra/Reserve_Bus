import React, { useEffect, useState } from "react";
import "../../Styles/Homepage/traveling.css";
import { Link } from "react-router-dom";

const city = [
  "Amaravathi",
  "Bangalore",
  "chadigarh",
  "Chennai",
  "Delhi",
  "Gurugram",
  "Hyderabad",
  "Jaipur",
  "kargil",
  "Kolkata",
  "Lucknow",
  "maharastra",
  "pune",
  "Surat",
  "Thiruvanthapuram",
];
export const Traveling = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [cities, setCities] = useState(city);

  useEffect(() => {
    if (departure) {
      setCities(cities.filter((city) => city !== departure));
    } else {
      setCities(city);
    }
    //eslint-disable-next-line
  }, [departure]);

  return (
    <div>
      <div className="main-container">
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center h-[55vh]  ">
            <label className="border-2 h-16 text-gray-400 pr-2 font-semibold  text-lg pl-2 bg-white">
              From
              <div>
                <input
                  type="search"
                  name="departure"
                  className="text-gray-800 "
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  list="city"
                />
                <datalist id="city">
                  {cities.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
              </div>
            </label>
            <label className="border-2 h-16 text-gray-400 font-semibold text-lg pl-2 bg-white">
              To
              <div>
                <input
                  type="search"
                  name="arrival"
                  className="text-gray-800 "
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  list="city"
                />
                <datalist id="city">
                  {cities.map((city) => (
                    <option key={city} value={city} />
                  ))}
                </datalist>
              </div>
            </label>
            <label className="border-2 text-lg pl-2 h-16 text-gray-400  font-semibold  bg-white">
              Travel Date
              <div className="text-gray-800">
                <input type="date" className=" " />
              </div>
            </label>
          </div>
        </div>
        <div className="button">
      <Link to="/available_bus"><button className="btn ">Search</button></Link>
      </div>
      </div>
    </div>
  );
};
export default Traveling;
