import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./SingleService.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SingleService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://floating-wildwood-39247.herokuapp.com/single/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  // const serviceId = service.key;
  console.log(service);
  const handleSelectService = () => {
    fetch(`https://floating-wildwood-39247.herokuapp.com/selected/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully Added", { autoClose: 5000 });
        }
      });
  };
  return (
    <div className="container h-100  ">
      <div className="main-container">
        <div className="row single-service-container shadow ">
          <div className="col-12 col-sm-12 col md-6 col-lg-6 singleServiceImageContainer ">
            <img src={service.img} alt="" height="350px" width="350px" />
          </div>
          <div className="col-12 col-sm-12 col md-6 col-lg-6">
            {/* <p>{service.key}</p> */}
            <h2 className="singleServiceName">{service.name}</h2>
            <p className="singleServiceTitle">{service.title}</p>
            <p className="singleServiePrice">Price : {service.price}</p>
            <p className="singleServieDescription">{service.description}</p>
            <button
              className="service-btn-container"
              onClick={handleSelectService}
            >
              Click Here To Add This Service
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingleService;
