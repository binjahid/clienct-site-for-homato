import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  return (
    <div>
      <div className="col shadow rounded">
        <div className="card h-100 card-image-main">
          <img
            src={service.img}
            className="card-img-top "
            alt="..."
            width="414px"
            height="290px"
          />
          <div className="card-body">
            <h5 className="card-title">{service.name}</h5>
            <p className="card-text">{service.description}</p>
          </div>
          <Link to={`/services/service/${service._id}`}>
            <button className="service-btn-container">Click To Discover</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
