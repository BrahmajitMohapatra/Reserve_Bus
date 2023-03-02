import React, { useRef } from "react";
import BusCardLeft from "../bus-display/BusCardLeft";
import FareDetails from "./FareDetails";
import InputContainer from "./InputContainer";
// import "../../Styles/Infopage/infopage.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { payement_succesful, user_Details } from "../../redux/action";

const InfoPage = () => {
  const { selectedBus, busDetails, busInformation } = useSelector(
    (state) => state.reducer
  );
  const price = selectedBus.seletedSeats.length * selectedBus.fare;
  const nameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const age = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmitHandler = async () => {
    const data = {
      userName: nameRef.current.value,
      userMobile: mobileRef.current.value,
      userEmail: emailRef.current.value,
      userGender: genderRef.current.value,
      userAge: age.current.value,
      busId: selectedBus._id,
      selectedSeats: selectedBus.seletedSeats,
      totalPrice: price,
      dateOfJourney: busDetails.date,
      routeId: busInformation[0]._id,
    };
    const fetchdata = await fetch(
      "https://reservebus.onrender.com/bookTicket",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await fetchdata.json();
    console.log(res);
    dispatch(payement_succesful(res));
    navigate("/info/payment");
  };
  return (
    <div className="shadow-lg ">
        <div className="border-solid border-2 w-[800px] ml-[20%] px-4 py-4 mt-4 rounded-md drop-shadow-md">
          <BusCardLeft data={selectedBus} />
        </div>
        <div className=" flex justify-center space-x-10 mt-9">
        <InputContainer
          nameRef={nameRef}
          mobileRef={mobileRef}
          emailRef={emailRef}
          genderRef={genderRef}
          age={age}
        />
      
      <div className="info-page-right">
        <FareDetails price={price} onSubmitHandler={onSubmitHandler} />
      </div>
      </div>
    </div>
  );
};

export default InfoPage;
