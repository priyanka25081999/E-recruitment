import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <section className="footer-Content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-xs-12">
              <div className="widget">
                <div className="footer-logo">
                  <img src="assets/img/logo-footer.png" alt="" />
                </div>
                <div className="textwidget">
                  <p>
                    A sophisticated web-based application for to actively seek
                    out and recruit talented candidates for an organization.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-xs-12">
              <div className="widget">
                <h3 className="block-title">Quick Links</h3>
                <ul className="menu">
                  <li>
                    <Link to="/jobpage">Jobs</Link>
                  </li>
                  <li>
                    <Link to="/signin">SignIn</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site-info text-center">
                <p>Designed and Developed by&nbsp;E-Recruitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
