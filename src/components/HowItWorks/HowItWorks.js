import React from "react";
import "./HowItWorks.css";
const HowItWorks = () => {
  return (
    <div>
      <div className="container mb-5">
        <h3 className="text-center mb-5">HOW IT WORKS</h3>
        <div className="workingDescriptonContainer">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="work-process-container">
                <img
                  src="http://madang.kenzap.com/wp-content/themes/madang/images/meal.svg"
                  alt=""
                  className="work-logo"
                />
                <p className="work-des">Choose A Restaurant</p>
                <p className="work-des-long">
                  Choose your favorite meals and order online or by phone. It's
                  easy to customize your order.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="work-process-container">
                <img
                  src="http://madang.kenzap.com/wp-content/themes/madang/images/delivery.svg"
                  alt=""
                  className="logo"
                />
                <p className="work-des">Choose A Tasty Dish</p>
                <p className="work-des-long">
                  We prepared and delivered meals arrive at your door. Duis
                  autem vel eum iriure dolor in hendrerit in vulputate.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12">
              <div className="work-process-container">
                <img
                  src="http://madang.kenzap.com/wp-content/themes/madang/images/eat-enjoy.svg"
                  alt=""
                  className="logo"
                />
                <p className="work-des">Get Delivery</p>
                <p className="work-des-long">
                  No shooping, no cooking, no counting and no cleaning. Enjoy
                  your healthy meals with your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
