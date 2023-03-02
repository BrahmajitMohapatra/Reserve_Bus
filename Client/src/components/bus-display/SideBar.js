import React from "react";
import Box from "./Box";
import { Box2 } from "./Box2";

const SideBar = () => {
  return (
    <div className="ml-9 w-56 h-auto">
      <div className="flex  border-stone-400 border-2 font-bold  mt-3 py-1 px-1 rounded-md ">
        <h3>Filter</h3>
        <h3 className="ml-[68px]">Clear All</h3>
      </div>
      
      <div className="border-stone-400 border-2 mt-1 px-3 rounded-md">
        <Box
          name={"Departure Time"}
          text={"Morning Session"}
          text2={"Afternoon Session"}
          text3={"Evening Session"}
        />
        <Box
          name={"Arrival Time"}
          text={"Morning Session"}
          text2={"Afternoon Session"}
          text3={"Evening Session"}
        />
        <Box2 text={"Pickup Point"} search={true} />
        <Box2 text={"Drop Point"} />
        <Box
          name={"Bus Rating"}
          text={"4 star or more"}
          text2={"3 star or more"}
          text3={"0-2 star"}
        />
        <Box
          name={"Bus Operator"}
          text={"Zing Bus"}
          text2={"Intercity Smart"}
          text3={"Safar Exp"}
          search={true}
        />
      </div>
    </div>
  );
};

export default SideBar;
