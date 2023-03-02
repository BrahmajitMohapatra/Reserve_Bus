import React from "react";

const InputContainer = ({ nameRef, genderRef, age, emailRef, mobileRef }) => {
  return (
    <>
      <div className=" border-solid border-2 h-auto w-[60vw] drop-shadow-lg rounded-md bg-indigo-100">
        <div className="travel-details-container ">
          <div className="font-bold text-lg px-2">Enter Traveller Details</div>
        </div>
        <div className="travel-details-input">
          <div className="font-semibold px-2">
            <h4>Passenger 1 Seat 16</h4>
          </div>
          <div className="mt-3 text-[16px] py-2">
            <div className="details-input">
              <label htmlFor="" className="ml-2">Name</label>
              <input type="text" name="" id="" ref={nameRef} className="ml-2" />
              <label htmlFor="">Gender</label>
              <input type="text" name="" id="" ref={genderRef} />
              <label htmlFor="">Age {"(in years)"}</label>
              <input type="number" name="" id="" ref={age} />
            </div>
           
          </div>
          <div className="mt-3 px-2 py-2">
            <div className="details-input">
              <label htmlFor="">Email ID</label>
              <input type="email" name="" id="" ref={emailRef} />
              <label htmlFor="">Mobile No</label>
              <input type="number" name="" id="" ref={mobileRef} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputContainer;
