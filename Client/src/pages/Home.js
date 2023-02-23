import React from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import Traveling from "../components/HomePage/Traveling"
import Achievments from "../components/HomePage/Achievments"
import CustomerReviews from "../components/HomePage/CustomerReviews"

function Home() {
  return (
    <div>
        <Navbar />
      <Traveling/>
      <Achievments/>
      <CustomerReviews/>
        <Footer/>
    </div>
  )
}

export default Home