import React from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import PaymentPage from '../components/payment-page/PaymentPage'

function Payment() {
  return (
    <div>
        <Navbar/>
        <PaymentPage/>
        <Footer/>
    </div>
  )
}

export default Payment