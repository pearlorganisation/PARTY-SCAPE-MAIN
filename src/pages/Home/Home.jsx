import React, { useEffect, useState } from "react";
// import "./Home.css";
import Hero from "../../components/Hero/Hero";
import Theaters from "../../components/Theaters/Theaters";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Banner from "../../components/Banner/Banner";
import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUsSection />
      <Theaters />
      <WhyChooseUs />
      <Banner />
    </div>
  );
};

export default Home;
