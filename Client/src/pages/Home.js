import React from 'react'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import SearchBus from "../components/HomePage/find_bus/SearchBus"
import Achievments from "../components/HomePage/Achievments"
import CustomerReviews from "../components/HomePage/CustomerReviews"

function Home() {
  return (
    <div>
        <Navbar />
      <SearchBus/>
      <Achievments/>
      <CustomerReviews/>
        <Footer/>
    </div>
  )
}

export default Home