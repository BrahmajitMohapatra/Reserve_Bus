import React from "react";
import { Button } from "../ui/Button/Button";

const FareDetails = ({ price, onSubmitHandler }) => {
  return (
    <div className=" border-solid border-2 py-6 px-2 drop-shadow-lg">
      <div className="travel-details-heading" style={{ margin: 0 }}>
        <h3 className="font-bold text-lg">Fare Details</h3>
      </div>
      <div className="fare-detail-container">
        <div className="flex justify-around font-semibold ">
          <h4 className=" ">Base Fare</h4>
          <span className="fare-amt">{price}</span>
        </div>
        <br/>
        <div className="flex justify-around font-semibold">
          <h4 className="fare-detail-content">Tax</h4>
          <span className="fare-amt">0</span>
        </div>
        <br/>
      </div>
      <div className="flex justify-around font-semibold">
        <h3 className="fare-detail-content">Total Price</h3>
        <span
          className="fare-amt"
          style={{ fontSize: "20px", fontWeight: "600" }}
        >
          {price}
        </span>
      </div>
      <div className="" onClick={onSubmitHandler}>
        <Button name={"Proceed To Payment"} />
      </div>
    </div>
  );
};

export default FareDetails;
