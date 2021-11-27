import React from "react";
import "./Banner.css";
import { FaSearch } from "react-icons/fa";
const Banner = () => {
  return (
    <div>
      <div className="banner-details d-flex justify-content-center align-items-center mb-5 ">
        <div className="banner-title">
          <h2>Homato</h2>
          <h3 className="banner-des">
            Discover the best food & drinks in Uttara
          </h3>
        </div>
        <div class=" input-container">
          <label className="input-label" htmlFor="restuarent-search">
            <FaSearch></FaSearch>
          </label>
          <input
            className="search-input"
            type="text"
            name=""
            id="restuarent-search"
            placeholder="Search for restuarent, cuisine, or a dish"
          />
          <button className="inputBtn mt-3">Search Restuarent</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
