import React from "react";
import "./ChoseServices.css";

const ChoseServices = () => {
  return (
    <div className="container chose-services-container mt-3">
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <img
            src="http://madang.kenzap.com/wp-content/uploads/2016/11/select-program-image.png"
            alt=""
            className="choiceLogo"
          />
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 d-flex align-items-center">
          <div className="choice-container">
            <p className="choice-logo">
              Select The Types How You Want To Receive Your Order
            </p>
            <form className="choice-form-container">
              <select
                name=""
                id="fast-delivery"
                className="choice-select-input"
              >
                <option value="">Chose Your Delivery Type </option>
                <option value="Standart">Standard</option>
                <option value="Fast">Fast</option>
                <option value="Super-Fast">Super Fast</option>
              </select>
              <select name="" id="Location" className="choice-select-input">
                <option value="">Select Your Location</option>
                <option value="">Uttara</option>
                <option value="">Air Port</option>
                <option value="">Mirpur</option>
              </select>
              <select
                name=""
                id="location-of-resturant"
                className="choice-select-input"
              >
                <option value="">From Uttara</option>
                <option value="">From Air Port</option>
                <option value="">From Mirpur</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseServices;
