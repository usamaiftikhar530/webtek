import React from "react";

function Footer() {
  return (
    <footer
      className="footer-wrapper footer-layout2"
      data-bg-src="assets/img/bg/footer_bg_1.jpg"
    >
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xxl-3 col-xl-4">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo">
                    <a href="index.html">
                      <img src="assets/img/logo-small.svg" alt="Webteck" />
                    </a>
                  </div>
                  <p className="about-text">
                    Professionally redefine transparent ROI through low-risk
                    high-yield imperatives. Progressively create empowered. cost
                    effective users via team driven.
                  </p>
                  <div className="th-social">
                    <a href="https://www.facebook.com/">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="https://www.twitter.com/">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.linkedin.com/">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="https://www.whatsapp.com/">
                      <i className="fab fa-whatsapp" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Quick Links</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="team.html">Meet Our Team</a>
                    </li>
                    <li>
                      <a href="project.html">Our Projects</a>
                    </li>
                    <li>
                      <a href="faq.html">Help &amp; FAQs</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact Us</h3>
                <div className="th-widget-contact">
                  <div className="contact-feature">
                    <div className="icon-btn">
                      <i className="fa-solid fa-phone" />
                    </div>
                    <div className="media-body">
                      <p className="contact-feature_label">Phone Number</p>
                      <a
                        href="tel:+19088000393"
                        className="contact-feature_link"
                      >
                        +190-8800-0393
                      </a>
                    </div>
                  </div>
                  <div className="contact-feature">
                    <div className="icon-btn">
                      <i className="fa-solid fa-envelope" />
                    </div>
                    <div className="media-body">
                      <p className="contact-feature_label">Email address</p>
                      <a
                        href="mailto:info@webteck.com"
                        className="contact-feature_link"
                      >
                        info@webteck.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-feature">
                    <div className="icon-btn">
                      <i className="fa-solid fa-location-dot" />
                    </div>
                    <div className="media-body">
                      <p className="contact-feature_label">office location</p>
                      <a
                        href="https://www.google.com/maps"
                        className="contact-feature_link"
                      >
                        54 Flemington, USA
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="widget footer-widget">
                <h3 className="widget_title">Get in touch!</h3>
                <div className="newsletter-widget">
                  <p className="footer-text">
                    Subsrcibe to our upcoming latest article and news resources.
                    Sign up today for hints. tips and the latest product news.
                  </p>
                  <form action="#" className="newsletter-form">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    <button type="submit" className="icon-btn">
                      <i className="fa-solid fa-paper-plane" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap bg-theme">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <p className="copyright-text">
                Copyright <i className="fal fa-copyright" /> 2024{" "}
                <a href="https://themeforest.net/user/themeholy">Themeholy</a>.
                All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-6 text-end d-none d-lg-block">
              <div className="footer-links">
                <ul>
                  <li>
                    <a href="about.html">Terms &amp; Condition</a>
                  </li>
                  <li>
                    <a href="about.html">Careers</a>
                  </li>
                  <li>
                    <a href="about.html">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
