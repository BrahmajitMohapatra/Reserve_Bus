import React, { useState } from "react";
import "../../../Styles/Homepage/SearchBus.css";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "./data";
import SearchOutput from "./SearchOutput";
import SearchTime from "./SearchTime";
import { bus_Details, bus_Information } from "../../../redux/action"

export const SearchBus = () => {
  const [details, setdetails] = useState({
    to: "",
    from: "",
    date: new Date(),
  });
  const [error, seterror] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sourceCity = routes.map((el, i) => {
    return {
      source: el.source,
    };
  });
  const destinationCity = routes
    .filter((el, i) => {
      return el.source === details.to;
    })
    .map((el, i) => {
      return {
        source: el.destination,
      };
    });
  const detailsHandler = (val, x) => {
    setdetails((prev) => {
      return {
        ...prev,
        [x]: val,
      };
    });
  };
  const getDateHandler = (val) => {
    setdetails((prev) => {
      return {
        ...prev,
        date: val,
      };
    });
  };
  const searchBusHandler = async () => {
    const fetchdata = await fetch(
      "https://reservebus.onrender.com/getDetails",
      {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await fetchdata.json();
    if (res.error) {
      seterror(true);
      seterrorMessage(res.message);
      return;
    } else {
      dispatch(bus_Information(res));
      dispatch(bus_Details(details));
      navigate("/bus-display");
    }
  };
  return (
    <div className="main-container">
      <div className="search-inputs">
        <div className="input-container">
          <SearchOutput
            where={"to"}
            cityName={details.to}
            getDetails={detailsHandler}
            cityData={sourceCity}
          />
          <SearchOutput
            where={"from"}
            cityName={details.from}
            getDetails={detailsHandler}
            cityData={destinationCity}
          />
          <SearchTime getDateHandler={getDateHandler} />
        </div>
        <div className="submit-search-input">

         {/* <Link to="/available_bus"> <button className="ui-btn">Search</button></Link> */}
        
          <button className="ui-btn" onClick={searchBusHandler}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBus;
