import React from "react";
import "./AbouyUs.css";
import AboutSection from "../../AboutSection/AboutSection";
const AboutUS = () => {
  const img2 =
    "https://techcrunch.com/wp-content/uploads/2020/04/UberIM_009770_Press-Release-Photo-UBER-Logo-1080x540-1.jpg";
  const displayFlex = "custom-flex";
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 col-lg-6">
            <div className="d-flex justify-content-center">
              <img
                src={`https://images.moneycontrol.com/static-mcnews/2021/08/Express-delivery-770x433.jpg`}
                height="350px"
                width="404px"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="d-flex justify-content-start align-items-center">
              <p className="who-are-we-title">Who We Are</p>
            </div>
            <div className="col-md-12 col-lg-12">
              <p className="who-are-we-slogun">
                We are Achieve the Success of Delivery
              </p>
            </div>
            <div className="col-md-12 col-lg-12">
              <p className="who-are-we-description">
                As a committed team, we work in Berlin-Mitte. We deliver the
                whole spectrum of skin and venereal diseases, deliver your
                product safely to your customers accomadation, and provide best
                service you could get ever . An additional focus of our delivery
                system we have achieved a mielstone in our sucess, we deliver
                pizza , burgar and more.
              </p>
            </div>
          </div>
        </div>
        {/* Patient Section */}
        <div>
          <div className="mt-5">
            <AboutSection img={img2}>Who We Are</AboutSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
