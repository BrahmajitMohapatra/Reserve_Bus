import React from "react";
import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import { BusDisplaySection } from "../components/bus-display/BusDisplaySection";


const BusDisplay = () => {
  return (
    <>
      <Navbar/>
      <BusDisplaySection />
      <Footer/>
    </>
  );
};

export default BusDisplay;
