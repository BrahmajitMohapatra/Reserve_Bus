import React from 'react'
import {TiTick} from "react-icons/ti"
function PaymentDetails() {
  return (
    <div className='border-gray-200 border-2 text-center mx-60 my-8 px-2 py-7 shadow-lg'>
        <TiTick className='mx-auto text-green-600 text-5xl'/>
        {<div> <p>Booking has been Confirmed </p>
        <p>Ticket Id:</p>
        <p>Payment Id:</p>
        <p>Passenger details:</p>
        <p>Contact details:</p></div>}
       
        <ul className="border-stone-300 border-2 w-2/3 rounded-lg py-2 px-9 mx-36">
          <li>Intrcity</li>
          <li>A/C Sleeper 2+3 | 2 Seats Left | 1 Window Left</li>
          <li>22:45 ,16 Jan - 07hrs 50min - 06:20, 17 Jan</li>
          <li>22:45 ,16 Jan - 07hrs 50min - 06:20, 17 Jan</li>
        </ul>
    </div>
  )
}

export default PaymentDetails