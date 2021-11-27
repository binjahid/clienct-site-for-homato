import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";
const Header = () => {
  const { user, Logout } = useFirebase();
  return (
    <header className="header container-fluid ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container w-75">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#sg">
              Hidden brand
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
              <li className="nav-item">
                <Link to="/home" className="nav-link " aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutus" className="nav-link ">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactus" className="nav-link ">
                  Contact Us
                </Link>
              </li>
              {!user.displayName ? (
                <div className="d-flex">
                  <li className="nav-item">
                    <Link to="/login" className="headerAnchor">
                      <button className="nav-link navLinkBtn bg-light">
                        Login
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="headerAnchor">
                      <button className="nav-link bg-light navLinkBtn">
                        Register
                      </button>
                    </Link>
                  </li>
                </div>
              ) : (
                <div className="d-flex">
                  <li className="nav-item">
                    <Link className="nav-link">{user.displayName}</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="s"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Desh Board
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <Link to="/selected-services" className="dropdown-item">
                          Selected Services
                        </Link>
                      </li>
                      <li>
                        <a class="dropdown-item" href="f">
                          Add Service
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link bg-light navLinkBtn"
                      onClick={Logout}
                    >
                      Log out
                    </button>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
