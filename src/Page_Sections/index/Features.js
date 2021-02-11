import React from "react";

const Features = () => {
  return (
    <section className="featured-lis section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Top Hiring Companies</h2>
          {/* <p>Microsoft, Google, Veritas, Oracle, Cognizant, Infosys</p> */}
          <button
            className="alert"
            border="2px"
            style={{ marginRight: `10px` }}
          >
            Microsoft
          </button>
          <button
            className="alert"
            border="2px"
            style={{ marginRight: `10px` }}
          >
            Google
          </button>
          <button
            className="alert"
            border="2px"
            style={{ marginRight: `10px` }}
          >
            Amazon
          </button>
          <button
            className="alert"
            border="2px"
            style={{ marginRight: `10px` }}
          >
            Oracle
          </button>
          <button
            className="alert"
            border="2px"
            style={{ marginRight: `10px` }}
          >
            Veritas
          </button>
          <br />
          <button
            className="alert"
            border="2px"
            style={{ marginRight: `10px` }}
          >
            Cognizant
          </button>
          <button
            className="alert"
            border="2px"
            style={{ marginRight: `10px` }}
          >
            Infosys
          </button>
        </div>
        <div className="wow fadeIn" data-wow-delay="0.5s">
          <div id="new-products" className="owl-carousel">
            <div className="item">
              <div className="product-item">
                <div className="icon-thumb">
                  <img src="assets/img/product/img1.png" alt="" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <a href="#">AmazeTech</a>
                  </h3>
                  <div className="tags">
                    <span>
                      <i className="lni-briefcase"></i> Software Company
                    </span>
                    <span>
                      <i className="lni-map-marker"></i> New York
                    </span>
                  </div>
                  <a href="#" className="btn btn-common">
                    5 Open Job
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product-item">
                <div className="icon-thumb">
                  <img src="assets/img/product/img2.png" alt="" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <a href="#">MagNews</a>
                  </h3>
                  <div className="tags">
                    <span>
                      <i className="lni-briefcase"></i> Software Company
                    </span>
                    <span>
                      <i className="lni-map-marker"></i> New York
                    </span>
                  </div>
                  <a href="#" className="btn btn-common">
                    5 Open Job
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product-item">
                <div className="icon-thumb">
                  <img src="assets/img/product/img3.png" alt="" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <a href="#">Facebook</a>
                  </h3>
                  <div className="tags">
                    <span>
                      <i className="lni-briefcase"></i> Software Company
                    </span>
                    <span>
                      <i className="lni-map-marker"></i> New York
                    </span>
                  </div>
                  <a href="#" className="btn btn-common">
                    5 Open Job
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product-item">
                <div className="icon-thumb">
                  <img src="assets/img/product/img1.png" alt="" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <a href="#">Play Store</a>
                  </h3>
                  <div className="tags">
                    <span>
                      <i className="lni-briefcase"></i> Software Company
                    </span>
                    <span>
                      <i className="lni-map-marker"></i> New York
                    </span>
                  </div>
                  <a href="#" className="btn btn-common">
                    5 Open Job
                  </a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="product-item">
                <div className="icon-thumb">
                  <img src="assets/img/product/img2.png" alt="" />
                </div>
                <div className="product-content">
                  <h3 className="product-title">
                    <a href="#">MagNews</a>
                  </h3>
                  <div className="tags">
                    <span>
                      <i className="lni-briefcase"></i> Software Company
                    </span>
                    <span>
                      <i className="lni-map-marker"></i> New York
                    </span>
                  </div>
                  <a href="#" className="btn btn-common">
                    5 Open Job
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
