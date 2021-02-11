import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import { Link, useHistory } from "react-router-dom";

import firebase from "firebase/app";

const NavBar = () => {
  const history = useHistory();

  const maincontext = useContext(MainContext);

  const signout = () => {
    if (maincontext.isCompanyLogin) {
      maincontext.setIsCompanyLogin(false);
      maincontext.setCurrentCompany({});
      if (localStorage) {
        localStorage.removeItem("isCompanyLogin");
        localStorage.removeItem("currentCompany");
      }
    } else if (maincontext.isUserLogin) {
      maincontext.setIsUserLogin(false);
      maincontext.setCurrentUser({});
      localStorage.removeItem("isUserLogin");
      localStorage.removeItem("currentUser");
    }
    history.push("/");
  };
  return (
    <div>
      <nav
        style={{ backgroundColor: "white" }}
        className="navbar navbar-expand-lg fixed-top scrolling-navbar"
      >
        <div className="container">
          <div
            className="theme-header clearfix"
            style={{ display: window.innerWidth > 991 ? "flex" : "block" }}
          >
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                style={{
                  float: "right",
                  position: "absolute",
                  right: "5px",
                  top: "10px",
                  backgroundColor: "#26ae61",
                }}
                type="button"
                data-toggle="collapse"
                data-target="#main-navbar"
                aria-controls="main-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  className="navbar-toggler-icon lni-menu"
                  style={{ paddingTop: "3.5px", color: "#fff" }}
                ></span>
              </button>
              <Link to="/" className="navbar-brand">
                <img src="assets/img/logo.png" alt="" />
              </Link>
            </div>
            <div className="collapse navbar-collapse" id="main-navbar">
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
                <li className="nav-item dropdown active">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    to="jobpage"
                  >
                    Jobs
                  </Link>
                  {maincontext.isUserLogin ? (
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="jobpage">
                          Browse Jobs
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/appliedjob">
                          Manage Applications
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                {maincontext.isCompanyLogin ? (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Company
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="postjob">
                          Post Jobs
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/manage_applicants">
                          Manage Applications
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : null}

                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                {maincontext.isUserLogin ||
                maincontext.isCompanyLogin ? null : (
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  </li>
                )}
                {maincontext.isUserLogin ||
                maincontext.isCompanyLogin ? null : (
                  <li className="nav-item">
                    <Link className="nav-link" to="/companyregister">
                      Register Company
                    </Link>
                  </li>
                )}

                <ul className="nav-item dropdown">
                  {maincontext.isUserLogin || maincontext.isCompanyLogin ? (
                    <li className="nav-item">
                      <a className="nav-link">
                        {maincontext.isCompanyLogin ? (
                          <>Welcome {maincontext.currentCompany.username}</>
                        ) : (
                          <>Welcome {maincontext.currentUser.username}</>
                        )}
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                            onClick={(e) => signout()}
                          >
                            Signout
                          </a>
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <></>
                  )}
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu" data-logo="/assets/img/logo.png"></div>
      </nav>
      {/* <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>

        <button
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  );
};

export default NavBar;
