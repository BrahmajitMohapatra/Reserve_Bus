import React from "react";

const BusCardLeft = ({
  data,
  routeId,
  arrivalTime,
  departureTime,
  destinaton,
  source,
}) => {
  const { _id, busName, fare, seats, type } = data;
  return (
    <>
      <div className="bus-card-left">
        <div className="bus-card-heading">
          <div className="flex space-x-4 font-bold text-xl">
            <h2 className="">{busName}</h2>
            <div className="bus-card-rating">4.8</div>
            
          </div>
          <div className=" font-semibold">
            <h3>{type}</h3>
          </div>
        </div>
        <div className="font-semibold">
          <h3>
            <span className="bus-destination">{departureTime} </span>
            <span style={{ fontSize: "14px" }}>
              ---- {""} Hrs {} Min's ----{" "}
            </span>
            <span className="bus-destination">{arrivalTime} </span>
          </h3>
        </div>
        <div className="bus-actions">
          <h4 className="text-blue-500 flex space-x-2">
            <p>Live tracking</p>
            <p>Policies</p>
            <p>Amenities</p>
            <p>Bus Phots</p>
            <p>Booking Policies</p>
            <p>Review</p>
            <p>Rest Stop</p>
          </h4>
        </div>
      </div>
    </>
  );
};

export default BusCardLeft;
