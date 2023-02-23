import React from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import PaymentDetails from '../components/Payment/PaymentDetails'

function Payment() {
  return (
    <div>
        <Navbar/>
      <PaymentDetails />
        <Footer/>
        </div>
  )
}

export default Payment