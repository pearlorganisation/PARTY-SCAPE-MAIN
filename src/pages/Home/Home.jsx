import React, { useEffect, useState } from "react";
// import "./Home.css";
import Hero from '../../components/Hero/Hero'
import Theaters from '../../components/Theaters/Theaters'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Banner from '../../components/Banner/Banner'


const Home = () => {
  return (
    <div>
      {/* Start Hero Area */}
      <Hero />
      {/* End Hero Area */}

      {/* features area */}

   <Theaters />

{/* features area end */}

<WhyChooseUs />

{/* secondary banner area */}

<Banner />


{/* secondary banner end */}
    </div>
  );
};

export default Home;
