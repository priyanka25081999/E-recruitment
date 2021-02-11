import React from "react";

const HowItWorks = () => {
  return (
    <section className="how-it-works section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It Works?</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque
            dignissim quam et <br />
            metus effici turac fringilla lorem facilisis.
          </p> */}
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="work-process">
              <span className="process-icon">
                <i className="lni-user"></i>
              </span>
              <h4>Create an Account</h4>
              <p>
                To create an account, click on Register option and enter your
                details.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="work-process step-2">
              <span className="process-icon">
                <i className="lni-search"></i>
              </span>
              <h4>Search Jobs</h4>
              <p>
                Search a job from jobs section. Match your interest and move
                forward.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="work-process step-3">
              <span className="process-icon">
                <i className="lni-cup"></i>
              </span>
              <h4>Apply</h4>
              <p>
                To apply for a job, click on Apply Now option in jobs section.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
