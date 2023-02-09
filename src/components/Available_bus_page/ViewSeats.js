import React,{useState} from "react";
import { RxSwitch } from "react-icons/rx";
function ViewSeats() {
    const [Selected,setSelected] = useState(false);
    const changeColour=()=>{
        setSelected(!Selected)
    }
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
          <div className="border-gray-500 border-2 w-96 h-28">
            <div className="flex space-x-4 mx-8">
              <RxSwitch className={`text-2xl ${(Selected==true)?'text-blue-500':null}`} onClick={changeColour}/>
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
            </div>
              <div className="flex space-x-4 mx-8">
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
              </div>
              <div className="flex space-x-4 mx-20 my-9">
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
              </div>
          </div>
          <br />
          <div className="border-gray-500 border-2 w-96 h-28">
          <div className="flex space-x-4 mx-8">
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
              <RxSwitch className="text-2xl"/>
            </div>
              <div className="flex space-x-4 mx-8">
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
              </div>
              <div className="flex space-x-4 mx-20 my-9">
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
                <RxSwitch className="text-2xl"/>
              </div>
          </div>
        </div>
        <div>
          <div className="border-gray-500 border-2 h-60 w-52">
            <p>Boarding and dropping</p>
            <p className="mx-2">Hyderabad <span className="mx-7">22:45</span></p>
            <p className="mx-2">Kolkata <span className="mx-7">06:20</span></p>
            <br></br>
            <hr></hr>
            <p className="mx-2">Seat No: <span className="mx-7">7</span></p>
            <hr></hr>
            <p className="mx-2">Fare details</p>
            <p className="mx-2">Amount<span className="mx-7">Inr750</span></p>
            <button className="text-center bg-red-400 mx-7 my-2 px-2 py-2 rounded-md">Proceed to Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSeats;
