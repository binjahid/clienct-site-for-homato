import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SelectService from "../selectedService/selectService";
import "./ServicesSelected.css";
const ServicesSelected = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://floating-wildwood-39247.herokuapp.com/allSelectedServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center mt-5">Your selected services</h2>
      <div className="orderBtnContainer">
        <Link to="placeorder">
          <button>Place Order</button>
        </Link>
      </div>
      {services.map((service) => (
        <SelectService service={service}></SelectService>
      ))}
    </div>
  );
};

export default ServicesSelected;
