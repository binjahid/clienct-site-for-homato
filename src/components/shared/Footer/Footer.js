import {
  faCheck,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
  faTimes,
  faTty,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-5">
      <div className="custom-login-bg text-dark text-start">
        <div className="container">
          <div className="row pb-5 custom-line">
            {/* footer 1 part  */}
            <div className="col-md-4">
              <h1 className="my-3">Health Care</h1>
              <hr />
              <p>
                Hemato is committed to render the possible standard service to
                the people of the country at an affordable cost. This will
                definitely reduce the burden of the government and will make the
                path of "Save Your Time".
              </p>
              <div className="d-flex justify-content-start align-items-center mb-2">
                <p className="me-2">
                  <FontAwesomeIcon icon={faTty} />
                </p>
                <p>+1 202 555 0191</p>
              </div>
              <div className="d-flex justify-content-start align-items-center mb-2">
                <p className="me-2">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </p>
                <p>+1 (201) 555-0123</p>
              </div>
              <div className="d-flex justify-content-start align-items-center mb-2">
                <p className="me-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                </p>
                <p>info@domain.com</p>
              </div>
              <div className="d-flex justify-content-start align-items-center mb-2">
                <p className="me-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </p>
                <p>Flat 25, King Street, California.</p>
              </div>
            </div>
            {/* footer 2 part  */}
            <div className="col-md-4 depertment-link">
              <div className="ms-4">
                <h1 className="my-3" style={{ color: "black" }}>
                  Services
                </h1>
                <hr />
                <Link to="/services">
                  <p className="mb-3">Basic Delivery</p>
                </Link>
                <Link to="/services">
                  <p className="mb-3">Standard Delivery</p>
                </Link>
                <Link to="/services">
                  <p className="mb-3">Express Delivery</p>
                </Link>
                <Link to="/services">
                  <p className="mb-3">Domestic Delivery</p>
                </Link>
                <Link to="/services">
                  <p className="mb-3">Area Based Delivery</p>
                </Link>
                <Link to="/services">
                  <p className="mb-3">Pick Up Delivery</p>
                </Link>
                <Link to="/services">
                  <p className="mb-3">Delivery With Traking</p>
                </Link>
              </div>
            </div>
            {/* footer 3 part  */}
            <div className="col-md-4">
              <h1 className="my-3" style={{ color: "black" }}>
                Opening Hours
              </h1>
              <hr />
              <div className="custom-time-bg px-5 pt-3 pb-2">
                <div className="d-flex justify-content-start align-items-center mb-2 timer-container">
                  <p className="me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </p>
                  <p>Mon : 9:00 AM - 9:00 PM</p>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2 timer-container">
                  <p className="me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </p>
                  <p>Tues : 9:00 AM - 9:00 PM</p>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2 timer-container">
                  <p className="me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </p>
                  <p>Wed : 9:00 AM - 9:00 PM</p>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2 timer-container">
                  <p className="me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </p>
                  <p>Thurs : 9:00 AM - 9:00 PM</p>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2 timer-container">
                  <p className="me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </p>
                  <p>Fri : 9:00 AM - 9:00 PM</p>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2 timer-container">
                  <p className="me-2">
                    <FontAwesomeIcon icon={faCheck} />
                  </p>
                  <p>Sat : 9:00 AM - 9:00 PM</p>
                </div>
                <div className="d-flex justify-content-start align-items-center mb-2 timer-container">
                  <p className="me-2">
                    <FontAwesomeIcon icon={faTimes} />
                  </p>
                  <p>Sunday : Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* little footer  */}
      <h5 className="py-3 text-center">
        © 2021 Viscareo All Rights Reserved By Homato
      </h5>
    </div>
  );
};

export default Footer;
