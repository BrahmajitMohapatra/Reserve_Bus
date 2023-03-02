import React, { useState } from "react";
import { Button } from "../ui/Button/Button";
// import "../../styles/Bus-display/buscard.css";
import BusCardLeft from "./BusCardLeft";
import BusSeats from "./BusSeats";
import { useDispatch, useSelector } from "react-redux";
import { select_bus, unavailable_seats } from "../../redux/action";

const BusCard = ({
  busData,
  routeId,
  arrivalTime,
  departureTime,
  destination,
  source,
}) => {
  const [seatDisplay, setseatDisplay] = useState(false);
  const { selectedBus, busDetails } = useSelector((state) => state.reducer);
  const { date } = busDetails;
  const { seats, _id } = busData;
  const bus = {
    routeId,
    arrivalTime,
    departureTime,
    destination,
    source,
  };
  const dispatch = useDispatch();
  const seatDisplayHandler = async () => {
    dispatch(select_bus({ ...busData, seletedSeats: [] }));
    const data = {
      routeId,
      date: date,
      busId: _id,
    };
    const fetchdata = await fetch("https://reservebus.onrender.com/getSeats", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await fetchdata.json();
    if (res.length !== 0) {
      dispatch(unavailable_seats(res, data.busId));
    }
    setseatDisplay(!seatDisplay);
  };
  return (
    <>
      <div className="shadow-md ">
        <div className=" border-stone-500 border-2 mt-3 flex space-x-40 rounded-lg px-6 py-4">
          <BusCardLeft
            data={busData}
            routeId={routeId}
            arrivalTime={arrivalTime}
            departureTime={departureTime}
            destination={destination}
            source={source}
          />
          <div className="bus-card-right">
            <div className="text-center">
              <p className="font-bold">Trip Cost</p>
              <h3 className="font-extralight text-sm">Starts From</h3>
              <p className="font-bold">&#8377; 500</p>
            </div>
            <div className="" onClick={seatDisplayHandler}>
              <Button name={"View Seat"} />
            </div>
          </div>
        </div>
        {seatDisplay && (
          <BusSeats
            seats={seats}
            selectedSeats={selectedBus.seletedSeats}
            selectedBus={{ selectedBus, bus }}
          />
        )}
      </div>
    </>
  );
};

export default BusCard;
