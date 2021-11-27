import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SelectService = ({ service }) => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/selected/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const deleteAService = (id) => {
    fetch(`https://floating-wildwood-39247.herokuapp.com/deleteservice/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
          toast.info("Now Pleas Reload The Page");
        }
      });
  };
  return (
    <div>
      <div class="card text-center w-50 m-auto mt-5">
        <div class="card-header">{service.name}</div>
        <div class="card-body">
          <h5 class="card-title">{service.title}</h5>
          <p class="card-text">{service.description}</p>
          <p className="card-text">price : {service.price}$</p>
          <p>{service.key}</p>
          <button
            class="btn"
            style={{ backgroundColor: "#60ba62" }}
            onClick={() => {
              deleteAService(service._id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SelectService;
