import React from "react";
import { Link } from "react-router-dom";

const BrowseJobs = () => {
  return (
    <div id="browse-jobs" className="section bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="text-wrapper">
              <div>
                <h3>Browse your dream jobs here</h3>

                <Link className="btn btn-common" to="/jobpage">
                  Search jobs
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="img-thumb">
              <img className="img-fluid" src="assets/img/search.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs;
