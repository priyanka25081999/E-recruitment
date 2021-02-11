import React from "react";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <section className="category section bg-gray">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Browse Categories</h2>
          <p>Most popular categories of portal, sorted by popularity</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-xs-12 f-category">
            <Link to="jobpage">
              <div className="icon bg-color-1">
                <i className="lni-home"></i>
              </div>
              <h3>Food Service</h3>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12 f-category">
            <Link to="jobpage">
              <div className="icon bg-color-2">
                <i className="lni-world"></i>
              </div>
              <h3>Retail</h3>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12 f-category">
            <Link to="jobpage">
              <div className="icon bg-color-3">
                <i className="lni-book"></i>
              </div>
              <h3>Technical Installation</h3>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12 f-category">
            <Link to="jobpage">
              <div className="icon bg-color-4">
                <i className="lni-display"></i>
              </div>
              <h3>Firefighting</h3>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12 f-category">
            <Link to="jobpage">
              <div className="icon bg-color-5">
                <i className="lni-brush"></i>
              </div>
              <h3>Construction</h3>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12 f-category">
            <Link to="jobpage">
              <div className="icon bg-color-6">
                <i className="lni-heart"></i>
              </div>
              <h3>Manufacturing</h3>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12 f-category">
            <Link to="jobpage">
              <div className="icon bg-color-7">
                <i className="lni-funnel"></i>
              </div>
              <h3>Warehousing</h3>
            </Link>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12 f-category">
            <Link to="jobpage">
              <div className="icon bg-color-8">
                <i className="lni-cup"></i>
              </div>
              <h3>Custodial work</h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
