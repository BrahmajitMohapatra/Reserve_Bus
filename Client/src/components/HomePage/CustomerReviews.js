import React from "react";
import customerImage from "../../Images/customerImage1.jpg";
import rating from "../../Images/ratingstar.jpg";
function CustomerReviews() {
  return (
    <div className="h-60 bg-gray-100 ">
      <div className=" flex space-x-12 mx-44 drop-shadow-xl  ">
        <div className="border-solid border-2 w-64 my-6 bg-white rounded-md">
            <div className="">
                <img src={customerImage} className="h-12 rounded-full mx-24 opacity-75" />
                <p className="text-center text-lg font-medium">Vatsala</p>
            <p className="text-center font-light ">Customer since 2020</p>
            </div>
            <img src={rating} className="w-20 my-2"/>
            <p>Awesome travel experience</p>
            <p>with reserve</p>
        </div>
        <div className="border-solid border-2 w-64 my-6  bg-white rounded-md">
            <div className="">
                <img src={customerImage} className="h-12 rounded-full mx-24  opacity-75" />
                <p className="text-center text-lg font-medium">Vatsala</p>
            <p className="text-center font-light ">Customer since 2020</p>
            </div>
            <img src={rating} className="w-20 my-2"/>
            <p>Awesome travel experience</p>
            <p>with reserve</p>
        </div>
        <div className="border-solid border-2 w-64 my-6 bg-white rounded-md">
            <div className="">
                <img src={customerImage} className="h-12 rounded-full mx-24  opacity-75" />
                <p className="text-center text-lg font-medium">Vatsala</p>
            <p className="text-center font-light ">Customer since 2020</p>
            </div>
            <img src={rating} className="w-20 my-2"/>
            <p>Awesome travel experience</p>
            <p>with reserve</p>
        </div>
       </div>
    </div>
  );
}

export default CustomerReviews;
