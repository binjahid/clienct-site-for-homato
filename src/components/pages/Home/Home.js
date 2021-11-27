import React from "react";
import Banner from "../../Banner/Banner";
import ChoseServices from "../../ChoseServices/ChoseServices";
import HowItWorks from "../../HowItWorks/HowItWorks";
import OurServices from "../../OurServices/OurServices";
import Services from "../../ServicesContainer/Services/Services";
import Header from "../../shared/Header/Header";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <OurServices></OurServices> */}
      <Services></Services>
      <HowItWorks></HowItWorks>
      <ChoseServices></ChoseServices>
    </div>
  );
};

export default Home;
