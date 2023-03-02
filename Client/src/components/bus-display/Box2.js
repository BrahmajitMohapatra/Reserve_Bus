import React from "react";

export const Box2 = ({ text, search }) => {
  return (
    <div className="mx-2">
      <p style={{ fontWeight: "800" }}>{text}</p>
      <div className="select-pickup">
        <div className="radio">
          <input type="checkbox" name="" id="" />
        <label htmlFor="">Manali</label>
        </div>
      </div>
      <div className="select-pickup">
        <div className="checkbox">
          <input type="checkbox" name="" id="" />
        <label htmlFor="">Chennai</label>
        </div>
      </div>
      <div className="select-pickup">
        <div className="radio">
          <input type="checkbox" name="" id="" />
        <label htmlFor="">Delhi</label>
        </div>
      </div>
    </div>
  );
};
