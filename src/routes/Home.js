import React from 'react';
import Navbar from "../components/navbar/Navbar";
import Hero from '../components/Hero';
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import image from "../assets/first.avif"
 function Home() {
  return (
     <>
     <Navbar/>
         <Hero
          cName="hero"
          heroImg={image}
          title="Your Journey Your Destination"
          text="Choose Your Favourite Destination"
          buttonText="Travel Plan"
          Url="/"
          btnClass="show"           
         />
         <Destination/>
         <Trip/>
         <Footer/>
     </>
  )
}

export default Home;