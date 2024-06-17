import React from "react";

import Nav from "./Nav";
import Footer from "./Footer";

function About() {
  return (
    <div>
      {/* Navbar */}
      <Nav />

      {/*==============================
    Breadcumb
============================== */}
      <div
        className="breadcumb-wrapper "
        // data-bg-src="assets/img/bg/breadcumb-bg.jpg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg/breadcumb-bg.jpg)`,
        }}
      >
        <div className="container">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">About Us</h1>
            <ul className="breadcumb-menu">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
      {/*==============================
About Area  
==============================*/}
      <div className="overflow-hidden space" id="about-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box1">
                <div className="img1">
                  <img src="assets/img/normal/about_1_1.png" alt="About" />
                </div>
                <div className="shape1">
                  <img src="assets/img/normal/about_shape_1.png" alt="shape" />
                </div>
                <div className="year-counter">
                  <h3 className="year-counter_number">
                    <span className="counter-number">25</span>
                  </h3>
                  <p className="year-counter_text">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="ps-xxl-4 ms-xl-3">
                <div className="title-area mb-35">
                  <span className="sub-title">
                    <div className="icon-masking me-2">
                      <span
                        className="mask-icon"
                        data-mask-src="assets/img/theme-img/title_shape_1.svg"
                      />
                      <img
                        src="assets/img/theme-img/title_shape_1.svg"
                        alt="shape"
                      />
                    </div>
                    About Us
                  </span>
                  <h2 className="sec-title">
                    We Are Increasing Business Success With{" "}
                    <span className="text-theme">IT Solution</span>
                  </h2>
                </div>
                <p className="mt-n2 mb-25">
                  Collaboratively envisioneer user friendly supply chains and
                  cross unit imperative. Authoritativel fabricate competitive
                  resource and holistic synergy. Uniquely generate efficient
                  schemas before future.
                </p>
                <div className="about-feature-wrap">
                  <div className="about-feature">
                    <div className="about-feature_icon">
                      <img
                        src="assets/img/icon/about_feature_1_1.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Certified Company</h3>
                      <p className="about-feature_text">
                        Best Provide Skills Services
                      </p>
                    </div>
                  </div>
                  <div className="about-feature">
                    <div className="about-feature_icon">
                      <img
                        src="assets/img/icon/about_feature_1_2.svg"
                        alt="Icon"
                      />
                    </div>
                    <div className="media-body">
                      <h3 className="about-feature_title">Expart Team</h3>
                      <p className="about-feature_text">100% Expert Team</p>
                    </div>
                  </div>
                </div>
                <div className="btn-group">
                  <a href="about.html" className="th-btn">
                    DISCOVER MORE
                    <i className="fa-regular fa-arrow-right ms-2" />
                  </a>
                  <div className="call-btn">
                    <div className="play-btn">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="media-body">
                      <span className="btn-text">Call Us On:</span>
                      <a href="tel:+19088000393" className="btn-title">
                        +190-8800-0393
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
