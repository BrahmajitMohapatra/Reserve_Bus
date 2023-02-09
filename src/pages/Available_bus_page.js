import React from 'react'
import Navbar from '../common/Navbar'
import Footer from "../common/Footer"
import FilterSection from '../components/Available_bus_page/FilterSection'
import InfoandCalender from '../components/Available_bus_page/InfoandCalender'
function Available_bus_page() {
  return (
    <div>
      <Navbar/>
      <div className='flex'>
      <FilterSection/>
     <InfoandCalender/>

      </div>
      <Footer/>
    </div>
  )
}

export default Available_bus_page